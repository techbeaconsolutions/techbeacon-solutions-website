
import type { Metadata } from "next";
import AIWhatsAppAutomationClient from "./AIWhatsAppAutomationClient";

export const metadata: Metadata = {
  title: "AI & WhatsApp Automation Services | TechBeacon Solutions",
  description:
    "Automate customer conversations, qualify leads, manage enquiries, and streamline business workflows with AI and WhatsApp automation solutions from TechBeacon Solutions.",
  keywords: [
    "AI automation services",
    "WhatsApp Business automation",
    "WhatsApp chatbot development",
    "AI chatbot development",
    "business process automation",
    "automated lead generation",
    "WhatsApp API integration",
    "AI customer support",
    "TechBeacon Solutions",
  ],
  alternates: {
    canonical:
      "https://techbeaconsolutions.com/ai-whatsapp-automation",
  },
  openGraph: {
    title: "AI & WhatsApp Automation | TechBeacon Solutions",
    description:
      "Work smarter with AI-powered customer conversations, WhatsApp automation, and connected business workflows.",
    url: "https://techbeaconsolutions.com/ai-whatsapp-automation",
    siteName: "TechBeacon Solutions",
    type: "website",
  },
};

export default function AIWhatsAppAutomationPage() {
  return <AIWhatsAppAutomationClient />;
}
