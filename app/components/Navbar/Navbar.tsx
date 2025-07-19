import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import neovLogo from "@/app/assets/neov logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <Image src={neovLogo} alt="neov-logo" width={100} height={100} />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {["Services", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-white hover:bg-white/10 hover:text-white cursor-pointer"
            >
              Login
            </Button>
            <Button className="cursor-pointer bg-gradient-to-r from-purple-500 to-[#0FA2B4] hover:from-purple-600 hover:to-[#0FA2B4] text-white border-0 shadow-lg shadow-purple-500/25">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
