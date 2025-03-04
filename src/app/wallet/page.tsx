// /src/app/wallet/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import WalletDetails from "@/components/account/WalletDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const WalletPage: React.FC = () => (
  <DynamicLoginPage ContentComponent={WalletDetails} />
);

export default WalletPage;
