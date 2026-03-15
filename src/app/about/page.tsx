import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "À Propos | PRofiling",
  description:
    "Paul Rettien, anthropométriste certifié ISAK, Master en Nutrition du Sport, athlète de fond. Fondateur de PRofiling.",
  openGraph: {
    title: "À Propos | PRofiling",
    description:
      "Paul Rettien, anthropométriste certifié ISAK, Master en Nutrition du Sport, athlète de fond. Fondateur de PRofiling.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | PRofiling",
    description:
      "Paul Rettien, anthropométriste certifié ISAK, Master en Nutrition du Sport, athlète de fond. Fondateur de PRofiling.",
    images: ["/images/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <About />;
}
