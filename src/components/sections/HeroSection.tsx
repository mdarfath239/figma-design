"use client"

import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen w-full bg-black overflow-hidden font-[Satoshi]">
      {/* Masked Background Image */}
      <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 opacity-100 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl h-[180px] sm:h-[220px] md:h-[280px] rounded-xl overflow-hidden">
        <Image
          src="/images/hero-background-image.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,white_50%,white_80%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          priority
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 sm:mb-6">
          Future of Advanced
          <br />
          Materials
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#F8F9FACC] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          <br />
          do eiusmod tempor incididunt ut labore et.
        </p>
        <div className="mt-8 sm:mt-10">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-base sm:text-lg">
            Get Started
          </button>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection
