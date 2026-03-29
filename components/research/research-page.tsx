"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FaBookOpen, FaFlask, FaGlobe, FaHandshake, FaIndustry, FaLaptopCode, FaMicroscope, FaTools } from "react-icons/fa";

const containerClass = "mx-auto max-w-[1280px] px-6";
const sectionClass = "py-20";

const stats = [
  { value: "2000+", label: "Publications" },
  { value: "300+", label: "Patents" },
  { value: "150+", label: "Sponsored Projects" },
  { value: "50+", label: "Collaborations" },
  { value: "35+", label: "Research Labs" },
];

const researchDomains = [
  {
    title: "Advanced Computing",
    description: "AI, data science, and intelligent systems for real-world applications.",
    icon: FaLaptopCode,
  },
  {
    title: "Biotechnology",
    description: "Translational bio-research focused on health and sustainability.",
    icon: FaMicroscope,
  },
  {
    title: "Green Energy",
    description: "Renewable systems, smart grids, and efficient energy solutions.",
    icon: FaGlobe,
  },
  {
    title: "Materials Research",
    description: "Novel materials and testing for engineering and medical use.",
    icon: FaFlask,
  },
  {
    title: "Industry 4.0",
    description: "Automation, cyber-physical systems, and process optimization.",
    icon: FaIndustry,
  },
  {
    title: "Innovation & IP",
    description: "Patent support, commercialization, and startup incubation.",
    icon: FaHandshake,
  },
];

const hallOfFame = [
  { name: "Dr. Ananya Sharma", role: "Dean, Research & Innovation", image: "/assets/img/students/moon_mandal.png" },
  { name: "Dr. R. K. Verma", role: "Professor, AI Systems", image: "/assets/img/students/moon_mandal.png" },
  { name: "Dr. Meera Saini", role: "Director, Biotech Labs", image: "/assets/img/students/moon_mandal.png" },
  { name: "Dr. Karan Joshi", role: "Lead, Energy Research", image: "/assets/img/students/moon_mandal.png" },
];

const growthData = [
  { year: "2021", publications: 240, patents: 28 },
  { year: "2022", publications: 320, patents: 41 },
  { year: "2023", publications: 430, patents: 56 },
  { year: "2024", publications: 510, patents: 72 },
  { year: "2025", publications: 620, patents: 89 },
];

const domainData = [
  { domain: "Computing", projects: 46 },
  { domain: "Biotech", projects: 29 },
  { domain: "Energy", projects: 34 },
  { domain: "Materials", projects: 21 },
  { domain: "Management", projects: 19 },
];

const distributionData = [
  { name: "Government Grants", value: 42 },
  { name: "Industry Funding", value: 31 },
  { name: "International", value: 17 },
  { name: "Internal", value: 10 },
];

const sponsoredProjects = [
  {
    title: "AI-Assisted Precision Farming",
    description: "Decision support model for crop monitoring and yield optimization across North India.",
    image: "/assets/img/college/main_gate.png",
  },
  {
    title: "Battery Safety & Diagnostics",
    description: "High reliability battery analytics for EV systems in collaboration with industry partners.",
    image: "/assets/img/college/main_gate.png",
  },
  {
    title: "Smart Health Screening",
    description: "Low-cost biomedical signal platform for preventive diagnostics in rural communities.",
    image: "/assets/img/college/main_gate.png",
  },
];

const infrastructure = [
  {
    title: "Central Instrumentation Facility",
    description: "High-end analytical instruments supporting multi-disciplinary experimentation.",
    image: "/assets/img/college/main_gate.png",
  },
  {
    title: "Innovation Prototyping Lab",
    description: "Fabrication, electronics, and rapid prototyping for student and faculty projects.",
    image: "/assets/img/college/main_gate.png",
  },
  {
    title: "High Performance Computing Cluster",
    description: "Compute-intensive environment for simulation, AI, and data-driven research.",
    image: "/assets/img/college/main_gate.png",
  },
];

const collaborations = [
  "Google",
  "EMC",
  "Infosys",
  "TCS",
  "Wipro",
  "Deloitte",
];

