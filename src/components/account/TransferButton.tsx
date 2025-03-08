import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction, useActiveAccount } from "thirdweb/react";
import { kuponRamadhan } from "@/config/contracts";

const TransferButton = ({
  tokenId,
  recipientAddress,
}: {
  tokenId: bigint;
  recipientAddress: string;
}) => {
  const activeAccount = useActiveAccount();
  const { mutate: sendTransaction } = useSendTransaction();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTransfer = async () => {
    if (!activeAccount) {
      alert("Anda belum log in.");
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Set Approval jika belum ada izin
      const approvalTx = prepareContractCall({
        contract: kuponRamadhan,
        method: "function setApprovalForAll(address operator, bool approved)",
        params: [activeAccount.address, true], // Memberikan izin untuk transfer
      });

      sendTransaction(approvalTx);

      // 2. Transfer Token ERC-1155
      const transferTx = prepareContractCall({
        contract: kuponRamadhan,
        method:
          "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
        params: [activeAccount.address, recipientAddress, tokenId, 1n, "0x"],
      });

      sendTransaction(transferTx);

      alert("Penukaran berhasil!");
    } catch (error) {
      console.error("Error saat penukaran:", error);
      alert("Penukaran gagal.");
    }

    setIsProcessing(false);
  };

  return (
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
  );
};

export default TransferButton;
