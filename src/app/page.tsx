import Hero from "@/components/Hero";
import AiguillageCards from "@/components/AiguillageCards";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="gradient-line" />
      <AiguillageCards />
      <FAQ />
    </>
  );
}
