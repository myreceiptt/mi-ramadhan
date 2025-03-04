// /src/components/logins/ConnectButtons.tsx

// External libraries
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { ConnectButton, lightTheme } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { base, baseSepolia } from "@/config/rantais";
import { tekeks } from "@/config/tekeks";
import { tokeks } from "@/config/tokeks";

const chains = [base, baseSepolia];
// Extract token addresses with fallback to first token in the list
const displayBalanceToken: Record<number, string> = {
  [base.id]:
    tokeks[base.id]?.find((token) => token.symbol === "IGF")?.address ??
    tokeks[base.id]?.[0]?.address ??
    "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
  [baseSepolia.id]:
    tokeks[baseSepolia.id]?.find((token) => token.symbol === "IGF")?.address ??
    tokeks[baseSepolia.id]?.[0]?.address ??
    "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
};

const ConnectButtons: React.FC = () => {
  return (
    <div id="connected">
      <ConnectButton
        accountAbstraction={{
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          // chain: base,
          chain: baseSepolia,
          sponsorGas: true,
        }}
        appMetadata={{
          name: "Sambut Ramadhan Dengan Kejutan Spesial!",
          url: "https://ramadhan.voyage.co.id",
          description:
            "Sambut Ramadhan dengan kejutan spesial! Nikmati pengalaman seru, kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!",
          logoUrl: "https://ramadhan.voyage.co.id/logos/voyage.png",
        }}
        chains={chains}
        client={client}
        connectButton={{
          label: "Log In",
          style: {
            height: "40px",
            background: "#f0f0f0",
            color: "#707070",
          },
        }}
        connectModal={{
          privacyPolicyUrl: "/terms",
          showThirdwebBranding: false,
          size: "compact",
          termsOfServiceUrl: "/terms",
          title: "Silahkan Log In!",
          titleIcon: "https://ramadhan.voyage.co.id/logos/voyage.png",
        }}
        detailsButton={{
          displayBalanceToken,
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
        supportedNFTs={tekeks}
        supportedTokens={tokeks}
        theme={lightTheme({
          colors: {
            accentButtonBg: "#171717", // Button for Retry & Try Again
            accentButtonText: "#707070", // Button for Retry & Try Again
            accentText: "#171717", // Hyperlink text for Terms & Privacy
            borderColor: "#DFDFDF", // All border color
            // connectedButtonBg: string;
            // connectedButtonBgHover: string;
            // danger: string;
            // inputAutofillBg: string;
            // modalBg: string;
            // modalOverlayBg: string;
            // primaryButtonBg: string;
            // primaryButtonText: string;
            primaryText: "#707070", // Passkey & Connect a Wallet text
            // scrollbarBg: string;
            // secondaryButtonBg: string;
            // secondaryButtonHoverBg: string;
            secondaryButtonText: "#707070", // Google & Apple text
            // secondaryIconColor: string;
            // secondaryIconHoverBg: string;
            // secondaryIconHoverColor: string;
            // secondaryText: string;
            selectedTextBg: "#707070",
            selectedTextColor: "#F9F9F9",
            // separatorLine: string;
            // skeletonBg: string;
            // success: string;
            // tertiaryBg: string;
            // tooltipBg: string;
            // tooltipText: "#707070",
          },
        })}
        wallets={dompets}
      />
    </div>
  );
};

export default ConnectButtons;
