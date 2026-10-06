import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

// Reads the JSON files in /content (the same files the /keystatic admin edits).
// Every page is built statically, so this runs at build time.
const reader = createReader(process.cwd(), keystaticConfig);

async function must<T>(read: Promise<T | null>, file: string): Promise<T> {
  const data = await read;
  if (!data) throw new Error(`Missing content file: ${file}`);
  return data;
}

export const getHome = () => must(reader.singletons.home.read(), "content/home.json");
export const getAbout = () => must(reader.singletons.about.read(), "content/about.json");
export const getSustainability = () =>
  must(reader.singletons.sustainability.read(), "content/sustainability.json");
export const getSiteSettings = () =>
  must(reader.singletons.siteSettings.read(), "content/site-settings.json");

export type HomeContent = Awaited<ReturnType<typeof getHome>>;
export type AboutContent = Awaited<ReturnType<typeof getAbout>>;
export type SustainabilityContent = Awaited<ReturnType<typeof getSustainability>>;
export type SiteSettingsContent = Awaited<ReturnType<typeof getSiteSettings>>;

// Image fields are stored as a ready-to-use path such as "/uploads/hero.webp"
// (the file itself lives in /public/uploads). Empty means "no image".
export function img(file: string | null | undefined): string | undefined {
  return file || undefined;
}
