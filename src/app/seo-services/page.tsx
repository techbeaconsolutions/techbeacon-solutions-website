
import type { Metadata } from "next";
import SEOClient from "./SEOClient";

export const metadata: Metadata = {
  title: "SEO Company in Pune | SEO Services | TechBeacon Solutions",
  description:
    "Looking for an SEO company in Pune? TechBeacon Solutions helps businesses improve Google visibility, local search presence, website performance and generate qualified enquiries.",
  keywords: [
    "SEO company in Pune",
    "SEO services in Pune",
    "SEO agency Pune",
    "local SEO Pune",
    "technical SEO services",
    "website SEO optimization",
    "Google ranking services Pune",
    "small business SEO Pune",
    "digital marketing Pune",
    "TechBeacon Solutions",
  ],
  alternates: {
    canonical: "https://techbeaconsolutions.com/seo-services",
  },
  openGraph: {
    title: "SEO Company in Pune | TechBeacon Solutions",
    description:
      "Grow your business online with practical SEO strategies, local search optimization and lead-focused website improvements in Pune.",
    url: "https://techbeaconsolutions.com/seo-services",
    siteName: "TechBeacon Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Pune | TechBeacon Solutions",
    description:
      "Improve your Google visibility and attract relevant business enquiries with SEO services from TechBeacon Solutions.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in Pune",
  serviceType: "Search Engine Optimization",
  description:
    "Technical SEO, on-page SEO, local SEO, keyword research and content optimization for businesses in Pune.",
  url: "https://techbeaconsolutions.com/seo-services",
  areaServed: {
    "@type": "City",
    name: "Pune",
    containedInPlace: {
      "@type": "State",
      name: "Maharashtra",
    },
  },
  provider: {
    "@type": "Organization",
    name: "TechBeacon Solutions",
    url: "https://techbeaconsolutions.com",
  },
};

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SEOClient />
    </>
  );
}
