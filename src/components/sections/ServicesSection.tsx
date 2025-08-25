// app/components/SectionTwo.tsx
"use client";

import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="relative bg-black text-white py-10 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28 overflow-hidden">
      {/* Gradient Border Path (SVG) */}
      <svg
        className="absolute top-0 left-4 md:left-16 w-full h-[120px] md:h-[350px] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        fill="none"
      >
        {/* Thick Outer Line */}
        <path
          d="M0 0 V120 Q0 180 60 180 H1200 Q1380 180 1380 360 V400"
          stroke="url(#grad)"
          strokeWidth="8"
          fill="none"
        />
        {/* Middle Line */}
        <path
          d="M0 0 V120 Q0 180 60 180 H1200 Q1380 180 1380 360 V400"
          stroke="url(#grad)"
          strokeWidth="8"
          fill="none"
        />
        {/* Inner Line */}
        <path
          d="M0 0 V120 Q0 180 60 180 H1200 Q1380 180 1380 360 V400"
          stroke="url(#grad)"
          strokeWidth="8"
          fill="none"
        />

        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="0.5" stopColor="#f97316" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="h-32 md:h-[640px] absolute top-[120px] md:top-[349px] right-4 md:right-[117px] w-[5px] bg-[#3B3B3B]"></div>

      <div className="relative mt-10 md:mt-[230px] max-w-xl md:max-w-6xl ml-2 md:ml-[10px]">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-8 md:mb-20 leading-snug">
          Advanced Materials and<br />Integrative Solutions
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-10 md:gap-20">
          {/* First Card */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            {/* Logo */}
            <Image
              src="/images/idylle.png"
              alt="Idylle Logo"
              width={60}
              height={60}
              className="object-contain invert brightness-0"
            />
            {/* Text */}
            <div className="mx-auto md:ml-10 lg:ml-[300px] w-full">
              <h3 className="text-base md:text-xl font-bold font-['Satoshi'] mb-2 md:mb-3 max-w-full md:max-w-1/2">
                Securing every physical product for counterfeit protection
              </h3>
              <p className="text-gray-400 font-['Satoshi'] text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-full md:max-w-1/2">
                Raysol® makes it easy for brand owners and governments to effectively identify counterfeits, secure revenues and preserve brand integrity.
              </p>
              <button className="px-4 md:px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xs md:text-sm font-medium transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            {/* Logo */}
            <Image
              src="/images/labscoop.png"
              alt="Labscoop Logo"
              width={60}
              height={60}
              className="object-contain invert brightness-0"
            />
            {/* Text */}
            <div className="mx-auto md:ml-10 lg:ml-[300px] w-full">
              <h3 className="text-base md:text-xl font-bold font-['Satoshi'] mb-2 md:mb-3 max-w-full md:max-w-1/2">
                Accelerating biomedical research with next-generation bio-probes
              </h3>
              <p className="text-gray-400 font-['Satoshi'] text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-full md:max-w-1/2">
                Luminicell empowers researchers to achieve breakthroughs at a faster pace by powering long live-cell tracking and deep tissue bio-imaging.
              </p>
              <button className="px-4 md:px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xs md:text-sm font-medium transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
