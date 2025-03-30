// /src/app/ramadhan-1446h/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import ClaimAll from "@/components/contents/ClaimAll";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageHome: React.FC = () => (
  <DynamicLoginPage ContentComponent={ClaimAll} />
);

export default PageHome;
