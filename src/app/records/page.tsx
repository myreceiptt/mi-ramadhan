// /src/app/riwayat/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import RecordDetails from "@/components/account/RecordDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const WalletPage: React.FC = () => (
  <DynamicLoginPage ContentComponent={RecordDetails} />
);

export default WalletPage;
