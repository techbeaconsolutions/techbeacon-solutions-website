
import type { Metadata } from "next";
import SEOClient from "./SEOClient";

export const metadata: Metadata = {
  title: "SEO Services | Improve Google Rankings | TechBeacon Solutions",
  description:
    "Improve your website's search visibility with SEO services from TechBeacon Solutions, including technical SEO, on-page optimization, local SEO, keyword research, and content strategy.",
  keywords: [
    "SEO services",
    "SEO company",
    "search engine optimization",
    "technical SEO",
    "on-page SEO",
    "local SEO services",
    "keyword research",
    "website SEO optimization",
    "TechBeacon Solutions",
  ],
  alternates: {
    canonical: "https://techbeaconsolutions.com/seo-services",
  },
  openGraph: {
    title: "SEO Services | TechBeacon Solutions",
    description:
      "Help customers discover your business with a practical SEO strategy built around search visibility, relevant content, and measurable improvements.",
    url: "https://techbeaconsolutions.com/seo-services",
    siteName: "TechBeacon Solutions",
    type: "website",
  },
};

export default function SEOPage() {
  return <SEOClient />;
}
