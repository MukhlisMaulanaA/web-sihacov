import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import Team from "@/components/Team";
import Video from "@/components/Video";

// import Contact from "@/components/Contact";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      <ScrollToTop/>
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      {/* <Testimonials /> */}
      <Team />
      <Gallery />
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
