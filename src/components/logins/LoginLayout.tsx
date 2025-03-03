// /src/components/logins/LoginLayout.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Image configurations
import art11 from "../../../public/images/ramadhan-login-11.png";
import art12 from "../../../public/images/ramadhan-login-12.png";
import art13 from "../../../public/images/ramadhan-login-13.png";
import art14 from "../../../public/images/ramadhan-login-14.png";
import art15 from "../../../public/images/ramadhan-login-15.png";
import logo from "../../../public/images/ramadhan-login-06.png";
import supported from "../../../public/images/ramadhan-login-18.png";
import powered from "../../../public/images/ramadhan-login-19.png";

// Array of images
const artImages = [
  { src: art11, alt: "Sambut Ramadhan dengan Kejutan Spesial!" },
  { src: art12, alt: "Sambut Ramadhan di Masjid Istiqlal" },
  { src: art13, alt: "Ramadhan Kareem with Istiqlal Mosque" },
  { src: art14, alt: "Ramadhan Mubarak in Traditional Style" },
  { src: art15, alt: "Celebrate Ramadhan with Unity" },
];

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [randomArt, setRandomArt] = useState(artImages[0]); // Default image

  useEffect(() => {
    // Select a random image on each page load
    const randomIndex = Math.floor(Math.random() * artImages.length);
    setRandomArt(artImages[randomIndex]);
  }, []);

  return (
    <div className="w-full h-screen grid md:grid-cols-2 grid-cols-1">
      <div className="w-full relative hidden md:block overflow-hidden">
        <Image
          src={randomArt.src}
          alt={randomArt.alt}
          width={1845}
          height={1920}
          className="absolute inset-0 w-full h-full object-cover object-right"
          priority
        />
      </div>
      <div className="w-full flex flex-col lg:gap-6 md:gap-4 gap-2 items-center justify-center lg:px-6 md:px-4 py-2 px-2">
        {/* Headerssss */}
        <Link href="/" className="w-full flex justify-end">
          <Image
            src={logo}
            alt="Logo Masjid Istiqlal"
            width={373}
            height={258}
            className="z-0 object-contain w-2/5 sm:w-1/4 md:w-1/3 lg:w-1/4"
            priority
          />
        </Link>
        <div id="headers" className="w-full flex flex-col gap-2">
          <h1 className="flex text-left xl:text-4xl lg:text-3xl text-2xl font-normal text-hitam-judul-body tracking-tighter justify-start align-middle">
            Log in Sekarang & Raih Berkah Ramadhan!
          </h1>

          <h2 className="flex text-left xl:text-lg lg:text-base md:text-sm text-xs font-normal text-hitam-judul-body tracking-tighter justify-start align-middle">
            Sambut Ramadhan dengan kejutan spesial! Nikmati pengalaman seru,
            kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!
          </h2>
        </div>
        {children}
        <div className="w-full h-auto flex flex-col justify-start items-start">
          <h4 className="text-left text-xs font-normal text-icon-wording">
            Dengan melanjutkan, Anda setuju dengan Syarat & Ketentuan serta
            Kebijakan Privasi.
          </h4>
        </div>
        {/* Footerssss */}
        <div className="w-full flex flex-row">
          <Link
            href="https://igf.or.id/"
            target="_blank"
            className="w-full flex">
            <Image
              src={supported}
              alt="Supported by Istiqlal Global Fund"
              width={899}
              height={288}
              className="z-0 object-contain lg:w-1/2 md:w-2/3 sm:w-1/2 w-3/4"
              priority
            />
          </Link>
          <Link
            href="https://voyage.co.id/"
            target="_blank"
            className="w-full flex justify-end">
            <Image
              src={powered}
              alt="Powered by VOYAGE"
              width={977}
              height={288}
              className="z-0 object-contain lg:w-1/2 md:w-2/3 sm:w-1/2 w-3/4"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
