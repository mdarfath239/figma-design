"use client"

import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-black overflow-hidden font-[Satoshi]">
      {/* Masked Background Image */}
      <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 opacity-100 w-[970px] h-[280px] rounded-xl overflow-hidden">
      <Image
  src="/images/hero-background-image.jpg"
  alt="Hero Background"
  fill
  className="object-cover object-center 
    [mask-image:linear-gradient(to_right,transparent_0%,white_50%,white_80%,transparent_100%)] 
    [mask-repeat:no-repeat] 
    [mask-size:100%_100%]"
  priority
/>

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Future of Advanced
          <br />
          Materials
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#F8F9FACC] max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          <br />
          do eiusmod tempor incididunt ut labore et.
        </p>
        <div className="mt-10">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      
    </section>
  )
}

export default HeroSection
