import Image from "next/image";

const ENRICHING_ITEMS = [
  {
    title: "3 year regular programs",
    description:
      "Solid foundations, clear outcomes, and a steady path to career readiness.",
  },
  {
    title: "4 year honors programs",
    description:
      "Go deeper with projects, internships, and advanced domain expertise.",
  },
  {
    title: "4 year research programs",
    description:
      "If research drives you, this path helps you move from curiosity to contribution.",
  },
  {
    title: "Dual degree programs",
    description:
      "One journey, two qualifications, and stronger career value at graduation.",
  },
] as const;

export function AdmissionsEnrichingWaysSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1fr_360px] md:px-6 lg:grid-cols-[1fr_420px]">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#1b1b22] md:text-5xl">
            Choose how you want to
            <br />
            <span className="text-[#2563EB]">pursue your bachelor&apos;s program</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#4a4a58] md:text-base">
            Your goal, your pace, your edge. SVIET gives you flexible pathways to grow with confidence.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {ENRICHING_ITEMS.map((item) => (
              <article key={item.title}>
                <p className="text-base font-semibold text-[#111]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#4a4a58]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/assets/img/college/main_gate.png"
            alt="Students learning"
            width={420}
            height={500}
            className="h-full min-h-75 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
