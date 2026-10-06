"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type NavItem = { title: string; href: string };

type NavbarProps = {
  links: NavItem[];
  socials: NavItem[];
  email: string;
};

export default function Navbar({ links, socials, email }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const root = useRef<HTMLDivElement>(null);
  const scrim = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Panel slides, scrim fades. The contents just ride along.
  useGSAP(
    () => {
      gsap.set(scrim.current, { autoAlpha: 0 });
      gsap.set(panel.current, { xPercent: 100 });

      timeline.current = gsap
        .timeline({ paused: true })
        .to(
          scrim.current,
          { autoAlpha: 1, duration: 0.4, ease: "power2.out" },
          0,
        )
        .to(
          panel.current,
          { xPercent: 0, duration: 0.6, ease: "power3.out" },
          0,
        );
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (!timeline.current) return;
      if (open) timeline.current.play();
      else timeline.current.reverse();
    },
    { dependencies: [open], scope: root },
  );

  // Escape closes; lock the page behind it.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={root}>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          open ? "text-[#EDE6D8]" : "text-[#111111]"
        }`}
      ><div className="flex items-center justify-between border-b border-[#111111]/5 bg-[#EDE6D8]/50 px-3 py-2 backdrop-blur-xs backdrop-saturate-100 sm:px-4 md:py-2">
          <a
            href="/"
            className="text-base font-bold tracking-[-0.01em] sm:text-lg"
          >
            79EAST
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="cursor-pointer text-base font-bold tracking-[-0.01em] transition-opacity duration-200 hover:opacity-60 sm:text-lg"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Overlay layer — never blocks pointer events itself */}
      <div
        className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
        aria-hidden={!open}
      >
        <div
          ref={scrim}
          onClick={() => setOpen(false)}
          className="pointer-events-auto absolute inset-0 bg-[#111111]/40 backdrop-blur-[2px]"
        />

        <aside
          ref={panel}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="pointer-events-auto absolute inset-y-0 right-0 flex w-[70vw] max-w-[560px] flex-col justify-between gap-12 overflow-y-auto overscroll-contain bg-[#B4432E] px-6 pb-8 pt-24 text-[#EDE6D8] sm:w-[50vw] sm:px-8 md:w-[30vw] md:pt-28 lg:w-[30vw] lg:min-w-[360px] xl:w-[30vw]"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href + link.title}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-fit text-[2rem] font-bold leading-[1.15] tracking-[-0.03em] transition-opacity duration-200 hover:opacity-60 sm:text-[2.5rem] lg:text-[clamp(2.25rem,2.4vw,3rem)]"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-[0.01em] sm:text-base">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((social) => (
                <a
                  key={social.href + social.title}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity duration-200 hover:opacity-60"
                >
                  {social.title}
                </a>
              ))}
            </div>

            {email && (
              <a
                href={`mailto:${email}`}
                className="w-fit break-all underline underline-offset-4 transition-opacity duration-200 hover:opacity-60"
              >
                {email}
              </a>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}