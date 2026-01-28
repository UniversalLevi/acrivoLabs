import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://acrivolabs.com"), // Update with actual domain
  title: {
    default: "Acrivo Labs | Modern Digital Experiences for Growing Businesses",
    template: "%s | Acrivo Labs",
  },
  description:
    "We design and build modern digital experiences for growing businesses. Branding, websites, UI/UX, and marketing creatives — crafted with clarity and purpose.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "UI/UX design",
    "digital agency",
    "creative agency",
  ],
  authors: [{ name: "Acrivo Labs" }],
  creator: "Acrivo Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acrivolabs.com",
    title: "Acrivo Labs | Modern Digital Experiences",
    description:
      "We design and build modern digital experiences for growing businesses.",
    siteName: "Acrivo Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acrivo Labs | Modern Digital Experiences",
    description:
      "We design and build modern digital experiences for growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
