// /src/components/logins/FooterSection.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa6";

// Components libraries
import Subscribe from "./SubscribeForm";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-footer-coklat py-4 px-4 md:px-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-full flex flex-col">
          {/* Newsletter Signup */}
          <Subscribe />
        </div>
        <div className="w-full flex flex-col">
          {/* Social Media Links */}
          <h3 className="sm:text-end text-center text-sm md:text-base font-semibold text-back-ground">
            Join the Community
          </h3>
          <div className="flex gap-2 mt-2 sm:justify-end justify-center">
            <Link
              href="https://www.linkedin.com/company/voyage-web3/about/"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-footer-kotak-icon m-1 rounded-lg">
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/voyage.web3/"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-footer-kotak-icon m-1 rounded-lg">
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com/@voyageweb3"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-footer-kotak-icon m-1 rounded-lg">
              <FaYoutube />
            </Link>
            <Link
              href="mailto:hello@voyage.co.id"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-footer-kotak-icon m-1 rounded-lg">
              <FaEnvelope />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=6281808038000&text=Hello%2C%20Voyagers!%20Help%20us%20integrate%20decentralized%20technologies%20into%20our%20operations%20and%20business%20models%2C%20please!"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-footer-kotak-icon m-1 rounded-lg">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-border-tombol mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        {/* Copyrights (Left on lg, Center on md) */}
        <div className="w-full text-xs text-center sm:text-left text-footer-copyright">
          <p>© 2025 Voyage. All rights reserved.</p>
          <p>Officially licensed product of Masjid Istiqlal.</p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-center sm:text-left text-footer-copyright">
              Terms of Service
            </Link>
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-center sm:text-left text-footer-copyright">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Logo & Powered By (Right on lg, Center on md) */}
        <div className="w-full flex justify-center sm:justify-end">
          <Image
            src="/images/ramadhan-login-16.png"
            alt="Harmoni Istiqlal X Bukhari Creative Group"
            width={477}
            height={143}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
