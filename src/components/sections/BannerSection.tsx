// app/components/Section.tsx
"use client";

import React from "react";

const BannerSection = () => {
  return (
    <section className="relative mt-[-10px] flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-[#0f0f3d] via-[#1b1b6d] to-[#0f0f3d] overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0">
       <img src="/images/shape.png" alt="" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 max-w-8xl h-[400px] px-8 py-12 text-center  rounded-3xl bg-white/10 backdrop-blur-md shadow-lg">
        <h2 className="text-2xl md:text-5xl font-semibold font-['Satoshi'] text-white">
          Our Journey Towards
          <br /> Innovation and Excellence
        </h2>
        <p className="mt-10 mb-10 text-sm md:text-[18px] max-w-1/2 mx-auto font-['Satoshi']  text-gray-400 leading-relaxed">
          Brand is an advanced luminescent materials company, leveraging
          synergies of cutting-edge chemistries to deliver solutions, not just
          products.
        </p>
        <button className="mt-6 px-6 py-2 rounded-md bg-white text-gray-900 font-bold font-['Satoshi']   hover:bg-gray-200 transition">
          About Brand
        </button>
      </div>

      
    </section>
  );
};

export default BannerSection;
