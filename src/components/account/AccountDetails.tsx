// /src/components/contents/AccountDetails.tsx

"use client";

// External libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AccountAddress,
  AccountAvatar,
  AccountName,
  AccountProvider,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";

// Blockchain configurations
import { client } from "@/config/client";

// Components libraries
import ConnectButtons from "../logins/ConnectButtons";
import Loader from "../contents/ReusableLoader";

const AccountDetails: React.FC = () => {
  const activeAccount = useActiveAccount();
  const wallet = useActiveWallet();
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
                  src="/images/bon-voyage.gif"
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
            <h2 className="text-left text-sm font-normal text-icon-wording">
              <AccountName
                loadingComponent={<Loader message="Memuat..." />}
                fallbackComponent={<AccountAddress formatFn={shortenAddress} />}
              />
            </h2>
            <h2 className="text-left text-sm font-normal text-icon-wording">
              Ini adalah akun digital Anda di Masjid Istiqlal. Silahkan
              menggunakan tombol &quot;Log Out&quot; berikut ini untuk keluar
              dari aplikasi web Masjid Istiqlal. Terima kasih!
            </h2>
            <div className="w-full flex sm:flex-row flex-col gap-2">
              <ConnectButtons />
              <button
                onClick={() => {
                  if (wallet) {
                    disconnect(wallet);
                    router.push("/");
                  }
                }}
                className="w-full rounded-full p-1 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer">
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
