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
    <section id="services" ref={sectionRef} className="py-24 bg-brand-slate">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/10 text-brand-cyan text-sm font-semibold rounded-full mb-3">
            Full Service Catalogue
          </span>
          <h2 className="section-title">Everything Your Business Needs</h2>
          <p className="section-subtitle mx-auto">
            From AI automations and enterprise SaaS to hosting, bulk SMS, and
            corporate branding — Orvo Technologies has you covered.
          </p>
        </div>

        {/* Category Tabs & Cards */}
        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <div key={cat.id} id={cat.id} className="animate-on-scroll" style={{ transitionDelay: `${ci * 60}ms` }}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h3 className="text-xl font-heading font-bold text-brand-navy">
                  {cat.label}
                </h3>
                <div className={`flex-1 h-px bg-gradient-to-r ${cat.color} opacity-20`} />
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.services.map((service, si) => (
                  <div
                    key={service.title}
                    className="animate-on-scroll group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 cursor-pointer relative overflow-hidden"
                    style={{ transitionDelay: `${ci * 60 + si * 80}ms` }}
                  >
                    {/* Top accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                        <service.icon className={`w-6 h-6 ${cat.iconColor}`} />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-brand-navy text-base mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand-cyan">
                        {service.price}
                      </span>
                      <a
                        href="#quote"
                        className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-brand-cyan transition-colors group"
                      >
                        Get Quote
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 animate-on-scroll text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-brand-cyan/20 rounded-2xl px-8 py-6 shadow-card">
            <div className="text-left">
              <p className="font-heading font-bold text-brand-navy text-lg">
                Not sure what you need?
              </p>
              <p className="text-sm text-gray-500">
                Our team will assess your business and recommend the right
                solution.
              </p>
            </div>
            <a href="#quote" className="btn-secondary whitespace-nowrap">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
