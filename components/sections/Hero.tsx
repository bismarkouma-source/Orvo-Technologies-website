"use client";
import { ArrowRight, Zap, Server, MessageSquare, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

const badges = [
  { icon: MessageSquare, text: "KES 0.60/SMS" },
  { icon: Zap, text: "Fast NVMe Hosting" },
  { icon: Shield, text: "24/7 Local Support" },
  { icon: Server, text: "99.9% Uptime SLA" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-hero-pattern overflow-hidden w-full"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-noise opacity-50" />
      <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-cyan/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1BB3E8 1px, transparent 1px), linear-gradient(90deg, #1BB3E8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10 py-16 sm:py-20 md:py-28 px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs sm:text-sm font-semibold mb-5 sm:mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse flex-shrink-0" />
            <span className="truncate">Nairobi&apos;s Leading Business Technology Partner</span>
          </div>

          {/* Headline - scaled down so words fit cleanly on 360px-430px screens */}
          <h1 className="animate-on-scroll font-heading font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.15] mb-5 sm:mb-6 break-words">
            Powering{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
              Business Systems
            </span>{" "}
            Across Kenya &amp;{" "}
            <span className="text-brand-red">East Africa.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-on-scroll text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            We help Kenyan businesses grow with tech and branding in one place —
            from{" "}
            <span className="text-brand-cyan font-medium">
              AI Voice &amp; WhatsApp Automations
            </span>
            ,{" "}
            <span className="text-brand-cyan font-medium">NVMe Hosting</span>,
            and{" "}
            <span className="text-brand-cyan font-medium">
              Bulk SMS at KES 0.60
            </span>
            , to custom{" "}
            <span className="text-white font-medium">
              ERP, POS, and corporate printing
            </span>
            .
          </p>

          {/* CTA Buttons - flex-col on mobile, flex-row on desktop */}
          <div className="animate-on-scroll flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto">
            <a href="#services" className="btn-secondary text-sm sm:text-base py-3.5 px-6 sm:px-8 justify-center w-full sm:w-auto">
              Explore Services
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <a href="#quote" className="btn-primary text-sm sm:text-base py-3.5 px-6 sm:px-8 justify-center w-full sm:w-auto">
              Request a Quote
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>

          {/* Trust Badges - 2 cols on mobile, wrap on desktop */}
          <div className="animate-on-scroll grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3">
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-gray-300 backdrop-blur-sm hover:border-brand-cyan/40 hover:text-brand-cyan transition-all duration-200"
              >
                <badge.icon className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span className="truncate">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-8 sm:h-16 md:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
