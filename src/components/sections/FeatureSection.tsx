// app/components/FeatureSection.tsx
"use client";

import React from "react";

const features = [
  {
    title: "Synthesis",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Lorem ipsum dolor sit amet. 

           consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    gradient: "from-purple-500/40 via-blue-500/20 to-transparent",
    border: true,
  },
  {
    title: "Formulations",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

           consectetur adipiscing elit. Sed do eiusmod tempor incididunt.`,
    gradient: "from-orange-500/40 via-pink-500/20 to-transparent",
  },
  {
    title: "Diverse Materials",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Lorem ipsum dolor sit amet. 

           consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    gradient: "from-green-500/40 via-yellow-500/20 to-transparent",
  },
  {
    title: "Manipulation of Light",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Lorem ipsum dolor sit amet. 

           consectetur adipiscing elit. Sed do eiusmod tempor incididunt.`,
    gradient: "from-pink-500/40 via-purple-500/20 to-transparent",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative bg-black text-white py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-28">
      {/* Heading + Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4 md:gap-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Satoshi'] font-semibold max-w-xl text-center md:text-left">
          The Science Behind Our <br /> Innovative Solutions
        </h2>
        <button className="px-4 md:px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xs md:text-sm font-medium transition">
          Learn More
        </button>
      </div>

      {/* Features Grid (responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl md:rounded-[40px] w-full h-auto min-h-[260px] md:min-h-[340px] lg:min-h-[400px] p-6 md:p-10 lg:p-20 bg-gradient-to-br ${feature.gradient} bg-black/60 border`}
            style={{
              borderColor: "rgba(248,249,250,0.2)",
              borderWidth: "0.5px",
            }}
          >
            <h3 className="text-lg md:text-xl font-['Satoshi'] font-semibold mb-2 md:mb-4">{feature.title}</h3>
            <p className="text-[#F8F9FACC] font-['Satoshi'] text-sm md:text-base leading-relaxed whitespace-pre-line">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex flex-col items-center absolute top-0 right-8 xl:right-16">
        <div className="flex bg-gray-800">
          {/* Gradient Lines */}
          <div className="flex bg-black">
            <div className="h-40 md:h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
            <div className="h-40 md:h-[364px] w-[6px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 mx-[1px]"></div>
            <div className="h-40 md:h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
          </div>
        </div>
        <div className="h-48 md:h-[740px] w-[5px] bg-[#3B3B3B]"></div>
      </div>
    </section>
  );
};

export default FeatureSection;
