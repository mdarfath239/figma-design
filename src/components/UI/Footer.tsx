// app/components/Footer.tsx
"use client";

import { FC } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-800 pb-6 mb-8">
        <h2 className="text-[#D6D6D6] font-[400] text-[35.5px] leading-[100%] font-['Inria Sans']">LOGO</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10 mt-4 md:mt-0">
          <a href="mailto:info@brand.com" className="text-gray-300 font-['Satoshi'] hover:text-white">
            info@brand.com
          </a>
          <a href="tel:+6588082159" className="text-gray-300 font-['Satoshi'] hover:text-white">
            +65 8808 2159
          </a>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Column */}
        <div>
          <p className="text-gray-400 font-['Satoshi'] text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitchetur adipiscing elit.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-['Satoshi'] font-semibold mb-4">Solutions</h3>
          <ul className="space-y-3 font-['Satoshi'] text-gray-400">
            <li><a href="#" className="hover:text-white">Royal</a></li>
            <li><a href="#" className="hover:text-white">LuminCell</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-['Satoshi'] font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">Get Started</a></li>
            <li><a href="#" className="hover:text-white">Technology</a></li>
            <li><a href="#" className="hover:text-white">Newsroom</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Who we are */}
        <div>
          <h3 className="text-white font-['Satoshi'] font-semibold mb-4">Who we are</h3>
          <ul className="space-y-3 font-['Satoshi'] text-gray-400">
            <li><a href="#" className="hover:text-white">Brand at a Glance</a></li>
            <li><a href="#" className="hover:text-white">Mission & Vision</a></li>
            <li><a href="#" className="hover:text-white">Our Team</a></li>
            <li><a href="#" className="hover:text-white">Partnerships</a></li>
            <li><a href="#" className="hover:text-white">Sustainability & Social Impact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 font-['Satoshi'] text-sm">
        <p>© 2025 Brand. All rights reserved.</p>
        <div className="flex gap-6 font-['Satoshi'] mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">Designed and Powered by Quota.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
