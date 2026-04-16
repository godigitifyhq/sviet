import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Building2, GraduationCap, Users } from "lucide-react";

import type { Leader } from "@/components/about/leader-card";
import { InfoCard } from "@/components/about/info-card";
import { LeadershipCarousel } from "@/components/about/leadership-carousel";
import { SectionHeader } from "@/components/about/section-header";
import { SectionWrapper } from "@/components/about/section-wrapper";
import { StatCard } from "@/components/about/stat-card";

const RELATED_LINKS = [
  {
    title: "Accreditations & Recognition",
    description: "Institutional quality and benchmarks",
    href: "/about/accreditations",
    icon: Award,
  },
  {
    title: "Campus Infrastructure",
    description: "Facilities that support modern learning",
    href: "/about/infrastructure",
    icon: Building2,
  },
  {
    title: "Academic Programs",
    description: "Explore multidisciplinary pathways",
    href: "/programs",
    icon: GraduationCap,
  },
  {
    title: "Leadership Desk",
    description: "Vision guiding the institution",
    href: "/about/leadership",
    icon: Users,
  },
] as const;

const INITIATIVES = [
  {
    title: "Accreditation & Quality Standards",
    description: "Recognized through NAAC accreditation with a B++ Grade (2.94 Score, 2024), reflecting institutional commitment to quality education.",
    meta: "NAAC B++ | 2.94 Score | 2024",
  },
  {
    title: "Academic Approach",
    description: "A curriculum designed around practical application, continuous evaluation, and mentorship that prepares students for real-world challenges.",
  },
  {
    title: "Inclusive Campus Environment",
    description: "A diverse and welcoming ecosystem that values cultural exchange, collaboration, and mutual growth.",
  },
  {
    title: "Student Development Ecosystem",
    description: "Modern infrastructure including labs, libraries, sports facilities, and activity spaces supporting both academic and personal development.",
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
  { value: "35,000+", label: "International Students" },
  { value: "50000+", label: "Students" },
];

const INFRASTRUCTURE = [
  {
    title: "Research Centres",
    description: "Spaces dedicated to innovation, experimentation, and interdisciplinary collaboration that encourage students to explore ideas beyond curriculum boundaries.",
  },
  {
    title: "Library",
    description: "A structured learning environment with access to academic resources, references, and digital tools for focused study and research.",
  },
  {
    title: "Laboratories",
    description: "Program-specific labs equipped for practical learning, enabling students to build hands-on technical capabilities.",
  },
  {
    title: "Playgrounds & Sports Facilities",
    description: "Open spaces and sports infrastructure that promote physical activity, teamwork, and a balanced campus lifestyle.",
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
      <span className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-[#93C5FD]" aria-hidden="true" />
      {points.map((point, index) => (
        <li key={point.title} className="relative pl-16">
          <span className="absolute left-0 top-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7941d] text-xs font-semibold text-white">
            {index + 1}
          </span>
       
          <h3 className="text-lg font-semibold text-[#000000]">{point.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{point.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function AboutOverviewPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] text-[#111827]">
      <section aria-labelledby="about-hero-heading" className="relative -mt-30 overflow-hidden pt-30">
        <Image
          src="/assets/img/college/main_gate.png"
          alt="SVIET main campus gate"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#020617]/90 via-[#0F172A]/72 to-[#0F172A]/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617]/72 via-transparent to-[#38BDF8]/20" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-140 max-w-7xl flex-col justify-end px-4 pb-16 md:min-h-160 md:px-6 md:pb-24">
          <p className="flex items-center gap-2 text-sm font-medium text-white/90 md:text-3xl">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-white">About Us</span>
          </p>

          <h1 id="about-hero-heading" className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Where Learning Meets Innovation and Opportunity.
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 md:text-2xl">
            SVIET is built as a space where education goes beyond classrooms, bringing together academic depth,
            practical exposure, and a culture of innovation for real-world readiness.
          </p>
        </div>
      </section>

      <SectionWrapper aria-labelledby="about-svgoi-heading" className="border-t border-[#E5E7EB] bg-[#F8FAFC]">
        <div className="space-y-14">
          <div>
            <p className="inline-flex items-center gap-3 text-xl font-medium leading-tight text-[#374151]">
              <span className="h-2.5 w-2.5 rotate-45 bg-[#14B8A6]" aria-hidden="true" />
              Quick Access
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {RELATED_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between border border-[#E5E7EB] bg-white px-6 py-6 shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-[0_12px_28px_rgba(30,42,120,0.12)]"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="mt-0.5 h-7 w-7 text-[#4F46E5]" aria-hidden="true" />
                      <div>
                        <p className="text-xl font-semibold leading-tight text-[#111827] md:text-2xl">{item.title}</p>
                        <p className="mt-1 text-sm text-[#6B7280]">{item.description}</p>
                      </div>
                    </div>

                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#EEF2FF] text-[#4F46E5] transition group-hover:bg-[#f7941d] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <h2 id="about-svgoi-heading" className="text-5xl font-semibold leading-tight md:text-7xl">
              <span className="block text-[#1F2937]">About</span>
              <span className="mt-2 block bg-linear-to-r from-[#f7941d] via-[#4F46E5] to-[#EC4899] bg-clip-text text-transparent">
                SVIET
              </span>
            </h2>

            <div className="max-w-4xl space-y-7 text-lg leading-relaxed text-[#111827]">
              <p>
                With over two decades of presence in higher education, Swami Vivekanand Group of Institutes has
                developed into a multidisciplinary institution centered on applied learning, innovation, and
                career-oriented education.
              </p>

              <p>
                Established under the Shri Raghunath Rai Memorial Educational and Charitable Trust, the journey began
                with SVIET in 2004 and expanded into engineering, pharmacy, management, education, polytechnic, IT,
                and law.
              </p>

              <p>
                SVIET continues to evolve as a learning ecosystem that combines academic structure with industry
                relevance, supporting students through practical training, mentorship, and skill-based development.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-label="Location Highlight" className="bg-[#F5F7FB]">
        <InfoCard
          title="Strategic Location Advantage"
          description="Located along the Chandigarh-Patiala highway (NH-1), the campus offers strong accessibility while maintaining a focused academic setting."
          className="border-[#BFDBFE]"
        >
          <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
            Easily connected to Chandigarh, Mohali, Panchkula, Ambala, and Patiala through major road links.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-[#f7941d]" aria-label="Easily connected cities">
            {[
              "Chandigarh",
              "Mohali",
              "Panchkula",
              "Ambala",
              "Patiala",
            ].map((city) => (
              <li key={city} className="border border-[#BFDBFE] bg-white px-3 py-1">
                {city}
              </li>
            ))}
          </ul>
        </InfoCard>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="initiatives-heading">
        <SectionHeader
          id="initiatives-heading"
          eyebrow="Institutional Focus"
          title="Institutional Focus & Achievements"
          description="SVIET emphasizes consistent growth through structured initiatives that support academic quality and student success."
          titleClassName="text-[#000000]"
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INITIATIVES.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} meta={item.meta} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="philosophy-heading" className="bg-[#EEF4FF]">
        <SectionHeader
          id="philosophy-heading"
          eyebrow="Vision & Direction"
          title="Our Philosophy"
          description="SVIET aims to build a progressive learning environment that nurtures thinkers, innovators, and future leaders through relevant and responsible education."
          className="mx-auto max-w-4xl text-center"
          titleClassName="text-[#000000]"
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
        className="bg-black"
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
          description="A dynamic campus environment built on inclusion, collaboration, and shared learning where ideas and perspectives are exchanged openly."
          centered
          titleClassName="text-[#000000]"
          className="mb-8"
        />

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CULTURE_STATS.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} className="text-center" />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#6B7280]">
          Students across India and international communities learn, interact, and grow together, creating a globally
          aware and culturally rich academic environment.
        </p>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="infrastructure-heading" className="border-t border-[#E5E7EB]">
        <SectionHeader
          id="infrastructure-heading"
          eyebrow="Campus"
          title="Infrastructure"
          description="Facilities designed to support academic growth, innovation, and overall student development while balancing learning with well-being."
          className="mb-8"
          titleClassName="text-[#000000]"
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
