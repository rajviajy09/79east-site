import type { SustainabilityContent } from "@/lib/content";
import { img } from "@/lib/content";
import { Lines } from "./Lines";
import ArrowButton from "./Button/ArrowButton";

export default function SusHero({ data }: { data: SustainabilityContent["hero"] }) {
  const bg = img(data.backgroundImage);

  return (
    <section className="relative isolate h-[80vh] md:h-[60vh] w-full overflow-hidden text-[#111111]">
      {/* Full-bleed cover image */}
      {bg && (
        <img
          src={bg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-contain md:object-cover"
        />
      )}

      {/* 12-col grid: header row / headline row / copy row */}
      <div className="grid h-full grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-6 px-3 md:px-6 py-6">

        <h1 className="col-start-1 col-span-12 row-start-2 mt-12 md:mt-12 self-start font-serif text-4xl md:text-7xl leading-[0.95] lg:col-span-8">
          <Lines text={data.headline} />
        </h1>

        <div className="col-start-1 col-span-12 row-start-3 flex flex-col items-start gap-4 md:gap-6 lg:col-start-10 lg:col-span-5 lg:items-end mb-2">
          {data.description && (
            <p className="text-sm md:text-xl font-medium leading-none lg:text-right">
              {data.description}
            </p>
          )}

          {data.ctaLabel && (
            <ArrowButton name={data.ctaLabel} href={data.ctaHref || undefined} />
          )}
        </div>
      </div>
    </section>
  );
}
