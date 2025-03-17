// /src/app/layout.tsx

// External libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react";

// CSS Styling
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sambut Ramadhan Dengan Kejutan Spesial!",
  description:
    "Sambut Ramadhan dengan kejutan spesial! Nikmati pengalaman seru, kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!",
  metadataBase: new URL("https://ramadhan.voyage.co.id"),
  authors: [
    { name: "MyReceipt", url: "https://nyreceipt.endhonesa.com" },
    { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
  ],
  creator: "MyReceipt and Friends",
  publisher: "Voyage.co.id",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sambut Ramadhan Dengan Kejutan Spesial!",
    description:
      "Sambut Ramadhan dengan kejutan spesial! Nikmati pengalaman seru, kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!",
    url: "https://ramadhan.voyage.co.id",
    siteName: "Sambut Ramadhan Dengan Kejutan Spesial!",
    locale: "en-US",
    images: [
      {
        url: "https://ramadhan.voyage.co.id/sambut-ramadhan-di-masjid-istiqlal.png",
        width: 1920,
        height: 1080,
        alt: "Sambut Ramadhan Di Masjid Istiqlal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "Sambut Ramadhan Dengan Kejutan Spesial!",
    description:
      "Sambut Ramadhan dengan kejutan spesial! Nikmati pengalaman seru, kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!",
    images: [
      "https://ramadhan.voyage.co.id/sambut-ramadhan-di-masjid-istiqlal.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
        <Analytics />
      </body>
    </html>
  );
}
