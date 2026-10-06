import type { Metadata } from "next";
import About from "@/components/About";
import CtaBanner from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Values from "@/components/Values";
import Vetting from "@/components/Vetting";
import { getHome, getSiteSettings, img } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHome();
  return {
    title: seo.title || undefined,
    description: seo.description || undefined,
  };
}

export default async function Home() {
  const [home, settings] = await Promise.all([getHome(), getSiteSettings()]);

  const vettingCards = home.vetting.cards.map((card) => ({
    title: card.title,
    body: card.body,
    matters: card.matters,
    imageSrc: img(card.image),
    imageAlt: card.imageAlt,
  }));

  return (
    <main>
      <Hero data={home.hero} />
      <About data={home.intro} />
      <Values data={home.values} />
      <Vetting
        heading={home.vetting.heading}
        intro={home.vetting.intro}
        cards={vettingCards}
      />
      <HowItWorks data={home.howItWorks} />
      <CtaBanner data={home.ctaBanner} />
      <Footer settings={settings} />
    </main>
  );
}
