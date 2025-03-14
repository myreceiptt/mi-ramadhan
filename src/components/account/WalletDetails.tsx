// /src/components/account/WalletDetails.tsx

"use client";

// External libraries
import React, { useState } from "react";

// Component libraries
import CouponsTab from "./CouponsTab";
import PointsTab from "./PointsTab";

export default function WalletDetails() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-full flex flex-col gap-2 lg:gap-4 sm:items-start items-center">
        <h1 className="text-left xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-normal text-hitam-judul-body tracking-tight justify-start align-middle leading-tight">
          Dompet Digital
        </h1>

        <div className="lg:w-1/4 sm:w-1/2 w-full flex flex-row gap-2">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`w-full rounded-full p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out border-2 border-solid
              ${
                activeTab === "tab1"
                  ? "border-back-ground text-back-ground bg-hitam-judul-body"
                  : "border-border-tombol bg-back-ground text-hitam-judul-body hover:bg-hitam-judul-body hover:text-back-ground cursor-pointer"
              }
          `}>
            Kartu
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`w-full rounded-full p-2 sm:text-base text-sm font-semibold transition-colors duration-300 ease-in-out border-2 border-solid
              ${
                activeTab === "tab2"
                  ? "border-back-ground text-back-ground bg-hitam-judul-body"
                  : "border-border-tombol bg-back-ground text-hitam-judul-body hover:bg-hitam-judul-body hover:text-back-ground cursor-pointer"
              }
          `}>
            Poin
          </button>
        </div>
      </div>

      {activeTab === "tab1" && <CouponsTab />}

      {activeTab === "tab2" && <PointsTab />}
    </main>
  );
}
