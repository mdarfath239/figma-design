"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-black">
      {/* Logo */}
      <div className="text-[#D6D6D6] font-[400] text-2xl sm:text-[35.5px] leading-[100%] font-['Inria Sans'] mb-2 sm:mb-0">
        LOGO
      </div>
      {/* Navigation Links */}
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 font-[400] font-['Satoshi'] text-base sm:text-[16px] mb-2 sm:mb-0">
        <li>
          <Link href="#">Who We Are</Link>
        </li>
        <li>
          <Link href="#">Technnology</Link>
        </li>
        <li>
          <Link href="#">Solutions</Link>
        </li>
        <li>
          <Link href="#">Newsroom</Link>
        </li>
        <li>
          <Link href="#">Careers</Link>
        </li>
      </ul>
      {/* Button */}
      <button className="flex items-center gap-2 sm:gap-[10px] px-5 sm:px-[24px] py-2 sm:py-[12px] border border-[#F8F9FA] rounded-lg sm:rounded-[12px] text-[#F8F9FA] text-base sm:text-[16px] font-medium">
        Get Started
      </button>
    </nav>
  );
}
