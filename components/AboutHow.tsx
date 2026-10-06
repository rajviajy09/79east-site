import type { AboutContent } from "@/lib/content";

export default function AboutValues({ data }: { data: AboutContent["values"] }) {
  return (
    <section className="w-full px-3 py-16 md:py-4 md:px-8">
      <div className="rounded-[2rem] bg-[#B4432E] px-6 pb-14 pt-12 text-[#EBDFCB] md:rounded-[2.5rem] md:px-10 md:pb-16 md:pt-8">
        {/* Intro */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <h2 className="col-span-12 text-xl md:text-5xl font-serif leading-[1.1] md:col-span-5">
            {data?.heading}
          </h2>

          <p className="col-span-12 text-base md:text-2xl font-medium leading-[1.1] tracking-[-0.02em] md:col-start-7 md:col-span-6">
            {data?.intro}
          </p>
        </div>

        {/* Rows */}
        <div className="mt-20 md:mt-36">
          {data?.items?.map((value) => (
            <div
              key={value.title}
              className="grid grid-cols-12 gap-x-6 gap-y-2 border-t border-white/20 py-5"
            >
              <h3 className="col-span-12 text-base md:text-2xl font-serif leading-[1.45] md:col-span-5">
                {value.title}
              </h3>

              <p className="col-span-12 text-sm md:text-lg leading-tight text-white/80 md:col-start-7 md:col-span-4">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
