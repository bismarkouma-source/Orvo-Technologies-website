"use client";
import { useState, useEffect, useRef } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const services = [
  "AI Voice Agents",
  "WhatsApp Chatbots",
  "Web & App Development",
  "NVMe Web Hosting",
  "Domain Registration",
  "Bulk SMS",
  "Business Email",
  "School Management System",
  "M-Pesa POS System",
  "HRM & Payroll System",
  "Business ERP",
  "Logo & Brand Design",
  "Printing & Branding",
  "Signage (2D & 3D)",
  "Digital Marketing & SEO",
  "Other / Not sure yet",
];

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  const [newsletterDone, setNewsletterDone] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterMsg, setNewsletterMsg] = useState<string | null>(null);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const quoteTimerRef = useRef<NodeJS.Timeout | null>(null);
  const newsletterTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [newsletter, setNewsletter] = useState("");

  const resetQuoteForm = () => {
    setSubmitted(false);
    setQuoteError(null);
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const resetNewsletter = () => {
    setNewsletterDone(false);
    setNewsletterMsg(null);
    setNewsletterError(null);
    setNewsletter("");
  };

  useEffect(() => {
    if (submitted) {
      if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
      quoteTimerRef.current = setTimeout(() => {
        resetQuoteForm();
      }, 5000);
    }
    return () => {
      if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
    };
  }, [submitted]);

  useEffect(() => {
    if (newsletterDone) {
      if (newsletterTimerRef.current) clearTimeout(newsletterTimerRef.current);
      newsletterTimerRef.current = setTimeout(() => {
        resetNewsletter();
      }, 5000);
    }
    return () => {
      if (newsletterTimerRef.current) clearTimeout(newsletterTimerRef.current);
    };
  }, [newsletterDone]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteLoading(true);
    setQuoteError(null);

    try {
      const { error } = await supabase.from("quote_requests").insert([
        {
          full_name: form.name,
          email: form.email,
          phone: form.phone || null,
          company: form.company || null,
          service_required: form.service,
          project_details: form.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setQuoteError(
        err?.message || "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setQuoteLoading(false);
    }
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterError(null);
    setNewsletterMsg(null);

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert([
        { email: newsletter },
      ]);

      if (error) {
        if (error.code === "23505") {
          setNewsletterMsg("You are already subscribed!");
          setNewsletterDone(true);
          return;
        }
        throw error;
      }

      setNewsletterMsg("You're subscribed!");
      setNewsletterDone(true);
    } catch (err: any) {
      console.error("Newsletter submission error:", err);
      setNewsletterError(
        err?.message || "Failed to subscribe. Please try again later."
      );
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <section id="quote" className="py-16 sm:py-24 bg-brand-slate relative overflow-hidden w-full">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-brand-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-red/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="section-container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 bg-brand-red/10 text-brand-red text-xs sm:text-sm font-semibold rounded-full mb-3">
            Get a Quote
          </span>
          <h2 className="section-title text-2xl sm:text-4xl">
            Request a Quote &amp;{" "}
            <span className="gradient-text-red">Get in Touch</span>
          </h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base">
            Tell us what you need and we&apos;ll send you a detailed, transparent
            quotation — usually within 1 business day.
          </p>
        </div>

        {/* 1 col on mobile, 3 cols on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Card */}
            <div className="bg-brand-navy rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-5 sm:mb-6">
                  Contact Details
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mb-0.5 font-semibold uppercase tracking-wider">Office</p>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                        Delta Corner Annex, Ring Road Westlands<br />
                        P.O. Box 51631-00100 GPO<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mb-0.5 font-semibold uppercase tracking-wider">Phone</p>
                      <a href="tel:+254183738044" className="text-xs sm:text-sm text-gray-200 hover:text-brand-cyan transition-colors">
                        0183 738 044
                      </a>
                      <br />
                      <a href="tel:+254183738044" className="text-[11px] sm:text-xs text-gray-400 hover:text-brand-cyan transition-colors">
                        +254 183 738 044
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mb-0.5 font-semibold uppercase tracking-wider">Email</p>
                      <a href="mailto:hello.orvo@gmail.com" className="text-xs sm:text-sm text-gray-200 hover:text-brand-cyan transition-colors break-all">
                        hello.orvo@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mb-0.5 font-semibold uppercase tracking-wider">Working Hours</p>
                      <p className="text-xs sm:text-sm text-gray-200">Mon &ndash; Sat: 08:00 &ndash; 17:30</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-gradient-to-br from-brand-cyan to-blue-500 rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-base sm:text-lg mb-2">
                  Stay in the Loop 📬
                </h3>
                <p className="text-xs sm:text-sm text-cyan-100 mb-5 leading-relaxed">
                  Get tech tips, new product announcements, and exclusive Kenyan
                  business insights — straight to your inbox.
                </p>

                {newsletterDone && (
                  <div className="animate-fade-in flex items-center justify-between gap-2 p-3 bg-white/20 border border-white/30 rounded-xl text-white font-semibold text-xs sm:text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                      <span>{newsletterMsg || "You're subscribed!"}</span>
                    </div>
                    <button
                      onClick={resetNewsletter}
                      className="p-1 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors"
                      aria-label="Dismiss message"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <form onSubmit={handleNewsletter} className="space-y-3">
                  <input
                    type="email"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={newsletterLoading}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder-cyan-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                  />
                  {newsletterError && (
                    <div className="flex items-center justify-between gap-2 p-2.5 text-xs text-red-100 bg-red-500/20 rounded-lg border border-red-500/30">
                      <span>{newsletterError}</span>
                      <button
                        type="button"
                        onClick={() => setNewsletterError(null)}
                        className="text-red-200 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={newsletterLoading}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-brand-cyan font-bold rounded-xl text-xs sm:text-sm hover:bg-cyan-50 transition-colors disabled:opacity-75"
                  >
                    {newsletterLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-card p-6 sm:p-8 md:p-10">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy mb-1">
              Tell us about your project
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-7">
              Fill out the form below — the more detail you provide, the
              more accurate your quote will be.
            </p>

            {/* Auto-dismissing success banner */}
            {submitted && (
              <div className="animate-fade-in mb-6 p-4 bg-green-50 border border-green-200 text-green-900 rounded-2xl flex items-start justify-between gap-3 shadow-sm">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-green-900">
                      Quote Request Sent Successfully! 🎉
                    </h4>
                    <p className="text-xs sm:text-sm text-green-700 mt-0.5">
                      Your inquiry has been stored directly in our database. Our team will review your project details and get back to you within 1 business day.
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetQuoteForm}
                  className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 py-1 text-green-700 hover:text-green-900 hover:bg-green-100 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Dismiss banner"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Dismiss</span>
                </button>
              </div>
            )}

            {/* Clear Error message */}
            {quoteError && (
              <div className="animate-fade-in mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">Submission failed</p>
                    <p className="text-xs sm:text-sm text-red-600 mt-0.5">{quoteError}</p>
                  </div>
                </div>
                <button
                  onClick={() => setQuoteError(null)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Stacked into single column on mobile, 2 cols on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={quoteLoading}
                    placeholder="John Kamau"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-colors disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={quoteLoading}
                    placeholder="john@company.co.ke"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-colors disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={quoteLoading}
                    placeholder="0712 345 678"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-colors disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Company / Organisation
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    disabled={quoteLoading}
                    placeholder="Acme Ltd."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-colors disabled:bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Service Required <span className="text-brand-red">*</span>
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  disabled={quoteLoading}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-colors appearance-none bg-white disabled:bg-gray-50"
                >
                  <option value="">— Select a service —</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Project Details <span className="text-brand-red">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={quoteLoading}
                  rows={4}
                  placeholder="Describe your project, timeline, budget range, or any specific requirements..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-colors resize-none disabled:bg-gray-50"
                />
              </div>

              <button
                type="submit"
                disabled={quoteLoading}
                className="w-full btn-primary justify-center py-3.5 sm:py-4 text-sm sm:text-base disabled:opacity-75"
              >
                {quoteLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Quote Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Quote Request
                  </>
                )}
              </button>

              <p className="text-center text-[11px] sm:text-xs text-gray-400">
                By submitting this form you agree to our Privacy Policy. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
