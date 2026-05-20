import Link from "next/link";

const TRAINING_PHASES = [
  {
    phase: "Phase 1",
    title: "Foundation",
    points: [
      "Aptitude and analytical reasoning",
      "Communication and workplace confidence",
      "Core technical fundamentals",
    ],
  },
  {
    phase: "Phase 2",
    title: "Advanced",
    points: [
      "Domain-specific technical tracks",
      "Project-based learning and hack challenges",
      "Problem-solving and interview simulations",
    ],
  },
  {
    phase: "Phase 3",
    title: "Industry-Ready",
    points: [
      "Resume, portfolio, and profile optimization",
      "Mock assessments with recruiter-style feedback",
      "Internship and placement readiness roadmap",
    ],
  },
] as const;

export function TrainingCurriculumSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">
            Training Curriculum
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">
            Structured Learning Path from Foundation to Industry-Ready
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
            The placement training framework is phase-driven to progressively
            build capability, confidence, and hiring readiness.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TRAINING_PHASES.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f7941d]">
                {item.phase}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#111827]">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-[#f7941d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d97706]"
          >
            Talk to Training Cell
          </Link>
        </div>
      </div>
    </section>
  );
}
