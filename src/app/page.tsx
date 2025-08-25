


import BannerSection from "@/components/sections/BannerSection";
import ContentSection from "@/components/sections/ContentSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FreqSection from "@/components/sections/FreqSection";

import HeroSection from "@/components/sections/HeroSection";
import Innvotation from "@/components/sections/Innvotation";
import NewsSection from "@/components/sections/NewsSection";


import ServicesSection from "@/components/sections/ServicesSection";


import SustainabilitySection from "@/components/sections/SustainabilitySection";
import { Content } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
   <>
<HeroSection/>
  <ContentSection/>
<BannerSection/>
<ServicesSection/>
<Innvotation/>
<FeatureSection/>
<SustainabilitySection/>
<NewsSection/>
<FreqSection/>
   </>
  );
}
