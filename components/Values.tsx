import type { HomeContent } from "@/lib/content";
import { Lines } from "./Lines";

export default function Values({ data }: { data: HomeContent["values"] }) {
  return (
    <section className="w-full px-3 md:px-6 py-4 lg:py-10">
      <div className="grid grid-cols-12 gap-x-6 bg-[#816e4d] rounded-t-[2rem] text-[#EDE6D8] py-12 md:py-16 px-4 md:px-10">
        <h2 className="col-span-12 text-3xl md:text-5xl font-serif leading-none lg:col-span-5">
          <Lines text={data?.heading} />
        </h2>

        <p className="col-span-12 mt-6 max-w-[56ch] text-base md:text-lg font-medium leading-snug lg:col-start-7 lg:col-span-6 lg:mt-1">
          {data?.intro}
        </p>
      </div>
      <div className="rounded-b-[2rem] bg-[#816e4d] text-[#EDE6D8] py-12 md:py-16 px-4 md:px-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {data?.items?.map((value) => (
            <article
              key={value.title}
              className="flex min-h-[14rem] flex-col justify-between border-l border-[#EDE6D8] pl-5 pr-6"
            >
              <h3 className="max-w-[16ch] text-2xl md:text-3xl font-serif leading-none">
                {value.title}
              </h3>

              <p className="mt-6 md:mt-12 max-w-[46ch] text-sm md:text-base font-medium leading-snug">
                {value.body}
              </p>
            </article>
          ))}
        </div>

        {data?.closingText && (
          <div className="mt-14 flex flex-wrap items-baseline gap-x-4 gap-y-3 border-t border-[#EDE6D8]/30 pt-8">
            <p className="font-serif text-2xl leading-tight md:text-4xl">{data.closingText}</p>
            {data.closingButtonLabel && data.closingButtonHref && (
              <a
                href={data.closingButtonHref}
                className="text-sm font-semibold uppercase tracking-[0.14em] underline underline-offset-4 transition-opacity hover:opacity-70 md:text-base"
              >
                {data.closingButtonLabel} →
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
