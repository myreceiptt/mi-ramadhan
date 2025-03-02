// /src/components/logins/ConnectButtons.tsx

// External libraries
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { ConnectButton } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { base, baseSepolia } from "@/config/rantais";
import { tekeks } from "@/config/tekeks";
import { tokeks } from "@/config/tokeks";

const chains = [base, baseSepolia];

const ConnectButtons: React.FC = () => {
  return (
    <div id="connected">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Sambut Ramadhan Dengan Kejutan Spesial!",
          url: "https://ramadhan.voyage.co.id",
          description:
            "Sambut Ramadhan dengan kejutan spesial! Nikmati pengalaman seru, kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!",
          logoUrl: "https://ramadhan.voyage.co.id/logo/oslo.png",
        }}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          // chain: base,
          chain: baseSepolia,
          sponsorGas: true,
        }}
        chains={chains}
        supportedTokens={tokeks}
        supportedNFTs={tekeks}
        detailsButton={{
          displayBalanceToken: {
            [base.id]: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
            [baseSepolia.id]: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
          },
          render: () => (
            <button className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
              <FaUserLarge />
            </button>
          ),
        }}
        detailsModal={{
          assetTabs: ["token", "nft"],
          // assetTabs: [],
        }}
        theme="light"
      />
    </div>
  );
};

export default ConnectButtons;
