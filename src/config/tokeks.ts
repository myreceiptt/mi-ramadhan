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
      address: "0x01460F06aC46aBc2185db9Fa529564798eEC33C3",
      name: "Poin Istiqlal",
      symbol: "PMI",
      icon: "/erc20-icons/pmi.png",
    },
    {
      address: "0x2F2080A9EfcfF05B1175b0D613a61B992544AcE1",
      name: "Poin IGF",
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
      symbol: "PMI",
      icon: "/erc20-icons/pmi.png",
    },
  ],
};
