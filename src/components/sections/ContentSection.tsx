// content-section.tsx
import React from "react";

const ContentSection = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-32 py-6 md:py-10 flex flex-col md:flex-row gap-8 md:gap-12">
      {/* Left Gradient Line */}
      <div className="hidden md:flex flex-col items-center">
        <div className="flex bg-gray-800">
          {/* Gradient Lines */}
          <div className="flex bg-black">
            <div className="h-40 md:h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
            <div className="h-40 md:h-[364px] w-[6px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 mx-[1px]"></div>
            <div className="h-40 md:h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
          </div>
        </div>
        <div className="h-48 md:h-[440px] w-[5px] bg-[#3B3B3B]"></div>
      </div>

      {/* Right Content */}
      <div className="flex-1">
        {/* Text Section */}
        <div className="space-y-2 mt-8 md:mt-20 mx-auto max-w-full md:max-w-2xl lg:max-w-3xl">
          <p className="font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-200 font-['Satoshi']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className="font-medium text-white">Sed do eiusmod</span> sectetur adipiscing elit.
          </p>
          <p className="font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-400 font-['Satoshi']">
            Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Logos Section */}
        <div className="my-8 md:mb-20 mx-auto flex flex-wrap gap-4 md:gap-6 justify-center">
          <div className="w-24 h-24 md:w-40 md:h-40 bg-white/5 rounded-2xl md:rounded-[40px] flex items-center justify-center">
            <img src="/images/labscoop.png" alt="labscoop" className="w-16 h-16 md:w-[143px] md:h-[142px] invert brightness-0 opacity-80 object-contain" />
          </div>
          <div className="w-24 h-24 md:w-40 md:h-40 bg-white/5 rounded-2xl md:rounded-[40px] flex items-center justify-center">
            <img src="/images/idylle.png" alt="idylle" className="w-16 h-16 md:w-[143px] md:h-[142px] invert brightness-0 opacity-80 object-contain" />
          </div>
          <div className="w-24 h-24 md:w-40 md:h-40 bg-white/5 rounded-2xl md:rounded-[40px] flex items-center justify-center">
            <img src="/images/merck.png" alt="merck" className="w-16 h-16 md:w-[143px] md:h-[142px] invert brightness-0 opacity-80 object-contain" />
          </div>
          <div className="w-24 h-24 md:w-40 md:h-40 bg-white/5 rounded-2xl md:rounded-[40px] flex items-center justify-center">
            <img src="/images/idylle.png" alt="idylle" className="w-16 h-16 md:w-[143px] md:h-[142px] invert brightness-0 opacity-80 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
