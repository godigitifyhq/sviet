type AboutPageKey =
  | "overview"
  | "infrastructure"
  | "accreditations"
  | "rankings"
  | "placements"
  | "alumni"
  | "leadership"
  | "organization"
  | "location"
  | "tour";

export const ABOUT_SLUG_TO_KEY: Record<string, AboutPageKey> = {
  infrastructure: "infrastructure",
  accreditations: "accreditations",
  rankings: "rankings",
  placements: "placements",
  alumni: "alumni",
  leadership: "leadership",
  organization: "organization",
  location: "location",
  tour: "tour",
};

export const ABOUT_ROUTE_SLUGS = Object.keys(ABOUT_SLUG_TO_KEY);

type AboutPageData = {
  title: string;
  intro: string;
  paragraphs: string[];
  stats?: Array<{ value: string; label: string }>;
  highlights?: string[];
};

const ABOUT_PAGE_DATA: Record<AboutPageKey, AboutPageData> = {
  overview: {
    title: "Overview",
    intro:
      "Swami Vivekanand Institute of Engineering and Technology (SVIET) is a multidisciplinary institution focused on technical excellence, professional readiness, and responsible leadership.",
    paragraphs: [
      "The institution was established to provide outcome-driven education that connects classroom learning with industry expectations. Over the years, SVIET has built a strong academic ecosystem across engineering, management, computer applications, and allied disciplines.",
      "SVIET follows a student-centered approach with an emphasis on conceptual clarity, practical exposure, and continuous mentoring. The academic environment is designed to support both foundational learning and advanced specialization.",
      "The mission is to nurture competent professionals with ethics, discipline, and social responsibility. The vision is to remain a trusted destination for quality higher education in North India.",
    ],
    stats: [
      { value: "2004", label: "Established" },
      { value: "50+", label: "Programs" },
      { value: "10,000+", label: "Alumni" },
      { value: "500+", label: "Recruiters" },
    ],
  },
  infrastructure: {
    title: "Infrastructure",
    intro:
      "SVIET campus infrastructure is designed to support academic rigor, practical training, and student life in a single integrated environment.",
    paragraphs: [
      "The campus includes discipline-specific laboratories, modern classrooms, seminar halls, and digital learning facilities. Departments maintain practical training spaces aligned with curriculum and industry standards.",
      "Academic blocks are supported by central facilities such as a library, computing resources, innovation spaces, and student support offices. Infrastructure planning focuses on accessibility, safety, and continuous upgrades.",
      "Residential and community facilities include hostels, dining services, sports areas, and activity spaces to ensure a balanced student experience beyond academics.",
    ],
    highlights: [
      "Departmental labs and workshops for hands-on learning",
      "Library and digital learning resources",
      "Hostel, sports, and student activity facilities",
    ],
  },
  accreditations: {
    title: "Accreditations & Approvals",
    intro:
      "SVIET operates with the required regulatory approvals and academic affiliations applicable to its programs.",
    paragraphs: [
      "The institution follows the norms and quality frameworks prescribed by relevant statutory bodies for technical and professional education. Academic delivery, assessment, and compliance are maintained through structured internal processes.",
      "Program-level and institutional quality benchmarks are periodically reviewed to ensure alignment with current standards. Documentation, audits, and governance mechanisms support continuous quality assurance.",
      "Prospective students can review program-specific approval and affiliation details through official admission and academic communications.",
    ],
    highlights: [
      "Regulatory compliance for approved programs",
      "Structured quality assurance and periodic review",
      "Transparent publication of program-level details",
    ],
  },
  rankings: {
    title: "Rankings",
    intro:
      "SVIET has been recognized for academic quality, institutional development, and student outcomes across multiple evaluation frameworks.",
    paragraphs: [
      "Rankings and recognitions reflect sustained work in curriculum delivery, faculty development, infrastructure, and placement support. Institutional growth is measured through both external benchmarks and internal performance indicators.",
      "SVIET continues to strengthen quality systems through data-driven planning, student feedback, and academic review cycles. The institution treats ranking outcomes as inputs for further improvement.",
      "Recognition remains a byproduct of long-term academic consistency and stakeholder trust.",
    ],
    stats: [
      { value: "104", label: "NIRF 2021 Rank Mention" },
      { value: "20+", label: "Years of Academic Legacy" },
      { value: "North India", label: "Regional Recognition" },
      { value: "Multi-Disciplinary", label: "Institutional Presence" },
    ],
  },
  placements: {
    title: "Placements",
    intro:
      "SVIET placement support focuses on employability, industry readiness, and sustained recruiter engagement.",
    paragraphs: [
      "The placement process is supported by pre-placement training, aptitude preparation, interview readiness, and career guidance sessions. Students receive structured assistance from early semesters onward.",
      "Industry interaction is strengthened through recruiter outreach, guest sessions, live projects, and internship pathways. Placement efforts are aligned with changing skill demands and role expectations.",
      "The objective is to help students secure meaningful career opportunities with long-term growth potential.",
    ],
    stats: [
      { value: "500+", label: "Recruiting Partners" },
      { value: "45 LPA", label: "Highest Package Highlight" },
      { value: "100%", label: "Placement Assistance" },
      { value: "Industry-Led", label: "Training Pipeline" },
    ],
  },
  alumni: {
    title: "Alumni",
    intro:
      "SVIET alumni network represents a growing community of professionals across sectors and geographies.",
    paragraphs: [
      "Graduates from different batches contribute in engineering, technology, management, entrepreneurship, and public service roles. Alumni outcomes reflect the institution's emphasis on strong fundamentals and professional discipline.",
      "The alumni community supports students through mentoring interactions, career guidance, and institutional engagement. Their achievements continue to guide academic and career initiatives at SVIET.",
      "SVIET values long-term alumni relationships as an integral part of institutional development.",
    ],
    highlights: [
      "Active network across industries",
      "Mentoring support for current students",
      "Continuous engagement with institutional initiatives",
    ],
  },
  leadership: {
    title: "Leadership",
    intro:
      "Institutional leadership at SVIET is guided by academic integrity, strategic planning, and student-first governance.",
    paragraphs: [
      "Leadership teams at SVIET focus on maintaining academic quality, faculty development, and operational effectiveness. Policy decisions are aligned with long-term institutional goals and educational responsibility.",
      "Administrative and academic leadership collaborate to ensure smooth delivery of curriculum, student services, examinations, and industry engagement initiatives.",
      "A disciplined governance culture helps maintain transparency, accountability, and continuous institutional improvement.",
    ],
    highlights: [
      "Academic and administrative coordination",
      "Transparent and accountable governance",
      "Strategic focus on quality and outcomes",
    ],
  },
  organization: {
    title: "Organization Structure",
    intro:
      "SVIET follows a structured governance model with defined academic, administrative, and support responsibilities.",
    paragraphs: [
      "The institutional structure typically includes governing leadership, academic heads, department teams, and functional units for admissions, examinations, placements, and student affairs.",
      "Clear reporting lines and role definitions enable faster coordination, consistent policy implementation, and effective academic management.",
      "This framework supports both strategic planning at leadership level and timely execution at department and service level.",
    ],
    highlights: [
      "Defined responsibilities across functions",
      "Coordinated academic and operational management",
      "Scalable systems for institutional growth",
    ],
  },
  location: {
    title: "Location",
    intro:
      "SVIET is located near Banur in Punjab, with convenient road connectivity to nearby urban and industrial corridors.",
    paragraphs: [
      "The campus location supports accessibility for students from Punjab and neighboring states. Its regional connectivity helps facilitate industry visits, internships, and professional exposure activities.",
      "The surrounding academic environment is suitable for focused learning while retaining practical access to city-level facilities and transport routes.",
      "Address and contact details are regularly maintained through official channels for student and parent communication.",
    ],
    highlights: [
      "Accessible location near Banur, Punjab",
      "Strong regional connectivity",
      "Suitable balance of focus and access",
    ],
  },
  tour: {
    title: "Campus Tour",
    intro:
      "The SVIET campus tour offers a guided view of academic blocks, labs, student facilities, and institutional support spaces.",
    paragraphs: [
      "Visitors can understand how classrooms, laboratories, workshops, libraries, and student zones are integrated to support both learning and campus life.",
      "The tour process is intended to help students and families evaluate infrastructure, academic environment, and service facilities before admissions.",
      "For a complete understanding, visitors are encouraged to interact with academic departments and admission counselors during the visit.",
    ],
    highlights: [
      "Academic and laboratory facilities walkthrough",
      "Student support and campus life overview",
      "Guided interaction with institutional teams",
    ],
  },
};

export function getAboutPageData(key: AboutPageKey): AboutPageData {
  return ABOUT_PAGE_DATA[key];
}

export function getAboutPageDataBySlug(slug: string): AboutPageData | null {
  const key = ABOUT_SLUG_TO_KEY[slug];
  if (!key) {
    return null;
  }

  return ABOUT_PAGE_DATA[key];
}

export function AboutPageTemplate({ data }: { data: AboutPageData }) {
  return (
    <main className="bg-white">
      <section className="h-[300px] bg-gray-100">
        <div className="mx-auto flex h-full max-w-[1280px] items-center px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">About SVIET</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">{data.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">{data.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl space-y-5 text-gray-600 leading-relaxed">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {data.stats?.length ? (
            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.stats.map((item) => (
                <article key={item.label} className="border border-gray-200 bg-white px-4 py-5">
                  <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                  <p className="mt-2 text-sm text-gray-600">{item.label}</p>
                </article>
              ))}
            </div>
          ) : null}

          {data.highlights?.length ? (
            <ul className="mt-10 max-w-3xl space-y-3 text-gray-600 leading-relaxed">
              {data.highlights.map((item) => (
                <li key={item} className="border-l-2 border-gray-300 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </main>
  );
}
