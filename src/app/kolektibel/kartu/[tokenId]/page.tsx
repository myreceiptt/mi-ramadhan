// /src/app/kolektibel/[tokenId]/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import Kolektibel from "@/components/contents/Kolektibel";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <Kolektibel />} />
);

export default PageToken;
