import Image from "next/image";

import { AccreditationCard } from "@/components/about/accreditations/accreditation-card";
import { ApprovalGrid } from "@/components/about/accreditations/approval-grid";
import { CertificateBlock } from "@/components/about/accreditations/certificate-block";
import { MembershipCard } from "@/components/about/accreditations/membership-card";
import { SectionHeader } from "@/components/about/accreditations/section-header";
import { SectionWrapper } from "@/components/about/accreditations/section-wrapper";

const ACCREDITATIONS = [
  {
    title: "NAAC",
    description: "Accreditation assessing quality of higher education institutions.",
    ctaLabel: "View Details",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "NAAC accreditation logo",
  },
  {
    title: "NBA",
    description: "Program-level accreditation for engineering and technical education.",
    ctaLabel: "View Details",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "NBA accreditation logo",
  },
  {
    title: "UGC",
    description: "Statutory body coordinating higher education standards in India.",
    ctaLabel: "View Certificate",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "UGC approval logo",
  },
];

const OTHER_APPROVALS = [
  {
    title: "AICTE Approval",
    description: "Compliance alignment with technical education quality norms.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "AICTE approval logo",
  },
  {
    title: "PCI Approval",
    description: "Recognition for pharmacy education standards and governance.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "PCI approval logo",
  },
  {
    title: "NCTE Approval",
    description: "Regulatory compliance for teacher education programs.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "NCTE approval logo",
  },
  {
    title: "Pharmacy Council",
    description: "Program oversight for professional pharmacy curriculum delivery.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Pharmacy council logo",
  },
  {
    title: "Bar Council of India",
    description: "Approval framework supporting legal education standards.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Bar Council of India logo",
  },
  {
    title: "State Government Recognition",
    description: "Recognized for institutional operations under applicable state norms.",
    ctaLabel: "View Approval",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "State government recognition logo",
  },
];

const MEMBERSHIPS = [
  {
    name: "Association of Indian Universities (AIU)",
    description: "Membership supporting academic collaboration and institutional benchmarking.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "AIU membership logo",
  },
  {
    name: "International Associations",
    description: "Partnership channels that strengthen global academic engagement and exposure.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "International associations logo",
  },
  {
    name: "Engineering Institutes",
    description: "Professional linkage with engineering communities and practice networks.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Engineering institutes membership logo",
  },
  {
    name: "Education Alliances",
    description: "Collaborative networks for quality assurance and knowledge-sharing initiatives.",
    logoSrc: "/assets/img/uniques_logo.png",
    logoAlt: "Education alliances membership logo",
  },
];

export function AccreditationsPage() {
  return (
    <main className="bg-white">
      <SectionWrapper aria-labelledby="accreditations-heading" className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl">
          <h1 id="accreditations-heading" className="text-4xl font-bold text-gray-900 md:text-5xl">
            Accreditations &amp; Approvals
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            SVGOI is recognized by leading national and international bodies, reflecting our commitment to quality
            education and academic excellence.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="accreditation-status-heading">
        <article className="grid gap-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            <h2 id="accreditation-status-heading" className="text-3xl font-bold text-gray-900">
              SVIET Accreditation Status
            </h2>
            <p className="mt-4 text-lg font-semibold text-gray-800">NAAC Accredited with B++ Grade (2024)</p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Recognized for maintaining high standards in teaching, infrastructure, and student development.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Engineering and Technology Programs</li>
              <li>Pharmacy and Health Sciences</li>
              <li>Management and Applied Sciences</li>
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

      <SectionWrapper aria-labelledby="key-accreditations-heading" className="border-t border-gray-100">
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

      <SectionWrapper aria-labelledby="ugc-certificate-heading" className="bg-gray-50">
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

      <SectionWrapper aria-labelledby="other-approvals-heading" className="bg-[#8b1e1e]">
        <SectionHeader
          id="other-approvals-heading"
          title="Other Approvals"
          titleClassName="text-white"
          description="Additional regulatory and professional approvals supporting institutional and program-level operations."
          descriptionClassName="text-red-100"
        />

        <ApprovalGrid items={OTHER_APPROVALS} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="important-notice-heading" className="border-t border-gray-100">
        <article className="rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 id="important-notice-heading" className="text-2xl font-bold text-gray-900">
            Important Notice
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            AICTE approval is not required for universities as per Supreme Court judgment and subsequent regulatory
            clarifications. Stakeholders are advised to review the official document for complete context.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex items-center rounded-md border border-amber-400 bg-white px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
          >
            View Copy of Judgment
          </button>
        </article>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="memberships-heading" className="bg-gray-50">
        <SectionHeader id="memberships-heading" title="Memberships" />

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