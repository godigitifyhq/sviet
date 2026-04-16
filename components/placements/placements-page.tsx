import { FAQAccordion } from "@/components/placements/faq-accordion";
import { HiringPartners } from "@/components/placements/hiring-partners";
import { NewsCard } from "@/components/placements/news-card";
import { PlacementCardsMarqueeSection } from "@/components/placements/placement-cards-marquee-section";
import { PlacementSuccessBanner } from "@/components/placements/placement-success-banner";
import { PlacementStudentSpeakSection } from "@/components/placements/placement-student-speak-section";
import { PlacementsHeroSection } from "@/components/placements/placements-hero-section";
import { SectionHeader } from "@/components/placements/section-header";
import { SectionWrapper } from "@/components/placements/section-wrapper";
import { StatCard } from "@/components/placements/stat-card";
import { TrainingCurriculumSection } from "@/components/placements/training-curriculum-section";

const KEY_STATS = [
  { value: "3,000+", label: "Offer Letters" },
  { value: "50 LPA", label: "Highest Package" },
  { value: "12,000+", label: "Students Placed" },
  { value: "350+", label: "Companies Visited Per Year" },
];

const PLACEMENT_NEWS = [
  {
    imageSrc: "/assets/img/college/4th.png",
    imageAlt: "Pharma Career Fair 2024 at SVIET",
    title: "Pharma Career Fair 2024",
    description:
      "09 February 2024 - Students explored career opportunities, interacted with industry experts, and participated in recruitment processes in the pharmaceutical sector.",
  },
  {
    imageSrc: "/assets/img/college/global_recognition.png",
    imageAlt: "Global Futures Summit 2024",
    title: "Global Futures Summit 2024",
    description: "23 March 2024 - Industry and academic experts shared insights on emerging technologies and market trends.",
  },
  {
    imageSrc: "/assets/img/college/auditorium.png",
    imageAlt: "24x7 Software placement drive",
    title: "24x7 Software Placement Drive",
    description:
      "28 September 2024 - On-campus recruitment drive for B.Tech CSE students with strong participation.",
  },
  {
    imageSrc: "/assets/img/college/main_gate.png",
    imageAlt: "Skillkart placement drive at SVIET",
    title: "Skillkart Placement Drive",
    description: "04 October 2024 - Multi-course placement drive involving over 60 students from various programs.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is the placement process?",
    answer:
      "The placement process includes company outreach, eligibility screening, pre-placement talks, tests, interviews, and final offer rollouts coordinated by the training and placement cell.",
  },
  {
    question: "Which companies visit campus?",
    answer:
      "SVIET hosts recruiters from IT, consulting, manufacturing, banking, and service sectors, including national and multinational organizations.",
  },
  {
    question: "What is the average package?",
    answer: "The average package is around Rs 4 LPA, with higher packages depending on role, domain, and student performance.",
  },
  {
    question: "Are internships provided?",
    answer:
      "Yes, students receive internship support through industry partnerships, live projects, and campus-connect initiatives across departments.",
  },
  {
    question: "How does training work?",
    answer:
      "Students undergo a structured training pipeline covering aptitude, coding and technical modules, communication, resume building, and mock interviews.",
  },
];

export function PlacementsPageComponent() {
  return (
    <main className="bg-white">
      <PlacementsHeroSection />

      <SectionWrapper aria-labelledby="key-placement-stats-heading" className="border-t border-gray-100 bg-gray-50">
        <SectionHeader id="key-placement-stats-heading" title="Placement Achievements" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_STATS.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
        <p className="mt-5 text-sm text-gray-600">Data represents cumulative placement achievements.</p>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="placements-overview-heading">
        <SectionHeader
          id="placements-overview-heading"
          title="Placements Overview"
          description="At SVIET, placements are driven by a structured system designed to transform students into industry-ready professionals. The Training & Placement Department continuously works to bridge the gap between academic learning and real-world industry requirements."
        />

        <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-600">
          Our approach focuses on practical exposure, continuous training, and strong corporate engagement to ensure
          students are well-prepared for successful careers.
        </p>

        <article className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-gray-900">Training &amp; Placement Cell</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            The Training &amp; Placement Cell at SVIET actively collaborates with leading organizations across industries
            including IT, Manufacturing, Finance, Media, and Services.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Our objective is to make every student a 100% employable asset through continuous skill development,
            real-world exposure, and structured placement support - aligned with our vision of "One Person One Job."
          </p>
        </article>
      </SectionWrapper>

      <PlacementSuccessBanner />

      <PlacementCardsMarqueeSection />

      <HiringPartners />

      <SectionWrapper aria-labelledby="director-message-heading" className="bg-gray-50">
        <SectionHeader id="director-message-heading" title="From the Desk of Director Placements" />
        <article className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Mr. Shubham Garg</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Our goal is to provide strong placement opportunities and meaningful corporate exposure to students. Over
            the years, the Training &amp; Placement Cell has successfully connected students with reputed organizations
            across multiple industries.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            We focus on building industry-ready professionals by aligning academic learning with practical skills,
            ensuring students are well-prepared to meet evolving career demands.
          </p>
        </article>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
              Best Campus Experience, Best Placements, and Best Culture
            </p>
          </article>
          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
              To strengthen industry connections, create meaningful placement opportunities, and provide holistic career
              guidance that prepares students for long-term professional success.
            </p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="placement-drives-heading">
        <SectionHeader id="placement-drives-heading" title="Placement Drives" />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLACEMENT_NEWS.map((item) => (
            <NewsCard
              key={item.title}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="industrial-exposure-heading" className="bg-gray-50">
        <SectionHeader
          id="industrial-exposure-heading"
          title="Industrial Exposure"
          description="SVIET provides continuous industry exposure through visits, training programs, expert sessions, and live interactions with professionals. These initiatives help students understand real-world work environments and industry expectations."
        />

        <article className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Real-World Engagement</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Our strong industry connections ensure that students gain hands-on experience through placement drives,
            internships, and collaborative initiatives, transforming them into confident professionals ready for
            real-world challenges.
          </p>
        </article>
      </SectionWrapper>

      <TrainingCurriculumSection />

      <PlacementStudentSpeakSection />

      <SectionWrapper aria-labelledby="outcomes-objectives-heading">
        <SectionHeader id="outcomes-objectives-heading" title="Outcomes & Objectives" />

        <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Professional Skill Development</li>
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Maximum Opportunities</li>
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Employable Graduates</li>
        </ul>

        <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-600">
          We focus on developing industry-ready graduates equipped with practical skills, professional ethics, and the
          ability to contribute effectively in their chosen careers.
        </p>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="placements-faq-heading" className="bg-gray-50">
        <SectionHeader id="placements-faq-heading" title="FAQ" />
        <FAQAccordion items={FAQ_ITEMS} />
      </SectionWrapper>
    </main>
  );
}