import type { SustainabilityContent } from "@/lib/content";
import { img } from "@/lib/content";

export default function SusVetting({ data }: { data: SustainabilityContent["practices"] }) {
  return (
    <section className="w-full overflow-hidden py-24 text-[#111111] lg:py-28">

      {/* Header */}
      <div className="grid grid-cols-12 gap-x-6 px-3 md:px-6">
        <h2 className="col-span-12 font-serif text-3xl leading-none md:text-5xl lg:col-span-7">
          {data?.heading}
        </h2>

        <p className="col-span-12 mt-6 max-w-[48ch] text-base font-medium leading-none md:text-xl lg:col-start-10 lg:col-span-4 lg:mt-3">
          {data?.intro}
        </p>
      </div>

      {/* Cards */}
      <div className="mt-24 grid grid-cols-1 gap-6 px-3 md:grid-cols-3 md:gap-6 md:px-16 lg:gap-8">
        {data?.cards?.map((card) => {
          const src = img(card.image);
          return (
            <article
              key={card.title}
              className="flex w-full flex-col rounded-4xl border p-6"
            >
              {src && (
                <img
                  src={src}
                  alt={card.imageAlt}
                  draggable={false}
                  className="aspect-[472/325] w-full rounded-2xl object-cover"
                />
              )}

              <h3 className="mt-10 font-serif text-2xl leading-none md:mt-12 md:text-4xl">
                {card.title}
              </h3>

              <p className="mt-5 text-xs font-medium leading-tight md:text-base">
                {card.body}
              </p>
            </article>
          );
        })}
      </div>

    </section>
  );
}
