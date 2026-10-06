import type { SiteSettingsContent } from "@/lib/content";
import { Lines } from "./Lines";

export default function Footer({ settings }: { settings: SiteSettingsContent }) {
  const footer = settings.footer;
  const links = footer?.links ?? [];
  const socials = settings.socialLinks ?? [];
  const contacts = footer?.contacts ?? [];

  return (
    <footer className="w-full overflow-x-hidden px-3 pb-4 md:pb-10 pt-16 text-[#111111] sm:px-6 lg:pt-20">
      {/* Wordmark + form */}
      <div className="grid grid-cols-12 items-start gap-x-6 gap-y-10">
        <p className="col-span-12 text-8xl font-serif leading-none text-[#B4432E] lg:col-span-6">
          {footer?.wordmark}
        </p>

        <form
          className="col-span-12 lg:col-start-9 lg:col-span-4"

        >
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-email"
            type="email"
            name="email"
            placeholder={footer?.emailPlaceholder ?? ""}
            className="w-full rounded-md border border-[#111111] bg-transparent px-4 py-3.5 text-base outline-none placeholder:text-[#111111]/45 focus-visible:ring-2 focus-visible:ring-[#111111]/20"
          />
          {footer?.emailHint && (
            <p className="mt-2 text-sm text-[#111111]/55">{footer.emailHint}</p>
          )}
        </form>
      </div>

      {/* Rule */}
      <hr className="mt-12 border-t border-[#111111] lg:mt-20" />

      {/* Columns — one per row on phones, four across from lg */}
      <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-6 md:gap-y-10 text-sm md:text-base font-semibold leading-tight lg:mt-16">
        <nav className="col-span-12 flex flex-col sm:col-span-6 lg:col-span-3">
          {links.map((item) => (
            <a key={item.href + item.title} href={item.href} className="w-fit">
              {item.title}
            </a>
          ))}
        </nav>

        <address className="col-span-12 not-italic sm:col-span-6 lg:col-start-4 lg:col-span-4">
          <Lines text={footer?.address} />
        </address>

        <nav className="col-span-12 flex flex-col sm:col-span-6 lg:col-start-8 lg:col-span-3">
          {socials.map((item) => (
            <a
              key={item.href + item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="w-fit"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="col-span-12 flex min-w-0 flex-col sm:col-span-6 lg:col-start-11 lg:col-span-2">
          {contacts.map((item) => (
            <a
              key={item.href + item.title}
              href={item.href}
              className={
                item.href.startsWith("mailto:")
                  ? "w-fit break-all underline underline-offset-2"
                  : "w-fit"
              }
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm md:text-base font-semibold lg:mt-12">
        <p>{footer?.legalLeft}</p>
        <p>{footer?.legalRight}</p>
      </div>
    </footer>
  );
}
