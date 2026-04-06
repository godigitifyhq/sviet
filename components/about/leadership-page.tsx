import type { Leader } from "@/components/about/leader-card";
import { LeadershipCarousel } from "@/components/about/leadership-carousel";
import { InfoCard } from "@/components/about/info-card";
import { SectionHeader } from "@/components/about/section-header";
import { SectionWrapper } from "@/components/about/section-wrapper";
import { StatCard } from "@/components/about/stat-card";

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
    socialLinks: [{ label: "Facebook", href: "https://www.facebook.com/ChairmanSVGOI" }],
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
    socialLinks: [{ label: "Facebook", href: "https://www.facebook.com/ashok.garg.566" }],
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
    socialLinks: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/ankur-gupta-14278730/" }],
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

function PhilosophyTimeline({ points }: { points: PhilosophyPoint[] }) {
  return (
    <ol className="relative space-y-6">
      <span className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-[#93C5FD]" aria-hidden="true" />
      {points.map((point, index) => (
        <li key={point.title} className="relative pl-16">
          <span className="absolute left-0 top-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7941d] text-xs font-semibold text-white">
            {index + 1}
          </span>
          <span className="absolute left-8 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#f7941d] bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f7941d]" />
          </span>
          <h3 className="text-lg font-semibold text-[#f7941d]">{point.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{point.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function LeadershipPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)]">
      <SectionWrapper
        aria-labelledby="leadership-hero-heading"
        className="relative overflow-hidden border-b border-[#E5E7EB] bg-[linear-gradient(130deg,#EEF4FF_0%,#FFFFFF_52%,#F5F9FF_100%)]"
      >
        <div className="absolute -right-28 -top-22.5 hidden h-72 w-72 bg-[#BFDBFE]/30 blur-3xl md:block" aria-hidden="true" />
        <SectionHeader
          id="leadership-hero-heading"
          eyebrow="About SVIET"
          title="Leadership"
          description="Institutional leadership at SVIET is guided by academic integrity, strategic planning, and student-first governance."
          className="relative"
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="philosophy-heading" className="bg-[#EEF4FF]">
        <SectionHeader
          id="philosophy-heading"
          eyebrow="Guiding Principles"
          title="Our Philosophy"
          description="To become a leading global educational institution that shapes ethical professionals, future-ready leaders, and responsible citizens."
          className="mx-auto max-w-4xl text-center"
          titleClassName="text-[#f7941d]"
          descriptionClassName="text-[#4B5563]"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <h3 className="text-4xl font-bold tracking-wide text-[#f7941d] md:text-5xl">MISSION</h3>
          <PhilosophyTimeline points={MISSION_POINTS} />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">
          <PhilosophyTimeline points={VISION_POINTS} />
          <h3 className="text-4xl font-bold tracking-wide text-[#f7941d] md:text-right md:text-5xl">VISION</h3>
        </div>
      </SectionWrapper>

      <SectionWrapper
        aria-labelledby="management-desk-heading"
        className="bg-[linear-gradient(120deg,#111827_0%,#f7941d_58%,#f7941d_100%)]"
      >
        <SectionHeader
          id="management-desk-heading"
          eyebrow="Leadership"
          title="From the Desk of Management"
          description="Leadership perspectives that shape institutional direction, student outcomes, and academic quality."
          className="mb-8"
          titleClassName="text-white"
          descriptionClassName="text-[#DBEAFE]"
          eyebrowClassName="text-[#BFDBFE]"
        />
        <LeadershipCarousel leaders={LEADERSHIP_DESK} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="culture-diversity-heading" className="bg-[#F8FAFF]">
        <SectionHeader
          id="culture-diversity-heading"
          eyebrow="Campus Life"
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

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#6B7280]">
          Students from across India and multiple international backgrounds learn together in a collaborative and respectful
          campus environment.
        </p>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="infrastructure-heading" className="border-t border-[#E5E7EB]">
        <SectionHeader
          id="infrastructure-heading"
          eyebrow="Campus"
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