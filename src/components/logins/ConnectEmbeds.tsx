// /src/components/logins/ConnectEmbeds.tsx

// External libraries
import React from "react";
import { ConnectEmbed, lightTheme } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { base, baseSepolia } from "@/config/rantais";

const chains = [base, baseSepolia];

const ConnectEmbeds: React.FC = () => {
  const embedStyle: React.CSSProperties = {
    // color: "#707070",
    background: "transparent",
    // height: "auto",
    width: "100%",
    // position: "relative",
    // border: 1px solid "#DFDFDF",
    // overflow: "hidden",
  };

  return (
    <div
      id="logins"
      className="w-full h-auto flex flex-col justify-center items-center">
      <ConnectEmbed
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
        header={{
          title: " ",
          // titleIcon: "https://ramadhan.voyage.co.id/logos/oslo.png;",
        }}
        modalSize="compact"
        showThirdwebBranding={false}
        style={embedStyle}
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

export default ConnectEmbeds;
