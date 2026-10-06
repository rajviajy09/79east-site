import type { HomeContent } from "@/lib/content";
import { img } from "@/lib/content";
import { Lines } from "./Lines";
import ArrowButton2 from "./Button2/ArrowButton2";

export default function CtaBanner({ data }: { data: HomeContent["ctaBanner"] }) {
  const left = img(data?.leftIllustration);
  const right = img(data?.rightIllustration);

  return (
    <section className="w-full px-3 md:px-6 py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#B4432E] px-3 md:px-6 py-16 md:py-20 text-[#EDE6D8] md:rounded-[3rem] lg:rounded-[4rem] lg:px-16 lg:py-28">
        {/* Line illustrations — decorative, anchored to the bottom corners */}
        {left && (
          <img
            src={left}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-[3%] hidden w-[18%] select-none md:block"
          />
        )}
        {right && (
          <img
            src={right}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-[2%] right-[3%] hidden w-[18%] select-none md:block"
          />
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-8xl font-serif leading-none">
            <Lines text={data?.heading} />
          </h2>

          <p className="mt-10 text-sm md:text-base font-semibold uppercase leading-tight">
            <Lines text={data?.text} />
          </p>

          {data?.buttonLabel && (
            <div className="group mt-8">
              <ArrowButton2 name={data.buttonLabel} href={data.buttonHref || undefined} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
