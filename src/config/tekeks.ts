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
    "0xFff11121d7f0e562207acb9Dc340988e077c9240", // Kupon Ramadhan 1446 H
    "0xc226653E9C043674a48C6b7Be33526771C34389A", // Bukhari Open Door
    "0x1925B991C5e2eC45BA1f34786BAd405d58202140", // MEMORA ONE 2024
  ],
  [baseSepolia.id]: [
    "0xc3046681149f96746b362a64472fD4B1cd1E33B2", // MEMORA ZER0 2024
  ],
};

// Assign `tekeks` to `supportedNFTs`
// const supportedNFTs: SupportedNFTs = tekeks;
