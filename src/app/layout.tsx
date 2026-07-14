import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import FloatingAuditCTA from "./components/FloatingAuditCTA";
import EmotionRegistry from "./lib/EmotionRegistry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://techbeacon-solutions-website.vercel.app"
  ),

  title: {
    default: "TechBeacon Solutions | Website & Mobile App Development",
    template: "%s | TechBeacon Solutions",
  },

  description:
    "TechBeacon Solutions helps startups and local businesses grow with modern websites, mobile apps, Local SEO, Google Business optimization, and custom software solutions in Pune.",

  keywords: [
    "Website Development Pune",
    "Web Development Company Pune",
    "Mobile App Development",
    "Software Development",
    "Google Business Profile",
    "SEO Services Pune",
    "TechBeacon Solutions",
    "Website Design",
    "React Development",
    "Next.js Development",
  ],

  alternates: {
    canonical: "https://techbeacon-solutions-website.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "TechBeacon Solutions",
    description:
      "Helping startups and businesses build high-performing websites, mobile apps and digital solutions.",
    url: "https://techbeacon-solutions-website.vercel.app",
    siteName: "TechBeacon Solutions",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "TechBeacon Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TechBeacon Solutions",
    description:
      "Website Development • Mobile Apps • Local SEO • Software Solutions",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable}`}>
        <EmotionRegistry>
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "TechBeacon Solutions",
                url: "https://techbeacon-solutions-website.vercel.app",
                logo: "https://techbeacon-solutions-website.vercel.app/favicon.png",
                email: "hello@techbeacon.com",
                telephone: "+91-9209652754",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
                sameAs: [
                  "https://www.linkedin.com/company/techbeacon-solutions"
                ],
              }),
            }}
          />

          {children}

          <ScrollToTop />
          <FloatingAuditCTA />
        </EmotionRegistry>

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-TZV72D7D5X" />
      </body>
    </html>
  );
}