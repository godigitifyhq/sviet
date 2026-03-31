import Image from "next/image";

import type { Leader } from "@/components/about/leader-card";
import { InfoCard } from "@/components/about/info-card";
import { LeadershipCarousel } from "@/components/about/leadership-carousel";
import { SectionHeader } from "@/components/about/section-header";
import { SectionWrapper } from "@/components/about/section-wrapper";
import { StatCard } from "@/components/about/stat-card";
import { TimelineList } from "@/components/about/timeline-list";

const HERO_STATS = [
  { value: "35000+", label: "International Students" },
  { value: "50000+", label: "Full-time Students" },
  { value: "75+", label: "Nationalities" },
  { value: "28", label: "States" },
];

const FOUNDATION_TIMELINE = [
  { year: "2005", event: "SVCP and SVCE" },
  { year: "2010", event: "SVPC" },
  { year: "2012", event: "SVITC with IT and Business Faculty" },
  { year: "2014", event: "Management and Technology" },
  { year: "2017", event: "SVCMT (MRSPTU)" },
  { year: "2021", event: "College of Law" },
];

const INITIATIVES = [
  {
    title: "NAAC Accreditation",
    description: "Institutional quality benchmarks recognized through a structured accreditation process.",
    meta: "B++ | 2.94 | 2024",
  },
  {
    title: "Academic Excellence",
    description: "Outcome-focused curriculum, mentoring, and continuous assessment for strong academic performance.",
  },
  {
    title: "Cultural Inclusivity",
    description: "A multicultural campus environment that respects linguistic, regional, and international diversity.",
  },
  {
    title: "Student Development",
    description: "Holistic growth through modern labs, library resources, sports facilities, and co-curricular exposure.",
  },
];

const LEADERSHIP_DESK: Leader[] = [
  {
    name: "Mr. Ashwani Garg",
    title: "Chairman",
    description: "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions.",
    messageParagraphs: [
      "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. SVGOI has become a place that provides valuable educational experiences to students from diverse cultures and backgrounds.",
      "We offer an interactive curriculum designed to deliver strong learning outcomes across scientific, medical, arts, business, and engineering fields.",
      "In today's globalized world, boundaries are becoming transparent, and our international collaborations provide students with opportunities for global exposure.",
      "Join hands with SVGOI and become future-ready.",
    ],
    socialLinks: [
      { label: "Facebook", href: "https://www.facebook.com/ChairmanSVGOI" },
    ],
    imageSrc: "/assets/img/college/management/ashwani-sir.jpg",
    imageAlt: "Mr. Ashwani Garg",
  },
  {
    name: "Mr. Ashok Garg",
    title: "President",
    description: "SVGOI has witnessed remarkable growth, driven by dedication, exceptional faculty, and a strong learning environment.",
    messageParagraphs: [
      "SVGOI has witnessed remarkable growth, driven by dedication, exceptional faculty, and a strong learning environment.",
      "We focus on quality education with programs affiliated with national and international universities.",
      "By emphasizing practical learning and research, we help students realize their full potential and build intellectual excellence.",
      "Let's collaborate in building a skilled society together.",
    ],
    socialLinks: [
      { label: "Facebook", href: "https://www.facebook.com/ashok.garg.566" },
    ],
    imageSrc: "/assets/img/college/management/ashok-sir.jpg",
    imageAlt: "Mr. Ashok Garg",
  },
  {
    name: "Mr. Vishal Garg",
    title: "Director Secretarial and Administration",
    description: "At SVGOI, we prioritize global academic standards and active engagement between students, faculty, and industry.",
    messageParagraphs: [
      "At SVGOI, we prioritize global academic standards and active engagement between students, faculty, and industry.",
      "Our focus is on holistic education that prepares students for a globalized world.",
      "We aim to shape futures through excellence and create a diverse and enriched campus environment, including international exposure.",
      "Join us in shaping the future of learning.",
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-garg-2134aa142/" },
      { label: "Facebook", href: "https://www.facebook.com/vishal.garg.7921975" },
    ],
    imageSrc: "/assets/img/college/management/vishal-sir.jpg",
    imageAlt: "Mr. Vishal Garg",
  },
  {
    name: "Mr. Ankur Gupta",
    title: "Director Corporate Affairs",
    description: "Students across the country are attracted to SVGOI due to our focus on teaching excellence, research, and industry-aligned courses.",
    messageParagraphs: [
      "Students across the country are attracted to SVGOI due to our focus on teaching excellence, research, and industry-aligned courses.",
      "We provide modern infrastructure including ICT-enabled classrooms and active participation in co-curricular activities.",
      "International exchange programs help students gain valuable global exposure and opportunities.",
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ankur-gupta-14278730/" },
    ],
    imageSrc: "/assets/img/college/management/ankurgupta.jpg",
    imageAlt: "Mr. Ankur Gupta",
  },
  {
    name: "Mr. Sahil Garg",
    title: "Project Director",
    description: "SVGOI represents quality, dedication, and strong values, reflected in our accomplished alumni.",
    messageParagraphs: [
      "SVGOI represents quality, dedication, and strong values, reflected in our accomplished alumni.",
      "We offer diverse and industry-relevant programs with a student-centric approach, making us one of the top private institutions in North India.",
      "Our goal is to nurture globally competitive graduates prepared for success across various domains.",
      "Join us in shaping a brighter future.",
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-garg-034226130/" },
      { label: "Facebook", href: "https://www.facebook.com/sahil.garg.58910" },
    ],
    imageSrc: "/assets/img/college/management/sahil-sir.jpg",
    imageAlt: "Mr. Sahil Garg",
  },
  {
    name: "Mr. Shubham Garg",
    title: "Director Placements",
    description: "Our focus is to provide strong placement opportunities and corporate exposure to students.",
    messageParagraphs: [
      "Our focus is to provide strong placement opportunities and corporate exposure to students.",
      "Over the years, we have successfully placed students across multiple industries including IT, manufacturing, banking, media, and services.",
      "The Training and Placement Office coordinates closely with departments to ensure smooth placement activities and career support.",
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-garg-670537170/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100052235821482" },
    ],
    imageSrc: "/assets/img/college/management/shubham-sir..jpg",
    imageAlt: "Mr. Shubham Garg",
  },
  {
    name: "Mr. Ankur Gill",
    title: "Director Operations",
    description: "As the Director of Operations at Swami Vivekanand Institute of Engineering and Technology, I am deeply committed to excellence, innovation, and growth.",
    messageParagraphs: [
      "As the Director of Operations at Swami Vivekanand Institute of Engineering and Technology, I am deeply committed to fostering an environment of excellence, innovation, and growth within our institution.",
      "With a focus on providing top-notch education and opportunities for our students, I am honored to collaborate with such dedicated professionals who share a passion for academic advancement and student success.",
      "Our mission is to empower students with knowledge, skills, and values to thrive in an ever-evolving world. We strive to create an ecosystem where creativity flourishes, ideas are nurtured, and aspirations are realized.",
      "I am confident that with unwavering support and dedication, the institute will continue to reach new heights of success and distinction.",
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ankurgillofficial/" },
      { label: "Facebook", href: "https://www.facebook.com/ankurgillofficial" },
    ],
    imageSrc: "/assets/img/college/management/ankur-sir.jpg",
    imageAlt: "Mr. Ankur Gill",
  },
];

