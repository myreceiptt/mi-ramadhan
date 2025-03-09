// /src/components/account/TransferButton.tsx

// External libraries
import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction, useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { kuponRamadhan } from "@/config/contracts";

const TransferButton = ({
  tokenId,
  recipientAddress,
}: {
  tokenId: bigint;
  recipientAddress: string;
}) => {
  const activeAccount = useActiveAccount();
  const { mutate: sendTransaction, data: transactionResult } =
    useSendTransaction();
  const [isProcessing, setIsProcessing] = useState(false);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  const handleTransfer = async () => {
    if (!activeAccount) {
      alert("Anda belum log in.");
      return;
    }

    setIsProcessing(true);
    setPesanTunggu("Bismillah! Mohon sabar dan tunggu.");
    setPesanSukses(null);
    setPesanGagal(null);

    try {
      // 1. Set Approval if needed
      const approvalTx = prepareContractCall({
        contract: kuponRamadhan,
        method: "function setApprovalForAll(address operator, bool approved)",
        params: [activeAccount.address, true],
      });

      sendTransaction(approvalTx);
      setPesanTunggu(null);
      setPesanKirim("Kupon sedang ditukar...");

      // 2. Transfer Token ERC-1155
      const transferTx = prepareContractCall({
        contract: kuponRamadhan,
        method:
          "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
        params: [activeAccount.address, recipientAddress, tokenId, 1n, "0x"],
      });

      sendTransaction(transferTx);
      setPesanKirim(null);
      setPesanSukses("Alhamdulillah! Kupon berhasil ditukar.");
    } catch (error) {
      console.error("Error saat penukaran:", error);
      setPesanGagal(`Error: ${error}`);
    }

    setIsProcessing(false);
  };

  console.log("Result:", transactionResult);

  return (
    <>
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

      <div className="w-full flex sm:flex-row flex-col gap-2">
        <button
          className={`w-full rounded-full p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out
        ${
          isProcessing
            ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
            : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer"
        }
    `}
          onClick={handleTransfer}
          disabled={isProcessing}>
          {isProcessing ? "Memproses..." : "Tukar Kupon"}
        </button>
        {/* <button
          onClick={() => {
            setSelectedImage(null);
            setSelectedTokenId(null);
          }}
          className="w-full rounded-full p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer">
          Tutup Kupon
        </button> */}
      </div>
    </>
  );
};

export default TransferButton;
