import Link from "next/link";
import React from "react";
import neovLogo from "@/app/assets/neov logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative py-20 z-10 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              href=""
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Image src={neovLogo} alt="neov-logo" width={100} height={100} />
            </Link>
            <p className="text-white/70">
              Transforming businesses through innovative digital solutions and
              exceptional design experiences.
            </p>
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "Instagram", "Behance"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {[
            {
              title: "Services",
              links: [
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
                "Cloud Solutions",
              ],
            },
            {
              title: "Company",
              links: ["About Us", "Our Team", "Careers", "News", "Contact"],
            },
            {
              title: "Resources",
              links: [
                "Blog",
                "Case Studies",
                "Documentation",
                "Support",
                "Privacy Policy",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} NEOV. Crafted with ❤️ in Saudi Arabia
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
