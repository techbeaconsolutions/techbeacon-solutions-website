
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact TechBeacon Solutions | Discuss Your Project",
  description:
    "Contact TechBeacon Solutions to discuss website development, custom software, AI automation, SEO and digital marketing for your business.",
  alternates: {
    canonical: "https://techbeaconsolutions.com/contact",
  },
  openGraph: {
    title: "Contact TechBeacon Solutions | Discuss Your Project",
    description:
      "Let's discuss your website, software, SEO or digital marketing requirements. Get in touch with TechBeacon Solutions.",
    url: "https://techbeaconsolutions.com/contact",
    siteName: "TechBeacon Solutions",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
