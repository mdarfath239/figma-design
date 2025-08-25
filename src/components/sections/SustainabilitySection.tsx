"use client";

import React from "react";
import Image from "next/image";

const SustainabilitySection = () => {
  return (
    <section className="relative mt-[-10px] bg-black text-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text */}
        <div>
          <h2 className="text-2xl font-['Satoshi'] md:text-3xl font-semibold mb-6">
            Sustainability at the heart <br /> of Innovation
          </h2>
          <p className="max-w-[515px] font-['Satoshi'] text-base text-[#F8F9FA99] leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-5 py-2 bg-white text-black rounded-md font-['Satoshi'] text-sm font-medium hover:bg-gray-200 transition">
            Get into Details
          </button>
        </div>

        {/* Right Column - Image with Glass Panel Effects */}
        <div className="relative  h-[300px] mr-[180px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl">
          
          {/* --- Background Image with Gradient Mask --- */}
          <Image
            src="/images/visual.png"
            alt="Sustainability Visual"
            fill
            className="object-cover w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, white 25%, white 85%, transparent 100%,to left ,transparent 0%, white 25%, white 85%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage:
                "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 50%)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
              
            }}
            priority
          />

          {/* --- Glass Panels Overlay --- */}
          <div className="absolute inset-y-0 left-0 flex  px-2">
          <div className="w-8 md:w-10 lg:w-12 bg-white/10 backdrop-blur-[30px]   rounded-md"></div>
            <div className="w-8 md:w-10 lg:w-12 bg-white/10 backdrop-blur-[30px]   rounded-md"></div>
            <div className="w-8 md:w-10 lg:w-12 bg-white/10 backdrop-blur-[30px]   rounded-md"></div>
            <div className="w-8 md:w-10 lg:w-12 bg-white/10 backdrop-blur-[25px]   rounded-md"></div>
            <div className="w-8 md:w-10 lg:w-12 bg-white/10 backdrop-blur-[35px]   rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
