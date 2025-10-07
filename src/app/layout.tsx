import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    "Techbeacon builds modern web, mobile, and cloud solutions to help your business grow. Let’s innovate together.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Techbeacon | Innovate Smarter",
    description:
      "Techbeacon builds modern web, mobile, and cloud solutions to help your business grow. Let’s innovate together.",
    url: "https://techbeacon-web.vercel.app",
    siteName: "Techbeacon",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Techbeacon Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techbeacon | Innovate Smarter",
    description:
      "Techbeacon builds modern web, mobile, and cloud solutions to help your business grow. Let’s innovate together.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dmSans.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
        <ScrollToTop /> {/* ✅ Floating scroll-to-top button inside the same body */}
      </body>
    </html>
  );
}
