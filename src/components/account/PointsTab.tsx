// /src/components/account/PointsTab.tsx

"use client";

// External libraries
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  balanceOfBatch as balanceOfBatchERC1155,
  getNFTs,
} from "thirdweb/extensions/erc1155";

import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
  useWalletBalance,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { kuponRamadhan, poinIstiqlal } from "@/config/contracts";

// Component libraries
import Loader from "../contents/ReusableLoader";
import TransferButton from "./TransferButton";

export default function PointsTab() {
  const activeAccount = useActiveAccount();

  // State for modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTokenId, setSelectedTokenId] = useState<bigint | null>(null);

  // Ambil balance token yang dimiliki user
  const { data } = useWalletBalance({
    chain: poinIstiqlal.chain,
    address: activeAccount?.address ?? "",
    client: client,
    tokenAddress: poinIstiqlal.address,
  });
  console.log("balance", data?.displayValue, data?.symbol);

  const { data: ownedNfts } = useReadContract(balanceOfBatchERC1155, {
    contract: kuponRamadhan,
    owners: Array(31).fill(activeAccount?.address ?? ""),
    tokenIds: Array.from({ length: 31 }, (_, i) => BigInt(i)),
  });

  // Ambil metadata untuk semua NFT
  const { data: nfts, isLoading: isNftLoading } = useReadContract(getNFTs, {
    contract: kuponRamadhan,
    start: 0,
    count: 31,
  });

  // Ensure ownedNfts exists, otherwise show this "Memuat..." message.
  if (!ownedNfts || isNftLoading) {
    return (
      <section className="w-full flex flex-col gap-2 pt-4 items-start">
        <Loader message="Memuat..." />
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-2 pt-4 items-start">
      {/* NFT List Grid */}
      {ownedNfts?.some((balance) => balance > 0n) ? (
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
          {ownedNfts?.map((balance, index) => {
            if (balance > 0n) {
              const nft = nfts?.[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}>
                  <div className="w-full grid grid-cols-1 gap-2 rounded-lg">
                    {nft ? (
                      <>
                        <button
                          onClick={() => {
                            setSelectedImage(nft.metadata.image ?? null);
                            setSelectedTokenId(nft.id);
                          }}>
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

                        <h2 className="text-center text-xs font-semibold text-icon-wording">
                          Saldo{" "}
                          {nft?.metadata?.attributes?.[1] ? (
                            <>
                              {
                                (
                                  nft.metadata.attributes[1] as {
                                    trait_type: string;
                                    value: string;
                                  }
                                ).value
                              }
                            </>
                          ) : (
                            `Tidak ada atribut tersedia untuk ${nft.id}`
                          )}{" "}
                          {balance.toString()}
                        </h2>
                      </>
                    ) : (
                      <h2 className="text-center text-xs font-semibold text-icon-wording">
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
      ) : (
        <>
          {/* Belum memiliki Kupon Digital */}
          <h3 className="text-center text-sm font-medium text-icon-wording">
            Saat ini Anda belum memiliki Poin Istiqlal.
          </h3>

          <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
            {/* Home Page Button */}
            <Link href="/">
              <button
                type="button"
                className="rounded-lg py-4 px-12 text-back-ground bg-hitam-judul-body text-base font-semibold cursor-pointer">
                Klaim Sekarang
              </button>
            </Link>
          </div>

          {/* Bottom Section - Background Image */}
          <div className="bottom-0 left-0 w-full h-full">
            <Image
              src="/images/ramadhan-login-01.png"
              alt="Background Image"
              width={3840}
              height={1072}
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
        </>
      )}

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && selectedTokenId && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-back-ground/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImage(null);
              setSelectedTokenId(null);
            }}>
            <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
              <motion.div
                className="relative flex flex-col items-center gap-4 p-2 rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}>
                <MediaRenderer
                  client={client}
                  src={selectedImage || "/images/ramadhan-login-09.png"}
                  width="640"
                  height="640"
                  alt={`Kupon Puasa Ramadhan Milik Anda`}
                  className="rounded-xl max-w-[90vw] max-h-[90vh]"
                />
                <TransferButton
                  tokenId={selectedTokenId}
                  recipientAddress="0x13a91533cE8cc57F05EdE4716C32C8B51800E599" // BON VOYAGE Address
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
