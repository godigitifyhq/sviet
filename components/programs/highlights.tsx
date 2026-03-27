import { PROGRAM_HIGHLIGHTS } from "@/components/programs/data";

export function ProgramHighlightsSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
      <h2 className="text-4xl font-extrabold">What Sets SVIET B.Tech CSE Apart</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {PROGRAM_HIGHLIGHTS.map((item) => (
          <div key={item} className="rounded-xl border border-[#e9e9e9] bg-white p-4 text-sm font-semibold text-[#333]">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
