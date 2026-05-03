import Image from "next/image";
import Link from "next/link";

import {
  FacilitiesSection,
  type ProgramFacilityItem,
} from "@/components/programs/facilities";
import {
  PlacementSection,
  type ProgramOutcomeItem,
} from "@/components/programs/outcomes";
import {
  WhyStudySection,
  type ProgramHighlightItem,
} from "@/components/programs/highlights";

export type ProgramDetailData = {
  slug: string;
  title: string;
  department?: string | null;
  durationMonths: number;
  tuitionCents: number;
  mode?: string | null;
  shortDescription: string;
  fullDescription?: string | null;
  eligibility?: string | null;
  highlights: ProgramHighlightItem[];
  curriculum: Record<string, string[]>;
  outcomes: ProgramOutcomeItem[];
  facilities: ProgramFacilityItem[];
  faqs?: ProgramFaqItem[];
  heroImage?: string | null;
};

export type ProgramFaqItem = {
  q: string;
  a: string;
};

type ProgramDetailPageProps = {
  program: ProgramDetailData;
};

const PAGE_TABS = [
  { label: "Program Details", id: "program-details" },
  { label: "How To Study", id: "how-to-study" },
  { label: "Why Study", id: "why-study" },
  { label: "Careers", id: "careers" },
  { label: "Important Info", id: "important-info" },
  { label: "Placements", id: "placements" },
  { label: "Facilities", id: "facilities" },
  { label: "Scholarships", id: "scholarships" },
  // { label: "Trends", id: "trends" },
] as const;

function formatDuration(durationMonths: number) {
  const years = durationMonths / 12;

  if (Number.isInteger(years)) {
    return `${years} year program`;
  }

  return `${years.toFixed(1)} year program`;
}

function formatCurrencyPerYear(valueInCents: number) {
  return `₹${(valueInCents / 100).toLocaleString("en-IN")}/- Per Annum`;
}

