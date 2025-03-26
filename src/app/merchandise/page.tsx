// /src/merchandise/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import Merchandise from "@/components/contents/Merchandise";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageHome: React.FC = () => (
  <DynamicLoginPage ContentComponent={Merchandise} />
);

export default PageHome;
