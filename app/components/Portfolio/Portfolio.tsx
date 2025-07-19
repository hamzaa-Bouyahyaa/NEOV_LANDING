import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Layers } from "lucide-react";
import Image from "next/image";
import React from "react";
import eCommerceImage from "@/app/assets/e-commerce.jpeg";
import fintechInnovationImage from "@/app/assets/fintech innovation.webp";
import healthCareImage from "@/app/assets/healthcare.jpg";
import edTechImage from "@/app/assets/edtech.avif";
import smartCityImage from "@/app/assets/smartCity.jpg";
import aiContentImage from "@/app/assets/ai-content.webp";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-32 z-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-6 py-2">
            <Layers className="mr-2 h-4 w-4" />
            Our Portfolio
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Success Stories
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              That Inspire
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce Revolution",
              category: "Retail Technology",
              img: eCommerceImage,
              description:
                "AI-powered shopping experience with 300% conversion boost",
              image: "futuristic ecommerce platform with AI recommendations",
              metrics: "+300% Sales",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "FinTech Innovation",
              category: "Financial Services",
              img: fintechInnovationImage,
              description:
                "Blockchain-based trading platform with real-time analytics",
              image: "modern financial trading dashboard with charts",
              metrics: "$50M+ Volume",
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "HealthTech Platform",
              category: "Healthcare",
              img: healthCareImage,
              description:
                "Telemedicine platform serving 100K+ patients globally",
              image: "healthcare telemedicine app interface",
              metrics: "100K+ Users",
              color: "from-green-500 to-emerald-500",
            },
            {
              title: "EdTech Revolution",
              category: "Education",
              img: edTechImage,
              description:
                "VR-powered learning platform with immersive experiences",
              image: "virtual reality education platform interface",
              metrics: "1M+ Students",
              color: "from-orange-500 to-red-500",
            },
            {
              title: "Smart City IoT",
              category: "Urban Technology",
              img: smartCityImage,
              description:
                "IoT infrastructure managing city-wide smart systems",
              image: "smart city IoT dashboard with real-time data",
              metrics: "50+ Cities",
              color: "from-indigo-500 to-purple-500",
            },
            {
              title: "AI Content Studio",
              category: "Creative Technology",
              img: aiContentImage,
              description:
                "AI-powered content creation platform for enterprises",
              image: "AI content creation studio interface",
              metrics: "10M+ Assets",
              color: "from-pink-500 to-rose-500",
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={
                    project.img ||
                    `/placeholder.svg?height=250&width=400&query=${project.image}`
                  }
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`bg-gradient-to-r ${project.color} text-white border-0`}
                  >
                    {project.metrics}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl text-white font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-white/70">{project.description}</p>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-white/10 text-white/80 "
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
