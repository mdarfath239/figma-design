"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black">
      {/* Logo */}
      <div className="text-[#D6D6D6] font-[400] text-[35.5px] leading-[100%] font-['Inria Sans']">
        LOGO
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-10 font-[400] font-['satoshi-'] text-[16px]">
        <li>
          <Link  href="#">Who We Are</Link>
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
      <button className="flex items-center gap-[10px] px-[24px] py-[12px] border border-[#F8F9FA] rounded-[12px] text-[#F8F9FA] text-[16px] font-medium">
        Get Started
      </button>
    </nav>
  );
}
