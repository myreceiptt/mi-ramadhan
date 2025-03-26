// /src/perpustakaan/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import Perpustakaan from "@/components/contents/Perpustakaan";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageHome: React.FC = () => (
  <DynamicLoginPage ContentComponent={Perpustakaan} />
);

export default PageHome;
