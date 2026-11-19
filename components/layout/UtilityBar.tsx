"use client";
import { MapPin, Clock, Phone, Mail, LogIn, MessageSquare } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="bg-brand-navy text-white py-2 text-xs sm:text-sm">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        {/* Left — Location, Phone & Hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1.5 text-gray-300 text-center md:text-left">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span>Delta Corner Annex, Westlands, Nairobi</span>
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-gray-600" />
          <a
            href="tel:+254183738044"
            className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors duration-150"
          >
            <Phone className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span>0183 738 044</span>
          </a>
          <span className="hidden sm:inline-block w-px h-3 bg-gray-600" />
          <a
            href="mailto:hello.orvo@gmail.com"
            className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors duration-150"
          >
            <Mail className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span>hello.orvo@gmail.com</span>
          </a>
          <span className="hidden lg:inline-block w-px h-3 bg-gray-600" />
          <span className="hidden lg:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span>Mon – Sat, 08:00 – 17:30</span>
          </span>
        </div>

        {/* Right — Portal Links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1 text-gray-300 hover:text-brand-cyan transition-colors duration-150"
          >
            <LogIn className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Client Login</span>
          </a>
          <span className="w-px h-3 bg-gray-600" />
          <a
            href="#"
            className="flex items-center gap-1 text-gray-300 hover:text-brand-cyan transition-colors duration-150"
          >
            <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Bulk SMS Login</span>
          </a>
        </div>
      </div>
    </div>
  );
}
