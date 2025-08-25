// app/components/Freq.tsx
"use client";

import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center w-full h-[180px] md:h-[200px] rounded-2xl px-8 py-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-xl hover:scale-[1.02] transition-transform cursor-pointer">
      <h3 className="text-xl md:text-2xl font-['Satoshi'] font-semibold text-white">{title}</h3>
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/40">
        <ArrowRight className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

const FreqSection: FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10 py-10 md:py-20"
      style={{ backgroundImage: "url('/images/bg-freq.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Left box */}
        <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-xl p-6 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[420px]">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-8 leading-snug">
              Have Questions? <br /> Let’s Talk!
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-3 md:mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-white/70 text-base md:text-lg mb-6 md:mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-md font-medium shadow hover:bg-gray-100 transition w-fit text-sm md:text-base">
            Get Started
          </button>
        </div>

        {/* Right block (stacked cards) */}
        <div className="flex flex-col gap-6 md:gap-8 justify-between min-h-[320px] md:min-h-[420px]">
          <Card title="Partnerships" />
          <Card title="Careers" />
        </div>
      </div>
    </section>
  );
};

export default FreqSection;
