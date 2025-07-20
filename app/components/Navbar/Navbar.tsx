"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import neovLogo from "@/app/assets/neov logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Services", "About", "Portfolio", "Contact"];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <Image src={neovLogo} alt="neov-logo" width={100} height={100} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white cursor-pointer"
            >
              Login
            </Button>
            <Button className="cursor-pointer bg-gradient-to-r from-purple-500 to-[#0FA2B4] hover:from-purple-600 hover:to-[#0FA2B4] text-white border-0 shadow-lg shadow-purple-500/25">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90 backdrop-blur-3xl border border-white/20 text-white shadow-2xl"
              >
                <div className="flex flex-col space-y-8 mt-12 px-2">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={handleLinkClick}
                        className="text-white/80 hover:text-white transition-all duration-300 font-medium text-lg py-4 px-6 rounded-xl hover:bg-white/10 relative group border border-transparent hover:border-white/20 backdrop-blur-sm"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <span className="relative z-10">{item}</span>
                        <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-12 transition-all duration-500 ease-out"></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Buttons */}
                  <div className="flex flex-col space-y-4 pt-8 border-t border-white/20">
                    <Button
                      variant="ghost"
                      className="text-white/80 hover:text-white hover:bg-white/15 cursor-pointer justify-start py-6 px-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                      onClick={handleLinkClick}
                    >
                      <span className="text-lg font-medium">Login</span>
                    </Button>
                    <Button
                      className="cursor-pointer bg-gradient-to-r from-purple-500 to-[#0FA2B4] hover:from-purple-600 hover:to-[#0FA2B4] text-white border-0 shadow-lg shadow-purple-500/30 justify-start py-6 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02]"
                      onClick={handleLinkClick}
                    >
                      <span className="text-lg font-medium">Get Started</span>
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </div>

                  {/* Decorative gradient orb */}
                  <div className="absolute top-20 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div
                    className="absolute bottom-32 left-8 w-24 h-24 bg-gradient-to-br from-cyan-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
