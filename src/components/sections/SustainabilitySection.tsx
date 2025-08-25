"use client";

import React from "react";
import Image from "next/image";

const SustainabilitySection = () => {
  return (
    <section className="relative bg-black text-white py-10 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28 overflow-hidden">
      <div className="relative max-w-xl md:max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-8 md:mb-20 leading-snug">
          Sustainability & Social Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col gap-4 md:gap-8">
            <h3 className="text-base md:text-xl font-bold font-['Satoshi'] mb-2 md:mb-3">
              Eco-friendly Materials
            </h3>
            <p className="text-gray-400 font-['Satoshi'] text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              We prioritize sustainable sourcing and production methods to minimize environmental impact and promote long-term ecological balance.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h3 className="text-base md:text-xl font-bold font-['Satoshi'] mb-2 md:mb-3">
              Community Engagement
            </h3>
            <p className="text-gray-400 font-['Satoshi'] text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              Our initiatives support local communities through education, employment, and outreach programs, fostering positive social change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
