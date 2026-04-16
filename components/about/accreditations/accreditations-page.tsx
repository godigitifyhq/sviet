import Image from "next/image";

import { AccreditationCard } from "@/components/about/accreditations/accreditation-card";
import { ApprovalGrid } from "@/components/about/accreditations/approval-grid";
import { CertificateBlock } from "@/components/about/accreditations/certificate-block";
import { MembershipCard } from "@/components/about/accreditations/membership-card";
import { SectionHeader } from "@/components/about/accreditations/section-header";
import { SectionWrapper } from "@/components/about/accreditations/section-wrapper";

const ACCREDITATIONS = [
  {
    title: "NAAC Accreditation",
    description: "Recognized with NAAC B++ Grade (2.94 Score, 2024), reflecting institutional focus on quality learning and continuous improvement.",
    ctaLabel: "View Details",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "NAAC accreditation logo",
  },
  {
    title: "Program Quality Assurance",
    description: "Program delivery is aligned with applicable national quality frameworks and outcome-based academic practices.",
    ctaLabel: "View Details",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Program quality assurance logo",
  },
  {
    title: "UGC Compliance",
    description: "Institutional operations and academic standards are maintained in line with relevant UGC norms and expectations.",
    ctaLabel: "View Certificate",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "UGC approval logo",
  },
];

const OTHER_APPROVALS = [
  {
    title: "AICTE Alignment",
    description: "Technical and professional programs are structured in accordance with applicable regulatory expectations.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "AICTE alignment logo",
  },
  {
    title: "PCI Recognition",
    description: "Pharmacy programs follow standards prescribed for curriculum quality, training, and compliance.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "PCI approval logo",
  },
  {
    title: "NCTE Recognition",
    description: "Teacher education pathways are maintained with required academic and regulatory safeguards.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "NCTE approval logo",
  },
  {
    title: "Pharmacy Council Standards",
    description: "Academic delivery and laboratory infrastructure are benchmarked against pharmacy council guidelines.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Pharmacy council logo",
  },
  {
    title: "Bar Council Framework",
    description: "Legal education offerings are aligned to professional standards for law and applied legal studies.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Bar Council of India logo",
  },
  {
    title: "State-Level Recognition",
    description: "Institutional operations continue under valid state-level recognition and compliance mechanisms.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "State government recognition logo",
  },
];

const MEMBERSHIPS = [
  {
    name: "Association of Indian Universities (AIU)",
    description: "Membership strengthens academic collaboration, institutional benchmarking, and best-practice sharing.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "AIU membership logo",
  },
  {
    name: "Innovation & Academic Networks",
    description: "Collaborative platforms support innovation-led learning, faculty development, and student exposure.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Innovation and academic networks logo",
  },
  {
    name: "Professional Bodies",
    description: "Engagement with professional bodies helps keep curriculum and practice aligned with industry evolution.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Professional bodies membership logo",
  },
  {
    name: "Quality Assurance Alliances",
    description: "Institutional participation in quality-focused alliances supports transparent review and continuous improvement.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Quality assurance alliances membership logo",
  },
];

export function AccreditationsPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)]">
      <SectionWrapper
        aria-labelledby="accreditations-heading"
        className="relative overflow-hidden border-b border-[#E5E7EB] bg-[linear-gradient(130deg,#EEF4FF_0%,#FFFFFF_52%,#F5F9FF_100%)]"
      >
        <div className="absolute -right-32 -top-25 hidden h-72 w-72 bg-[#BFDBFE]/30 blur-3xl md:block" aria-hidden="true" />
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7941d]">About SVIET</p>
          <h1 id="accreditations-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">
            Accreditations &amp; Approvals
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
            This page highlights SVIET&apos;s accreditation status, regulatory recognitions, and institutional quality
            frameworks that support consistent academic standards.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="accreditation-status-heading">
        <article className="grid gap-8 border border-[#DCE7FF] bg-white p-8 shadow-[0_10px_28px_rgba(30,42,120,0.08)] lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            <h2 id="accreditation-status-heading" className="text-3xl font-bold text-[#111827]">
              SVIET Accreditation Status
            </h2>
            <p className="mt-4 text-lg font-semibold text-[#111827]">NAAC Accredited with B++ Grade (2.94 Score, 2024)</p>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
              The accreditation reflects sustained institutional commitment to teaching quality, student development,
              and improvement-driven governance.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-[#4B5563]">
              <li>Structured quality assurance and review mechanisms</li>
              <li>Academic delivery aligned with regulatory expectations</li>
              <li>Continuous improvement across departments and services</li>
            </ul>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="relative h-24 w-60">
              <Image
                src="/assets/img/uniques_logo.png"
                alt="SVIET accreditation logo"
                fill
                loading="lazy"
                className="object-contain"
                sizes="240px"
              />
            </div>
          </div>
        </article>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="key-accreditations-heading" className="border-t border-[#E5E7EB]">
        <SectionHeader id="key-accreditations-heading" title="Key Accreditations" />

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ACCREDITATIONS.map((item) => (
            <AccreditationCard
              key={item.title}
              title={item.title}
              description={item.description}
              ctaLabel={item.ctaLabel}
              logoSrc={item.logoSrc}
              logoAlt={item.logoAlt}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="ugc-certificate-heading" className="bg-[#F5F7FB]">
        <SectionHeader id="ugc-certificate-heading" title="Certificate / Document" />
        <div className="mt-8">
          <CertificateBlock
            imageSrc="/assets/img/college/dl.png"
            imageAlt="University Grants Commission certificate preview"
            title="University Grants Commission (UGC)"
            description="SVIET continues to operate in alignment with applicable UGC norms and quality expectations for higher education institutions. Official communications and notifications are maintained for transparency and reference."
            ctaLabel="View Notification"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper
        aria-labelledby="other-approvals-heading"
         className="bg-[#F5F7FB]"
      >
        <SectionHeader
          id="other-approvals-heading"
          title="Regulatory & Professional Approvals"
          description="Additional recognitions and approvals that strengthen trust, compliance, and discipline-specific standards."
        />

        <ApprovalGrid items={OTHER_APPROVALS} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="important-notice-heading" className="border-t border-[#E5E7EB]">
        <article className="border border-[#BFDBFE] bg-[#EFF6FF] p-6">
          <h2 id="important-notice-heading" className="text-2xl font-bold text-[#111827]">
            Important Notice
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
            AICTE approval is not required for universities as per Supreme Court judgment and subsequent regulatory
            clarifications. Stakeholders are advised to review the official document for complete context.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex items-center rounded-md border border-[#93C5FD] bg-white px-4 py-2 text-sm font-semibold text-[#f7941d] transition hover:border-[#60A5FA] hover:bg-[#DBEAFE]"
          >
            View Copy of Judgment
          </button>
        </article>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="memberships-heading" className="bg-[#F8FAFF]">
        <SectionHeader id="memberships-heading" title="Institutional Memberships" />

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MEMBERSHIPS.map((item) => (
            <MembershipCard
              key={item.name}
              name={item.name}
              description={item.description}
              logoSrc={item.logoSrc}
              logoAlt={item.logoAlt}
            />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}