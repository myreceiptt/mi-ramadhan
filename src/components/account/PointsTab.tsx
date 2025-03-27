// /src/components/account/PointsTab.tsx

"use client";

// External libraries
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getBalance } from "thirdweb/extensions/erc20";
import { useActiveAccount, useReadContract } from "thirdweb/react";

// Blockchain configurations
import { poinIGF, poinIstiqlal } from "@/config/contracts";

// Component libraries
// import Loader from "../contents/ReusableLoader";
import TransferButton from "./TransferButton";

export default function PointsTab() {
  const activeAccount = useActiveAccount();
  // State for modal
  const [selectedToken, setSelectedToken] = useState<{
    symbol: string;
    displayValue: string;
    image: string;
  } | null>(null);

  // Fetch balances for each ERC20 contract
  const { data: balanceX } = useReadContract(getBalance, {
    contract: poinIGF,
    address: activeAccount?.address || "",
  });

  const { data: balanceY } = useReadContract(getBalance, {
    contract: poinIstiqlal,
    address: activeAccount?.address || "",
  });

  // Gabungkan ke satu array token dengan info image
  const ownedTokens = [
    balanceX
      ? {
          ...balanceX,
          contract: poinIGF,
          image: "/images/ramadhan-login-20.png",
        }
      : null,
    balanceY
      ? {
          ...balanceY,
          contract: poinIstiqlal,
          image: "/images/ramadhan-login-21.png",
        }
      : null,
  ].filter(Boolean);

  return (
    <>
      <section className="w-full flex flex-col gap-2 pt-4 items-start">
        {/* Token List Grid */}
        {ownedTokens.length > 0 ? (
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
            {ownedTokens.map((token, index) => {
              if (!token) return null;
              return (
                <motion.div
                  key={`${token.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}>
                  <div className="w-full grid grid-cols-1 gap-2 rounded-lg">
                    <button onClick={() => setSelectedToken(token)}>
                      <Image
                        src={token.image}
                        alt={token.symbol}
                        width={72}
                        height={72}
                        className="rounded-full w-full object-contain"
                      />
                    </button>

                    <h2 className="text-left text-sm font-semibold text-icon-wording">
                      {token.displayValue} {token.symbol}
                    </h2>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <>
            {/* Belum memiliki Poin Digital */}
            <h3 className="text-center text-sm font-medium text-icon-wording">
              Saat ini Anda belum memiliki Poin sama sekali.
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

        {/* Modal for Transfer */}
        <AnimatePresence>
          {selectedToken && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-back-ground/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedToken(null)}>
              <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
                <motion.div
                  className="relative flex flex-col items-center gap-4 p-2 rounded-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={selectedToken.image}
                    alt={selectedToken.symbol}
                    width={96}
                    height={96}
                    className="rounded-full object-contain"
                  />

                  <TransferButton
                    tokenId={0n} // karena ini ERC20, tokenId tidak relevan
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
