import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const services = [
  "AI Voice & WhatsApp Automations",
  "NVMe Web Hosting & Domains",
  "Bulk SMS (KES 0.60/SMS)",
  "School Management System",
  "M-Pesa POS System",
  "HRM & Payroll System",
  "Business ERP System",
  "Web & App Development",
  "Design, Print & Branding",
  "Digital Marketing & SEO",
  "IT Support & Networking",
  "Rental Property System",
];

const software = [
  { name: "Orvo POS", desc: "M-Pesa integrated Point of Sale" },
  { name: "School Management", desc: "Complete school administration" },
  { name: "Business ERP", desc: "Full enterprise resource planning" },
  { name: "HRM & Payroll", desc: "Human resources & payroll" },
  { name: "Rental Manager", desc: "Property rental management" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-300 w-full">
      {/* Main Footer */}
      <div className="section-container py-12 sm:py-14 px-4">
        {/* 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Col 1 — About */}
          <div>
            <Image
              src="/images/orvo-logo-dark.jpg"
              alt="Orvo Technologies"
              width={180}
              height={56}
              className="h-12 sm:h-14 w-auto object-contain mb-4 sm:mb-5"
            />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              Africa&apos;s emerging technology partner — combining AI
              automations, enterprise software, cloud hosting, and corporate
              branding under one roof.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-brand-cyan italic">
              &quot;Powering Business Systems.&quot;
            </p>

            <div className="mt-5 sm:mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 sm:mb-2">
                Vision
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                To be Africa&apos;s most trusted technology partner — where
                every business runs faster, sells more, and looks professional.
              </p>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-gray-400 hover:text-brand-cyan transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span>{s}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Software */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Our Software
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {software.map((sw) => (
                <li key={sw.name}>
                  <a
                    href="#software"
                    className="group flex items-start gap-2 hover:text-brand-cyan transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-brand-cyan">
                        {sw.name}
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-500">{sw.desc}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Delta Corner Annex, Ring Road Westlands,<br />
                  P.O. Box 51631-00100 GPO, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-400">
                  Mon – Sat, 08:00 – 17:30
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+254183738044"
                  className="text-xs sm:text-sm text-gray-400 hover:text-brand-cyan transition-colors"
                >
                  0183 738 044 (+254 183 738 044)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello.orvo@gmail.com"
                  className="text-xs sm:text-sm text-gray-400 hover:text-brand-cyan transition-colors break-all"
                >
                  hello.orvo@gmail.com
                </a>
              </li>
            </ul>

            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-xs sm:text-sm text-brand-cyan hover:text-white font-medium transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Client Portal Login
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-brand-cyan transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Staff Sign In
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2026 Orvo Technologies. All rights reserved.{" "}
            <span className="text-brand-cyan font-medium block sm:inline">Powering Business Systems.</span>
          </p>
          <div className="flex gap-4 text-xs sm:text-sm text-gray-500">
            <Link href="#" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
