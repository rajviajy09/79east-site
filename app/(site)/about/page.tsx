import type { Metadata } from "next";
import Manifesto from "@/components/AboutHero";
import AboutValues from "@/components/AboutHow";
import AboutRows from "@/components/AboutRows";
import Footer from "@/components/Footer";
import TransformCta from "@/components/TransformCta";
import { getAbout, getSiteSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAbout();
  return {
    title: seo.title || undefined,
    description: seo.description || undefined,
  };
}

export default async function AboutPage() {
  const [about, settings] = await Promise.all([getAbout(), getSiteSettings()]);

  return (
    <div>
      <Manifesto data={about.hero} />
      <AboutRows data={about.story} />
      <AboutValues data={about.values} />
      <TransformCta data={about.cta} />
      <Footer settings={settings} />
    </div>
  );
}
