
import type { Metadata } from "next";
import WebsiteDevelopmentClient from "./WebsiteDevelopmentClient";

export const metadata: Metadata = {
  title: "Website Development Company in Pune",
  description:
    "Looking for website development in Pune? TechBeacon Solutions builds responsive business websites, landing pages, and custom web solutions.",
  alternates: {
    canonical: "https://techbeaconsolutions.com/website-development",
  },
  openGraph: {
    title: "Website Development Company in Pune | TechBeacon Solutions",
    description:
      "Build a responsive, SEO-friendly website for your business with TechBeacon Solutions in Pune.",
    url: "https://techbeaconsolutions.com/website-development",
    siteName: "TechBeacon Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Pune",
    description:
      "Responsive business websites, landing pages, and custom web solutions from TechBeacon Solutions.",
  },
};

export default function WebsiteDevelopmentPage() {
  return <WebsiteDevelopmentClient />;
}
