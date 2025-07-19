import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Rocket,
} from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 z-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-6 py-2">
              <MessageSquare className="mr-2 h-4 w-4" />
              {"Let's Connect"}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Ready to Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  {"Let's Start a Conversation"}
                </h3>
                <p className="text-xl text-white/70">
                  {
                    "Ready to transform your digital presence? We're here to turn your vision into reality."
                  }
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: "hello@neov.sa",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: "+966 11 234 5678",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    value: "Riyadh, Saudi Arabia",
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white/80">
                        {contact.title}
                      </div>
                      <div className="text-lg font-bold">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold mb-4">Why Choose NEOV?</h4>
                <div className="space-y-3">
                  {[
                    "⚡ Lightning-fast delivery",
                    "🎯 Results-driven approach",
                    "🔒 Enterprise-grade security",
                    "🚀 Cutting-edge technology",
                  ].map((benefit, index) => (
                    <div key={index} className="text-white/70">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    Project Type
                  </label>
                  <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option className="bg-black">Web Development</option>
                    <option className="bg-black">Mobile App</option>
                    <option className="bg-black">Digital Marketing</option>
                    <option className="bg-black">Brand Identity</option>
                    <option className="bg-black">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    Budget Range
                  </label>
                  <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option className="bg-black">$10K - $25K</option>
                    <option className="bg-black">$25K - $50K</option>
                    <option className="bg-black">$50K - $100K</option>
                    <option className="bg-black">$100K+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    Project Details
                  </label>
                  <textarea
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent h-24 resize-none"
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-xl shadow-purple-500/25 py-4 text-lg group">
                  <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Launch Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
