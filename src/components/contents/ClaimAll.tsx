// /src/components/contents/ClaimAll.tsx

"use client";

// External libraries
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  getNFT,
  balanceOf as balanceOfERC1155,
} from "thirdweb/extensions/erc1155";
import { balanceOf as balanceOfERC20 } from "thirdweb/extensions/erc20";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { b0nV0yageDrop, memoraZer0 } from "@/config/contracts";

const ClaimAll: React.FC = () => {
  const activeAccount = useActiveAccount();

  // Generate token ID dynamically based on the current date
  const getTokenId = () => {
    const startDate = new Date("2025-03-01");
    const today = new Date();
    const differenceInDays = Math.floor(
      (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return differenceInDays + 1; // Start from token ID 1
  };

  // const tokenId = getTokenId();
  // const tokenId = 1;
  const [currentTokenId, setCurrentTokenId] = useState(getTokenId());
  const tokenIdBigInt = BigInt(currentTokenId);

  useEffect(() => {
    setCurrentTokenId(getTokenId());
  }, []);

  // Ensure state variables are properly declared
  const [isProcessing, setIsProcessing] = useState(false);
  const [erc1155Disabled, setErc1155Disabled] = useState(false);
  const [erc20Claimed, setErc20Claimed] = useState(false);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  // Fetch NFT metadata
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: memoraZer0,
    tokenId: tokenIdBigInt,
  });

  // Fetch user's owned NFTs
  const { data: ownedNfts } = useReadContract(balanceOfERC1155, {
    contract: memoraZer0,
    owner: activeAccount?.address ?? "",
    tokenId: tokenIdBigInt,
    queryOptions: { enabled: !!activeAccount?.address && !!currentTokenId },
  });

  // Fetch user's ERC20 Token Balance
  const { data: poinBalance } = useReadContract(balanceOfERC20, {
    contract: b0nV0yageDrop,
    address: activeAccount?.address ?? "",
  });

  // Saat komponen dimuat, ambil status klaim dari localStorage
  useEffect(() => {
    if (activeAccount?.address) {
      const storedErc1155Disabled = localStorage.getItem(
        `erc1155Disabled_${activeAccount.address}_${currentTokenId}`
      );
      setErc1155Disabled(storedErc1155Disabled === "true");

      const storedErc20Claimed = localStorage.getItem(
        `erc20Claimed_${activeAccount.address}_${currentTokenId}`
      );
      setErc20Claimed(storedErc20Claimed === "true");
    }
  }, [activeAccount?.address, currentTokenId]);

  // Simpan ke localStorage setiap kali status klaim berubah
  useEffect(() => {
    if (activeAccount?.address) {
      localStorage.setItem(
        `erc1155Disabled_${activeAccount.address}_${currentTokenId}`,
        String(erc1155Disabled)
      );
    }
  }, [erc1155Disabled, activeAccount?.address, currentTokenId]);

  useEffect(() => {
    if (activeAccount?.address) {
      localStorage.setItem(
        `erc20Claimed_${activeAccount.address}_${currentTokenId}`,
        String(erc20Claimed)
      );
    }
  }, [erc20Claimed, activeAccount?.address, currentTokenId]);

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
          <h1 className="text-left xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-normal text-hitam-judul-body tracking-tight justify-start align-middle">
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
              <Link href="https://voyage.co.id/" target="_blank">
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
            <h4 className="text-left text-sm font-normal text-icon-wording">
              {pesanTunggu}
            </h4>
          )}
          {pesanKirim && (
            <h4 className="text-left text-sm font-normal text-icon-wording">
              {pesanKirim}
            </h4>
          )}
          {pesanSukses && (
            <h4 className="text-left text-sm font-normal text-icon-wording">
              {pesanSukses}
            </h4>
          )}
          {pesanGagal && (
            <h4 className="text-left text-sm font-normal text-icon-wording">
              {pesanGagal}
            </h4>
          )}

          {/* Tokens Info */}
          <div className="w-full grid grid-cols-2 gap-2">
            {/* <h2 className="text-left text-sm font-medium text-icon-wording">
              Persedian Kupon
            </h2> */}
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Kupon Anda
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Poin Anda
            </h2>

            {/* <h2 className="text-left xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-hitam-judul-body">
              10.000
            </h2> */}
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
                  erc1155Disabled ||
                  (ownedNfts && Number(ownedNfts) >= 1) ||
                  isProcessing
                    ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                    : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer"
                }
            `}
              contractAddress={memoraZer0.address}
              chain={memoraZer0.chain}
              client={client}
              claimParams={{
                type: "ERC1155",
                quantity: 1n,
                tokenId: tokenIdBigInt,
              }}
              disabled={Boolean(
                erc1155Disabled ||
                  (ownedNfts && Number(ownedNfts) >= 1) ||
                  isProcessing
              )}
              onClick={() => {
                setIsProcessing(true);
                setPesanTunggu("Bismillah! Mohon sabar dan tunggu.");
                // setPesanKirim(null);
                // setPesanSukses(null);
                setPesanGagal(null);
                // setErc1155Disabled(false);
              }}
              onTransactionSent={() => {
                // setIsProcessing(true);
                setPesanTunggu(null);
                setPesanKirim("Kupon sedang diklaim.");
                // setPesanSukses(null);
                // setPesanGagal(null);
                // setErc1155Disabled(false);
              }}
              onError={(error) => {
                setIsProcessing(false);
                setPesanTunggu(null);
                setPesanKirim(null);
                // setPesanSukses(null);
                setPesanGagal(`${error.message}`);
                // setErc1155Disabled(false);
              }}
              onTransactionConfirmed={async () => {
                setIsProcessing(false);
                // setPesanTunggu(null);
                setPesanKirim(null);
                setPesanSukses("Alhamdulillah! Kupon berhasil diklaim.");
                // setPesanGagal(null);
                // Simpan status klaim langsung ke localStorage
                if (activeAccount?.address) {
                  localStorage.setItem(
                    `erc1155Disabled_${activeAccount.address}_${currentTokenId}`,
                    "true"
                  );
                  setErc1155Disabled(true);
                }
              }}>
              {erc1155Disabled || (ownedNfts && Number(ownedNfts) >= 1)
                ? "Klaim Lagi Besok!"
                : "Klaim Sekarang!"}
            </ClaimButton>

            {/* Claim Button ERC20 */}
            <ClaimButton
              unstyled
              className={`w-full rounded-lg p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out
                ${
                  (!erc1155Disabled && (!ownedNfts || Number(ownedNfts) < 1)) ||
                  isProcessing ||
                  erc20Claimed
                    ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                    : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer"
                }
            `}
              contractAddress={b0nV0yageDrop.address}
              chain={b0nV0yageDrop.chain}
              client={client}
              claimParams={{
                type: "ERC20",
                quantity: "786",
              }}
              disabled={Boolean(
                (!erc1155Disabled &&
                  (ownedNfts === undefined || Number(ownedNfts) < 1)) ||
                  isProcessing ||
                  erc20Claimed
              )}
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
              onTransactionConfirmed={async () => {
                setIsProcessing(false);
                // setPesanTunggu(null);
                setPesanKirim(null);
                setPesanSukses("Alhamdulillah! Poin berhasil diklaim.");
                // setPesanGagal(null);
                // Simpan status klaim ke localStorage langsung saat transaksi berhasil
                if (activeAccount?.address) {
                  localStorage.setItem(
                    `erc20Claimed_${activeAccount.address}_${currentTokenId}`,
                    "true"
                  );
                  setErc20Claimed(true);
                }
              }}>
              {erc20Claimed
                ? "Klaim Lagi Besok!"
                : !erc1155Disabled && (!ownedNfts || Number(ownedNfts) < 1)
                ? "Klaim Kupon Dulu!"
                : "Klaim Sekarang!"}
            </ClaimButton>
          </div>

          {/* Note for users. */}
          <div className="flex flex-col gap-0">
            <h4 className="text-left text-xs font-medium text-icon-wording">
              &#42;Kupon {nft?.metadata.name || "Tanggal Kupon Digital"}
            </h4>
            <h4 className="text-left text-xs font-medium text-icon-wording">
              &#42;Hanya bisa diklaim satu kali per hari.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClaimAll;
