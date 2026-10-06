import type { AboutContent } from "@/lib/content";
import { Lines } from "./Lines";
import ArrowButton from "./Button/ArrowButton";

export default function TransformCta({ data }: { data: AboutContent["cta"] }) {
  return (
    <section className="w-full px-3 md:px-0 py-6 md:py-12">
      <div className="grid grid-cols-12 gap-x-6 gap-y-6 border-t border-[#111111] pb-24 pt-10 md:pb-32 md:pt-14">
        <h2 className="col-span-12 text-xl md:text-5xl font-serif leading-[1.1] tracking-[-0.025em] md:col-span-3 md:col-start-2">
          <Lines text={data?.heading} />
        </h2>

        <div className="col-span-12 flex flex-col items-start gap-6 self-start md:col-start-7 md:col-span-4">
          <p className="text-base md:text-xl font-medium leading-[1.1] tracking-[-0.01em]">
            <Lines text={data?.text} />
          </p>

          {data?.buttonLabel && (
            <ArrowButton name={data.buttonLabel} href={data.buttonHref || undefined} />
          )}
        </div>
      </div>
    </section>
  );
}
