import type { AboutContent } from "@/lib/content";

export default function AboutRows({ data }: { data: AboutContent["story"] }) {
  return (
    <section className="w-full px-3 md:px-0 md:py-12 md:mt-12">
      {data?.rows?.map((row) => (
        <div
          key={row.title}
          className="grid grid-cols-12 gap-x-6 gap-y-6 border-t border-[#111111] pb-16 pt-8 md:pb-32 md:pt-14"
        >
          <h2 className="col-span-12 text-xl md:text-5xl font-serif leading-[1.1] md:col-start-2 md:col-span-5">
            {row.title}
          </h2>

          <p className="col-span-12 text-sm md:text-xl font-medium leading-none md:col-start-7 md:col-span-5">
            {row.body}
          </p>
        </div>
      ))}
    </section>
  );
}
