import Image from "next/image";
import Link from "next/link";

export type ProgramDetailData = {
  slug: string;
  title: string;
  department?: string | null;
  durationMonths: number;
  tuitionCents: number;
  mode?: string | null;
  shortDescription: string;
  highlights: string[];
  curriculum: Record<string, string[]>;
  outcomes: string[];
  facilities: string[];
  heroImage?: string | null;
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
  { label: "Trends", id: "trends" },
] as const;

const DEFAULT_WHY_STUDY_ITEMS = [
  {
    title: "Meaningful Impact",
    description: "Physiotherapy lets you help people recover from pain, injury, or disability, making a real difference in their everyday lives.",
  },
  {
    title: "Career Opportunities",
    description: "With rising demand in hospitals, sports, and wellness centers, physiotherapy offers secure and rewarding career pathways.",
  },
  {
    title: "Practical Education",
    description: "The program includes active practice in labs, clinics, and hospitals from early semesters onward.",
  },
  {
    title: "Expert Guidance",
    description: "Learn from experienced teachers and healthcare professionals who support your growth with practical insights.",
  },
  {
    title: "Industry Experience",
    description: "Benefit from internships, field exposure, and hospital tie-ups that prepare you for confident professional practice.",
  },
] as const;

const DEFAULT_CAREERS = [
  "Sports Physiotherapist",
  "Orthopedic Physiotherapist",
  "Rehabilitation Specialist",
  "Fitness and Wellness Consultant",
  "Clinical Researcher",
  "Physiotherapy Lecturer or Educator",
] as const;

const IMPORTANT_INFO_ITEMS = [
  {
    title: "Download curriculum",
    description: "Detailed semester-wise subjects and credits for this program.",
    image: "/assets/img/college/dl.png",
    cta: "Download",
  },
  {
    title: "Download teaching scheme",
    description: "Course delivery structure, practical components, and evaluation pattern.",
    image: "/assets/img/campus-life/image2.png",
    cta: "Download",
  },
  {
    title: "Download faculty details",
    description: "Know the mentors, specializations, and teaching expertise for the program.",
    image: "/assets/img/campus-life/image3.png",
    cta: "View Details",
  },
] as const;

const FACILITY_IMAGES = [
  "/assets/img/campus-life/r1c1.png",
  "/assets/img/campus-life/r1c2.png",
  "/assets/img/campus-life/r2c1.png",
] as const;

const SCHOLARSHIP_CARDS = [
  {
    title: "Meritorious Scholarships",
    description: "Recognizing academic excellence through performance-based fee support.",
    tone: "bg-[#111827]",
    image: "/assets/img/college/scholarship.png",
  },
  {
    title: "Sports Scholarships",
    description: "Supporting students with state and national level sports achievements.",
    tone: "bg-[#f7941d]",
    image: "/assets/img/students/image (2).png",
  },
  {
    title: "Alumni Scholarships",
    description: "Scholarship pathways supported by alumni and institutional mentorship programs.",
    tone: "bg-[#1f2937]",
    image: "/assets/img/students/1.png",
  },
  {
    title: "Need-Based Support",
    description: "Flexible support for deserving students to continue quality education smoothly.",
    tone: "bg-[#b8754f]",
    image: "/assets/img/students/pppp.png",
  },
] as const;

