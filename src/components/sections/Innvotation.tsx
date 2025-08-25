// app/components/SectionThree.tsx
"use client";

import React from "react";
import Image from "next/image";

const Innvotation = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[50vh] md:min-h-[70vh] bg-black text-center overflow-hidden px-4 md:px-8">
      {/* Background bubbles */}
      <Image
        src="/images/bubble.png"
        alt="Bubbles Background"
        fill
        className="object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <h2 className="relative z-10 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold font-['Satoshi'] text-white max-w-4xl md:max-w-6xl px-2 md:px-4 leading-snug mx-auto">
        Revolutionizing luminescence to power the next generation of technology
      </h2>
    </section>
  );
};

export default  Innvotation;
