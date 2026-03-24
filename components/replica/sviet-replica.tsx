import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type SimpleCard = {
  title: string;
  subtitle?: string;
  image: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "ABOUT", href: "#" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "PLACEMENTS", href: "#" },
  { label: "ADMISSIONS", href: "#" },
  { label: "CAMPUS LIFE", href: "/campus-life" },
  { label: "EVENTS & SPOTLIGHT", href: "/events" },
  { label: "STUDENT PORTAL", href: "#" },
  { label: "CONTACT US", href: "#" },
];

const RECRUITERS = ["Deloitte.", "amazon", "wipro", "Infosys", "tcs", "Calvin Klein", "Dabur", "mamy's"];

const UPCOMING_EVENTS: SimpleCard[] = [
  {
    title: "Cultural Fest Rang-e-SVIET",
    subtitle: "Three day cultural extravaganza celebrating diversity and talent.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "AI & Machine Learning Workshop",
    subtitle: "Hands-on workshop on latest ML frameworks and practical applications.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Leadership & Entrepreneurship Seminar",
    subtitle: "Industry experts share insights on building startups and leadership skills.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
];

const WORKSHOPS: SimpleCard[] = [
  {
    title: "AI & Machine Learning Workshop",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "IoT & Robotics Workshop",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

const FACILITIES = ["Computer Labs", "Central Library", "Sports Complex", "Research Labs"];

function TopUtilityBar() {
  return (
    <div className="w-full border-b border-neutral-200 bg-[#f8f8f8] px-3 py-1 text-[10px] text-neutral-700 md:px-5 md:text-xs">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between">
        <p className="truncate">Accredited higher education institute in Engineering & Core Studies.</p>
        <div className="ml-3 flex items-center gap-3 whitespace-nowrap">
          <span>WhatsApp</span>
          <span className="rounded bg-[#f7941d] px-2 py-0.5 text-white">1800-180-000</span>
          <span>◎</span>
          <span>◐</span>
        </div>
      </div>
    </div>
  );
}

function MainNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-3 py-3 md:px-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-sm bg-[#1d65b9]" />
          <span className="font-serif text-[42px] leading-none text-[#1d65b9]">SVIET</span>
        </Link>
        <nav className="hidden items-center gap-5 text-[11px] font-semibold tracking-wide text-[#1b1b1b] lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#f7941d]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HomeHero() {
  return (
    <section className="mx-auto mt-2 w-full max-w-300 px-3 md:px-5">
      <div
        className="relative h-82 overflow-hidden rounded-md bg-cover bg-center md:h-96"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.56), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="grid h-full grid-cols-1 items-end gap-4 p-4 text-white md:grid-cols-[0.48fr_0.52fr] md:p-8">
          <div className="relative flex h-full items-end justify-start">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Student"
              className="h-72 w-64 rounded-xl object-cover md:h-80 md:w-72"
            />
            <div className="absolute left-2 top-4 rounded bg-black/35 px-3 py-2 text-xs font-semibold backdrop-blur-sm">
              <p>11 LPA</p>
              <p className="text-white/85">MOON MANDAL</p>
              <p className="mt-1 rounded-full bg-[#1469d9] px-2 py-0.5 text-center">Jio</p>
            </div>
          </div>
          <div className="pb-2">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Launch Your Career
              <br />
              With Industry-Ready
              <br />
              Degrees
            </h1>
            <div className="mt-5 grid grid-cols-3 gap-3 border-l border-white/25 pl-3 text-left md:gap-6">
              <div>
                <p className="text-5xl font-extrabold md:text-6xl">3,000+</p>
                <p className="text-sm font-medium text-white/85">Offer Letters</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold md:text-6xl">12,000+</p>
                <p className="text-sm font-medium text-white/85">Dreams Fulfilled</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold md:text-6xl">350+</p>
                <p className="text-sm font-medium text-white/85">Companies Visited Per Year</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <button className="rounded-lg bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white md:text-base">Apply Now ↗</button>
              <button className="rounded-lg border border-white/60 bg-black/45 px-6 py-3 text-sm font-semibold text-white md:text-base">Talk To Counselor ↗</button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-20 hidden -rotate-90 rounded-t-md bg-[#f7941d] px-3 py-2 text-xs font-semibold text-white md:block">
          APPLY NOW
        </div>
      </div>
    </section>
  );
}

function CampusHero() {
  return (
    <section className="mx-auto mt-2 w-full max-w-300 overflow-hidden rounded-md px-3 md:px-5">
      <div
        className="relative h-85 overflow-hidden rounded-md bg-cover bg-center md:h-110"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.68), rgba(0,0,0,0.36)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="flex h-full flex-col justify-end p-5 text-white md:p-8">
          <h1 className="text-6xl font-extrabold leading-[0.9] tracking-tight md:text-8xl">CAMPUS LIFE</h1>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold leading-[0.95] md:text-6xl">
                PIONEERING
                <br />
                <span className="text-[#f7941d]">POSSIBILITIES</span>
              </h2>
              <p className="mt-2 text-lg font-medium">Research & Innovation</p>
            </div>
            <div className="max-w-sm">
              <p className="text-xl font-medium leading-tight md:text-3xl">
                Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
              </p>
              <button className="mt-4 rounded-lg bg-[#f7941d] px-6 py-3 text-base font-semibold text-white">
                Video Tour ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramFinderSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-xl border border-[#dfdfdf] bg-[#f7f7f7] p-6 md:p-10">
          <h3 className="text-5xl font-black uppercase leading-[0.95] text-[#111] md:text-6xl">Find Your Own Program</h3>
          <p className="mt-2 text-sm text-[#555]">Answer a few quick questions to discover programs tailored to your goals.</p>
          <div className="mt-6 h-1 w-full rounded-full bg-[#dfdfdf]">
            <div className="h-full w-1/4 rounded-full bg-[#f7941d]" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Engineering & Technology",
              "Business & Management",
              "Design & Creative Arts",
              "Science & Research",
              "Healthcare & Medicine",
              "Architecture & Planning",
            ].map((option) => (
              <button
                key={option}
                className="flex items-center justify-between rounded-xl border border-[#dddddd] bg-white px-5 py-6 text-left text-lg font-semibold text-[#1e2430]"
              >
                {option}
                <span className="text-[#8b9098]">›</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-[#e2e2e2] bg-[#f7f7f7] p-4">
            <div className="mb-3 h-1 w-full rounded-full bg-[#dedede]">
              <div className="h-full w-[45%] rounded-full bg-[#f7941d]" />
            </div>
            <p className="mb-3 text-sm font-semibold text-[#333]">Preferred career outcome</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["Software Engineer", "Entrepreneur", "Data Scientist", "Product Manager", "Digital Marketing", "Financial Analyst"].map((item) => (
                <div key={item} className="rounded-md border border-[#e4e4e4] bg-white p-3 text-[#32373e]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e2e2] bg-[#f7f7f7] p-4">
            <div className="mb-3 h-1 w-full rounded-full bg-[#dedede]">
              <div className="h-full w-[55%] rounded-full bg-[#f7941d]" />
            </div>
            <p className="mb-3 text-sm font-semibold text-[#333]">Academic preference</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["Hands-on & Practical", "Theoretical & Research", "Balanced Approach", "Team Collaboration"].map((item) => (
                <div key={item} className="rounded-md border border-[#e4e4e4] bg-white p-3 text-[#32373e]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e2e2] bg-[#f7f7f7] p-4">
            <div className="mb-3 h-1 w-full rounded-full bg-[#dedede]">
              <div className="h-full w-[85%] rounded-full bg-[#f7941d]" />
            </div>
            <p className="mb-3 text-sm font-semibold text-[#333]">Location & budget</p>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-3 gap-2">
                {["On-campus", "Hybrid", "Online"].map((item) => (
                  <div key={item} className="rounded-md border border-[#e4e4e4] bg-white p-2 text-center text-[#32373e]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Up to 2L / year",
                  "2L to 5L / year",
                  "Flexible schedule",
                  "Weekend classes",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-md border p-2 text-center ${index === 3 ? "border-[#f7941d] bg-[#fff7ef]" : "border-[#e4e4e4] bg-white"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#e2e2e2] bg-white p-4">
            <p className="text-xs text-[#f7941d]">BEST MATCH (91%)</p>
            <h4 className="mt-1 text-lg font-bold text-[#222]">B.Tech in Computer Science</h4>
            <p className="mt-1 text-xs text-[#666]">4 years • AICTE approved • Flexible specializations</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded bg-[#f7941d] px-3 py-1.5 text-xs font-semibold text-white">Apply now</button>
              <button className="rounded border border-[#ddd] px-3 py-1.5 text-xs font-semibold">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlacementStatsSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <img
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
        alt="Placement banner"
        className="h-19 w-full rounded-md object-cover md:h-30"
      />
      <div className="mt-8 grid grid-cols-3 gap-4 border-b border-[#ececec] pb-8 text-center">
        <div>
          <p className="text-4xl font-bold text-[#1b1b1b] md:text-5xl">12,000+</p>
          <p className="text-sm font-semibold">Dreams Fulfilled</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#1b1b1b] md:text-5xl">350+</p>
          <p className="text-sm font-semibold">Companies Visited Per Year</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#1b1b1b] md:text-5xl">3,000+</p>
          <p className="text-sm font-semibold">Offer Letters</p>
        </div>
      </div>
    </section>
  );
}

function RecruiterGrid() {
  return (
    <section className="mx-auto mt-6 w-full max-w-300 px-3 md:px-5">
      <h3 className="text-center text-3xl font-black text-[#141414] md:text-4xl">Companies That Hire Our Graduates</h3>
      <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-md border border-[#ececec] md:grid-cols-4">
        {RECRUITERS.map((company) => (
          <div key={company} className="flex min-h-24 items-center justify-center border border-[#efefef] px-4 py-7 text-4xl font-semibold text-[#232323] md:text-5xl">
            <span className="scale-90 md:scale-100">{company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CampusLifeSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-5xl font-extrabold leading-none text-[#141414]">
            A HOME <span className="text-[#f7941d]">AWAY</span>
            <br />
            FROM HOME
          </h3>
          <p className="mt-4 max-w-md text-2xl font-medium leading-tight text-[#1f1f1f]">
            Cosmopolitan Campus With Vibrant Cultures, Multilateral Ideas & A Lot More
          </p>
          <button className="mt-5 rounded-lg bg-[#f7941d] px-6 py-3 text-lg font-semibold text-white">Video Tour ↗</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
          alt="Campus building"
          className="h-75 w-full rounded-lg object-cover md:h-95"
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="space-y-4 rounded-lg bg-[#f4f4f4] p-4">
          <p className="text-2xl font-semibold">WHAT PEOPLE SAY ABOUT US ?</p>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#f7941d]">Students Speak</p>
            <p className="mt-2 text-sm text-[#454545]">
              Outstanding experience and incredible professors. The practical learning and world-class support helped me thrive.
            </p>
            <p className="mt-3 text-xl font-bold">Yash Khandelwal</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#f7941d]">Students Speak</p>
            <p className="mt-2 text-sm text-[#454545]">
              Great learning experience and outstanding faculty guidance. Truly transformed my educational journey.
            </p>
            <p className="mt-3 text-xl font-bold">Yash Khandelwal</p>
          </div>
        </div>
        <div className="grid gap-4">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Student speaking"
            className="h-70 w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
            alt="Award event"
            className="h-70 w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-7 rounded-xl bg-black px-6 py-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-2xl font-semibold">APPLY NOW FOR SVIETEE - 2026</p>
          <button className="rounded border border-white/30 px-4 py-2 text-sm font-semibold">Apply Now ↗</button>
        </div>
      </div>
    </section>
  );
}

function EventsSpotlightSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <div className="rounded-2xl bg-black p-8 text-white">
        <h3 className="text-5xl font-extrabold">GALLERY HIGHLIGHTS</h3>
        <p className="mt-3 max-w-3xl text-base text-white/80 md:text-lg">
          Explore our collection of memorable moments and events that capture the vibrant life at Swami Vivekanand Group of Institutions.
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery image"
          className="h-65 w-full rounded-lg object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery image"
          className="h-65 w-full rounded-lg object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery image"
          className="h-65 w-full rounded-lg object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery image"
          className="h-65 w-full rounded-lg object-cover"
        />
      </div>

      <h4 className="mt-8 text-3xl font-bold uppercase text-[#1f1f1f]">Memorable Events</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-lg">
            <img
              src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? "1533174072545-7a4b6ad7a6c3" : "1511795409834-ef04bbd61622"}?auto=format&fit=crop&w=1200&q=80`}
              alt="Event"
              className="h-60 w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-4">
              <div className="absolute bottom-4">
                <p className="text-4xl font-extrabold text-white">SPONTANIA</p>
                <p className="mt-1 max-w-52.5 text-[11px] leading-tight text-white/80">
                  Explore our collection of memorable moments and events that capture the vibrant life.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <h3 className="text-4xl font-black text-[#141414]">The Distinguished: Leaders, Visionaries And Changemakers</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {["Aman Gupta", "Ashneer"].map((name, idx) => (
          <div key={name} className="overflow-hidden rounded-xl bg-[#f3f3f3] p-3">
            <img
              src={`https://images.unsplash.com/photo-${idx === 0 ? "1500648767791-00dcc994a43e" : "1507003211169-0a1dd7228f2d"}?auto=format&fit=crop&w=1200&q=80`}
              alt={name}
              className="h-62.5 w-full rounded-lg object-cover"
            />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xl font-bold">{name}</p>
              <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">Check Event ↗</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdmissionFormSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 pb-12 md:px-5">
      <div className="grid items-end gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <form className="space-y-3 rounded-xl bg-[#f2f2f2] p-4">
          <p className="text-sm font-semibold text-[#555]">Check your scholarship eligibility</p>
          <input className="w-full rounded border border-[#dcdcdc] bg-white px-3 py-2 text-sm" placeholder="Name" />
          <input className="w-full rounded border border-[#dcdcdc] bg-white px-3 py-2 text-sm" placeholder="Email" />
          <input className="w-full rounded border border-[#dcdcdc] bg-white px-3 py-2 text-sm" placeholder="Phone" />
          <button type="button" className="w-full rounded bg-black px-4 py-2 text-sm font-semibold text-white">
            Check Now
          </button>
        </form>
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80"
          alt="Scholarship students"
          className="h-45 w-full rounded-xl object-cover md:h-55"
        />
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-black px-3 py-8 text-white md:px-5">
      <div className="mx-auto grid w-full max-w-300 gap-8 md:grid-cols-[1fr_1fr_0.7fr]">
        <div>
          <p className="font-serif text-6xl leading-none">SVIET</p>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Swami Vivekanand Institute Of Engineering & Technology Promoted By Raghunath Rai Memorial Trust.
          </p>
          <p className="mt-3 text-sm text-white/70">Village: Pamaur Near Banur Tehsil Rajpura, Distt: Patiala</p>
          <p className="mt-2 text-sm text-white/70">Admissions: +91 99882 33333</p>
        </div>
        <form className="space-y-2">
          <p className="text-2xl font-semibold">Question us</p>
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="First Name" />
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="Course" />
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="Phone" />
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="Email" />
          <button type="button" className="w-full rounded bg-white px-3 py-2 text-sm font-semibold text-black">Get started</button>
        </form>
        <ul className="space-y-2 text-sm text-white/90">
          {[
            "About Us",
            "Careers",
            "FAQs",
            "Teams",
            "Contact Us",
          ].map((item) => (
            <li key={item} className="flex items-center justify-between border-b border-white/10 py-2">
              <span>{item}</span>
              <span>‹</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function EducationBlocks() {
  return (
    <section className="mx-auto mt-8 w-full max-w-300 px-3 md:px-5">
      <h3 className="text-4xl font-bold text-[#111] md:text-5xl">Education Beyond The Classroom</h3>
      <p className="mt-2 max-w-5xl text-sm text-[#505050] md:text-base">
        Education at SVIET goes beyond traditional academics through the 360 Program and a range of unique experiential initiatives.
      </p>
      <div className="mt-4 overflow-hidden rounded-md border border-[#e7e7e7]">
        <div className="bg-[#b60f1b] px-4 py-2 text-sm font-semibold text-white">The Leadership Development Program</div>
        <div className="grid gap-4 bg-white p-4 md:grid-cols-[1fr_1fr_auto]">
          <div className="text-sm text-[#444]">
            <p className="font-semibold text-[#222]">Industry Mentorship</p>
            <p className="mt-1">Learn from experts through regular sessions that sharpen your practical understanding.</p>
          </div>
          <div className="text-sm text-[#444]">
            <p className="font-semibold text-[#222]">Leadership Development</p>
            <p className="mt-1">Comprehensive training, activities, and mentorship to build future-ready leaders.</p>
          </div>
          <button className="h-fit rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">GET YOUR OWN STARTUP ↗</button>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-[#efefef]">
        <div className="bg-[#f7941d] px-4 py-2 text-sm font-semibold text-white">Experiences That Shape Future Professionals</div>
        <div className="grid gap-4 bg-white p-4 md:grid-cols-[1fr_1fr_auto]">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Lecture"
            className="h-36 w-full rounded object-cover"
          />
          <div className="text-sm text-[#444]">
            <p className="font-semibold text-[#222]">Startup & Innovation Culture</p>
            <p className="mt-1">From ideation to execution, students explore hands-on innovation through workshops and events.</p>
          </div>
          <button className="h-fit rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">GET YOUR OWN STARTUP ↗</button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
        alt="Ranking banner"
        className="mt-5 h-55 w-full rounded-xl object-cover"
      />
    </section>
  );
}

function StudentsSpeakAndFormSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="grid grid-cols-[0.55fr_0.45fr] gap-3 rounded-xl bg-[#f1f1f1] p-3">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
            alt="Student"
            className="h-77.5 w-full rounded-lg object-cover"
          />
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-3 text-sm text-[#444]">
              Great learning experience and supportive faculty.
            </div>
            <div className="rounded-lg bg-white p-3 text-sm text-[#444]">
              Good exposure to projects and practical knowledge.
            </div>
            <div className="rounded-lg bg-white p-3 text-sm text-[#444]">
              Career support has been outstanding.
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-black text-[#1a1a1a]">Our Students Speak</h3>
          <p className="text-[#555]">Hear directly from learners and achievers.</p>
          <div className="grid grid-cols-2 gap-3">
            <input className="rounded border border-[#ddd] bg-[#f4f4f4] px-3 py-2" placeholder="Name" />
            <input className="rounded border border-[#ddd] bg-[#f4f4f4] px-3 py-2" placeholder="Phone" />
            <input className="col-span-2 rounded border border-[#ddd] bg-[#f4f4f4] px-3 py-2" placeholder="Email" />
            <button className="col-span-2 rounded bg-[#f7941d] px-4 py-3 font-semibold text-white">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePageReplica() {
  return (
    <div className="bg-background text-[#111]">
      <TopUtilityBar />
      <MainNavbar />
      <HomeHero />
      <EducationBlocks />
      <PlacementStatsSection />
      <RecruiterGrid />
      <TestimonialsSection />
      <StudentsSpeakAndFormSection />
      <AdmissionFormSection />
      <SiteFooter />
    </div>
  );
}

export function CampusLifePageReplica() {
  return (
    <div className="bg-background text-[#111]">
      <TopUtilityBar />
      <MainNavbar />
      <CampusHero />
      <CampusLifeSection />
      <EventsSpotlightSection />
      <SiteFooter />
    </div>
  );
}

export function EventsPageReplica() {
  return (
    <div className="bg-background text-[#111]">
      <TopUtilityBar />
      <MainNavbar />
      <section className="mx-auto mt-2 w-full max-w-300 px-3 md:px-5">
        <div
          className="relative h-82.5 overflow-hidden rounded-md bg-cover bg-center md:h-105"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1592303637753-cef44e1ca6c1?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute bottom-8 left-6 text-white md:left-8">
            <h1 className="text-6xl font-extrabold leading-none md:text-8xl">EVENTS</h1>
            <p className="mt-2 text-3xl font-extrabold uppercase md:text-5xl">
              SOMETHING IMPORTANT IS
              <br />
              <span className="text-[#f7941d]">HAPPENING, AND I&apos;M PART OF IT</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 w-full max-w-300 space-y-6 px-3 md:px-5">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80"
              alt="Spontania"
              className="h-85 w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-5">
              <p className="absolute bottom-6 text-5xl font-extrabold text-white">SPONTANIA</p>
            </div>
          </article>
          <div className="grid gap-4">
            <article className="grid items-center gap-4 rounded-xl bg-white p-4 md:grid-cols-2">
              <div>
                <h3 className="text-5xl font-extrabold leading-none">ELEVATE</h3>
                <p className="mt-2 text-3xl font-semibold leading-tight">Cosmopolitan Campus With Vibrant Cultures.</p>
                <button className="mt-4 rounded-lg bg-[#f7941d] px-5 py-2 font-semibold text-white">Visit Highlight ↗</button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
                alt="Event"
                className="h-55 w-full rounded-lg object-cover"
              />
            </article>
          </div>
        </div>

        <h2 className="text-4xl font-bold">All Upcoming Events</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {UPCOMING_EVENTS.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white">
              <img src={event.image} alt={event.title} className="h-45 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="mt-2 text-sm text-[#555]">{event.subtitle}</p>
                <p className="mt-3 text-sm text-[#f7941d]">View Details →</p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="pt-2 text-4xl font-bold">Workshops</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {WORKSHOPS.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white">
              <img src={item.image} alt={item.title} className="h-52.5 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#f7941d]">View Details →</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl">
              <img
                src={`https://images.unsplash.com/photo-${idx === 0 ? "1515169067868-5387ec356754" : idx === 1 ? "1511795409834-ef04bbd61622" : "1506157786151-b8491531f063"}?auto=format&fit=crop&w=1200&q=80`}
                alt="Spontania"
                className="h-75 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-4">
                <p className="absolute bottom-4 text-5xl font-extrabold text-white">SPONTANIA</p>
              </div>
            </div>
          ))}
        </div>

        <article className="grid items-center gap-4 rounded-xl bg-white p-4 lg:grid-cols-[1fr_1fr]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="TechVision"
            className="h-62.5 w-full rounded-lg object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-wide text-[#f7941d]">Tech Event</p>
            <h3 className="mt-2 text-4xl font-bold">TechVision 2026: Innovation Summit</h3>
            <p className="mt-2 text-[#555]">Annual flagship technology summit featuring industry leaders and cutting-edge innovations.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#f7941d] px-4 py-2 font-semibold text-white">View Event</button>
              <button className="rounded-lg border border-[#111] px-4 py-2 font-semibold">Register Now</button>
            </div>
          </div>
        </article>

        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80"
            alt="Feature"
            className="h-75 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent p-5">
            <p className="absolute bottom-6 text-5xl font-extrabold text-white">SPONTANIA</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold">Past Events</h2>
        <div className="grid gap-4 pb-6 md:grid-cols-2">
          {[
            {
              title: "Blockchain & Web3 Summit",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
            },
            {
              title: "Annual Sports Day 2025",
              image:
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
            },
          ].map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white">
              <img src={item.image} alt={item.title} className="h-45 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#f7941d]">View Details →</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export function ProgramDetailPageReplica() {
  return (
    <div className="bg-background text-[#111]">
      <TopUtilityBar />
      <MainNavbar />

      <section className="mx-auto mt-5 w-full max-w-300 px-3 md:px-5">
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#f7941d]">Recommended for students interested in Engineering / Tech careers</p>
            <h1 className="mt-2 text-5xl font-extrabold leading-tight">B.Tech Computer Science Engineering</h1>
            <p className="mt-3 max-w-3xl text-[#4b4b4b]">
              A future-ready undergraduate program designed to build strong foundations in computing, software engineering, and emerging technologies.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["4 Years", "10+2 PCM with 45%", "July / August 2026"].map((chip) => (
                <span key={chip} className="rounded-full border border-[#ddd] bg-white px-3 py-1">
                  {chip}
                </span>
              ))}
            </div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
              alt="Program"
              className="mt-4 h-52.5 w-full rounded-xl object-cover"
            />
          </div>
          <aside className="space-y-3 rounded-xl border border-[#e6e6e6] bg-white p-4">
            <p className="text-sm text-[#555]">Application Deadline</p>
            <p className="text-4xl font-extrabold">120 <span className="text-sm font-semibold text-[#f7941d]">Seats</span></p>
            <button className="w-full rounded bg-[#f7941d] px-4 py-2.5 font-semibold text-white">Apply Now</button>
            <button className="w-full rounded border border-[#f7941d] px-4 py-2.5 font-semibold text-[#f7941d]">Download Brochure</button>
            <div className="rounded bg-[#fff6ee] p-3 text-xs text-[#8d5522]">75% scholarship seats available for early applicants.</div>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
        <h2 className="text-4xl font-extrabold">Where Our Graduates Land</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Highest Package", "₹28 LPA"],
            ["Average Package", "₹6.4 LPA"],
            ["Placement Rate", "94%"],
            ["Top Recruiters", "120+"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-[#e8e8e8] bg-white p-4">
              <p className="text-sm text-[#666]">{k}</p>
              <p className="mt-2 text-4xl font-extrabold">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <RecruiterGrid />

      <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
        <h2 className="text-4xl font-extrabold">What Sets SVIET B.Tech CSE Apart</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "Industry-aligned curriculum",
            "10+ specialized labs",
            "Global exposure",
            "Mentorship & career cells",
            "Award winning research",
            "Emerging tech electives",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-[#e9e9e9] bg-white p-4 text-sm font-semibold text-[#333]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-300 rounded-xl bg-[#f0f0f0] px-3 py-10 md:px-5">
        <h2 className="text-center text-4xl font-extrabold">Is This Program Right for You?</h2>
        <p className="mt-2 text-center text-sm text-[#666]">Select the traits that describe you best.</p>
        <div className="mx-auto mt-6 grid max-w-4xl gap-3 md:grid-cols-2">
          {[
            "Love problem solving",
            "Interest in technology",
            "Curious analytical mindset",
            "Enjoy building things",
          ].map((item, idx) => (
            <button
              key={item}
              className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold ${idx === 0 || idx === 3 ? "border-[#f7941d] bg-[#fff7ef]" : "border-[#d9d9d9] bg-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="rounded-lg bg-[#f7941d] px-6 py-3 text-base font-semibold text-white">Start Your Application →</button>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
        <h2 className="text-4xl font-extrabold">Stories From Our Alumni</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_340px]">
          <div className="rounded-xl border border-[#e8e8e8] bg-white p-5">
            <p className="text-[#4d4d4d]">
              &quot;SVIET gave me practical exposure and confidence to solve real problems. The placement training and support were exceptional.&quot;
            </p>
            <p className="mt-4 text-xl font-bold">Arjun Sharma</p>
          </div>
          <div className="space-y-3">
            {[
              ["Arjun Sharma", "4.8/5.0"],
              ["Priya Verma", "4.7/5.0"],
              ["Rahul Nair", "4.6/5.0"],
            ].map(([name, score]) => (
              <div key={name} className="rounded-lg border border-[#f1a866] bg-white px-4 py-3">
                <p className="font-semibold">{name}</p>
                <p className="text-xs text-[#666]">{score}</p>
              </div>
            ))}
            <div className="rounded-lg bg-[#fff3e7] p-3 text-sm text-[#8d5522]">94% of students rated this program highly.</div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
        <h2 className="text-4xl font-extrabold">What You&apos;ll Study</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#fafafa] text-[#666]">
              <tr>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Course Name</th>
                <th className="px-4 py-3">Credits</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CSE101", "Introduction to Programming", "4"],
                ["CSE102", "Engineering Mathematics", "4"],
                ["CSE103", "Digital Electronics", "3"],
                ["CSE104", "Engineering Physics", "3"],
                ["CSE105", "Communication Skills", "2"],
              ].map(([code, course, credits]) => (
                <tr key={code} className="border-t border-[#efefef]">
                  <td className="px-4 py-3 text-[#f7941d]">{code}</td>
                  <td className="px-4 py-3">{course}</td>
                  <td className="px-4 py-3">{credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
        <h2 className="text-4xl font-extrabold">World-Class Campus Facilities</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {FACILITIES.map((facility) => (
            <article key={facility} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                alt={facility}
                className="h-32.5 w-full object-cover"
              />
              <p className="p-3 text-sm font-semibold">{facility}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
        <div className="overflow-hidden rounded-xl border border-[#e9e9e9] bg-white">
          <div className="flex items-center justify-between bg-[#fafafa] px-4 py-3">
            <h2 className="text-3xl font-extrabold">Compare with Other Programs</h2>
            <button className="rounded border border-[#f7941d] px-3 py-1 text-sm text-[#f7941d]">Hide Comparison</button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="border-t border-[#efefef] bg-white text-[#666]">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">B.Tech CSE</th>
                <th className="px-4 py-3">B.Tech IT</th>
                <th className="px-4 py-3">BCA</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Duration", "4 years", "4 years", "3 years"],
                ["Annual Fees", "₹98,000", "₹75,000", "₹55,000"],
                ["Placement Rate", "94%", "89%", "80%"],
                ["Avg Package", "₹6.4 LPA", "₹5.2 LPA", "₹4.5 LPA"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[#efefef]">
                  <td className="px-4 py-3">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                  <td className="px-4 py-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-300 px-3 pb-12 text-center md:px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Ready To Begin?</p>
        <h2 className="mt-2 text-5xl font-extrabold">Start Your Journey at SVIET</h2>
        <p className="mx-auto mt-3 max-w-3xl text-[#555]">
          Join 10,000+ students who have built their careers at SVIET. Admissions for 2026 batch are now open.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-lg bg-[#f7941d] px-6 py-3 font-semibold text-white">Apply Now</button>
          <button className="rounded-lg border border-black px-6 py-3 font-semibold">Talk to a Counselor</button>
          <button className="rounded-lg border border-[#f7941d] px-6 py-3 font-semibold text-[#f7941d]">Download Brochure</button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
