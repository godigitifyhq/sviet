import { ALUMNI_LIST } from "@/components/programs/data";

export function ProgramAlumniSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <h2 className="text-4xl font-extrabold">Stories From Our Alumni</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_340px]">
        <div className="rounded-xl border border-[#e8e8e8] bg-white p-5">
          <p className="text-[#4d4d4d]">
            &quot;SVIET gave me practical exposure and confidence to solve real problems. The placement training and support were exceptional.&quot;
          </p>
          <p className="mt-4 text-xl font-bold">Arjun Sharma</p>
        </div>
        <div className="space-y-3">
          {ALUMNI_LIST.map(([name, score]) => (
            <div key={name} className="rounded-lg border border-[#f1a866] bg-white px-4 py-3">
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-[#666]">{score}</p>
            </div>
          ))}
          <div className="rounded-lg bg-[#fff3e7] p-3 text-sm text-[#8d5522]">94% of students rated this program highly.</div>
        </div>
      </div>
    </section>
  );
}
