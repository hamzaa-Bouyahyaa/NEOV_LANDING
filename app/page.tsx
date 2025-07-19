import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
