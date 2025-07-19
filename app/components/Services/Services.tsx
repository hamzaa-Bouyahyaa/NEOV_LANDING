import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  CheckCircle,
  Cloud,
  Code,
  Database,
  Lock,
  Palette,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
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
  );
};

export default Services;
