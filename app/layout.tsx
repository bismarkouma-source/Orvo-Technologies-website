import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Orvo Technologies | Powering Business Systems in Kenya",
  description:
    "Africa's leading technology partner — AI automations, enterprise software (ERP, POS, HRM, School Systems), NVMe hosting, bulk SMS, and corporate branding — all from one trusted Nairobi team.",
  keywords:
    "Orvo Technologies, Kenya tech company, Nairobi software, AI automation, web hosting Kenya, bulk SMS Kenya, ERP system, POS system, school management system, corporate branding Nairobi",
  authors: [{ name: "Orvo Technologies" }],
  openGraph: {
    title: "Orvo Technologies | Powering Business Systems in Kenya",
    description:
      "AI automations, enterprise software, NVMe hosting, bulk SMS, and corporate branding under one roof.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="overflow-x-hidden w-full max-w-full">{children}</body>
    </html>
  );
}
