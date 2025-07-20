import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Play,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import React from "react";

const HeroSection = ({ scrollY }: { scrollY: number }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              🚀 Crafting Digital Excellence
            </span>
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black leading-tight">
              <span className="block">Transform</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Dreams
              </span>
              <span className="block">Into Reality</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {
                "We craft extraordinary digital experiences that captivate audiences, drive growth, and redefine what's possible in the digital realm."
              }
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r  from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-2xl shadow-purple-500/25 px-8 py-4 text-lg group cursor-pointer"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Launch Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white cursor-pointer px-8 py-4 text-lg group bg-transparent backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {[
              { number: "500+", label: "Projects Delivered", icon: Target },
              { number: "98%", label: "Client Satisfaction", icon: Heart },
              { number: "50+", label: "Team Members", icon: Users },
              { number: "24/7", label: "Support Available", icon: Shield },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                style={{
                  transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`,
                }}
              >
                <stat.icon className="h-8 w-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl backdrop-blur-sm animate-float z-[-1]"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full backdrop-blur-sm animate-float-delayed z-[-1]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl backdrop-blur-sm animate-float z-[-1]"></div>
    </section>
  );
};

export default HeroSection;
