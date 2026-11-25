import type { HomeContent } from "@/lib/content";
import { Lines } from "./Lines";

export default function Ledger({ data }: { data: HomeContent["ledger"] }) {
  const paragraphs = (data?.intro ?? "").split(/\n\s*\n/).filter((p) => p.trim());

  return (
    <section className="w-full py-16 text-[#111111] lg:py-28">
      {/* Header */}
      <div className="grid grid-cols-12 gap-x-6 px-3 md:px-6">
        <h2 className="col-span-12 font-serif text-3xl leading-[1.1] md:text-5xl lg:col-span-6">
          <Lines text={data?.heading} />
        </h2>

        <div className="col-span-12 mt-6 max-w-[56ch] space-y-4 text-base font-medium leading-snug md:text-lg lg:col-span-5 lg:col-start-8 lg:mt-1">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Ledger */}
      <div className="mt-14 px-3 md:px-6 lg:mt-20">
        <div className="hidden grid-cols-12 gap-x-6 border-t border-[#111111] py-4 text-xs font-semibold uppercase tracking-[0.14em] md:grid">
          <span className="col-span-3">Credit</span>
          <span className="col-span-5">Particulars</span>
          <span className="col-span-4">Benchmark code</span>
        </div>

        {data?.rows?.map((row) => (
          <div
            key={row.credit}
            className="grid grid-cols-1 gap-y-3 border-t border-[#111111] py-6 md:grid-cols-12 md:gap-x-6 md:py-8"
          >
            <h3 className="font-serif text-2xl leading-tight md:col-span-3 md:text-3xl">
              {row.credit}
            </h3>

            <p className="text-sm font-medium leading-snug md:col-span-5 md:text-base">
              {row.particulars}
            </p>

            <div className="md:col-span-4">
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em] opacity-60 md:hidden">
                Benchmark code
              </span>
              <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] md:text-sm">
                <Lines text={row.benchmark} />
              </p>
            </div>
          </div>
        ))}

        <div className="border-t border-[#111111]" />
      </div>

      {data?.closing && (
        <p className="mt-10 px-3 font-serif text-2xl leading-tight md:px-6 md:text-4xl">
          {data.closing}
        </p>
      )}
    </section>
  );
}
