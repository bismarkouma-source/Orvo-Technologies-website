"use client";
import { MapPin, Clock, Phone, Mail, LogIn, MessageSquare } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="bg-brand-navy text-white py-2 text-sm">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-1">
        {/* Left — Location, Phone & Hours */}
        <div className="flex flex-wrap items-center gap-4 text-gray-300">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
            Delta Corner Annex, Ring Road Westlands, Nairobi
          </span>
          <span className="hidden sm:block w-px h-3 bg-gray-600" />
          <a href="tel:+254183738044" className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors duration-150">
            <Phone className="w-3.5 h-3.5 text-brand-cyan" />
            0183 738 044
          </a>
          <span className="hidden sm:block w-px h-3 bg-gray-600" />
          <a href="mailto:hello.orvo@gmail.com" className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors duration-150">
            <Mail className="w-3.5 h-3.5 text-brand-cyan" />
            hello.orvo@gmail.com
          </a>
          <span className="hidden sm:block w-px h-3 bg-gray-600" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-cyan" />
            Mon – Sat, 08:00 – 17:30
          </span>
        </div>

        {/* Right — Portal Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-1.5 text-gray-300 hover:text-brand-cyan transition-colors duration-150"
          >
            <LogIn className="w-3.5 h-3.5" />
            Client Login
          </a>
          <span className="w-px h-3 bg-gray-600" />
          <a
            href="#"
            className="flex items-center gap-1.5 text-gray-300 hover:text-brand-cyan transition-colors duration-150"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Bulk SMS Login
          </a>
        </div>
      </div>
    </div>
  );
}
