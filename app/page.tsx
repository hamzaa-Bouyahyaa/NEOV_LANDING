"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import About from "./components/About/About";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <Services />
      <About />
    </div>
  );
}
