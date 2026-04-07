import Link from "next/link";

const RECOGNITIONS = [
  {
    tag: "WORLD UNIVERSITY RANKINGS",
    title: "QS University Rankings",
    description:
      "Global recognition that says one thing loud and clear: SVIET students are built for impact.",
    tone: "from-[#f7941d] to-[#d97706]",
  },
  {
    tag: "NAAC A++ GRADE",
    title: "NAAC A++ Accreditation",
    description:
      "A++ is not a label. It is the result of consistent quality in learning, research, and governance.",
    tone: "from-[#2563EB] to-[#1d4ed8]",
  },
  {
    tag: "NIRF",
    title: "NIRF Ranking",
    description:
      "National rankings that reflect real outcomes: stronger academics, stronger innovation, stronger careers.",
    tone: "from-[#111827] to-[#1f2937]",
  },
] as const;

export function AdmissionsRecognitionsSection() {
  return (
    <section className="bg-[#f5f7fb] pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {RECOGNITIONS.map((item) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-xl bg-linear-to-br p-6 text-white shadow-lg ${item.tone}`}
            >
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-white/10" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.12em] text-white/75">{item.tag}</p>
              <h3 className="relative mt-4 text-4xl font-bold leading-tight md:text-4xl">{item.title}</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-white/85">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/about/awards-recognitions"
            className="rounded-md bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
          >
            View all recognitions
          </Link>
        </div>
      </div>
    </section>
  );
}
