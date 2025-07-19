"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  CheckCircle,
  Cloud,
  Code,
  Database,
  Heart,
  Lock,
  Palette,
  Play,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-bounce"></div>
      </div>
      <Navbar />
      {/* Hero Section */}
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
                We craft extraordinary digital experiences that captivate
                audiences, drive growth, and redefine what's possible in the
                digital realm.
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
                  // style={{
                  //   transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`,
                  // }}
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

      {/* Services Section - Bento Grid */}
      <section id="services" className="relative py-32 z-10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-6 py-2">
              <Brain className="mr-2 h-4 w-4" />
              Our Expertise
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                That Inspire
              </span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large Card - Web Development */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                  <p className="text-white/70 text-lg mb-6">
                    Cutting-edge web applications built with the latest
                    technologies. From concept to deployment, we create digital
                    experiences that perform.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      "React/Next.js",
                      "TypeScript",
                      "Node.js",
                      "Cloud Deploy",
                    ].map((tech) => (
                      <div key={tech} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-white/80">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=400"
                    alt="Web Development"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Medium Cards */}
            {[
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Beautiful, intuitive designs that users love",
                gradient: "from-pink-500 to-rose-500",
                bgGradient: "from-pink-900/20 to-rose-900/20",
              },
              {
                icon: BarChart3,
                title: "Digital Marketing",
                description: "Data-driven strategies that deliver results",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-900/20 to-emerald-900/20",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile solutions",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-900/20 to-cyan-900/20",
              },
              {
                icon: Database,
                title: "Backend Systems",
                description: "Scalable, secure server architectures",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-900/20 to-red-900/20",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Modern cloud infrastructure and deployment",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-900/20 to-purple-900/20",
              },
              {
                icon: Lock,
                title: "Security",
                description: "Enterprise-grade security implementations",
                gradient: "from-gray-500 to-slate-500",
                bgGradient: "from-gray-900/20 to-slate-900/20",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/30 transition-all duration-500 group cursor-pointer`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
                <div className="mt-4 flex items-center text-white/50 group-hover:text-white/80 transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
