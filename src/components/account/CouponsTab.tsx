// /src/components/account/CouponsTab.tsx

"use client";

// External libraries
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { istiqlalDigitalLegacy, kuponRamadhan } from "@/config/contracts";

// Component libraries
// import Loader from "../contents/ReusableLoader";
import TransferButton from "./TransferButton";

export default function CouponsTab() {
  const activeAccount = useActiveAccount();

  // State for modal
  const [selectedTokenId, setSelectedTokenId] = useState<bigint | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch owned NFTs 1
  const { data: nftsIstiqlal } = useReadContract(getOwnedNFTs, {
    contract: istiqlalDigitalLegacy,
    address: activeAccount?.address || "",
    start: 0,
    count: 9,
  });

  // Fetch owned NFTs 2
  const { data: nftsRamadhan } = useReadContract(getOwnedNFTs, {
    contract: kuponRamadhan,
    address: activeAccount?.address || "",
    start: 0,
    count: 30,
  });

  // Ambil balance NFT yang dimiliki user
  const ownedNFTs = [...(nftsIstiqlal || []), ...(nftsRamadhan || [])];

  return (
    <>
      <section className="w-full flex flex-col gap-2 pt-4 items-start">
        {/* NFT List Grid */}
        {ownedNFTs.length > 0 ? (
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
            {ownedNFTs.map((nft, index) => (
              <motion.div
                key={`${nft.owner}-${nft.id.toString()}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}>
                <div className="w-full grid grid-cols-1 gap-2 rounded-lg">
                  {nft ? (
                    <>
                      <button
                        onClick={() => {
                          setSelectedTokenId(nft.id);
                          setSelectedImage(nft.metadata.image ?? null);
                        }}>
                        <MediaRenderer
                          client={client}
                          src={
                            nft.metadata.image ||
                            "/images/ramadhan-login-09.png"
                          }
                          alt={`Kupon ${
                            nft.metadata.name || nft.id.toString()
                          }`}
                          className="rounded-lg w-full cursor-pointer"
                        />
                      </button>

                      <h2 className="text-left text-sm font-semibold text-icon-wording">
                        {nft.metadata.name || `ID Kartu ${nft.id.toString()}`}
                      </h2>
                    </>
                  ) : (
                    <h2 className="text-center text-xs font-semibold text-icon-wording">
                      Tidak ada data tersedia.
                    </h2>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {/* Belum memiliki Kupon Digital */}
            <h3 className="text-center text-sm font-medium text-icon-wording">
              Saat ini Anda belum memiliki Kartu Kolektibel.
            </h3>

            <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
              {/* Home Page Button */}
              <Link href="/kolektibel">
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
                setSelectedTokenId(null);
                setSelectedImage(null);
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
                    className="rounded-xl max-w-[80vw] max-h-[80vh]"
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
    </>
  );
}
