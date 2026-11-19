"use client";
import { Bot, LayoutDashboard, Palette, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: Bot,
    color: "from-brand-cyan to-blue-500",
    bgLight: "bg-cyan-50",
    iconColor: "text-brand-cyan",
    badge: "AI-Powered",
    badgeColor: "bg-cyan-100 text-brand-cyan",
    title: "AI Automations",
    description:
      "Intelligent Voice Agents and WhatsApp Bots that automate customer support and sales 24/7 — so your team can focus on growth.",
    features: ["AI Voice Agents", "WhatsApp Chatbots", "Lead Qualification", "24/7 Availability"],
    link: "#ai",
  },
  {
    icon: LayoutDashboard,
    color: "from-brand-navy to-blue-900",
    bgLight: "bg-blue-50",
    iconColor: "text-brand-navy",
    badge: "SaaS Platforms",
    badgeColor: "bg-blue-100 text-brand-navy",
    title: "SaaS & Business Systems",
    description:
      "Ready-to-deploy School Management, M-Pesa POS, HRM, ERP, and Rental Management software built for Kenyan businesses.",
    features: ["School Management", "M-Pesa POS", "HRM & Payroll", "Business ERP"],
    link: "#software",
  },
  {
    icon: Palette,
    color: "from-brand-red to-orange-500",
    bgLight: "bg-red-50",
    iconColor: "text-brand-red",
    badge: "Full Branding",
    badgeColor: "bg-red-100 text-brand-red",
    title: "Design, Printing & Branding",
    description:
      "Logos, business cards, 2D/3D signage, banners, and corporate merchandise — professional branding that makes you stand out.",
    features: ["Logo Design", "Business Cards", "3D Signage", "Merchandise"],
    link: "#services",
  },
];

export default function FeaturedPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/10 text-brand-cyan text-sm font-semibold rounded-full mb-3">
            What We Do Best
          </span>
          <h2 className="section-title">Three Pillars of Orvo Technologies</h2>
          <p className="section-subtitle mx-auto">
            Tech + branding expertise under one roof, tailored for Kenyan businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="animate-on-scroll group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${pillar.color}`} />

              <div className="p-7">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bgLight} flex items-center justify-center`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-brand-navy mb-3">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{pillar.description}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillar.features.map((f) => (
                    <span key={f} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={pillar.link}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-brand-navy transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
