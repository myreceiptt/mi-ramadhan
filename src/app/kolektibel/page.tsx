// /src/app/kolektibel/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import SouvenirsList from "@/components/contents/SouvenirsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const pageTitle1 = "IDL";
const pageTitle2 = "Collectibles";
const tokenIds = ["3", "4", "5", "6", "7", "8", "9"];

const KolektibelPage: React.FC = () => (
  <DynamicLoginPage
    ContentComponent={() => (
      <SouvenirsList
        tokenIds={tokenIds}
        title1={pageTitle1}
        title2={pageTitle2}
      />
    )}
  />
);

export default KolektibelPage;
