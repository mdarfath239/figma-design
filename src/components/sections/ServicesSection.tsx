// app/components/SectionTwo.tsx
"use client";

import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 lg:px-28 overflow-hidden">
      {/* Gradient Border Path (SVG) */}
      <svg
        className="absolute top-0 left-16 w-full h-[350px] pointer-events-none"
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
            <stop stopColor="#f97316" /> {/* Purple */}
            <stop offset="0.5" stopColor="#f97316" /> {/* Pink */}
            <stop offset="1" stopColor="#f97316" /> {/* Orange */}
          </linearGradient>
        </defs>
      </svg>
      <div className="h-[640px] absolute top-[349px] right-[117px] w-[5px] bg-[#3B3B3B]"></div>

      <div className="relative mt-[230px] max-w-6xl ml-[10px]">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-20 leading-snug">
          Advanced Materials and
          <br /> Integrative Solutions
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-20">
          {/* First Card */}
          <div className="flex items-start gap-8">
            {/* Logo */}
            <Image
              src="/images/idylle.png"
              alt="Idylle Logo"
              width={90}
              height={90}
              className="object-contain  invert brightness-0"
            />
            {/* Text */}
            <div className=" mx-auto ml-[300px] ">
              <h3 className=" max-w-1/2 text-xl font-bold font-['Satoshi'] mb-3">
                Securing every physical product for counterfeit protection
              </h3>
              <p className="text-gray-400 max-w-1/2 font-['Satoshi'] text-base leading-relaxed mb-6 ">
                Raysol® makes it easy for brand owners and governments to effectively identify
                counterfeits, secure revenues and preserve brand integrity.
              </p>
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex items-start gap-8">
            {/* Logo */}
            <Image
              src="/images/labscoop.png"
              alt="Labscoop Logo"
              width={90}
              height={90}
              className="object-contain invert brightness-0"
            />
            {/* Text */}
            <div className=" ml-[300px] mx-auto">
              <h3 className=" max-w-1/2 text-xl font-bold font-['Satoshi'] mb-3">
                Accelerating biomedical research with next-generation bio-probes
              </h3>
              <p className="text-gray-400 max-w-1/2 font-['Satoshi'] text-base leading-relaxed mb-6">
                Luminicell empowers researchers to achieve breakthroughs at a faster pace by
                powering long live-cell tracking and deep tissue bio-imaging.
              </p>
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition">
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
