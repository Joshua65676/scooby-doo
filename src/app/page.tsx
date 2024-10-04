'use client'

import Hero from "@/components/Hero";
import About from "@/components/About";
import RoadMap from "@/components/RoadMap";
import Tokenomics from "@/components/Tokenomics";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <main className="">
      <Hero />
      <About />
      <RoadMap />
      <Tokenomics />
    </main>
  );
}
