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
    <section id="software" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-brand-navy/10 text-brand-navy text-sm font-semibold rounded-full mb-3">
            SaaS Products
          </span>
          <h2 className="section-title">Our Business Software Suite</h2>
          <p className="section-subtitle mx-auto">
            Ready-to-deploy, cloud-based software built for Kenyan businesses.
            Start in days, not months.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="animate-on-scroll flex flex-wrap justify-center gap-3 mb-12">
          {products.map((p, i) => {
            const PIcon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  activeTab === i
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-lg scale-105`
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-cyan/50 hover:text-brand-cyan"
                }`}
              >
                <PIcon className="w-4 h-4" />
                {p.name.split(" ")[0] +
                  " " +
                  (p.name.split(" ")[1] ?? "")}
              </button>
            );
          })}
        </div>

        {/* Active Product Display */}
        <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-brand-slate rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-card">
          {/* Left — Info */}
          <div>
            <div className={`w-16 h-16 rounded-2xl ${active.lightColor} flex items-center justify-center mb-6`}>
              <Icon className={`w-8 h-8 ${active.iconColor}`} />
            </div>

            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${active.badgeColor} mb-3`}>
              {active.badge}
            </span>

            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-2">
              {active.name}
            </h3>
            <p className="text-brand-cyan font-semibold text-sm mb-4">
              {active.tagline}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {active.description}
            </p>

            {/* Highlight pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-cyan/20 rounded-xl mb-6 shadow-sm">
              <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span className="text-sm font-semibold text-brand-navy">
                {active.highlight}
              </span>
            </div>

            <p className="text-sm text-gray-400 font-medium mb-6">
              Pricing:{" "}
              <span className="text-brand-navy font-bold">{active.price}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#quote" className="btn-secondary">
                Request Demo
                <Play className="w-4 h-4" />
              </a>
              <a href="#quote" className="btn-outline-cyan">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Features */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              Key Features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm hover:border-brand-cyan/30 hover:shadow-card transition-all duration-200"
                >
                  <CheckCircle className={`w-4 h-4 ${active.iconColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-sm text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav for smaller screens */}
        <div className="mt-8 animate-on-scroll flex justify-center gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                activeTab === i ? "bg-brand-cyan w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
