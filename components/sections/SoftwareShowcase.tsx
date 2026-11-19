"use client";
import {
  CheckCircle,
  ArrowRight,
  Users,
  BookOpen,
  ShoppingCart,
  Briefcase,
  Home,
  Play,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "school",
    icon: BookOpen,
    name: "School Management System",
    tagline: "Complete School Administration",
    color: "from-indigo-600 to-blue-600",
    lightColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    badgeColor: "bg-indigo-100 text-indigo-700",
    badge: "Education",
    price: "From KES 3,500 / month",
    description:
      "A fully-featured school management platform built for Kenyan schools — manage students, fees, timetables, results, and parent communication from one secure dashboard.",
    features: [
      "Student Admission & Profiles",
      "Fee Collection & M-Pesa Receipts",
      "Academic Timetabling",
      "Exam Results & Report Cards",
      "Parent Portal & SMS Alerts",
      "Staff & Payroll Module",
      "Library & Inventory",
      "Multi-Branch Support",
    ],
    highlight: "Used by 20+ schools in Kenya",
  },
  {
    id: "pos",
    icon: ShoppingCart,
    name: "M-Pesa POS System",
    tagline: "Smart Point of Sale for Kenya",
    color: "from-green-600 to-emerald-500",
    lightColor: "bg-green-50",
    iconColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-700",
    badge: "Retail",
    price: "From KES 5,000 / month",
    description:
      "Kenya's smartest POS integrates M-Pesa Paybill and Till directly into your checkout — real-time receipts, inventory management, and business analytics in one app.",
    features: [
      "M-Pesa Paybill & Till Integration",
      "Real-Time Inventory Tracking",
      "Sales Reports & Analytics",
      "Receipt Printing",
      "Multi-Location Support",
      "Barcode Scanner Compatible",
      "Credit & Debt Management",
      "Staff Performance Tracking",
    ],
    highlight: "M-Pesa integrated from day one",
  },
  {
    id: "erp",
    icon: Briefcase,
    name: "Business ERP System",
    tagline: "Enterprise Resource Planning",
    color: "from-brand-navy to-slate-700",
    lightColor: "bg-slate-50",
    iconColor: "text-brand-navy",
    badgeColor: "bg-slate-100 text-slate-700",
    badge: "Enterprise",
    price: "From KES 8,000 / month",
    description:
      "A comprehensive ERP solution that unifies procurement, sales, finance, HR, and operations — giving your growing business full visibility and control.",
    features: [
      "Procurement & Purchase Orders",
      "Sales & CRM Pipeline",
      "Accounts & Financial Reports",
      "Human Resource Management",
      "Project & Task Management",
      "Asset Register",
      "Multi-Currency & Multi-Company",
      "Custom Reporting",
    ],
    highlight: "Built for Kenyan SMEs & corporates",
  },
  {
    id: "hrm",
    icon: Users,
    name: "HRM & Payroll System",
    tagline: "Human Resources Made Simple",
    color: "from-brand-cyan to-teal-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-brand-cyan",
    badgeColor: "bg-cyan-100 text-brand-cyan",
    badge: "HR",
    price: "From KES 4,000 / month",
    description:
      "End-to-end HR and payroll automation for Kenyan businesses — from onboarding and leave management to NHIF, NSSF, and KRA PAYE compliance.",
    features: [
      "Employee Profiles & Contracts",
      "Leave & Attendance Management",
      "Payroll with PAYE, NHIF & NSSF",
      "Payslip Generation & Distribution",
      "Performance Appraisals",
      "Recruitment Pipeline",
      "Training & Development Tracking",
      "Self-Service Employee Portal",
    ],
    highlight: "Fully compliant with Kenya tax law",
  },
  {
    id: "rental",
    icon: Home,
    name: "Rental Property Manager",
    tagline: "Landlord & Caretaker Solution",
    color: "from-brand-red to-rose-600",
    lightColor: "bg-red-50",
    iconColor: "text-brand-red",
    badgeColor: "bg-red-100 text-red-700",
    badge: "Real Estate",
    price: "From KES 2,500 / month",
    description:
      "Manage your rental units, tenants, and payments effortlessly. Automates rent collection via M-Pesa, sends reminders, and generates financial reports for landlords.",
    features: [
      "Tenant & Unit Management",
      "M-Pesa Rent Collection",
      "Automated Rent Reminders (SMS)",
      "Maintenance Request Tracking",
      "Landlord Financial Reports",
      "Lease & Agreement Templates",
      "Utility Bill Tracking",
      "Multi-Property Support",
    ],
    highlight: "Automates M-Pesa rent collection",
  },
];

export default function SoftwareShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

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

  const active = products[activeTab];
  const Icon = active.icon;

  return (
    <section id="software" ref={sectionRef} className="py-16 sm:py-24 bg-white w-full">
      <div className="section-container px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <span className="inline-block px-3.5 py-1 bg-brand-navy/10 text-brand-navy text-xs sm:text-sm font-semibold rounded-full mb-3">
            SaaS Products
          </span>
          <h2 className="section-title text-2xl sm:text-4xl">Our Business Software Suite</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base">
            Ready-to-deploy, cloud-based software built for Kenyan businesses.
            Start in days, not months.
          </p>
        </div>

        {/* Product Tabs (horizontal scrolling or wrap nicely) */}
        <div className="animate-on-scroll flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {products.map((p, i) => {
            const PIcon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeTab === i
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-md scale-105`
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-cyan/50 hover:text-brand-cyan"
                }`}
              >
                <PIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>
                  {p.name.split(" ")[0] +
                    " " +
                    (p.name.split(" ")[1] ?? "")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Display: 1 col on mobile, 2 cols on lg */}
        <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-brand-slate rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-card">
          {/* Left — Info */}
          <div>
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${active.lightColor} flex items-center justify-center mb-4 sm:mb-6`}>
              <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${active.iconColor}`} />
            </div>

            <span className={`inline-block text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full ${active.badgeColor} mb-2.5 sm:mb-3`}>
              {active.badge}
            </span>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy mb-1 sm:mb-2">
              {active.name}
            </h3>
            <p className="text-brand-cyan font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              {active.tagline}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              {active.description}
            </p>

            {/* Highlight pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white border border-brand-cyan/20 rounded-xl mb-5 sm:mb-6 shadow-sm max-w-full">
              <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-brand-navy truncate">
                {active.highlight}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 font-medium mb-5 sm:mb-6">
              Pricing:{" "}
              <span className="text-brand-navy font-bold">{active.price}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#quote" className="btn-secondary text-xs sm:text-sm py-3 px-5 justify-center w-full sm:w-auto">
                Request Demo
                <Play className="w-4 h-4" />
              </a>
              <a href="#quote" className="btn-outline-cyan text-xs sm:text-sm py-3 px-5 justify-center w-full sm:w-auto">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Features */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 sm:mb-5">
              Key Features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {active.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 sm:gap-3 bg-white rounded-xl p-3 sm:p-3.5 border border-gray-100 shadow-sm hover:border-brand-cyan/30 hover:shadow-card transition-all duration-200"
                >
                  <CheckCircle className={`w-4 h-4 ${active.iconColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav for smaller screens */}
        <div className="mt-6 sm:mt-8 animate-on-scroll flex justify-center gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                activeTab === i ? "bg-brand-cyan w-6" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
