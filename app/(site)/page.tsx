import type { Metadata } from "next";
import About from "@/components/About";
import CtaBanner from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Ledger from "@/components/Ledger";
import Values from "@/components/Values";
import { getHome, getSiteSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHome();
  return {
    title: seo.title || undefined,
    description: seo.description || undefined,
  };
}

export default async function Home() {
  const [home, settings] = await Promise.all([getHome(), getSiteSettings()]);

  return (
    <main>
      <Hero data={home.hero} />
      <About data={home.intro} />
      <Values data={home.values} />
      <Ledger data={home.ledger} />
      <HowItWorks data={home.howItWorks} />
      <CtaBanner data={home.ctaBanner} />
      <Footer settings={settings} />
    </main>
  );
}