const TREND_ITEMS = [
  {
    title: "National Skill Conclave concluded with strong participation",
    description: "A collaborative event focused on practical skill development and future healthcare pathways.",
    image: "/assets/img/campus-life/image1.png",
  },
  {
    title: "SVIET hosts inter-college innovation and youth festival",
    description: "Students showcased projects, leadership, and creative problem-solving initiatives.",
    image: "/assets/img/campus-life/image2.png",
  },
  {
    title: "Institutional milestones in academic and placement outcomes",
    description: "Program-level achievements continue to strengthen student confidence and career progression.",
    image: "/assets/img/campus-life/image3.png",
  },
  {
    title: "Expert talks on future-ready rehabilitation practices",
    description: "Domain specialists shared insights into evolving therapy methods and technologies.",
    image: "/assets/img/campus-life/image4.png",
  },
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

function getWhyStudyItems(highlights: string[]) {
  if (highlights.length === 0) {
    return [...DEFAULT_WHY_STUDY_ITEMS];
  }

  return highlights.slice(0, 5).map((entry, index) => {
    const fallback = DEFAULT_WHY_STUDY_ITEMS[index % DEFAULT_WHY_STUDY_ITEMS.length];
    const [rawTitle, ...rest] = entry.split(":");
    const parsedTitle = rawTitle.trim();
    const parsedDescription = rest.join(":").trim();

    return {
      title: parsedTitle || fallback.title,
      description: parsedDescription || fallback.description,
    };
  });
}

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const heroImage = getHeroImage(program.heroImage);
  const whyStudyItems = getWhyStudyItems(program.highlights);
  const careers = program.outcomes.length > 0 ? program.outcomes.slice(0, 6) : [...DEFAULT_CAREERS];
  const facilityNames = program.facilities.length > 0 ? program.facilities.slice(0, 3) : ["Advanced Labs", "Clinical Exposure", "Smart Classrooms"];

  return (
    <main className="bg-[#FFFFFF] text-[#111827]">
      <section className="-mt-30 w-full bg-black pt-30 text-white">
        <div className="relative w-full overflow-hidden">
          <div className="relative min-h-120 w-full overflow-hidden md:min-h-150 lg:min-h-180">
            <Image src={heroImage} alt={program.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/68 to-black/52" aria-hidden="true" />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-34 md:px-6 md:pb-20 md:pt-38 lg:grid-cols-[1.1fr_360px] lg:items-center lg:pb-24 lg:pt-42">
              <div>
                <p className="text-sm text-white/80">
                  Program / {program.department ?? "Programs"} / <span className="font-semibold text-white">{program.title}</span>
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">{program.title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{program.shortDescription}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/admissions?program=${program.slug}`}
                    className="inline-flex items-center border border-[#f7941d] bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
                  >
                    Apply Now
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              <aside className="border border-black/10 bg-white p-6 text-black shadow-[0_20px_35px_rgba(0,0,0,0.2)]">
                <h2 className="text-2xl font-bold md:text-3xl">Want to know more?</h2>
                <p className="mt-2 text-sm text-black/65">Discover more information about the program.</p>

                <form className="mt-5 grid gap-3">
                  <label className="text-sm font-semibold" htmlFor="program-name">Full name</label>
                  <input id="program-name" className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none" placeholder="Enter your full name" />

                  <label className="text-sm font-semibold" htmlFor="program-email">Email</label>
                  <input id="program-email" type="email" className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none" placeholder="Enter your email" />

                  <label className="text-sm font-semibold" htmlFor="program-phone">Phone number</label>
                  <input id="program-phone" className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none" placeholder="(000) 000-0000" />

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

      <nav className="sticky top-14 z-40 border-y border-black/10 bg-[#111827] text-white md:top-17" aria-label="Program section navigation">
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

      <section id="program-details" className="scroll-mt-30 border-b border-black/8 bg-[#FFFFFF] md:scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[320px_1fr] md:px-6 md:py-20">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            Program details
            <span className="mt-1 block font-bold text-[#f7941d]">overview</span>
          </h2>

          <div>
            <h3 className="text-3xl font-semibold text-[#111827] md:text-4xl">{program.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-black/75 md:text-lg">{program.shortDescription}</p>
            <p className="mt-6 text-base leading-relaxed text-black/75 md:text-lg">
              This {formatDuration(program.durationMonths)} is designed to combine concept clarity, practical learning,
              and career readiness with strong mentoring and outcome-oriented training.
            </p>
          </div>
        </div>
      </section>

      <section id="how-to-study" className="scroll-mt-30 bg-[#f1f1f4] md:scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-xl font-semibold leading-[1.03] tracking-[-0.02em] md:text-3xl lg:text-[3.1rem]">
              <span className="block bg-linear-to-r from-[#4d56d9] via-[#7547bb] to-[#a34189] bg-clip-text text-transparent">
                Here is how you can
              </span>
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
              {program.shortDescription} Students study foundations in the first phase and then advance into applied
              practice, recovery planning, and patient-facing clinical exposure.
            </p>
          </div>

          <article className="rounded-2xl border border-black/15 bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] md:p-5">
            <div className="rounded-xl bg-linear-to-r from-[#2f2d91] to-[#5f59b6] px-4 py-4 text-center text-white md:py-5">
              <p className="text-xl font-semibold">Secure your place</p>
              <p className="mt-1 text-4xl font-bold leading-tight md:text-[2.35rem]">Deadline to be announced</p>
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
                <p className="mt-1 font-semibold text-black">{formatDuration(program.durationMonths)}</p>
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
                <p className="mt-1 font-semibold text-black">{formatCurrencyPerYear(program.tuitionCents)}</p>
              </div>
              <div>
                <p className="font-medium text-black">Language</p>
                <p className="mt-1 font-semibold text-black">English</p>
              </div>
            </div>

            <div className="mt-8 border-t border-black/12 pt-5">
              <p className="text-[1.75rem] font-semibold leading-tight text-black">Eligibility Criteria</p>
              <p className="mt-2 text-base leading-relaxed text-black/85 md:text-[1.02rem]">
                Candidates shall have passed BPT degree from recognized institutions where the mode of study is a
                full-time program, with minimum 4 1/2 years duration and with not less than 50% of marks in aggregate.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-black/70">
                <span className="rounded-full border border-black/12 bg-black/3 px-3 py-1">{formatMode(program.mode)}</span>
                <span className="rounded-full border border-black/12 bg-black/3 px-3 py-1">Program open for 2026 intake</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="why-study" className="scroll-mt-30 border-y border-black/8 bg-[#f1f1f4] md:scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              <span className="bg-linear-to-r from-[#4d56d9] to-[#f7941d] bg-clip-text text-transparent">Why study</span> this program
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/75 md:text-[1.03rem]">
              Be a part of an engaging learning atmosphere that gives you the tools to excel in the career of your
              choice.
            </p>

            <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {whyStudyItems.map((item) => (
                <article key={item.title}>
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-0 w-0 border-y-[6px] border-y-transparent border-l-10 border-l-[#24b4be]" aria-hidden="true" />
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-black">{item.title}</h3>
                      <p className="mt-2 text-[1.02rem] leading-relaxed text-black/75">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-136 lg:pt-2">
            
            <div className="relative aspect-square rounded-full  p-3">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/assets/img/Mockup-19.png"
                  alt="SVIET student"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="important-info" className="scroll-mt-30 border-y border-black/8 bg-[#F5F7FB] md:scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[300px_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-[#f7941d] md:text-5xl">
              Here is the important
              <span className="block text-[#111827]">information</span>
              <span className="block text-black">you need to know</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/75 md:text-lg">
              Find all key academic and support documents related to this program.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {IMPORTANT_INFO_ITEMS.map((item) => (
              <article key={item.title} className="border border-black/15 bg-white p-3">
                <div className="relative aspect-16/8 overflow-hidden border border-black/10 bg-white">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-[1.75rem]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">{item.description}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-between border border-[#f7941d]/40 bg-[#fff7ef] px-4 py-3 text-base font-semibold text-[#111827] transition hover:bg-[#fff2df]"
                >
                  {item.cta}
                  <span>↓</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="placements" className="scroll-mt-30 bg-[#111827] py-16 md:scroll-mt-32 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Launch your career with our leading placements
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/80 md:text-lg">
            We provide strong placement preparation, recruiter exposure, and career readiness support before you graduate.
          </p>

          <div className="mt-10 grid gap-5 border border-white/15 bg-white/5 p-4 text-white md:grid-cols-3 md:p-6">
            <div>
              <p className="text-5xl font-bold text-[#f7941d] md:text-6xl">4-6 LPA</p>
              <p className="mt-1 text-lg text-white/85">Average Package</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#f7941d] md:text-6xl">2,200+</p>
              <p className="mt-1 text-lg text-white/85">Recruiters</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#f7941d] md:text-6xl">60 LPA</p>
              <p className="mt-1 text-lg text-white/85">Highest Package Offered</p>
            </div>
          </div>

          <Link
            href="/placements"
            className="mt-8 inline-flex items-center border border-[#f7941d] bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
          >
            Explore placements
          </Link>
        </div>
      </section>

      <section id="facilities" className="scroll-mt-30 bg-[#FFFFFF] py-16 md:scroll-mt-32 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Explore our facilities & resources
            <span className="block text-[#f7941d]">for this program</span>
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {facilityNames.map((facility, index) => (
              <article key={facility} className="group relative overflow-hidden border border-black/10 bg-black">
                <div className="relative aspect-5/6">
                  <Image
                    src={FACILITY_IMAGES[index % FACILITY_IMAGES.length]}
                    alt={facility}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/65 p-4 text-white">
                    <h3 className="text-2xl font-semibold md:text-3xl">{facility}</h3>
                    <p className="mt-2 text-base text-white/80">Advanced learning support with practical access and mentorship.</p>
                    <button type="button" className="mt-3 text-base font-semibold text-[#f7941d]">Read more ›</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="scholarships" className="scroll-mt-30 border-y border-black/8 bg-[#F5F7FB] md:scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-[#f7941d] md:text-5xl">Scholarships & funding</h2>
            <p className="mt-4 text-xl leading-relaxed md:text-2xl">Financing and supporting your education</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
              Explore scholarship pathways, grants, and student assistance opportunities for deserving candidates.
            </p>
            <Link href="/admissions" className="mt-6 inline-flex text-lg font-semibold text-[#f7941d] hover:text-[#F97316] md:text-xl">
              Know More ›
            </Link>
          </div>

          <div className="space-y-3">
            {SCHOLARSHIP_CARDS.map((card) => (
              <article key={card.title} className={`relative overflow-hidden ${card.tone} p-5 text-white`}>
                <div className="grid gap-4 sm:grid-cols-[1fr_220px] sm:items-end">
                  <div>
                    <h3 className="text-2xl font-semibold md:text-3xl">{card.title}</h3>
                    <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">{card.description}</p>
                    <button type="button" className="mt-4 text-base font-semibold text-white">Know more ›</button>
                  </div>
                  <div className="relative h-44 sm:h-48">
                    <Image src={card.image} alt={card.title} fill sizes="220px" className="object-contain object-bottom-right" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trends" className="scroll-mt-30 bg-[#FFFFFF] py-16 md:scroll-mt-32 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Stay up to date with
            <span className="block text-[#f7941d]">{program.title.split(" ").slice(0, 2).join(" ")} trends</span>
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {TREND_ITEMS.map((item) => (
              <article key={item.title} className="border border-black/12 bg-white p-3">
                <div className="relative aspect-video overflow-hidden border border-black/10">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">{item.description}</p>
                <button type="button" className="mt-3 text-base font-semibold text-[#f7941d] hover:text-[#F97316]">Read more ›</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#111827] py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-sm font-semibold md:px-6">
          <span>Open for admission year 2026-27</span>
          <span>|</span>
          <Link href={`/admissions?program=${program.slug}`} className="text-[#f7941d] hover:text-[#F97316]">
            Apply now ›
          </Link>
        </div>
      </section>
    </main>
  );
}