const CULTURE_STATS = [
  { value: "28", label: "States" },
  { value: "75+", label: "Nationalities" },
  { value: "35000+", label: "International Students" },
  { value: "50000+", label: "Students" },
];

const INFRASTRUCTURE = [
  {
    title: "Research Centres",
    description: "Dedicated spaces for interdisciplinary projects, innovation practice, and applied research activity.",
  },
  {
    title: "Library",
    description: "A well-supported library ecosystem with academic references, journals, and digital learning access.",
  },
  {
    title: "Labs",
    description: "Program-specific laboratories that support practical learning and hands-on technical development.",
  },
  {
    title: "Playgrounds",
    description: "Sports and outdoor infrastructure that contribute to physical wellness and balanced campus life.",
  },
];

type PhilosophyPoint = {
  title: string;
  description: string;
};

const MISSION_POINTS: PhilosophyPoint[] = [
  {
    title: "Empowering Students",
    description: "Our mission is to inspire and empower students to pursue excellence in academics, character, and personal growth.",
  },
  {
    title: "Driving Positive Change",
    description: "We strive to prepare students to become responsible professionals who contribute positively to society.",
  },
  {
    title: "Fostering Community Engagement",
    description: "We encourage meaningful participation in community initiatives to build social awareness and empathy.",
  },
  {
    title: "Promoting Diversity and Inclusion",
    description: "We build an inclusive campus where every student is respected, supported, and valued equally.",
  },
];

const VISION_POINTS: PhilosophyPoint[] = [
  {
    title: "Pursuing Excellence",
    description: "Our vision is to become a world-class institution that nurtures talent through quality and consistency.",
  },
  {
    title: "Building Leaders",
    description: "We envision graduates as innovators and ethical leaders capable of creating lasting impact.",
  },
  {
    title: "Global Impact",
    description: "We aim to create global relevance through collaboration, research culture, and future-ready education.",
  },
  {
    title: "Sustainable Future",
    description: "We are committed to sustainability-oriented thinking and responsible practices across institutional growth.",
  },
];

