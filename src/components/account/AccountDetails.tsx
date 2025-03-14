// /src/components/contents/AccountDetails.tsx

"use client";

// External libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AccountAddress,
  AccountAvatar,
  AccountName,
  AccountProvider,
  lightTheme,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
  useWalletDetailsModal,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";

// Blockchain configurations
import { base, baseSepolia } from "@/config/rantais";
import { client } from "@/config/client";
import { tekeks } from "@/config/tekeks";
import { tokeks } from "@/config/tokeks";

// Components libraries
import Loader from "@/components/contents/ReusableLoader";

const chains = [base, baseSepolia];

// Extract token addresses with fallback to first token in the list
const displayBalanceToken: Record<number, string> = {
  [base.id]:
    tokeks[base.id]?.find((token) => token.symbol === "IGF")?.address ??
    tokeks[base.id]?.[0]?.address ??
    "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C", // $BON VOYAGE
  [baseSepolia.id]:
    tokeks[baseSepolia.id]?.find((token) => token.symbol === "IGF")?.address ??
    tokeks[baseSepolia.id]?.[0]?.address ??
    "0x204717A95a9362660dCF026cdE4cEB1586FfD576", // $BON VOYAGE
};

const customTheme = lightTheme({
  colors: {
    accentButtonBg: "#171717", // Button for Retry & Try Again
    accentButtonText: "#707070", // Button for Retry & Try Again
    accentText: "#171717", // Hyperlink text for Terms & Privacy
    borderColor: "#DFDFDF", // All border color
    // connectedButtonBg: string;
    // connectedButtonBgHover: string;
    // danger: string;
    // inputAutofillBg: string;
    // modalBg: string;
    // modalOverlayBg: string;
    // primaryButtonBg: string;
    // primaryButtonText: string;
    primaryText: "#707070", // Passkey & Connect a Wallet text
    // scrollbarBg: string;
    // secondaryButtonBg: string;
    // secondaryButtonHoverBg: string;
    secondaryButtonText: "#707070", // Google & Apple text
    // secondaryIconColor: string;
    // secondaryIconHoverBg: string;
    // secondaryIconHoverColor: string;
    // secondaryText: string;
    selectedTextBg: "#707070",
    selectedTextColor: "#F9F9F9",
    // separatorLine: string;
    // skeletonBg: string;
    // success: string;
    // tertiaryBg: string;
    // tooltipBg: string;
    // tooltipText: "#707070",
  },
});

const AccountDetails: React.FC = () => {
  const activeAccount = useActiveAccount();
  const wallet = useActiveWallet();
  const [showHint, setShowHint] = useState(false);
  const [digitalID, setDigitalID] = useState<string>("");

  const didClick = () => {
    setDigitalID(`Ini adalah Digital ID Anda: ${activeAccount ?? ""}`);
    setShowHint(true);

    // Sembunyikan hint setelah 3 detik
    setTimeout(() => setShowHint(false), 3000);
  };

  const detailsModal = useWalletDetailsModal();
  function handleClick() {
    detailsModal.open({
      chains: chains,
      client,
      displayBalanceToken,
      supportedNFTs: tekeks,
      supportedTokens: tokeks,
      theme: customTheme,
    });
  }

  const { disconnect } = useDisconnect();
  const router = useRouter();

  return (
    <AccountProvider address={activeAccount?.address ?? ""} client={client}>
      <main className="grid gap-4 place-items-center">
        <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
          <div className="rounded-xl sm:rounded-3xl md:rounded-2xl lg:rounded-3xl overflow-hidden w-full">
            {/* Akun Profile */}
            <AccountAvatar
              width="720"
              height="720"
              className="rounded-xl sm:rounded-3xl md:rounded-2xl lg:rounded-3xl w-full"
              loadingComponent={<Loader message="Memuat..." />}
              fallbackComponent={
                <Image
                  alt="Akun Digital Anda di Masjid Istiqlal"
                  src="/images/ramadhan-login-05.png"
                  width="720"
                  height="720"
                />
              }
              socialType={"farcaster"}
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
            <h1 className="text-left xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-normal text-hitam-judul-body tracking-tight justify-start align-middle leading-tight">
              Akun Digital Anda
            </h1>
            <div className="flex flex-row gap-2">
              <h1 className="text-left text-sm font-medium text-icon-wording">
                di
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
            <h2
              className="text-left text-sm font-normal text-icon-wording cursor-pointer"
              onClick={didClick}
              title={digitalID ?? "Digital ID Anda"}>
              <AccountName
                loadingComponent={<Loader message="Memuat..." />}
                fallbackComponent={<AccountAddress formatFn={shortenAddress} />}
              />{" "}
              {/* Hint Box */}
              {showHint && (
                <span className="text-left text-sm font-semibold text-footer-coklat">
                  {digitalID}
                </span>
              )}
            </h2>
            <h2 className="text-left text-sm font-normal text-icon-wording">
              Ini adalah akun digital Anda di Masjid Istiqlal. Silahkan
              menggunakan tombol berikut ini untuk melihat detil akun, maupun
              untuk keluar akun.
            </h2>
            <div className="w-full flex sm:flex-row flex-col gap-2">
              <button
                onClick={handleClick}
                className="w-full rounded-full p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer">
                Detil Akun
              </button>
              <button
                onClick={() => {
                  if (wallet) {
                    disconnect(wallet);
                    router.push("/");
                  }
                }}
                className="w-full rounded-full p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer">
                Keluar Akun
              </button>
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="text-left text-xs font-normal text-icon-wording">
                &#42;Jangan lupa tukarkan Kupon Digital & Istiqlal Poin milik
                Anda. Ada kejutan menarik menanti Anda di bulan Ramadhan penuh
                berkah ini.
              </h4>
            </div>
          </div>
        </div>
      </main>
    </AccountProvider>
  );
};

export default AccountDetails;
