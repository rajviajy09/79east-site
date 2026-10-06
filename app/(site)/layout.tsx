import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { getSiteSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: settings.defaults.title || "79 East",
    description: settings.defaults.description || undefined,
  };
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();

  return (
    <>
      <SmoothScroll>
        <Navbar
          links={[...settings.menuLinks]}
          socials={[...settings.socialLinks]}
          email={settings.email}
        />
      </SmoothScroll>
      {children}
    </>
  );
}