function PhilosophyTimeline({ points }: { points: PhilosophyPoint[] }) {
  return (
    <ol className="relative space-y-6">
      <span className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gray-300" aria-hidden="true" />
      {points.map((point, index) => (
        <li key={point.title} className="relative pl-16">
          <span className="absolute left-0 top-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-white">
            {index + 1}
          </span>
          <span className="absolute left-8 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-amber-500 bg-gray-100">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">{point.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function AboutOverviewPage() {
  return (
    <main className="bg-white">
      <SectionWrapper aria-labelledby="about-hero-heading">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 id="about-hero-heading" className="text-4xl font-bold text-gray-900 md:text-5xl">
              Infinite Horizons, One Campus
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Swami Vivekanand Group of Institutes was established in 2004 under the aegis of Sh. Raghunath Rai Memorial
              Education and Charitable Trust, with a commitment to quality higher education, discipline, and inclusive
              institutional growth.
            </p>
          </div>

          <div className="relative min-h-70 border border-gray-200 md:min-h-90">
            <Image
              src="/assets/img/college/main_gate.png"
              alt="SVIET campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_STATS.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="about-svgoi-heading" className="border-t border-gray-100">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeader
              id="about-svgoi-heading"
              title="About SVGOI"
              description="SVGOI was conceptualized during 2003 and formally established in 2004 to create an accessible and quality-driven higher education ecosystem in the region."
            />

            <div className="space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Over the years, the group expanded through multiple institutions and faculties to serve students from
                diverse academic and geographic backgrounds.
              </p>
              <p>
                This phased growth model reflects a sustained commitment to academic relevance, professional preparation,
                and social responsibility.
              </p>
            </div>

            <TimelineList items={FOUNDATION_TIMELINE} className="space-y-1" />
          </div>

          <div className="relative min-h-80 border border-gray-200">
            <Image
              src="/assets/img/college/4th.png"
              alt="SVGOI campus infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-label="Location Highlight" className="bg-gray-50">
        <InfoCard
          title="Location Highlight"
          description="Situated 30 km from Chandigarh on NH-1, the campus offers strong regional connectivity while maintaining a focused academic environment."
          className="border-gray-300"
        >
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Accessible from Chandigarh, Mohali, Panchkula, Ambala, and Patiala through major road links.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-gray-700" aria-label="Nearby connected cities">
            {[
              "Chandigarh",
              "Mohali",
              "Panchkula",
              "Ambala",
              "Patiala",
            ].map((city) => (
              <li key={city} className="border border-gray-300 px-3 py-1">
                {city}
              </li>
            ))}
          </ul>
        </InfoCard>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="initiatives-heading">
        <SectionHeader
          id="initiatives-heading"
          title="Initiatives and Achievements"
          description="Institutional priorities that support quality education, inclusion, and long-term student development."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INITIATIVES.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} meta={item.meta} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="philosophy-heading" className="bg-gray-100">
        <SectionHeader
          id="philosophy-heading"
          title="Our Philosophy"
          description="To become a leading global educational institution that shapes ethical professionals, future-ready leaders, and responsible citizens."
          className="mx-auto max-w-4xl text-center"
          titleClassName="text-black"
          descriptionClassName="text-gray-600"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <h3 className="text-4xl font-bold tracking-wide text-gray-900 md:text-5xl">MISSION</h3>
          <PhilosophyTimeline points={MISSION_POINTS} />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">
          <PhilosophyTimeline points={VISION_POINTS} />
          <h3 className="text-4xl font-bold tracking-wide text-gray-900 md:text-right md:text-5xl">VISION</h3>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="management-desk-heading" className="bg-black">
        <SectionHeader
          id="management-desk-heading"
          title="From the Desk of Management"
          description="Leadership perspectives that shape institutional direction, student outcomes, and academic quality."
          className="mb-8"
          titleClassName="text-white"
          descriptionClassName="text-gray-300"
        />
        <LeadershipCarousel leaders={LEADERSHIP_DESK} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="culture-diversity-heading" className="bg-gray-50">
        <SectionHeader
          id="culture-diversity-heading"
          title="Culture and Diversity"
          description="A vibrant student community built on inclusion, cross-cultural learning, and shared academic purpose."
          centered
          className="mb-8"
        />

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CULTURE_STATS.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} className="text-center" />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-600">
          Students from across India and multiple international backgrounds learn together in a collaborative and
          respectful campus environment.
        </p>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="infrastructure-heading">
        <SectionHeader
          id="infrastructure-heading"
          title="Infrastructure"
          description="Core academic and campus facilities that support learning, innovation, and student well-being."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INFRASTRUCTURE.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
