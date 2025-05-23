// /src/components/logins/HeaderSection.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import { FaClockRotateLeft, FaUser, FaWallet } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-back-ground md:px-20 py-4 px-4">
      {/* Logo Section */}
      <div className="lg:w-1/6 md:w-1/5 sm:w-1/6 w-1/4 flex justify-start cursor-pointer">
        <Link href="/">
          <Image
            src="/images/ramadhan-login-06.png"
            alt="Sambut Ramadhan di Masjid Istiqlal"
            width={373}
            height={258}
          />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Icons Section */}
        <div className="flex space-x-4">
          <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <Link href="/user">
              <FaUser />
            </Link>
          </button>
          <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <Link href="/wallet">
              <FaWallet />
            </Link>
          </button>
          <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <Link href="/records">
              <FaClockRotateLeft />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
