import Link from "next/link";
import Image from "next/image";

const CORPORATE_PARTNERS = [
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png" },
  { name: "Wipro", logoSrc: "/assets/img/companies/wipro.png" },
  { name: "Amazon", logoSrc: "/assets/img/companies/amazon.png" },
  { name: "Deloitte", logoSrc: "/assets/img/companies/deloitte.png" },
  { name: "Jio Digital", logoSrc: "/assets/img/companies/jio_digital.png" },
  { name: "Dabur", logoSrc: "/assets/img/companies/dabur.png" },
] as const;

export function CorporateCollaborationSection() {
  return (
    <section className="border-y border-[#E5E7EB] bg-[#F8FAFF] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Corporate Collaboration</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">
            Industry-Integrated Campus with 7+ Active Corporate Partners
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] md:text-lg">
            SVIET combines classroom learning with real industry engagement through live sessions, hiring pathways,
            mentorship interactions, and domain-aligned projects with partner organizations.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
            SVIET functions as a focused institution for technology and professional education under the broader SVGOI
            group ecosystem.
          </p>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-[#DCE7FF] bg-white p-5 shadow-[0_10px_28px_rgba(30,42,120,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {CORPORATE_PARTNERS.map((partner) => (
            <article key={partner.name} className="flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] px-4 py-5">
              <div className="relative h-10 w-28">
                <Image src={partner.logoSrc} alt={`${partner.name} logo`} fill className="object-contain" sizes="112px" loading="lazy" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/placements"
            className="inline-flex items-center rounded-md bg-[#f7941d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d97706]"
          >
            Explore Placements
          </Link>
          {/* <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-[#BFDBFE] bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#EFF6FF]"
          >
            Explore Partnerships
          </Link> */}
        </div>
      </div>
    </section>
  );
}
