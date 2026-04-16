import Image from "next/image";

const MOU_PARTNERS = [
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", type: "Technology & Software" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", type: "Digital Transformation" },
  { name: "Wipro", logoSrc: "/assets/img/companies/wipro.png", type: "IT Services" },
  { name: "Deloitte", logoSrc: "/assets/img/companies/deloitte.png", type: "Consulting & Analytics" },
  { name: "Amazon", logoSrc: "/assets/img/companies/amazon.png", type: "Cloud & Operations" },
  { name: "Jio Digital", logoSrc: "/assets/img/companies/jio_digital.png", type: "Digital Infrastructure" },
] as const;

const IMPACT_POINTS = [
  "Co-designed workshops and domain bootcamps",
  "Live projects linked to industry workflows",
  "Internship-to-placement pathways across functions",
  "Faculty upskilling through expert sessions",
] as const;

export function MOUImpactSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">MOUs & Academic Alliances</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">
              Partnerships That Translate into Student Outcomes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
              SVIET MOUs are built for execution, not just affiliation. These collaborations support curriculum
              relevance, practical exposure, and stronger placement preparedness through structured engagement.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-[#374151] sm:grid-cols-2">
              {IMPACT_POINTS.map((point) => (
                <li key={point} className="rounded-lg border border-[#E5E7EB] bg-[#F8FAFF] px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {MOU_PARTNERS.map((partner) => (
              <article key={partner.name} className="rounded-xl border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-4 shadow-[0_8px_24px_rgba(30,42,120,0.08)]">
                <div className="relative h-10 w-28">
                  <Image src={partner.logoSrc} alt={`${partner.name} logo`} fill className="object-contain object-left" sizes="112px" loading="lazy" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#111827]">{partner.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#6B7280]">{partner.type}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
