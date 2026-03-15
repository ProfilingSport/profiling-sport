import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const BASE_URL = "https://profiling-sport.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "PRofiling | Elite Sports Anthropometry",
  description:
    "Audit clinique de composition corporelle par anthropométrie ISAK. Conseil en optimisation pour clubs professionnels et athlètes premium.",
  keywords: [
    "Paul Rettien",
    "PRofiling",
    "profiling sport",
    "anthropométrie",
    "anthropométrie sportive",
    "ISAK",
    "composition corporelle",
    "somatotype",
    "plis cutanés",
    "sport",
    "performance",
    "Rouen",
    "Normandie",
    "audit corporel",
    "nutrition du sport",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "PRofiling",
    title: "PRofiling | Elite Sports Anthropometry",
    description:
      "Audit clinique de composition corporelle par anthropométrie ISAK. Conseil en optimisation pour clubs professionnels et athlètes premium.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PRofiling — Anthropométrie ISAK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRofiling | Elite Sports Anthropometry",
    description:
      "Audit clinique de composition corporelle par anthropométrie ISAK. Conseil en optimisation pour clubs professionnels et athlètes premium.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "PRofiling",
              url: "https://profiling-sport.vercel.app",
              description:
                "Audit clinique de composition corporelle par anthropométrie ISAK. Conseil en optimisation pour clubs professionnels et athlètes premium.",
              founder: {
                "@type": "Person",
                name: "Paul Rettien",
                jobTitle: "Anthropométriste certifié ISAK",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 49.4432,
                  longitude: 1.0999,
                },
                geoRadius: "200000",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rouen",
                addressRegion: "Normandie",
                addressCountry: "FR",
              },
              priceRange: "€€",
              knowsAbout: [
                "Anthropométrie ISAK",
                "Composition corporelle",
                "Nutrition du sport",
                "Somatotype",
                "Plis cutanés",
              ],
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-cyan-accent focus:text-bg-primary focus:rounded focus:font-semibold focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <div className="gradient-line" />
        <Footer />
      </body>
    </html>
  );
}
