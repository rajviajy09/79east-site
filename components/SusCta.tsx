import type { SustainabilityContent } from "@/lib/content";
import { Lines } from "./Lines";
import ArrowButton2 from "./Button2/ArrowButton2";

export default function SusCta({ data }: { data: SustainabilityContent["cta"] }) {
  return (
    <section className="w-full px-3 py-8 md:px-8 md:py-14">
      <div className="rounded-[1rem] bg-[#B4432E] px-8 py-12 text-[#EBDFCB] md:rounded-[2rem] md:px-16 md:py-16 lg:px-24">
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-8">
          <h2 className="col-span-12 text-xl font-serif leading-[1.1] md:col-span-5 md:text-5xl">
            <Lines text={data?.heading} />
          </h2>

          <div className="col-span-12 flex flex-col items-start gap-6 md:col-start-7 md:col-span-6">
            <p className="text-base font-medium leading-[1.3] tracking-[-0.01em] md:text-xl">
              <Lines text={data?.text} />
            </p>

            {data?.buttonLabel && (
              <ArrowButton2 name={data.buttonLabel} href={data.buttonHref || undefined} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
