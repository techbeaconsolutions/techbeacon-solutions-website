
import type { Metadata } from "next";
import HomePage from "./components/home/HomePage";

export const metadata: Metadata = {
  title: "Website Development Company in Pune",

  description:
    "TechBeacon Solutions helps businesses grow with professional website development, custom software, digital marketing and SEO services in Pune and across India.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "TechBeacon Solutions | Website Development Company in Pune",

    description:
      "Build your digital presence with professional websites, custom software and digital marketing solutions. Let's grow your business.",

    url: "https://techbeaconsolutions.com/",

    siteName: "TechBeacon Solutions",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/favicon.png",
        alt: "TechBeacon Solutions Official Logo",
      },
    ],
  },
};

export default function Page() {
  return <HomePage />;
}
