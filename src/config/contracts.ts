// /src/config/contracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { base, baseSepolia } from "@/config/rantais";

// All Non-Fungible Tokens Contracts
// MEMORA ONE on Base.
export const memoraOneOnBase = getContract({
  address: "0x1925B991C5e2eC45BA1f34786BAd405d58202140",
  chain: base,
  client,
});

// Kupon Ramadhan on Base Sepolia.
export const kuponRamadhan = getContract({
  address: "0xE58C2Bde65D61C452d12dE4DB6B9D19525c73E2f",
  chain: baseSepolia,
  client,
});

// MEMORA ZER0 on Base Sepolia.
export const memoraZer0 = getContract({
  address: "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
  chain: baseSepolia,
  client,
});

// All Non-Fungible Tokens Contracts
// BON VOYAGE Drop on Base.
export const bonVoyageDrop = getContract({
  address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
  chain: base,
  client,
});

// USD Coin on Base.
export const usdCoinOnBase = getContract({
  address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  chain: base,
  client,
});

// Poin Istiqlal on Base Sepolia.
export const p0inIstiqlal = getContract({
  address: "0xd0Ed4169B49940dCAF71e91Ae5968d24e0A53ae0",
  chain: baseSepolia,
  client,
});

// B0N V0YAGE Drop on Base Sepolia.
export const b0nV0yageDrop = getContract({
  address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
  chain: baseSepolia,
  client,
});

// USD Coin on Base Sepolia.
export const usdCoinOnBaseSepolia = getContract({
  address: "0x5dEaC602762362FE5f135FA5904351916053cF70",
  chain: baseSepolia,
  client,
});
