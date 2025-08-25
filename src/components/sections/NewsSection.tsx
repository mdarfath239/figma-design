// app/components/News.tsx
"use client";

import { FC } from "react";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
}

const NewsCard: FC<NewsCardProps> = ({ title, date, description, image }) => {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col justify-between shadow-lg ${
        image ? "bg-cover bg-center text-white" : "bg-neutral-900 text-white"
      }`}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div>
        <h3 className="font-semibold text-base md:text-lg mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{date}</p>
        <p className="text-sm md:text-base font-['Satoshi'] leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
      <button className="mt-6 w-fit bg-white text-black font-['Satoshi'] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">
        Read More
      </button>
    </div>
  );
};

const NewsSection: FC = () => {
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 overflow-hidden">
      <div className="absolute top-[610px] left-[74px] w-full h-[300px] md:h-[600px] hidden md:block">
        {/* Gradient Lines */}
        <div className="flex bg-black">
          <div className="h-40 md:h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
          <div className="h-40 md:h-[364px] w-[6px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 mx-[1px]"></div>
          <div className="h-40 md:h-[364px] w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>
        </div>
      </div>

      {/* Gradient Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[200px] md:h-[400px] overflow-hidden flex justify-center">
        <svg
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full md:w-[90%] h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <path d="M0,150 C0,100 50,100 100,100 H700 C750,100 800,50 800,0" stroke="url(#glow)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M0,150 C0,100 50,100 100,100 H700 C750,100 800,50 800,0" stroke="url(#glow)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M0,150 C0,100 50,100 100,100 H700 C750,100 800,50 800,0" stroke="url(#glow)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute top-28 right-[680px] w-full h-[200px] md:h-[500px] overflow-hidden flex justify-center hidden md:flex">
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full md:w-[90%] h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
          {[8, 4, 2].map((w, i) => (
            <path
              key={i}
              d="M400,600 V200 C400,150 450,100 500,100 H750"
              stroke="url(#glow)"
              strokeWidth={w}
              fill="none"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mt-20 md:mt-[300px] mb-8 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Satoshi'] font-bold">
          What’s New at Brand
        </h2>
      </div>

      {/* News Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl md:max-w-5xl mx-auto">
        <NewsCard
          title="Brand Unveils Breakthrough in Product Authentication Technology"
          date="March 08, 2025"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur."
          image="/images/design2.jpg"
        />
        <NewsCard
          title="LumiLab — Exploring the science and innovation behind luminescent materials."
          date="March 08, 2025"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur."
        />
        <NewsCard
          title="The Glow Factor — Trends, discoveries, and applications in photonic materials."
          date="March 08, 2025"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur."
        />
        <NewsCard
          title="Brand Unveils Breakthrough in Product Authentication Technology"
          date="March 08, 2025"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur."
        />
      </div>
    </section>
  );
};

export default NewsSection;
