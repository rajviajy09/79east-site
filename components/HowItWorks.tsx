import type { HomeContent } from "@/lib/content";
import { img } from "@/lib/content";

export default function HowItWorks({ data }: { data: HomeContent["howItWorks"] }) {
  const src = img(data?.image);

  return (
    <section className="w-full overflow-hidden py-4 text-[#111111] lg:py-28">
      {/* Header */}
      <div className="grid grid-cols-12 gap-x-6 px-3 md:px-6">
        <h2 className="col-span-12 font-serif text-3xl leading-[1.1] md:text-5xl lg:col-span-6">
          {data?.heading}
        </h2>

        <p className="col-span-12 mt-4 max-w-[48ch] text-base font-semibold leading-none md:mt-8 md:text-xl lg:col-span-4 lg:col-start-9 lg:mt-1">
          {data?.intro}
        </p>
      </div>

      {/* Body */}
      <div className="mt-14 grid-cols-12 gap-x-12 px-3 md:grid md:px-6 lg:mt-20">
        {/* Collage — untouched, stays pinned to the full list height */}
        <div className="col-span-12 lg:relative lg:col-span-3 lg:-ml-6">
          {src && (
            <img
              src={src}
              alt={data?.imageAlt ?? ""}
              className="aspect-[4/5] w-full rounded-br-[120px] rounded-tr-[100px] object-cover object-top sm:aspect-[3/2] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          )}
        </div>

        {/* Steps */}
        <div className="col-span-12 mt-12 lg:col-span-9 lg:col-start-4 lg:mt-0">
          {data?.steps?.map((step, i) => (
            <div
              key={`${step.title}-${i}`}
              tabIndex={0}
              className="group grid cursor-default grid-cols-1 gap-x-6 gap-y-4 border-t border-[#111111] pb-12 pt-8 outline-none transition-colors duration-500 ease-out md:pb-12 lg:grid-cols-9 lg:rounded-b-[1rem] lg:px-6 lg:pb-16 lg:pt-10 lg:hover:border-[#B4432E] lg:hover:bg-[#B4432E] lg:hover:text-[#EDE6D8] lg:focus-visible:border-[#B4432E] lg:focus-visible:bg-[#B4432E] lg:focus-visible:text-[#EDE6D8]"
            >
              <h3 className="font-serif text-2xl leading-none transition-transform duration-500 ease-out md:text-3xl lg:col-span-5 lg:pr-8 lg:group-hover:translate-x-2 lg:group-focus-visible:translate-x-2">
                {step.title}
              </h3>

              {/* Space is always reserved, so row height never changes.
                  Visible by default on < lg, revealed on hover/focus on lg+. */}
              <p className="text-sm font-medium leading-tight transition-all duration-500 ease-out md:text-base lg:col-span-3 lg:col-start-7 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
