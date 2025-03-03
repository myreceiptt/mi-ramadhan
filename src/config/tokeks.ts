// /src/config/tokeks.ts

// Blockchain configurations
import { base, baseSepolia } from "@/config/rantais";

export const tokeks = {
  [base.id]: [
    {
      address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
      name: "BON Dosh",
      symbol: "BON",
      icon: "/erc20-icons/bon.png",
    },
    {
      address: "0xd0Ed4169B49940dCAF71e91Ae5968d24e0A53ae0",
      name: "Poin Istiqlal",
      symbol: "IGF",
      icon: "/erc20-icons/igf.png",
    },
  ],
  [baseSepolia.id]: [
    {
      address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
      name: "BON Dosh",
      symbol: "BON",
      icon: "/erc20-icons/bon.png",
    },
    {
      address: "0xd0Ed4169B49940dCAF71e91Ae5968d24e0A53ae0",
      name: "Poin Istiqlal",
      symbol: "IGF",
      icon: "/erc20-icons/igf.png",
    },
  ],
};
