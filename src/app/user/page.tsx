// /src/app/account/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import AccountDetails from "@/components/account/AccountDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const AccountPage: React.FC = () => (
  <DynamicLoginPage ContentComponent={AccountDetails} />
);

export default AccountPage;
