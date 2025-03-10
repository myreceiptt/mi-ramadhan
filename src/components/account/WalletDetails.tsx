// /src/components/contents/WalletDetails.tsx

"use client";

// External libraries
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getContractEvents } from "thirdweb";
import {
  balanceOfBatch as balanceOfBatchERC1155,
  getNFTs,
  transferSingleEvent,
} from "thirdweb/extensions/erc1155";

import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { kuponRamadhan } from "@/config/contracts";

// Component libraries
import TransferButton from "./TransferButton";

// Define correct type for TransferSingle event arguments
type TransferSingleEventArgs = {
  _operator: string;
  _from: string;
  _to: string;
  _id: bigint;
  _value: bigint;
};

export default function WalletDetails() {
  const activeAccount = useActiveAccount();
  const [transferEvents, setTransferEvents] = useState<
    Awaited<ReturnType<typeof getContractEvents>>
  >([]);

  // State for modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTokenId, setSelectedTokenId] = useState<bigint | null>(null);

  // Tabs const
  const [activeTab, setActiveTab] = useState("tab1");

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

  // Ambil riwayat transfer ERC1155 NFT
  useEffect(() => {
    const fetchTransferEvents = async () => {
      if (!activeAccount || !activeAccount.address) return;

      try {
        const events = await getContractEvents({
          contract: kuponRamadhan,
          events: [
            transferSingleEvent({
              _from: activeAccount.address,
            }),
          ],
        });
        console.error("Fetched transfer events:", events);

        setTransferEvents(events);
      } catch (error) {
        console.error("Error fetching transfer events:", error);
      }
    };

    fetchTransferEvents();
  }, [activeAccount]);

  return (
    <main className="grid gap-4 place-items-center">
      <div className="flex gap-4 border-b-2 border-gray-300 w-full justify-center mb-4">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`py-2 px-4 font-semibold ${
            activeTab === "tab1"
              ? "border-b-4 border-hitam-judul-body"
              : "text-gray-500"
          }`}>
          Kupon
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`py-2 px-4 font-semibold ${
            activeTab === "tab2"
              ? "border-b-4 border-hitam-judul-body"
              : "text-gray-500"
          }`}>
          Poin
        </button>
      </div>

      {activeTab === "tab1" && (
        <section className="md:w-2xl w-full flex flex-col gap-2 items-center px-0 sm:px-4">
          {ownedNfts?.some((balance) => balance > 0n) ? (
            <>
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
                Kupon Digital
              </h2>
              <h3 className="text-center text-sm font-medium text-icon-wording">
                Ini adalah Kupon Digital milik Anda.
              </h3>

              {/* NFT List Grid */}
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 items-center">
                {ownedNfts?.map((balance, index) => {
                  if (balance > 0n) {
                    const nft = nfts?.[index];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}>
                        <div className="w-full grid grid-cols-1 gap-2 p-2 border border-solid border-border-tombol rounded-lg">
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
                                )}
                              </h2>
                              <h2 className="text-center text-xs font-semibold text-icon-wording">
                                {balance.toString()} Kupon
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
            </>
          ) : (
            <>
              {/* Belum memiliki Kupon Digital */}
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
                Kupon Digital
              </h2>
              <h3 className="text-center text-sm font-medium text-icon-wording">
                Saat ini Anda belum memiliki Kupon Digital.
              </h3>

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
                    className="relative flex flex-col items-center gap-2 p-2 bg-back-ground border border-solid border-border-tombol rounded-lg"
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

          <div className="flex border-b-2 border-t-2 border-gray-300 w-full justify-center my-4" />

          {/* New Transfer Events Section */}
          {transferEvents.length > 0 ? (
            <>
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
                Riwayat Penggunaan
              </h2>
              <h3 className="text-center text-sm font-medium text-icon-wording">
                Ini adalah riwayat penggunaan Kupon Digital Anda.
              </h3>
              <div className="w-full max-w-2xl items-center">
                <ul className="list-disc pl-5">
                  {transferEvents.map((event, index) => {
                    const args = event.args as TransferSingleEventArgs; // ✅ Type assertion

                    return (
                      <li key={index} className="text-sm text-gray-700">
                        Token ID: {args._id.toString()} → To: {args._to} |
                        Amount: {args._value.toString()}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* Belum ada riwayat penggunaan Kupon Digital */}
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
                Riwayat Penggunaan
              </h2>
              <h3 className="text-center text-sm font-medium text-icon-wording">
                Belum ada riwayat penggunaan Kupon Digital.
              </h3>

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
        </section>
      )}

      {activeTab === "tab2" && (
        <section className="w-full flex flex-col gap-2 sm:items-start items-center px-0 sm:px-4">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
            Istiqlal Poin
          </h2>
          <h3 className="text-center text-sm font-medium text-icon-wording">
            Ini adalah saldo Istiqlal Poin milik Anda dan riwayat penggunaannya.
          </h3>
        </section>
      )}
    </main>
  );
}
