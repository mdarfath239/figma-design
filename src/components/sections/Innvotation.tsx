// app/components/SectionThree.tsx
"use client";

import React from "react";
import Image from "next/image";

const Innvotation = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-black text-center overflow-hidden">
      {/* Background bubbles */}
      <Image
        src="/images/bubble.png" // <-- put your bubble background image inside /public
        alt="Bubbles Background"
        fill
        className="object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <h2 className="relative z-10 text-2xl md:text-[80px] font-semibold font-['Satoshi'] text-white max-w-6xl px-4 leading-snug">
        Revolutionizing luminescence to power the next generation of technology
      </h2>
    </section>
  );
};

export default  Innvotation;
