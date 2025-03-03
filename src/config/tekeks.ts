// /src/config/tekeks.ts

// Blockchain configurations
import { base, baseSepolia } from "@/config/rantais";

// Define the type explicitly
type SupportedNFTs = {
  [key: number]: `0x${string}`[]; // Keys are numbers, values are arrays of Ethereum addresses
};

// Define `tekeks` with the proper type
export const tekeks: SupportedNFTs = {
  [base.id]: [
    "0x1925B991C5e2eC45BA1f34786BAd405d58202140", // MEMORA ONE
  ],
  [baseSepolia.id]: [
    "0xE58C2Bde65D61C452d12dE4DB6B9D19525c73E2f", // Kupon Ramadhan
    "0xc3046681149f96746b362a64472fD4B1cd1E33B2", // MEMORA ZER0
  ],
};

// Assign `tekeks` to `supportedNFTs`
// const supportedNFTs: SupportedNFTs = tekeks;
