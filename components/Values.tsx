import type { HomeContent } from "@/lib/content";
import { Lines } from "./Lines";

export default function Values({ data }: { data: HomeContent["values"] }) {
  return (
    <section className="w-full px-3 md:px-6 py-4 lg:py-10">
      <div className="grid grid-cols-12 gap-x-6 bg-[#816e4d] rounded-t-[2rem] text-[#EDE6D8] py-12 md:py-16 px-4 md:px-10">
        <h2 className="col-span-12 text-3xl md:text-5xl font-serif leading-none lg:col-span-7">
          <Lines text={data?.heading} />
        </h2>

        <p className="col-span-12 mt-6 max-w-[48ch] text-base md:text-xl font-medium leading-none lg:col-start-9 lg:col-span-4 lg:mt-3">
          {data?.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-3 md:gap-y-0 rounded-b-[2rem] bg-[#816e4d] text-[#EDE6D8] py-12 md:py-16 px-4 md:px-10">
        {data?.items?.map((value) => (
          <article
            key={value.title}
            className="flex min-h-[16rem] flex-col justify-between border-l border-[#EDE6D8] pl-5 pr-8"
          >
            <h3 className="max-w-[20ch] text-2xl md:text-4xl font-serif leading-none">
              {value.title}
            </h3>

            <p className="mt-6 md:mt-16 max-w-[46ch] text-sm md:text-lg font-medium leading-tight">
              {value.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
