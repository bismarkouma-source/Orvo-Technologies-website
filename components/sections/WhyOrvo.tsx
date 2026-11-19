"use client";
import { Users, LayoutDashboard, FileText, Layers } from "lucide-react";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: Users,
    color: "text-brand-cyan",
    bg: "bg-cyan-50",
    title: "One Team, Start to Finish",
    description:
      "The engineers who build your software or print your branding are the same local team supporting you afterwards. No outsourcing, no handoffs.",
  },
  {
    icon: LayoutDashboard,
    color: "text-brand-navy",
    bg: "bg-blue-50",
    title: "Your Own Client Portal",
    description:
      "Track quotations, invoices, statements, and project progress online anytime — full transparency on every engagement.",
  },
  {
    icon: FileText,
    color: "text-brand-red",
    bg: "bg-red-50",
    title: "Transparent Upfront Quotes",
    description:
      "Clear written quotations before work begins with zero hidden fees. You know exactly what you're paying for, every time.",
  },
  {
    icon: Layers,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Tech + Branding Under One Roof",
    description:
      "Launch your software, website, Bulk SMS, and physical branding from one trusted Nairobi partner — no juggling vendors.",
  },
];

export default function WhyOrvo() {
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
    <section ref={sectionRef} id="company" className="py-16 sm:py-20 bg-brand-slate w-full">
      <div className="section-container px-4">
        <div className="text-center mb-10 sm:mb-12 animate-on-scroll">
          <span className="inline-block px-3.5 py-1 bg-brand-navy/10 text-brand-navy text-xs sm:text-sm font-semibold rounded-full mb-3">
            Why Businesses Choose Us
          </span>
          <h2 className="section-title text-2xl sm:text-4xl">Why Choose Orvo Technologies</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base">
            Four things that set us apart from every other tech vendor in Nairobi.
          </p>
        </div>

        {/* 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="animate-on-scroll bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base sm:text-lg mb-2 sm:mb-3">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
