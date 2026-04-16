import { CheckCircle2 } from "lucide-react";

const TEST_PATHWAYS = [
  "Determining admission eligibility",
  "Awarding scholarships based on performance",
  "Identifying high-potential students",
] as const;

const APPLICATION_PATHS = ["JEE Main scores", "Merit-based selection"] as const;

export function AdmissionsEntranceEligibilitySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Entrance &amp; Eligibility</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1a1a1f] md:text-5xl">
            SVIET-EEE: One Exam, Multiple Opportunities
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4f4f5f] md:text-base">
            SVIET conducts its own entrance and scholarship test - SVIET-EEE (Entrance Exam Eligibility Test).
          </p>

          <div className="mt-8 space-y-3">
            {TEST_PATHWAYS.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-[#d8d8e2] bg-[#f5f7fb] px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                <p className="text-sm font-medium text-[#1a1a1f] md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <article className="rounded-2xl border border-[#dbe6ff] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 shadow-[0_10px_28px_rgba(30,42,120,0.08)] md:p-8">
          <h3 className="text-2xl font-bold text-[#111827]">You can also apply through</h3>
          <ul className="mt-5 space-y-3 text-sm text-[#4b5563] md:text-base">
            {APPLICATION_PATHS.map((item) => (
              <li key={item} className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
