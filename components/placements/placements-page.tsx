import Image from "next/image";

import { FAQAccordion } from "@/components/placements/faq-accordion";
import { HiringPartners } from "@/components/placements/hiring-partners";
import { NewsCard } from "@/components/placements/news-card";
import { PlacementSuccessBanner } from "@/components/placements/placement-success-banner";
import { RecruiterGrid } from "@/components/placements/recruiter-grid";
import { SectionHeader } from "@/components/placements/section-header";
import { SectionWrapper } from "@/components/placements/section-wrapper";
import { StatCard } from "@/components/placements/stat-card";
import { TestimonialCard } from "@/components/placements/testimonial-card";
import { TestimonialCarousel } from "@/components/placements/testimonial-carousel";
import { HeroSection } from "@/components/home/hero";

const HERO_STATS = [
  { label: "Students Placed", value: "2000+" },
  { label: "Highest Package", value: "Rs 10 LPA" },
  { label: "Recruiters", value: "300+" },
];

const KEY_STATS = [
  { value: "2000+", label: "Total Students Placed" },
  { value: "300+", label: "Number of Recruiters" },
  { value: "Rs 10 LPA", label: "Highest Package" },
  { value: "Rs 4 LPA", label: "Average Package" },
];

const RECRUITERS = [
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Wipro", logoSrc: "/assets/img/companies/wipro.png", logoAlt: "Wipro logo" },
  { name: "Amazon", logoSrc: "/assets/img/companies/amazon.png", logoAlt: "Amazon logo" },
  { name: "Deloitte", logoSrc: "/assets/img/companies/deloitte.png", logoAlt: "Deloitte logo" },
  { name: "Jio Digital", logoSrc: "/assets/img/companies/jio_digital.png", logoAlt: "Jio Digital logo" },
  { name: "Mamsys", logoSrc: "/assets/img/companies/mamsys.png", logoAlt: "Mamsys logo" },
  { name: "Dabur", logoSrc: "/assets/img/companies/dabur.png", logoAlt: "Dabur logo" },
];

const STUDENT_TESTIMONIALS = [
  {
    imageSrc: "/assets/img/students/moon_mandal.png",
    imageAlt: "Student placed at Infosys",
    name: "Moon Mandal",
    subtitle: "B.Tech CSE",
    company: "Infosys",
    quote:
      "SVIET's placement team guided me from resume preparation to interview readiness and helped me secure the right opportunity.",
  },
  {
    imageSrc: "/assets/img/students/moon_mandal.png",
    imageAlt: "Student placed at TCS",
    name: "Nikhil Arora",
    subtitle: "B.Tech CSE",
    company: "TCS",
    quote:
      "Mock interviews and technical bootcamps gave me the confidence to perform well during the campus recruitment process.",
  },
  {
    imageSrc: "/assets/img/students/moon_mandal.png",
    imageAlt: "Student placed at Wipro",
    name: "Ritika Sharma",
    subtitle: "BCA",
    company: "Wipro",
    quote:
      "The structured training plan improved my communication and problem-solving skills before placement season began.",
  },
  {
    imageSrc: "/assets/img/students/moon_mandal.png",
    imageAlt: "Student placed at Deloitte",
    name: "Aman Verma",
    subtitle: "MBA",
    company: "Deloitte",
    quote:
      "Industry workshops and domain mentoring prepared me for case discussions and final interviews.",
  },
];

const PLACEMENT_NEWS = [
  {
    imageSrc: "/assets/img/college/auditorium.png",
    imageAlt: "Placement drive at SVIET auditorium",
    title: "Mega Placement Drive 2026",
    description: "Leading recruiters conducted multi-profile hiring across technology, management, and analytics roles.",
  },
  {
    imageSrc: "/assets/img/college/main_gate.png",
    imageAlt: "SVIET campus placement update",
    title: "Record Recruiter Participation",
    description: "A growing employer network has expanded internship and full-time opportunities for final-year students.",
  },
  {
    imageSrc: "/assets/img/college/scholarship.png",
    imageAlt: "Training and placement workshop",
    title: "Industry Readiness Workshop Series",
    description: "Corporate experts led sessions on aptitude, coding rounds, communication, and interview success.",
  },
];

