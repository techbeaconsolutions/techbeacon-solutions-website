import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

import ScrollToTop from "./components/ScrollToTop";
import FloatingAuditCTA from "./components/FloatingAuditCTA";
import EmotionRegistry from "./lib/EmotionRegistry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dmsans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techbeacon-web.vercel.app"),
  title: "Techbeacon | Innovate Smarter",
  description:
    "Techbeacon helps local businesses and startups grow through Google Maps, Local SEO, WhatsApp lead systems, and modern web & mobile solutions in Pune.",
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "https://techbeacon-web.vercel.app" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dmSans.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* ✅ Emotion MUST wrap everything that uses MUI */}
        <EmotionRegistry>
          {/* SEO schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Techbeacon",
                url: "https://techbeacon-web.vercel.app",
                logo: "https://techbeacon-web.vercel.app/favicon.png",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "MH",
                  addressCountry: "IN",
                },
              }),
            }}
          />

          {children}

          {/* Global UI helpers */}
          <ScrollToTop />
          <FloatingAuditCTA />
        </EmotionRegistry>
      </body>
    </html>
  );
}
