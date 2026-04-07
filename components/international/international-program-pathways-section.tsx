import Link from "next/link";

const PROGRAM_PATHWAYS = [
  "Bachelors Programs",
  "Certificate Programs",
  "Diploma",
  "Doctoral & Post-doctoral Program",
  "Dual Degree",
  "Global Programs",
  "Industry Embedded",
  "Masters programs",
  "Pathway Program",
] as const;

export function InternationalProgramPathwaysSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
          Discover our diverse programs
          <br />
          <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text font-extrabold text-transparent">
            tailored pathways to your future
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#374151] md:text-lg">
          We offer a wide array of programs designed to support your academic and professional aspirations.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAM_PATHWAYS.map((program, index) => {
            const last = index === PROGRAM_PATHWAYS.length - 1;
            return (
              <article key={program} className={`relative rounded-xl border border-black/10 bg-white p-5 ${last ? "bg-[#eef3ff]" : ""}`}>
                <h3 className="text-xl font-semibold text-[#111827] md:text-2xl">{program}</h3>
                <Link href="/programs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#f7941d]">
                  Know more <span aria-hidden="true">›</span>
                </Link>
                {last ? <span className="absolute bottom-4 right-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2563EB] text-white">→</span> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

