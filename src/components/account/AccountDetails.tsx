// /src/components/contents/AccountDetails.tsx

"use client";

// External libraries
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  balanceOf as balanceOfERC1155,
  getActiveClaimCondition as claimCondition1155,
  getNFT,
} from "thirdweb/extensions/erc1155";
import {
  balanceOf as balanceOfERC20,
  canClaim as claimCondition20,
} from "thirdweb/extensions/erc20";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { kuponRamadhan, p0inIstiqlal } from "@/config/contracts";

const AccountDetails: React.FC = () => {
  // Ensure state variables are properly declared
  const [isProcessing, setIsProcessing] = useState(false);
  const [erc1155Claimed, setErc1155Claimed] = useState(true);
  const [quantityLimitPerWallet, setQuantityLimitPerWallet] = useState(
    BigInt(0)
  );
  const [erc20Claimed, setErc20Claimed] = useState(true);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  const activeAccount = useActiveAccount();

  // Generate token ID dynamically based on the current date
  const getTokenId = () => {
    const startDate = new Date(Date.UTC(2025, 2, 1)); // 1 Maret 2025, UTC
    // const startDate = new Date(Date.UTC(2025, 1, 28)); // 28 Februari 2025, UTC

    // Ambil waktu saat ini dalam zona waktu Indonesia (GMT+7)
    const now = new Date();
    const jakartaOffset = 7 * 60 * 60 * 1000; // 7 jam dalam milidetik
    const todayJakarta = new Date(now.getTime() + jakartaOffset);

    // Hitung selisih hari berdasarkan GMT+7
    const differenceInDays = Math.floor(
      (todayJakarta.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    return differenceInDays + 1; // Start from token ID 1
  };

  const currentTokenId = useState(getTokenId())[0];
  const tokenIdBigInt = BigInt(currentTokenId);

  // Fetch ERC1155 Claim Condition (to get `quantityLimitPerWallet`)
  useEffect(() => {
    async function fetchClaimCondition1155() {
      try {
        const activeCondition1155 = await claimCondition1155({
          contract: kuponRamadhan,
          tokenId: tokenIdBigInt,
        });

        console.log("ERC1155 Claim Condition:", activeCondition1155);

        setQuantityLimitPerWallet(activeCondition1155.quantityLimitPerWallet);
      } catch (error) {
        console.error("Error fetching claim condition:", error);
      }
    }

    fetchClaimCondition1155();
  }, [tokenIdBigInt]);

  // Fetch user's ERC1155 NFT Balance
  const { data: ownedNfts } = useReadContract(balanceOfERC1155, {
    contract: kuponRamadhan,
    owner: activeAccount?.address ?? "",
    tokenId: tokenIdBigInt,
  });

  // Check if the user has reached the claim limit
  useEffect(() => {
    if (ownedNfts !== undefined && quantityLimitPerWallet !== BigInt(0)) {
      if (BigInt(ownedNfts) >= quantityLimitPerWallet) {
        setErc1155Claimed(true);
      } else {
        setErc1155Claimed(false);
      }
    }
  }, [ownedNfts, quantityLimitPerWallet]);

  // Fetch NFT metadata
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: kuponRamadhan,
    tokenId: tokenIdBigInt,
  });

  // Fetch ERC20 Claim Condition (to get `result`)
  useEffect(() => {
    async function fetchClaimCondition20() {
      try {
        const activeCondition20 = await claimCondition20({
          contract: p0inIstiqlal,
          claimer: activeAccount?.address ?? "",
          quantity: "1",
        });

        console.log("ERC20 Claim Condition:", activeCondition20);
        console.log("Active Account:", activeAccount?.address);

        if (!activeCondition20.result) {
          setErc20Claimed(true);
        } else {
          setErc20Claimed(false);
        }
      } catch (error) {
        console.error("Error fetching claim condition:", error);
      }
    }

    fetchClaimCondition20();
  }, [activeAccount?.address]);

  // Fetch user's ERC20 Token Balance
  const { data: poinBalance } = useReadContract(balanceOfERC20, {
    contract: p0inIstiqlal,
    address: activeAccount?.address ?? "",
  });

  // Ensure currentTokenId exists, otherwise show this "Memuat..." message.
  if (!currentTokenId || isNftLoading) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Memuat...
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
        {/* MediaRenderer (Left Column) */}
        <div className="rounded-3xl overflow-hidden w-full">
          {nft ? (
            <MediaRenderer
              client={client}
              src={nft?.metadata?.image || "/images/ramadhan-login-09.png"}
              alt={
                nft?.metadata?.name ? `${nft.metadata.name} NFT` : "NFT Image"
              }
              className="rounded-3xl w-full"
            />
          ) : (
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Tidak ada data tersedia.
            </h2>
          )}
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
          {/* Title */}
          <h1 className="text-left xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-normal text-hitam-judul-body tracking-tight justify-start align-middle leading-tight">
            Dapatkan Kupon Digital & Istiqlal Poin Gratis!
          </h1>

          {/* Provider or Creator */}
          <div className="flex flex-row gap-2">
            <h1 className="text-left text-sm font-medium text-icon-wording">
              oleh
            </h1>
            <span className="text-3xl leading-6 text-icon-wording">
              &#9673;
            </span>
            <h1 className="text-left text-sm font-medium text-icon-wording">
              <Link href="https://igf.or.id/" target="_blank">
                Masjid Istiqlal
              </Link>
            </h1>
          </div>

          {/* Description with Expand/Collapse */}
          <h2 className="text-left text-sm font-normal text-icon-wording">
            Berkah Ramadhan sudah menanti! Dapatkan Kupon Digital & Istiqlal
            Poin sekarang secara GRATIS dan tukarkan dengan kejutan menarik.
            Semakin banyak poin yang Anda kumpulkan, semakin besar hadiah yang
            bisa Anda dapatkan! Jangan lewatkan kesempatan emas ini!
          </h2>

          {/* Success or Error Messages */}
          {pesanTunggu && (
            <h4 className="text-left text-sm font-semibold text-footer-coklat">
              {pesanTunggu}
            </h4>
          )}
          {pesanKirim && (
            <h4 className="text-left text-sm font-semibold text-footer-coklat">
              {pesanKirim}
            </h4>
          )}
          {pesanSukses && (
            <h4 className="text-left text-sm font-semibold text-footer-coklat">
              {pesanSukses}
            </h4>
          )}
          {pesanGagal && (
            <h4 className="text-left text-sm font-semibold text-footer-coklat">
              {pesanGagal}
            </h4>
          )}

          {/* Tokens Info */}
          <div className="w-full grid grid-cols-2 gap-2">
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Kupon Anda Hari Ini
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Total Poin Anda
            </h2>

            <h2 className="text-left xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-hitam-judul-body">
              {ownedNfts?.toString() ?? "0"}
            </h2>
            <h2 className="text-left xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-hitam-judul-body">
              {(BigInt(poinBalance ?? "0") / BigInt(1e18)).toString()}
            </h2>
          </div>

          <div className="w-full flex sm:flex-row flex-col gap-2">
            {/* Claim Button ERC1155 */}
            <ClaimButton
              unstyled
              className={`w-full rounded-lg p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out
                ${
                  isProcessing || erc1155Claimed
                    ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                    : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer"
                }
            `}
              contractAddress={kuponRamadhan.address}
              chain={kuponRamadhan.chain}
              client={client}
              claimParams={{
                type: "ERC1155",
                quantity: 1n,
                tokenId: tokenIdBigInt,
              }}
              disabled={Boolean(isProcessing || erc1155Claimed)}
              onClick={() => {
                setIsProcessing(true);
                setPesanTunggu("Bismillah! Mohon sabar dan tunggu.");
                // setPesanKirim(null);
                setPesanSukses(null);
                setPesanGagal(null);
                // setErc1155Claimed(false);
              }}
              onTransactionSent={() => {
                // setIsProcessing(true);
                setPesanTunggu(null);
                setPesanKirim("Kupon sedang diklaim.");
                // setPesanSukses(null);
                // setPesanGagal(null);
                // setErc1155Claimed(false);
              }}
              onError={(error) => {
                setIsProcessing(false);
                setPesanTunggu(null);
                setPesanKirim(null);
                // setPesanSukses(null);
                setPesanGagal(`${error.message}`);
                // setErc1155Claimed(false);
              }}
              onTransactionConfirmed={async () => {
                setIsProcessing(false);
                // setPesanTunggu(null);
                setPesanKirim(null);
                setPesanSukses("Alhamdulillah! Kupon berhasil diklaim.");
                // setPesanGagal(null);
                setErc1155Claimed(true);
              }}>
              {erc1155Claimed ? "Klaim Lagi Besok" : "Klaim Kupon Sekarang"}
            </ClaimButton>

            {/* Claim Button ERC20 */}
            <ClaimButton
              unstyled
              className={`w-full rounded-lg p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out
                ${
                  isProcessing || erc20Claimed
                    ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                    : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer"
                }
            `}
              contractAddress={p0inIstiqlal.address}
              chain={p0inIstiqlal.chain}
              client={client}
              claimParams={{
                type: "ERC20",
                quantity: "786",
              }}
              disabled={Boolean(isProcessing || erc20Claimed)}
              onClick={() => {
                setIsProcessing(true);
                setPesanTunggu("Bismillah! Mohon sabar dan tunggu.");
                // setPesanKirim(null);
                setPesanSukses(null);
                setPesanGagal(null);
                // setErc20Claimed(false);
              }}
              onTransactionSent={() => {
                // setIsProcessing(true);
                setPesanTunggu(null);
                setPesanKirim("Poin sedang diklaim.");
                // setPesanSukses(null);
                // setPesanGagal(null);
                // setErc20Claimed(false);
              }}
              onError={(error) => {
                setIsProcessing(false);
                setPesanTunggu(null);
                setPesanKirim(null);
                // setPesanSukses(null);
                setPesanGagal(`${error.message}`);
                // setErc20Claimed(false);
              }}
              onTransactionConfirmed={() => {
                setIsProcessing(false);
                // setPesanTunggu(null);
                setPesanKirim(null);
                setPesanSukses("Alhamdulillah! Poin berhasil diklaim.");
                // setPesanGagal(null);
                setErc20Claimed(true);
              }}>
              {erc20Claimed ? "Klaim Lagi Besok" : "Klaim Poin Sekarang"}
            </ClaimButton>
          </div>

          {/* Note for users. */}
          <div className="flex flex-col gap-0">
            <h4 className="text-left text-xs font-normal text-icon-wording">
              &#42;Kupon {nft?.metadata.name || "Tanggal Kupon Digital"}
            </h4>
            <h4 className="text-left text-xs font-normal text-icon-wording">
              &#42;Hanya bisa diklaim satu kali per hari.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountDetails;
