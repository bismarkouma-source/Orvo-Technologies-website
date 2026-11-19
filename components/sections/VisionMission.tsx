"use client";
import { Eye, Target } from "lucide-react";
import { useEffect, useRef } from "react";

export default function VisionMission() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 bg-white w-full">
      <div className="section-container px-4">
        <div className="text-center mb-10 sm:mb-12 animate-on-scroll">
          <span className="inline-block px-3.5 py-1 bg-brand-cyan/10 text-brand-cyan text-xs sm:text-sm font-semibold rounded-full mb-3">
            Who We Are
          </span>
          <h2 className="section-title text-2xl sm:text-4xl">Our Vision &amp; Mission</h2>
        </div>

        {/* 1 col on mobile, 2 on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision */}
          <div className="animate-on-scroll relative bg-gradient-to-br from-brand-navy to-blue-950 rounded-3xl p-6 sm:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-cyan/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-brand-cyan" />
              </div>
              <span className="inline-block px-3 py-1 bg-brand-cyan/20 text-brand-cyan text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full mb-3 sm:mb-4">
                Our Vision
              </span>
              <p className="text-white text-base sm:text-lg font-heading font-bold leading-relaxed">
                &ldquo;To be Africa&apos;s most trusted technology partner — where every business, big or small, runs faster, sells more, and looks professional.&rdquo;
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className="animate-on-scroll relative bg-gradient-to-br from-brand-red to-rose-800 rounded-3xl p-6 sm:p-8 overflow-hidden"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full mb-3 sm:mb-4">
                Our Mission
              </span>
              <p className="text-white text-base sm:text-lg font-heading font-bold leading-relaxed">
                &ldquo;To give businesses simple, affordable, and reliable technology and branding — from hosting and SMS to AI and print — so they can focus on growing, while we handle the systems behind them.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
