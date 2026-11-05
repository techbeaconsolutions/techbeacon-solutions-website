import type { Metadata } from "next";
import SoftwareDevelopmentClient from "./SoftwareDevelopmentClient";

export const metadata: Metadata = {
  title: "Custom Software Development Company in Pune | TechBeacon",
  description:
    "TechBeacon Solutions is a custom software development company in Pune, building business applications, web platforms, dashboards, and API integrations around your requirements.",
  alternates: {
    canonical: "https://techbeaconsolutions.com/software-development",
  },
  openGraph: {
    title: "Custom Software Development Company in Pune | TechBeacon Solutions",
    description:
      "Plan and build custom business software, web applications, dashboards, and integrations with TechBeacon Solutions in Pune.",
    url: "https://techbeaconsolutions.com/software-development",
    siteName: "TechBeacon Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Pune | TechBeacon",
    description:
      "Custom business software, web applications, dashboards, and API integrations for businesses in Pune.",
  },
};

export default function SoftwareDevelopmentPage() {
  return <SoftwareDevelopmentClient />;
}
