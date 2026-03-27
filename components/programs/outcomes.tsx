import { PLACEMENT_OUTCOMES } from "@/components/programs/data";

export function ProgramOutcomesSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
      <h2 className="text-4xl font-extrabold">Where Our Graduates Land</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-4">
        {PLACEMENT_OUTCOMES.map(([label, value, description]) => (
          <div key={label} className="rounded-xl border border-[#e8e8e8] bg-white p-4">
            <p className="text-sm text-[#666]">{label}</p>
            <p className="mt-2 text-4xl font-extrabold">{value}</p>
            <p className="mt-1 text-xs text-[#7a7a7a]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
