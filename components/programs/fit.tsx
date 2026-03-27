import { FIT_TRAITS } from "@/components/programs/data";

export function ProgramFitSection() {
  return (
    <section className="mx-auto mt-14 w-full max-w-300 rounded-xl bg-[#f0f0f0] px-3 py-10 md:px-5">
      <h2 className="text-center text-4xl font-extrabold">Is This Program Right for You?</h2>
      <p className="mt-2 text-center text-sm text-[#666]">Select the traits that describe you best.</p>
      <div className="mx-auto mt-6 grid max-w-4xl gap-3 md:grid-cols-2">
        {FIT_TRAITS.map((item, idx) => (
          <button
            key={item}
            className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold ${idx === 0 || idx === 3 ? "border-[#f7941d] bg-[#fff7ef]" : "border-[#d9d9d9] bg-white"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="rounded-lg bg-[#f7941d] px-6 py-3 text-base font-semibold text-white">Start Your Application →</button>
      </div>
    </section>
  );
}
