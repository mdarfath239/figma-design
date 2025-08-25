// app/components/Section.tsx
"use client";

import React from "react";

const BannerSection = () => {
  return (
    <section className="relative mt-[-10px] flex items-center justify-center min-h-[70vh] md:min-h-[90vh] bg-gradient-to-br from-[#0f0f3d] via-[#1b1b6d] to-[#0f0f3d] overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0">
       <img src="/images/shape.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-8xl px-4 md:px-8 py-8 md:py-12 text-center rounded-3xl bg-white/10 backdrop-blur-md shadow-lg mx-2">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-['Satoshi'] text-white">
          Our Journey Towards
          <br /> Innovation and Excellence
        </h2>
        <p className="mt-6 md:mt-10 mb-6 md:mb-10 text-xs sm:text-sm md:text-lg max-w-full md:max-w-2xl mx-auto font-['Satoshi'] text-gray-400 leading-relaxed">
          Brand is an advanced luminescent materials company, leveraging synergies of cutting-edge chemistries to deliver solutions, not just products.
        </p>
        <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 rounded-md bg-white text-gray-900 font-bold font-['Satoshi'] hover:bg-gray-200 transition text-xs md:text-base">
          About Brand
        </button>
      </div>
      
    </section>
  );
};

export default BannerSection;
