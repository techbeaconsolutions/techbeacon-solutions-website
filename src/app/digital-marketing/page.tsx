
import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

const BASE_URL = "https://techbeaconsolutions.com";
const PAGE_URL = `${BASE_URL}/digital-marketing`;

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pune | TechBeacon Solutions",

  description:
    "Grow your business with digital marketing services in Pune. TechBeacon Solutions offers SEO, social media marketing, Google Ads, lead generation and performance marketing.",

  keywords: [
    "Digital Marketing Agency in Pune",
    "Digital Marketing Company Pune",
    "Digital Marketing Services Pune",
    "SEO Services Pune",
    "Social Media Marketing Pune",
    "Google Ads Management Pune",
    "Lead Generation Services",
    "Performance Marketing",
    "Online Marketing Services",
    "TechBeacon Solutions",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Digital Marketing Agency in Pune | TechBeacon Solutions",
    description:
      "Reach the right audience, generate quality enquiries and grow your business with SEO, social media marketing, Google Ads and digital marketing solutions.",
    url: PAGE_URL,
    siteName: "TechBeacon Solutions",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Pune | TechBeacon Solutions",
    description:
      "SEO, social media marketing, Google Ads and lead generation solutions for growing businesses.",
  },
};

// Service structured data
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Services",
  description:
    "Digital marketing solutions including SEO, social media marketing, Google Ads, lead generation, performance marketing and analytics.",
  url: PAGE_URL,
  serviceType: [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Google Ads Management",
    "Lead Generation",
    "Performance Marketing",
    "Analytics and Reporting",
  ],
  provider: {
    "@type": "Organization",
    name: "TechBeacon Solutions",
    url: BASE_URL,
  },
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
};

// Breadcrumb structured data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digital Marketing",
      item: PAGE_URL,
    },
  ],
};

// FAQ structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which digital marketing services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services can include SEO, social media marketing, Google Ads, lead generation, performance marketing, and analytics, based on your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is digital marketing suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A focused strategy can help small businesses build visibility and generate enquiries. The best channels depend on your target audience, location, goals, and budget.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can I expect results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid advertising may generate traffic and enquiries soon after launch, depending on the campaign and offer. SEO generally takes longer. Results vary, and no specific outcome can be guaranteed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide customized marketing plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The recommended approach should be based on your business objectives, target customers, current online presence, and available budget.",
      },
    },
  ],
};

function renderJsonLd(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(serviceSchema)}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(breadcrumbSchema)}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(faqSchema)}
      />

      {/* Existing Page UI */}
      <DigitalMarketingClient />
    </>
  );
}
