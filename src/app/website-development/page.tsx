
import type { Metadata } from "next";
import WebsiteDevelopmentClient from "./WebsiteDevelopmentClient";

export const metadata: Metadata = {
  title:
    "Website Development Company in Pune | TechBeacon Solutions",

  description:
    "Looking for a website development company in Pune? TechBeacon Solutions builds responsive business websites, landing pages, e-commerce stores and custom web applications.",

  alternates: {
    canonical:
      "https://techbeaconsolutions.com/website-development",
  },

  openGraph: {
    title:
      "Website Development Company in Pune | TechBeacon Solutions",

    description:
      "Build a professional, responsive and SEO-friendly website for your Pune business with TechBeacon Solutions.",

    url: "https://techbeaconsolutions.com/website-development",
    siteName: "TechBeacon Solutions",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Website Development Company in Pune | TechBeacon Solutions",

    description:
      "Responsive business websites, landing pages, e-commerce websites and custom web solutions.",
  },
};

export default function WebsiteDevelopmentPage() {
  return <WebsiteDevelopmentClient />;
}
