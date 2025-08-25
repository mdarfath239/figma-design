// app/components/Footer.tsx
"use client";

import { FC } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-4 sm:pb-6 mb-6 sm:mb-8">
        <h2 className="text-[#D6D6D6] font-[400] text-2xl sm:text-[35.5px] leading-[100%] font-['Inria Sans'] mb-4 sm:mb-0">LOGO</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-10">
          <a href="mailto:info@brand.com" className="text-gray-300 font-['Satoshi'] hover:text-white text-base sm:text-lg transition-colors duration-200">
            info@brand.com
          </a>
          <a href="tel:+6588082159" className="text-gray-300 font-['Satoshi'] hover:text-white text-base sm:text-lg transition-colors duration-200">
            +65 8808 2159
          </a>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Left Column */}
        <div>
          <p className="text-gray-400 font-['Satoshi'] text-sm sm:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitchetur adipiscing elit.
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div className="mt-8 sm:mt-0">
          <h3 className="text-white font-['Satoshi'] font-semibold text-lg sm:text-xl mb-4">Solutions</h3>
          <ul className="space-y-2 sm:space-y-3 font-['Satoshi'] text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Royal</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">LuminCell</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-['Satoshi'] font-semibold text-lg sm:text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Get Started</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Technology</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Newsroom</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
          </ul>
        </div>

        {/* Who we are */}
        <div>
          <h3 className="text-white font-['Satoshi'] font-semibold text-lg sm:text-xl mb-4">Who we are</h3>
          <ul className="space-y-2 sm:space-y-3 font-['Satoshi'] text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Brand at a Glance</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Mission & Vision</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Our Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Partnerships</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Sustainability & Social Impact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 font-['Satoshi'] text-sm">
        <p>© 2025 Brand. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-['Satoshi'] mt-4 sm:mt-0 text-center sm:text-left">
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Designed and Powered by Quota.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
