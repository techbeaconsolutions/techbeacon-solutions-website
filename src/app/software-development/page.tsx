import type { Metadata } from "next";
import SoftwareDevelopmentClient from "./SoftwareDevelopmentClient";

export const metadata: Metadata = {
  title: "Custom Software Development Services | TechBeacon Solutions",
  description:
    "TechBeacon Solutions builds custom software, business applications, and scalable digital solutions tailored to your business needs.",
  alternates: {
    canonical: "https://techbeaconsolutions.com/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
  return <SoftwareDevelopmentClient />;
}