
import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services | TechBeacon Solutions",
  description:
    "Grow your business with digital marketing services from TechBeacon Solutions, including SEO, social media marketing, Google Ads, lead generation, and performance marketing.",
  keywords: [
    "digital marketing company",
    "digital marketing services",
    "SEO services",
    "social media marketing",
    "Google Ads management",
    "lead generation services",
    "performance marketing",
    "TechBeacon Solutions",
  ],
  alternates: {
    canonical: "https://techbeaconsolutions.com/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services | TechBeacon Solutions",
    description:
      "Reach the right audience, generate quality leads, and grow your business with digital marketing solutions from TechBeacon Solutions.",
    url: "https://techbeaconsolutions.com/digital-marketing",
    siteName: "TechBeacon Solutions",
    type: "website",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
