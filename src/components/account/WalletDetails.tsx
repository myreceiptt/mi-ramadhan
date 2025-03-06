// /src/components/contents/WalletDetails.tsx

"use client";

// External libraries
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
// import { getContract } from "thirdweb";
import {
  balanceOfBatch as balanceOfBatchERC1155,
  getNFTs,
} from "thirdweb/extensions/erc1155";

import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { kuponRamadhan } from "@/config/contracts";
import Link from "next/link";

export default function WalletDetails() {
  const activeAccount = useActiveAccount();

  // const tokenIds = Array.from({ length: 31 }, (_, i) => BigInt(i));
  // const owners = Array(tokenIds.length).fill(activeAccount?.address ?? "");

  // const contract = getContract({
  //   client,
  //   chain: kuponRamadhan.chain,
  //   address: kuponRamadhan.address,
  // });

  // State for modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Ambil balance NFT yang dimiliki user
  const { data: ownedNfts } = useReadContract(balanceOfBatchERC1155, {
    contract: kuponRamadhan,
    owners: Array(31).fill(activeAccount?.address ?? ""),
    tokenIds: Array.from({ length: 31 }, (_, i) => BigInt(i)),
  });

  // Ambil metadata untuk semua NFT
  const { data: nfts } = useReadContract(getNFTs, {
    contract: kuponRamadhan,
    start: 0,
    count: 31,
  });

  return (
    <main className="grid gap-4 place-items-center">
      {ownedNfts?.some((balance) => balance > 0n) ? (
        <>
          <div className="w-full flex flex-col gap-2 sm:items-start items-center px-0 sm:px-4">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
              Kupon Digital &
            </h1>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
              Istiqlal Poin Anda
            </h2>
          </div>

          {/* NFT List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ownedNfts?.map((balance, index) => {
              if (balance > 0n) {
                const nft = nfts?.[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}>
                    <div className="w-full grid grid-cols-1 gap-4 p-4 border border-solid border-border-tombol rounded-3xl">
                      {nft ? (
                        <>
                          <button
                            onClick={() =>
                              setSelectedImage(nft.metadata.image ?? null)
                            }>
                            <MediaRenderer
                              client={client}
                              src={
                                nft.metadata.image ||
                                "/images/ramadhan-login-09.png"
                              }
                              alt={
                                nft.metadata.name
                                  ? `Kupon ${nft.metadata.name}`
                                  : "Kupon Digital"
                              }
                              className="rounded-lg w-full cursor-pointer"
                            />
                          </button>
                          <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-left text-base font-semibold text-hitam-judul-body">
                              Kupon {balance.toString()} Edisi
                            </h2>
                            <h2 className="text-left text-sm font-medium text-icon-wording">
                              {nft?.metadata?.name || "Digital"}
                            </h2>
                          </div>
                        </>
                      ) : (
                        <h2 className="text-left text-sm font-medium text-icon-wording">
                          Tidak ada data tersedia.
                        </h2>
                      )}
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}
          </div>
        </>
      ) : (
        <>
          {/* Top Section - Content Box */}
          <div className="w-full flex flex-col gap-2 items-center justify-center text-center px-0 sm:px-4">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-hitam-judul-body">
              Kupon Digital & Istiqlal Poin
            </h2>
            <h3 className="text-center text-sm font-medium text-icon-wording">
              Saat ini Anda belum memiliki Kupon Digital & Istiqlal Poin.
              Dapatkan Kupon Digital & Istiqlal Poin sekarang secara GRATIS dan
              tukarkan dengan kejutan menarik.
            </h3>
          </div>
          <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
            {/* Home Page Button */}
            <Link href="/">
              <button
                type="button"
                className="rounded-lg py-4 px-12 text-back-ground bg-hitam-judul-body text-base font-semibold cursor-pointer">
                Klaim Kupon & Poin
              </button>
            </Link>
          </div>

          {/* Bottom Section - Background Image */}
          <div className="bottom-0 left-0 w-full h-full">
            <Image
              src="/images/bukhari-fa-login-02-12.png"
              alt="Background Image"
              width={1430}
              height={541}
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
        </>
      )}

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-back-ground/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}>
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}>
              {/* <button
                className="absolute top-2 right-2 text-hitam-judul-body text-2xl"
                onClick={() => setSelectedImage(null)}>
                &times;
              </button> */}
              <MediaRenderer
                client={client}
                src={selectedImage || "/images/ramadhan-login-09.png"}
                width="1080"
                height="1080"
                alt={`Kupon Puasa Ramadhan Milik Anda`}
                className="rounded-lg w-full max-h-[90vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
