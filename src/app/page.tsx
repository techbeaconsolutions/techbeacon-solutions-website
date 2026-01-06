import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata = {
  title: "Custom Web & Mobile App Development Company | Techbeacon",
  description:
    "Techbeacon is a software development company offering web development, mobile app development, and custom software solutions.",
  openGraph: {
    title: "Techbeacon – Digital Growth Partner",
    description:
      "Custom web, mobile, and software development solutions for startups and enterprises.",
    images: [
      {
        url: "/social-preview.png",
        alt: "Techbeacon software development company",
      },
    ],
  },
};


export default function Page() {
  return (
    <>
      <HomePage />
    </>
  );
}
