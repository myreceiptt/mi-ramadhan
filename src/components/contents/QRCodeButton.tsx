// components/QRCodeButton.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { FaQrcode } from "react-icons/fa6";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeButton() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div ref={qrRef} className="hidden">
        {currentUrl && <QRCodeCanvas value={currentUrl} size={1047} />}
      </div>
      <button
        onClick={downloadQRCode}
        className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-footer-kotak-icon m-1 rounded-lg"
        aria-label="Download QR Code">
        <FaQrcode />
      </button>
    </div>
  );
}
