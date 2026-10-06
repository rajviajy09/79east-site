import type { AboutContent } from "@/lib/content";
import { img } from "@/lib/content";
import { BlockLines } from "./Lines";

export default function Manifesto({ data }: { data: AboutContent["hero"] }) {
  const bg = img(data?.backgroundImage);

  return (
    <section className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-3 text-center md:px-8">
      {/* Background */}
      {bg && (
        <img
          src={bg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
        />
      )}

      {/* Centered content */}
      <div className="flex w-full max-w-[900px] flex-col items-center gap-8 md:gap-12">
        <p className="font-serif text-base font-medium leading-tight md:text-3xl">
          <BlockLines text={data?.mantra} />
        </p>

        <h2 className="max-w-[28ch] text-xl font-medium leading-none md:max-w-[34ch] md:text-3xl">
          {data?.heading}
        </h2>
      </div>
    </section>
  );
}