const services = [
  {
    title: "IPR & Patent Support",
    description: "End-to-end mentoring for disclosure drafting, filing, and prosecution support.",
    icon: FaBookOpen,
  },
  {
    title: "Industry Consultancy",
    description: "Applied problem-solving through faculty-led consulting and testing engagements.",
    icon: FaTools,
  },
  {
    title: "Conferences & Workshops",
    description: "Focused forums for research dissemination, collaboration, and skill advancement.",
    icon: FaHandshake,
  },
];

const publicationOutcome = [
  {
    title: "Indexed Publications",
    description: "Strong year-on-year growth in Scopus and Web of Science indexed journals.",
    value: "620",
  },
  {
    title: "Technology Transfers",
    description: "Research translated into products and process improvements with partner industries.",
    value: "47",
  },
  {
    title: "Patents Filed",
    description: "Steady pipeline of protected innovations across engineering and life sciences.",
    value: "89",
  },
];

const PIE_COLORS = ["#111827", "#f7941d", "#4b5563", "#9ca3af"];

export function ResearchPageComponent() {
  return (
    <>
      <section className="relative overflow-hidden py-30">
        <Image
          src="/assets/img/college/main_gate.png"
          alt="Research at SVIET"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="absolute -left-20 top-16 h-60 w-60 rounded-full bg-[#f7941d]/25 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className={`${containerClass} relative grid gap-10 md:grid-cols-2 md:items-center`}>
          <div>
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-white/90">
              SVIET Research
            </p>
            <h1 className="text-5xl font-bold text-white">Research & Innovation at SVIET</h1>
            <p className="mt-6 max-w-xl text-base text-white/90">
              We cultivate a research ecosystem that blends rigorous inquiry, practical impact, and interdisciplinary collaboration to address contemporary global challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#f7941d] px-6 py-3 font-semibold text-white transition hover:bg-[#df850f]">Explore Projects</button>
              <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">Partner With Us</button>
            </div>
          </div>
          <div className="justify-self-start rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur-md md:justify-self-end">
            <p className="text-sm text-white/80">Research Helpline</p>
            <p className="mt-2 text-2xl font-semibold text-white">+91-1762-508005</p>
            <p className="mt-3 text-sm text-white/80">research@sviet.ac.in</p>
            <p className="mt-4 text-sm text-white/80">Mon-Sat | 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f7941d]/40">
              <p className="text-4xl font-bold text-gray-900">{item.value}</p>
              <p className="mt-2 text-base text-gray-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Research Vision</p>
          <h2 className="text-4xl font-bold text-gray-900">About Research at SVIET</h2>
          <p className="mt-4 text-lg text-gray-700">A research ecosystem built for societal and industrial impact.</p>
          <p className="mt-6 text-base text-gray-600">
            SVIET advances discovery through funded projects, high-quality publications, and translational outcomes that serve industry and society. Our research framework emphasizes ethics, reproducibility, and measurable impact while empowering faculty and students with modern tools, mentorship, and collaborative networks.
          </p>
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <h2 className="text-4xl font-bold text-gray-900">Research Domains</h2>
        <p className="mt-4 text-lg text-gray-700">Focused verticals that combine scientific rigor with real-world application.</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {researchDomains.map((domain) => (
            <article key={domain.title} className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:border-[#f7941d]/40 hover:bg-[#f7941d]/5">
              <domain.icon className="text-2xl text-[#f7941d]" />
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{domain.title}</h3>
              <p className="mt-3 text-base text-gray-600">{domain.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <h2 className="text-4xl font-bold text-gray-900">Hall of Fame</h2>
        <p className="mt-4 text-lg text-gray-700">Recognizing researchers shaping the institution&apos;s innovation culture.</p>
        <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {hallOfFame.map((person) => (
            <article key={person.name} className="rounded-2xl border border-gray-100 bg-white p-4 transition hover:border-[#f7941d]/40">
              <div className="relative h-88 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{person.name}</h3>
              <p className="mt-2 text-base text-gray-600">{person.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className={containerClass}>
          <h2 className="text-4xl font-bold text-gray-900">Research Insights</h2>
          <p className="mt-4 text-lg text-gray-700">Evidence-led trends in publications, projects, and research funding.</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Publication & Patent Growth</h3>
            <div className="mt-8 h-72">
              <div className="mx-auto h-full w-full max-w-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <CartesianGrid stroke="transparent" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="publications" stroke="#111" strokeWidth={2} />
                  <Line type="monotone" dataKey="patents" stroke="#111" strokeWidth={2} strokeDasharray="6 4" />
                </LineChart>
              </ResponsiveContainer>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Domain-Wise Projects</h3>
            <div className="mt-8 h-72">
              <div className="mx-auto h-full w-full max-w-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={domainData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <CartesianGrid stroke="transparent" />
                  <XAxis dataKey="domain" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="projects" fill="#111" radius={[6, 6, 0, 0]} stroke="#111" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900">Funding Distribution</h3>
            <div className="mt-8 h-80">
              <div className="mx-auto h-full w-full max-w-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={distributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label stroke="#111" strokeWidth={2}>
                    {distributionData.map((entry) => (
                      <Cell key={entry.name} fill={PIE_COLORS[distributionData.indexOf(entry)]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              </div>
            </div>
          </article>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className={containerClass}>
          <h2 className="text-4xl font-bold text-white">Sponsored Projects</h2>
          <p className="mt-4 text-lg text-white/85">High-impact projects funded by government and industry partners.</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {sponsoredProjects.map((project, index) => (
              <article key={project.title} className={`rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10 ${index < 2 ? "md:border-r" : ""}`}>
                <div className="relative h-44 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-base text-white/85">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <h2 className="text-4xl font-bold text-gray-900">Infrastructure & Facilities</h2>
        <p className="mt-4 text-lg text-gray-700">State-of-the-art spaces enabling interdisciplinary research and prototyping.</p>
        <div className="mt-10 space-y-12">
          {infrastructure.map((item, index) => (
            <article key={item.title} className="grid gap-10 rounded-2xl border border-gray-100 bg-white p-6 md:grid-cols-2 md:items-center">
              <div className={`relative h-64 overflow-hidden rounded-2xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-base text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <h2 className="text-4xl font-bold text-gray-900">Research Collaborations</h2>
        <p className="mt-4 text-lg text-gray-700">Collaborative partnerships driving shared innovation outcomes.</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          {collaborations.map((company) => (
            <p key={company} className="text-2xl font-semibold tracking-wide text-gray-400 transition duration-300 hover:text-[#f7941d] grayscale hover:grayscale-0">{company}</p>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-gray-100">
            <Image
              src="/assets/img/college/main_gate.png"
              alt="Academic resources"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Academic Resources</h2>
            <p className="mt-4 text-lg text-gray-700">Comprehensive digital and mentoring support for impactful scholarship.</p>
            <p className="mt-6 text-base text-gray-600">
              Our researchers access e-journals, indexed databases, high-quality repositories, and dedicated mentoring cells to accelerate publication quality, reproducibility, and interdisciplinary excellence.
            </p>
            <button className="mt-8 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#f7941d]">View Resources</button>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <h2 className="text-4xl font-bold text-gray-900">Research Activities & Services</h2>
        <p className="mt-4 text-lg text-gray-700">Institutional support mechanisms that help ideas move from concept to impact.</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:border-[#f7941d]/40 hover:bg-[#f7941d]/5">
              <service.icon className="text-2xl text-[#f7941d]" />
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-base text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} ${containerClass}`}>
        <h2 className="text-4xl font-bold text-gray-900">Publications & Outcomes</h2>
        <p className="mt-4 text-lg text-gray-700">Measured outcomes reflecting quality, translation, and intellectual contribution.</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {publicationOutcome.map((item) => (
            <article key={item.title} className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6">
              <p className="text-4xl font-bold text-gray-900">{item.value}</p>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-base text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
