// /src/app/riwayat/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import UserRecords from "@/components/account/UserRecords";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const WalletPage: React.FC = () => (
  <DynamicLoginPage ContentComponent={UserRecords} />
);

export default WalletPage;
