"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Brain,
  Building,
  Eye,
  Lightbulb,
  Users,
} from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import neovImage from "@/app/assets/neo-image-1.png";
import saudiMapImage from "@/app/assets/saudi-arabia-map.png";
import worldImage from "@/app/assets/world.png";
import saudiEventImage from "@/app/assets/saudi-event-img.png";
import useEmblaCarousel from "embla-carousel-react";
import "@/app/components/About/index.scss";

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay function
  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;
    stopAutoplay(); // Clear any existing interval
    autoplayRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext(); // Move to the next slide
      }
    }, 2500); // Change slides every 2.5 seconds
  }, [emblaApi]);

  // Stop autoplay
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (emblaApi) {
      startAutoplay(); // Start autoplay when emblaApi is ready
      emblaApi.on("pointerDown", stopAutoplay); // Pause autoplay on user interaction
      emblaApi.on("pointerUp", startAutoplay); // Resume autoplay after interaction
    }

    return () => stopAutoplay(); // Cleanup interval on unmount
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <section id="about" className="relative py-32 z-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-6 py-2">
              <Eye className="mr-2 h-4 w-4" />
              Our Vision
            </Badge>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Pioneering
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>

            <p className="text-xl text-white/70 leading-relaxed">
              {
                "Since 2015, we've been at the forefront of digital transformation, helping businesses reimagine their digital presence and achieve unprecedented growth through innovative technology solutions."
              }
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  icon: Building,
                  title: "Global Impact",
                  desc: "25+ Countries Served",
                },
                {
                  icon: Award,
                  title: "Industry Recognition",
                  desc: "50+ Awards Won",
                },
                { icon: Users, title: "Expert Team", desc: "100+ Specialists" },
                {
                  icon: Lightbulb,
                  title: "Innovation Labs",
                  desc: "R&D Centers",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-xl shadow-cyan-500/25"
            >
              <Brain className="mr-2 h-5 w-5" />
              Discover Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {[neovImage, saudiMapImage, worldImage, saudiEventImage].map(
                    (image, index) => (
                      <div key={index} className="embla__slide">
                        <Image
                          src={image}
                          alt={`neov-Slide ${index + 1}`}
                          width={600}
                          height={500}
                          className="rounded-2xl shadow-2xl"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
