// content-section.tsx
import React from "react";

const ContentSection = () => {
  return (
    <section className="bg-black  text-white px-[200px] py-[10px] flex flex-col md:flex-row gap-12">
      {/* Left Gradient Line */}
      <div className="flex flex-col items-center">
  <div className="flex  bg-gray-800">
    {/* Gradient Lines */}
    <div className="flex bg-black">
      <div className="h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
      <div className="h-[364px] w-[6px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 mx-[1px]"></div>
      <div className="h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
    </div>
  </div>
    <div className="h-[440px] w-[5px] bg-[#3B3B3B]"></div>
</div>


      {/* Right Content */}
      <div className="flex-1">
        {/* Text Section */}
        <div className="space-y-2 mt-20 mx-auto max-w-[928px] h-[396px]">
          <p
            className="font-medium"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "60px",
              lineHeight: "100%",
              color: "#E5E7EB",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="font-medium" style={{ color: "#FFFFFF" }}>
              Sed do eiusmod
            </span>{" "}
            sectetur adipiscing elit.
          </p>
          <p
            className="font-medium"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "55px",
              lineHeight: "100%",
              color: "#9CA3AF",
            }}
          >
            Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
            amet.
          </p>
        </div>

        {/* Logos Section */}
        <div className="mb-[100px] mx-auto flex gap-6 justify-center">
          <div className="w-[200px] h-[200px] bg-white/5 rounded-[40px] flex items-center justify-center">
            <img
              src="/images/labscoop.png"
              alt="labscoop"
              className="w-[143px] invert brightness-0  h-[142px] opacity-80 object-contain"
            />
          </div>
          <div className="w-[200px] h-[200px] bg-white/5 rounded-[40px] flex items-center justify-center">
            <img
              src="/images/idylle.png"
              alt="idylle"
              className="w-[143px] h-[142px] opacity-80 invert brightness-0 object-contain"
            />
          </div>
          <div className="w-[200px] h-[200px] bg-white/5 rounded-[40px] flex items-center justify-center">
            <img
              src="/images/merck.png"
              alt="merck"
              className="w-[143px] h-[142px] invert brightness-0 opacity-80 object-contain"
            />
          </div>
          <div className="w-[200px] h-[200px] bg-white/5 rounded-[40px] flex items-center justify-center">
            <img
              src="/images/idylle.png"
              alt="idylle"
              className="w-[143px] h-[142px] invert brightness-0 opacity-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
