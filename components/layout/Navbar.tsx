"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const services = {
  "AI & Software": [
    {
      icon: "🤖",
      title: "AI Voice Agents",
      desc: "Automate calls & customer support",
    },
    {
      icon: "💬",
      title: "WhatsApp Bots",
      desc: "24/7 sales & support automation",
    },
    {
      icon: "🖥️",
      title: "Web & App Development",
      desc: "Custom websites & mobile apps",
    },
    {
      icon: "⚙️",
      title: "SaaS & Business Systems",
      desc: "ERP, POS, HRM, School systems",
    },
  ],
  "Hosting & Comms": [
    {
      icon: "🚀",
      title: "NVMe Web Hosting",
      desc: "Fast, reliable Kenyan hosting",
    },
    {
      icon: "🌐",
      title: "Domain Registration",
      desc: ".co.ke, .com, .africa & more",
    },
    {
      icon: "📲",
      title: "Bulk SMS",
      desc: "OTP, promos & alerts — KES 0.60/SMS",
    },
    {
      icon: "📧",
      title: "Business Email",
      desc: "Professional @yourdomain email",
    },
  ],
  "Design & Branding": [
    {
      icon: "🎨",
      title: "Logo & Brand Identity",
      desc: "Professional logos & brand kits",
    },
    {
      icon: "🖨️",
      title: "Printing & Branding",
      desc: "Cards, banners, flyers & merchandise",
    },
    {
      icon: "🏢",
      title: "Signage (2D & 3D)",
      desc: "Shopfront signs & indoor branding",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      desc: "Social media growth & SEO",
    },
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "#services", hasMega: true },
  { label: "Our Software", href: "#software" },
  { label: "AI Automations", href: "#ai" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 w-full ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="section-container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-light.jpg"
              alt="Orvo Technologies"
              width={160}
              height={48}
              className="h-9 sm:h-10 md:h-12 w-auto object-contain max-w-[150px] sm:max-w-none"
              priority
            />
          </Link>

          {/* Desktop Nav Links (hidden on mobile and tablet) */}
          <div className="hidden lg:flex items-center gap-6" ref={megaRef}>
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    className="nav-link flex items-center gap-1 py-2 text-sm font-medium"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu */}
                  {megaOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6">
                      {Object.entries(services).map(([category, items]) => (
                        <div key={category}>
                          <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
                            {category}
                          </p>
                          <ul className="space-y-1">
                            {items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href="#services"
                                  onClick={() => setMegaOpen(false)}
                                  className="mega-menu-card group"
                                >
                                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                                  <div>
                                    <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-cyan">
                                      {item.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="nav-link text-sm font-medium">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="nav-link text-sm font-medium">
              Sign In
            </a>
            <a href="#quote" className="btn-primary text-sm py-2.5 px-5">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button (visible below lg) */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-brand-navy" />
            ) : (
              <Menu className="w-6 h-6 text-brand-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white py-4 px-4 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div key={link.label} className="border-b border-gray-50 pb-2">
                <button
                  onClick={() => setMegaOpen(!megaOpen)}
                  className="flex items-center justify-between w-full py-2.5 px-3 rounded-xl text-gray-800 font-semibold hover:bg-brand-slate text-sm"
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaOpen ? "rotate-180 text-brand-cyan" : "text-gray-400"
                    }`}
                  />
                </button>
                {megaOpen && (
                  <div className="mt-2 pl-2 space-y-4 bg-brand-slate/60 rounded-xl p-3">
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan mb-1.5 px-2">
                          {category}
                        </p>
                        <div className="space-y-1">
                          {items.map((item) => (
                            <a
                              key={item.title}
                              href="#services"
                              onClick={() => {
                                setMegaOpen(false);
                                setMobileOpen(false);
                              }}
                              className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg hover:bg-white text-xs sm:text-sm text-gray-700 font-medium transition-colors"
                            >
                              <span className="text-base">{item.icon}</span>
                              <span className="truncate">{item.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-gray-800 font-semibold hover:bg-brand-slate text-sm transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="#"
              className="w-full py-3 px-4 text-center text-gray-700 font-semibold border border-gray-200 rounded-xl hover:bg-brand-slate text-sm transition-colors"
            >
              Sign In
            </a>
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="w-full btn-primary justify-center text-sm py-3"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
