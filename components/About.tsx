import type { HomeContent } from "@/lib/content";
import { img } from "@/lib/content";
import ArrowButton2 from "./Button2/ArrowButton2";

export default function About({ data }: { data: HomeContent["intro"] }) {
  const src = img(data?.image);

  return (
    <section className="w-full py-20 text-[#111111] lg:py-28">
      <div className="mx-auto max-w-[1200px] items-center px-3 md:flex md:px-6">

        {/* Image — sits ON TOP of the card */}
        <div className="relative z-10 md:w-[56%]">
          {src && (
            <img
              src={src}
              alt={data?.imageAlt ?? ""}
              className="aspect-[16/8] w-full object-cover rounded-4xl"
            />
          )}
        </div>

        {/* Orange card — behind the image, taller than it */}
        <div className="relative z-0 md:-ml-[6%] md:w-[46%]">
          <div className="mt-6 flex flex-col justify-center rounded-[1rem] bg-[#B4432E] px-3 py-6 text-[#EDE6D8] md:mt-0 md:min-h-[380px] md:py-12 md:pl-[20%] md:pr-8 lg:min-h-[400px]">

            <div className="flex max-w-[420px] flex-col items-start">
              <p className="text-lg font-medium leading-[0.95] md:text-2xl">
                {data?.text}
              </p>

              {data?.ctaLabel && (
                <div className="mt-12">
                  <ArrowButton2 name={data.ctaLabel} href={data.ctaHref || undefined} />
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
