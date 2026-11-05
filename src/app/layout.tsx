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
    // Page-level titles already include the brand name.
    // Using "%s" prevents duplicate "| TechBeacon Solutions" suffixes.
    template: "%s",
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
    "@id": "https://techbeaconsolutions.com/#organization",
    name: "TechBeacon Solutions",
    url: "https://techbeaconsolutions.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://techbeaconsolutions.com/favicon.png",
    },
    email: "hello@techbeaconsolutions.com",
    telephone: "+91-9209652754",
    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-9209652754",
      email: "hello@techbeaconsolutions.com",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/techbeacon-solutions",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://techbeaconsolutions.com/#website",
    url: "https://techbeaconsolutions.com/",
    name: "TechBeacon Solutions",
    publisher: {
      "@id": "https://techbeaconsolutions.com/#organization",
    },
    inLanguage: "en-IN",
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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
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
