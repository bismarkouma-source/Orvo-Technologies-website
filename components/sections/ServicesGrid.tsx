"use client";
import {
  Bot,
  MessageSquare,
  Globe,
  LayoutDashboard,
  Server,
  AtSign,
  Smartphone,
  Palette,
  Printer,
  PenTool,
  TrendingUp,
  Wifi,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

const categories = [
  {
    id: "ai",
    label: "AI & Automation",
    color: "from-brand-cyan to-blue-500",
    iconBg: "bg-cyan-50",
    iconColor: "text-brand-cyan",
    badgeColor: "bg-cyan-100 text-brand-cyan",
    services: [
      {
        icon: Bot,
        title: "AI Voice Agents",
        desc: "Automate inbound & outbound calls 24/7 — book appointments, qualify leads, and handle FAQs without lifting a finger.",
        badge: "AI-Powered",
        price: "Custom",
      },
      {
        icon: MessageSquare,
        title: "WhatsApp Chatbots",
        desc: "Instant WhatsApp responses to customer queries, orders, and support — fully automated, fully branded.",
        badge: "Popular",
        price: "Custom",
      },
      {
        icon: Globe,
        title: "Web & App Development",
        desc: "Modern, responsive websites and mobile apps built for performance, conversion, and long-term growth.",
        badge: "Full Stack",
        price: "From KES 15K",
      },
    ],
  },
  {
    id: "hosting",
    label: "Hosting & Comms",
    color: "from-brand-navy to-indigo-900",
    iconBg: "bg-blue-50",
    iconColor: "text-brand-navy",
    badgeColor: "bg-blue-100 text-brand-navy",
    services: [
      {
        icon: Server,
        title: "NVMe Web Hosting",
        desc: "Blazing-fast NVMe SSD hosting with 99.9% uptime SLA, free SSL, and cPanel — hosted in Nairobi.",
        badge: "99.9% Uptime",
        price: "From KES 500/mo",
      },
      {
        icon: Smartphone,
        title: "Bulk SMS",
        desc: "Send OTP codes, promotions, and alerts to thousands instantly. The most affordable bulk SMS in Kenya.",
        badge: "KES 0.60/SMS",
        price: "KES 0.60/SMS",
      },
      {
        icon: AtSign,
        title: "Business Email & Domains",
        desc: "Professional @yourdomain email with .co.ke, .com, .africa domain registration and management.",
        badge: "Official Reseller",
        price: "From KES 1,000/yr",
      },
    ],
  },
  {
    id: "saas",
    label: "SaaS & Business Systems",
    color: "from-purple-600 to-indigo-600",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-600",
    services: [
      {
        icon: LayoutDashboard,
        title: "School Management System",
        desc: "Student admissions, fee collection, timetables, results, and parent portals — all in one dashboard.",
        badge: "SaaS Ready",
        price: "From KES 3,500/mo",
      },
      {
        icon: Smartphone,
        title: "M-Pesa POS System",
        desc: "Point of sale with M-Pesa Paybill & Till integration, real-time sales reports, and inventory tracking.",
        badge: "M-Pesa Integrated",
        price: "From KES 5,000/mo",
      },
      {
        icon: Wifi,
        title: "HRM, ERP & More",
        desc: "Human Resource Management, Payroll, Business ERP, and Rental Property systems for Kenyan businesses.",
        badge: "Enterprise",
        price: "From KES 4,000/mo",
      },
    ],
  },
  {
    id: "branding",
    label: "Design & Branding",
    color: "from-brand-red to-orange-500",
    iconBg: "bg-red-50",
    iconColor: "text-brand-red",
    badgeColor: "bg-red-100 text-brand-red",
    services: [
      {
        icon: PenTool,
        title: "Logo & Brand Identity",
        desc: "Professional logo design, brand guidelines, and full visual identity packages that make you unforgettable.",
        badge: "Full Branding",
        price: "From KES 5,000",
      },
      {
        icon: Printer,
        title: "Corporate Printing",
        desc: "Business cards, letterheads, flyers, brochures, banners, branded merchandise, and large-format printing.",
        badge: "Same-Day",
        price: "Custom",
      },
      {
        icon: TrendingUp,
        title: "2D/3D Signage & Digital Marketing",
        desc: "Eye-catching shopfront signs, indoor branding, and social media growth strategies to drive real customers.",
        badge: "360° Presence",
        price: "Custom",
      },
    ],
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.07 }
    );
    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-24 bg-brand-slate w-full">
      <div className="section-container px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block px-3.5 py-1 bg-brand-cyan/10 text-brand-cyan text-xs sm:text-sm font-semibold rounded-full mb-3">
            Full Service Catalogue
          </span>
          <h2 className="section-title text-2xl sm:text-4xl">Everything Your Business Needs</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base">
            From AI automations and enterprise SaaS to hosting, bulk SMS, and
            corporate branding — Orvo Technologies has you covered.
          </p>
        </div>

        {/* Category Tabs & Cards */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((cat, ci) => (
            <div key={cat.id} id={cat.id} className="animate-on-scroll" style={{ transitionDelay: `${ci * 60}ms` }}>
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`h-1 w-8 sm:w-12 rounded-full bg-gradient-to-r ${cat.color} flex-shrink-0`} />
                <h3 className="text-lg sm:text-xl font-heading font-bold text-brand-navy">
                  {cat.label}
                </h3>
                <div className={`flex-1 h-px bg-gradient-to-r ${cat.color} opacity-20`} />
              </div>

              {/* Service Cards (1 col on mobile, 3 on md+) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {cat.services.map((service, si) => (
                  <div
                    key={service.title}
                    className="animate-on-scroll group bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 flex flex-col justify-between relative overflow-hidden"
                    style={{ transitionDelay: `${ci * 60 + si * 80}ms` }}
                  >
                    {/* Top accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${cat.iconColor}`} />
                        </div>
                        <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                          {service.badge}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-brand-navy text-base mb-2">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5">
                        {service.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-auto">
                      <span className="text-xs font-bold text-brand-cyan">
                        {service.price}
                      </span>
                      <a
                        href="#quote"
                        className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-brand-cyan transition-colors group"
                      >
                        Get Quote
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 animate-on-scroll text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-brand-cyan/20 rounded-2xl p-6 sm:px-8 sm:py-6 shadow-card w-full max-w-2xl mx-auto text-center sm:text-left">
            <div>
              <p className="font-heading font-bold text-brand-navy text-base sm:text-lg">
                Not sure what you need?
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Our team will assess your business and recommend the right solution.
              </p>
            </div>
            <a href="#quote" className="btn-secondary whitespace-nowrap text-xs sm:text-sm py-3 px-5 w-full sm:w-auto justify-center">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
