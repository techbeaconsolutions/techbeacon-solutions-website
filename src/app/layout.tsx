
import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";
import "./globals.css";

import Header from "./components/layou/Header";
import Footer from "./components/layou/Footer";
import ScrollToTop from "./components/layou/ScrollToTop";
import FloatingAuditCTA from "./components/layou/FloatingAuditCTA";
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
  metadataBase: new URL("https://techbeaconsolutions.com"),

  title: {
    default:
      "TechBeacon Solutions | Web Development & Digital Marketing",
    template: "%s | TechBeacon Solutions",
  },

  description:
    "Grow your business with TechBeacon Solutions. Get professional website development, custom software, digital marketing, SEO and AI automation services in Pune and across India.",

  applicationName: "TechBeacon Solutions",

  keywords: [
    "Website Development Company Pune",
    "Web Development Services Pune",
    "Digital Marketing Agency Pune",
    "SEO Services Pune",
    "Custom Software Development India",
    "AI Automation Services",
    "Mobile App Development",
    "TechBeacon Solutions",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title:
      "TechBeacon Solutions | Web Development & Digital Marketing",
    description:
      "Professional website development, digital marketing, SEO, software development and AI automation for growing businesses.",
    url: "https://techbeaconsolutions.com/",
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
      "Web Development | Digital Marketing | SEO | Software Development | AI Automation",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechBeacon Solutions",
    url: "https://techbeaconsolutions.com",
    logo: "https://techbeaconsolutions.com/favicon.png",
    email: "hello@techbeacon.com",
    telephone: "+91-9209652754",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/techbeacon-solutions",
    ],
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable}`}>
        <GoogleTagManager gtmId="GTM-P7T4CSJ7" />

        <EmotionRegistry>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />

          <Header />

          {children}

          <Footer />
          <ScrollToTop />
          <FloatingAuditCTA />
        </EmotionRegistry>

        <GoogleAnalytics gaId="G-TZV72D7D5X" />
      </body>
    </html>
  );
}
