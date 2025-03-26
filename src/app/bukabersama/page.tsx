// /src/bukabersama/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import BukaBersama from "@/components/contents/BukaBersama";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <BukaBersama />} />
);

export default PageToken;
