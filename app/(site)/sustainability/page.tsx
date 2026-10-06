import type { Metadata } from "next";
import Footer from "@/components/Footer";
import SusCta from "@/components/SusCta";
import SusHero from "@/components/SusHero";
import SusVetting from "@/components/SusVetting";
import { getSiteSettings, getSustainability } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSustainability();
  return {
    title: seo.title || undefined,
    description: seo.description || undefined,
  };
}

export default async function SustainabilityPage() {
  const [page, settings] = await Promise.all([getSustainability(), getSiteSettings()]);

  return (
    <div>
      <SusHero data={page.hero} />
      <SusVetting data={page.practices} />
      <SusCta data={page.cta} />
      <Footer settings={settings} />
    </div>
  );
}