function formatMode(mode?: string | null) {
  if (!mode) {
    return "Full-time";
  }

  return mode
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getHeroImage(heroImage?: string | null) {
  if (heroImage && heroImage.startsWith("/")) {
    return heroImage;
  }

  return "/assets/img/banner_hero.jpg";
}

function getCurriculumSummary(curriculum: Record<string, string[]>) {
  const years = Object.keys(curriculum);

  if (years.length === 0) {
    return "The curriculum is updated program by program and delivered through a mix of theory, practical work, and project-based learning.";
  }

  return `The curriculum is structured across ${years.join(", ")} with outcomes designed around the skills and careers relevant to this program.`;
}

function getImportantInfoItems(program: ProgramDetailData) {
  const curriculumYears = Object.keys(program.curriculum).length;

  return [
    {
      title: "Eligibility",
      description:
        program.eligibility ??
        "Eligibility details are confirmed during admissions counselling for this program.",
      cta: "View",
    },
    {
      title: "Duration",
      description: formatDuration(program.durationMonths),
      cta: "View",
    },
    {
      title: "Annual Tuition",
      description: formatCurrencyPerYear(program.tuitionCents),
      cta: "View",
    },
    {
      title: "Curriculum",
      description:
        curriculumYears > 0
          ? `${curriculumYears} curriculum blocks are available for this program.`
          : "Curriculum blocks are reviewed program by program.",
      cta: "View",
    },
  ];
}

function getFundingItems(program: ProgramDetailData) {
  const scholarshipFaqs = (program.faqs ?? []).filter((entry) =>
    /scholar|fee|fund|waiver|support/i.test(`${entry.q} ${entry.a}`),
  );

  if (scholarshipFaqs.length > 0) {
    return scholarshipFaqs.slice(0, 4).map((entry) => ({
      title: entry.q,
      description: entry.a,
    }));
  }

  return [
    {
      title: "Annual Tuition",
      description: formatCurrencyPerYear(program.tuitionCents),
    },
    {
      title: "Eligibility Review",
      description:
        program.eligibility ??
        "Funding support is reviewed during admissions counselling for the active intake.",
    },
    {
      title: "Program Mode",
      description: formatMode(program.mode),
    },
  ];
}

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const heroImage = getHeroImage(program.heroImage);
  const overviewCopy = program.fullDescription ?? program.shortDescription;
  const curriculumSummary = getCurriculumSummary(program.curriculum);
  const importantInfoItems = getImportantInfoItems(program);
  const fundingItems = getFundingItems(program);
  const whyStudyIntro =
    program.fullDescription ??
    `Study ${program.title} through a program-specific blend of theory, practice, and guided learning.`;

  return (
    <main className="bg-[#FFFFFF] text-[#111827]">
      <section className="-mt-30 w-full bg-black pt-30 text-white">
        <div className="relative w-full overflow-hidden">
          <div className="relative min-h-120 w-full overflow-hidden md:min-h-150 lg:min-h-180">
            <Image
              src={heroImage}
              alt={program.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-r from-black/95 via-black/68 to-black/52"
              aria-hidden="true"
            />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-34 md:px-6 md:pb-20 md:pt-38 lg:grid-cols-[1.1fr_360px] lg:items-center lg:pb-24 lg:pt-42">
              <div>
                <p className="text-sm text-white/80">
                  Program / {program.department ?? "Programs"} /{" "}
                  <span className="font-semibold text-white">
                    {program.title}
                  </span>
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                  {program.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
                  {program.shortDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/admissions?program=${program.slug}`}
                    className="inline-flex items-center border border-[#f7941d] bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
                  >
                    Apply Now
                  </Link>
                  {/* <button
                    type="button"
                    className="inline-flex items-center border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Download Brochure
                  </button> */}
                </div>
              </div>

              <aside className="border border-black/10 bg-white p-6 text-black shadow-[0_20px_35px_rgba(0,0,0,0.2)]">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Want to know more?
                </h2>
                <p className="mt-2 text-sm text-black/65">
                  Discover more information about the program.
                </p>

                <form className="mt-5 grid gap-3">
                  <label
                    className="text-sm font-semibold"
                    htmlFor="program-name"
                  >
                    Full name
                  </label>
                  <input
                    id="program-name"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="Enter your full name"
                  />

                  <label
                    className="text-sm font-semibold"
                    htmlFor="program-email"
                  >
                    Email
                  </label>
                  <input
                    id="program-email"
                    type="email"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="Enter your email"
                  />

                  <label
                    className="text-sm font-semibold"
                    htmlFor="program-phone"
                  >
                    Phone number
                  </label>
                  <input
                    id="program-phone"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="(000) 000-0000"
                  />

                  <button
                    type="button"
                    className="mt-2 inline-flex items-center justify-center border border-[#6366F1] bg-[#6366F1] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4F46E5]"
                  >
                    Request Callback
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-14 z-40 border-y border-black/10 bg-[#111827] text-white md:top-17"
        aria-label="Program section navigation"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 md:px-6">
          <ul className="flex min-w-max items-center">
            {PAGE_TABS.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className="inline-flex items-center px-4 py-4 text-sm font-semibold transition hover:bg-white/10 hover:text-white"
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="program-details"
        className="scroll-mt-30 border-b border-black/8 bg-[#FFFFFF] md:scroll-mt-32"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[320px_1fr] md:px-6 md:py-20">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            Program details
            <span className="mt-1 block font-bold text-[#f7941d]">
              overview
            </span>
          </h2>

          <div>
            <h3 className="text-3xl font-semibold text-[#111827] md:text-4xl">
              {program.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-black/75 md:text-lg">
              {overviewCopy}
            </p>
            <p className="mt-6 text-base leading-relaxed text-black/75 md:text-lg">
              This {formatDuration(program.durationMonths)} program is shaped by
              a curriculum that spans{" "}
              {Object.keys(program.curriculum).length > 0
                ? Object.keys(program.curriculum).join(", ")
                : "program-specific modules"}{" "}
              and balances theory, practice, and career readiness.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-to-study"
        className="scroll-mt-30 bg-[#f1f1f4] md:scroll-mt-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-xl font-semibold leading-[1.03] tracking-[-0.02em] md:text-3xl lg:text-[3.1rem]">
              <span className="block text-[#111827]">Here is how you can</span>
              <span className="mt-2 block text-black">study this program</span>
            </h2>

            <div className="mt-7 inline-flex rounded-full border border-[#b5b1d3] bg-[#cdcae3] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#24222e] md:text-base">
              {formatDuration(program.durationMonths).toUpperCase()}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="text-[.75rem] text-[#1aa8af]">▶</span>
              <h3 className="text-xl font-medium tracking-[-0.01em] text-[#111827] md:text-[1.3rem]">
                {program.title}
              </h3>
            </div>

            <p className="mt-8 max-w-xl text-base leading-[1.85] text-black/72 md:text-[1.06rem]">
              {overviewCopy} {curriculumSummary}
            </p>
          </div>

          <article className="rounded-2xl border border-black/15 bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] md:p-5">
            <div className="rounded-xl bg-[#2f2d91] px-4 py-4 text-center text-white md:py-5">
              <p className="text-xl font-semibold">Secure your place</p>
              <p className="mt-1 text-4xl font-bold leading-tight md:text-[2.35rem]">
                Deadline to be announced
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 text-base text-black/85 md:grid-cols-3 md:text-[1.02rem]">
              <div>
                <p className="font-medium text-black">Applicable deadline</p>
                <p className="mt-1 font-semibold text-black">To be announced</p>
              </div>
              <div>
                <p className="font-medium text-black">Starting date</p>
                <p className="mt-1 font-semibold text-black">To be announced</p>
              </div>
              <div>
                <p className="font-medium text-black">Duration</p>
                <p className="mt-1 font-semibold text-black">
                  {formatDuration(program.durationMonths)}
                </p>
              </div>
              <div>
                <p className="font-medium text-black">Credits</p>
                <p className="mt-1 font-semibold text-black">180</p>
              </div>
              <div>
                <p className="font-medium text-black">Seats</p>
                <p className="mt-1 font-semibold text-black">60</p>
              </div>
              <div>
                <p className="font-medium text-black">Fee</p>
                <p className="mt-1 font-semibold text-black">
                  {formatCurrencyPerYear(program.tuitionCents)}
                </p>
              </div>
              <div>
                <p className="font-medium text-black">Language</p>
                <p className="mt-1 font-semibold text-black">English</p>
              </div>
            </div>

            <div className="mt-8 border-t border-black/12 pt-5">
              <p className="text-[1.75rem] font-semibold leading-tight text-black">
                Eligibility Criteria
              </p>
              <p className="mt-2 text-base leading-relaxed text-black/85 md:text-[1.02rem]">
                Candidates shall have passed BPT degree from recognized
                institutions where the mode of study is a full-time program,
                with minimum 4 1/2 years duration and with not less than 50% of
                marks in aggregate.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-black/70">
                <span className="rounded-full border border-black/12 bg-black/3 px-3 py-1">
                  {formatMode(program.mode)}
                </span>
                <span className="rounded-full border border-black/12 bg-black/3 px-3 py-1">
                  Program open for 2026 intake
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <WhyStudySection
        id="why-study"
        items={program.highlights}
        eyebrow={`Why study ${program.title}`}
        heading={`What sets ${program.title} apart`}
        intro={whyStudyIntro}
      />

      {/* <section id="careers" className="scroll-mt-30 bg-linear-to-b from-[#2d1f52] to-[#1f1545] py-16 md:scroll-mt-32 md:py-24">
        <div className="mx-auto w-full max-w-[65%] px-4 md:px-6">
          <div className="rounded-3xl bg-linear-to-b from-[#3a2968] to-[#2d1f52] p-8 md:p-12 lg:p-16">
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-snug tracking-[-0.01em] md:text-4xl lg:text-5xl">
              <span className="text-[#e8857d]">What you can</span>
              <span className="ml-2 text-[#f7941d]">become</span>
              <span className="ml-2 text-white">after Studying</span>
              <br />
              <span className="text-[#f7941d]">{program.title.split(" ").slice(0, 3).join(" ")}?</span>
            </h2>

            <div className="relative mt-12 flex flex-col items-center md:mt-16">
              <div className="relative h-80 w-64 md:h-96 md:w-80">
                <div className="absolute inset-0 rounded-full border-4 border-[#6366F1]/30 blur-xl" aria-hidden="true" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-[#6366F1]">
                  <Image
                    src="/assets/img/Mockup-19.png"
                    alt="Career pathway"
                    fill
                    sizes="320px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="relative mt-12 w-full max-w-2xl md:mt-16">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                  {careers.slice(0, 3).map((career, index) => (
                    <div
                      key={`${career}-left-${index}`}
                      className="group flex transform items-center justify-start gap-3 rounded-full border border-[#6366F1]/50 bg-[#3a2968]/80 px-5 py-3 backdrop-blur-sm transition hover:border-[#6366F1] hover:bg-[#4a3978] md:justify-end md:pr-8 lg:text-lg"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-[#f7941d] bg-[#6366F1]/20">
                        <div className="h-4 w-4 rounded-full bg-[#f7941d]" />
                      </div>
                      <span className="text-sm font-medium text-white md:text-base">{career}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                  {careers.slice(3, 6).map((career, index) => (
                    <div
                      key={`${career}-right-${index}`}
                      className="group flex transform items-center justify-start gap-3 rounded-full border border-[#6366F1]/50 bg-[#3a2968]/80 px-5 py-3 backdrop-blur-sm transition hover:border-[#6366F1] hover:bg-[#4a3978] md:justify-start md:pl-8 lg:text-lg"
                    >
                      <span className="text-sm font-medium text-white md:text-base">{career}</span>
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-[#f7941d] bg-[#6366F1]/20">
                        <div className="h-4 w-4 rounded-full bg-[#f7941d]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="important-info"
        className="scroll-mt-30 border-y border-black/8 bg-[#F5F7FB] md:scroll-mt-32"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[300px_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-[#f7941d] md:text-5xl">
              Important
              <span className="block text-[#111827]">program details</span>
              <span className="block text-black">for {program.title}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/75 md:text-lg">
              Find the key academic and admission details that are specific to
              this program.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {importantInfoItems.map((item) => (
              <article
                key={item.title}
                className="border border-black/15 bg-white p-3"
              >
                <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">
                  {item.description}
                </p>
                {/* <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-between border border-[#f7941d]/40 bg-[#fff7ef] px-4 py-3 text-base font-semibold text-[#111827] transition hover:bg-[#fff2df]"
                >
                  {item.cta}
                  <span>↓</span>
                </button> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="placements"
        className="scroll-mt-30 bg-linear-to-b from-[#2d1f52] to-[#1f1545] py-20 md:scroll-mt-32 md:py-28"
      >
        <PlacementSection
          data={program.outcomes}
          eyebrow={`Placement outcomes for ${program.title}`}
          heading={`${program.title} career pathways`}
          intro={program.fullDescription ?? program.shortDescription}
        />
      </section>

      <section
        id="facilities"
        className="scroll-mt-30 bg-[#FFFFFF] py-16 md:scroll-mt-32 md:py-20"
      >
        <FacilitiesSection
          items={program.facilities}
          eyebrow={`Infrastructure for ${program.title}`}
          heading={`${program.title} facilities`}
          intro={program.fullDescription ?? program.shortDescription}
        />
      </section>

      <section
        id="scholarships"
        className="scroll-mt-30 border-y border-black/8 bg-[#F5F7FB] md:scroll-mt-32"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-[#f7941d] md:text-5xl">
              Scholarships & funding
            </h2>
            <p className="mt-4 text-xl leading-relaxed md:text-2xl">
              Program-specific support and fee details
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
              The funding summary below is built from this program&apos;s own
              tuition, eligibility, and FAQ data.
            </p>
          </div>

          <div className="space-y-3">
            {fundingItems.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden bg-[#111827] p-5 text-white"
              >
                <h3 className="text-2xl font-semibold md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section
        id="trends"
        className="scroll-mt-30 bg-[#FFFFFF] py-16 md:scroll-mt-32 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Stay up to date with
            <span className="block text-[#f7941d]">
              {program.title.split(" ").slice(0, 2).join(" ")} trends
            </span>
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {TREND_ITEMS.map((item) => (
              <article
                key={item.title}
                className="border border-black/12 bg-white p-3"
              >
                <div className="relative aspect-video overflow-hidden border border-black/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">
                  {item.description}
                </p>
                <button
                  type="button"
                  className="mt-3 text-base font-semibold text-[#f7941d] hover:text-[#F97316]"
                >
                  Read more ›
                </button>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="border-t border-black/10 bg-[#111827] py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-sm font-semibold md:px-6">
          <span>Open for admission year 2026-27</span>
          <span>|</span>
          <Link
            href={`/admissions?program=${program.slug}`}
            className="text-[#f7941d] hover:text-[#F97316]"
          >
            Apply now ›
          </Link>
        </div>
      </section>
    </main>
  );
}