const RECRUITER_TESTIMONIALS = [
  {
    imageSrc: "/assets/img/college/management/ankurgupta.jpg",
    imageAlt: "Recruiter representative testimonial",
    name: "Rahul Mehta",
    subtitle: "Talent Acquisition Lead",
    company: "Infosys",
    quote: "SVIET students demonstrate strong fundamentals and excellent adaptability in corporate environments.",
  },
  {
    imageSrc: "/assets/img/college/management/sahil-sir.jpg",
    imageAlt: "Recruiter representative from TCS",
    name: "Neha Bansal",
    subtitle: "Campus Hiring Manager",
    company: "TCS",
    quote: "The institution's training quality and disciplined preparation make hiring from SVIET highly reliable.",
  },
  {
    imageSrc: "/assets/img/college/management/shubham-sir..jpg",
    imageAlt: "Recruiter representative from Wipro",
    name: "Karan Sethi",
    subtitle: "Human Resources Partner",
    company: "Wipro",
    quote: "SVIET has consistently provided candidates who are project-ready and aligned with industry expectations.",
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
      <HeroSection />

      <HiringPartners />

      <PlacementSuccessBanner />

      {/* <SectionWrapper aria-labelledby="key-placement-stats-heading" className="border-t border-gray-100 bg-gray-50">
        <SectionHeader id="key-placement-stats-heading" title="Key Placement Stats" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_STATS.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="top-recruiters-heading">
        <SectionHeader id="top-recruiters-heading" title="Top Recruiters" />
        <RecruiterGrid recruiters={RECRUITERS} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="placement-highlight-heading" className="bg-gray-50">
        <article className="grid gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
            <Image
              src="/assets/img/students/moon_mandal.png"
              alt="SVIET student placement highlight"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 id="placement-highlight-heading" className="text-3xl font-bold text-gray-900">
              Placement Highlight
            </h2>
            <blockquote className="mt-5 border-l-2 border-gray-300 pl-4 text-lg leading-relaxed text-gray-700">
              “We create skilled professionals that are remarkable much before they graduate.”
            </blockquote>
            <p className="mt-4 text-base font-semibold text-gray-900">Training &amp; Placement Cell</p>
            <p className="text-sm text-gray-600">SVIET</p>
          </div>
        </article>
      </SectionWrapper> */}

      {/* <SectionWrapper aria-labelledby="student-testimonials-heading">
        <SectionHeader id="student-testimonials-heading" title="Student Testimonials" />
        <TestimonialCarousel testimonials={STUDENT_TESTIMONIALS} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="placement-updates-heading" className="border-t border-gray-100 bg-gray-50">
        <SectionHeader id="placement-updates-heading" title="Placement Updates" />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <SectionWrapper aria-labelledby="industry-learning-heading">
        <SectionHeader
          id="industry-learning-heading"
          title="Industry-based immersive learning"
          description="SVIET follows an outcomes-focused training framework that combines foundational learning with placement-specific preparation across academic programs."
        />

        <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Soft skills training</li>
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Mock interviews</li>
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Resume building</li>
          <li className="rounded-md border border-gray-200 bg-white px-4 py-3">Industry workshops</li>
        </ul>
      </SectionWrapper> */}

      {/* <SectionWrapper aria-labelledby="recruiter-testimonials-heading" className="bg-[#a60f2d]">
        <SectionHeader
          id="recruiter-testimonials-heading"
          title="Recruiter Testimonials"
          titleClassName="text-white"
          description="Industry partners share their experience of hiring SVIET graduates."
          descriptionClassName="text-red-100"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RECRUITER_TESTIMONIALS.map((item) => (
            <TestimonialCard
              key={`${item.name}-${item.company}`}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              name={item.name}
              subtitle={item.subtitle}
              company={item.company}
              quote={item.quote}
              className="border-white/30 bg-white text-gray-900"
            />
          ))}
        </div>
      </SectionWrapper> */}

      <SectionWrapper aria-labelledby="placements-faq-heading" className="bg-gray-50">
        <SectionHeader id="placements-faq-heading" title="FAQ" />
        <FAQAccordion items={FAQ_ITEMS} />
      </SectionWrapper>
    </main>
  );
}