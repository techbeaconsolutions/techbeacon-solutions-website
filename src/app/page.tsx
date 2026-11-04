
import type { Metadata } from "next";
import HomePage from "./components/home/HomePage";

export const metadata: Metadata = {
  title: "Website Development Company in Pune | TechBeacon",
  description:
    "Looking for a website development company in Pune? TechBeacon Solutions builds business websites, custom software, mobile apps, and digital marketing solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechBeacon Solutions | Website Development in Pune",
    description:
      "Grow your business with professional website development, custom software, SEO, and digital marketing services in Pune.",
    url: "https://techbeaconsolutions.com/",
    siteName: "TechBeacon Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        alt: "TechBeacon Solutions",
      },
    ],
  },
};

export default function Page() {
  return <HomePage />;
}
