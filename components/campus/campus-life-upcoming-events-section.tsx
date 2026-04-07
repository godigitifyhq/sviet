import Image from "next/image";

const SIDE_EVENTS = [
  {
    title: "What Role Do Nanotechnology and Advanced Materials Play in Democratizing Research?",
    excerpt: "Is it possible that the secret to clean energy, healthier societies, and smarter materials lies here?",
    date: "30 Sep, 2025",
    image: "/assets/img/campus-life/r2c2.png",
  },
  {
    title: "How Do You Create Memories That Last Long After Check-Out? Students Find Answers at ITC Hotel, Jaipur",
    excerpt: "Our students, as a part of the IIMUN's Hospitality Tour in Jaipur...",
    date: "30 Sep, 2025",
    image: "/assets/img/campus-life/r2c3.png",
  },
  {
    title: "SVIET Expands Global Research Presence by Signing a License Agreement with Springer Nature",
    excerpt: "A major leap toward international academic collaboration and globally recognized research visibility.",
    date: "07 Aug, 2025",
    image: "/assets/img/campus-life/r3c1.png",
  },
  {
    title: "How Are Student Innovators Building Smart Campus Solutions for Tomorrow?",
    excerpt: "A showcase of student-built prototypes focused on sustainability, accessibility, and automation.",
    date: "21 Jul, 2025",
    image: "/assets/img/campus-life/r3c2.png",
  },
  {
    title: "Can Industry Mentorship Accelerate Career Readiness from the First Semester?",
    excerpt: "Experts from leading organizations interacted with students in an intensive mentoring series.",
    date: "12 Jun, 2025",
    image: "/assets/img/campus-life/r1c2.png",
  },
] as const;

export function CampusLifeUpcomingEventsSection() {
  return (
    <section className="w-full  py-14 md:py-18">
      <div className="mx-auto w-full max-w-360 px-4 md:px-6">
        <h2 className="text-4xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
          <span className="bg-linear-to-r from-[#f7941d] to-[#1d4ed8] bg-clip-text text-transparent">Upcoming events</span>
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#424242] md:text-lg">
          Stay updated on all upcoming events at SVIET. From concerts to competitions, our event calendar is packed with
          activities throughout the year, ensuring there is always something fun to look forward to.
        </p>

        <div className="mt-8 flex items-center gap-2 text-2xl font-medium text-[#111827] md:text-3xl">
          <span className="text-[#8f96ad]">▸</span>
          Next big events
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-2xl border border-[#d9ddea] bg-white p-4 shadow-[0_12px_34px_rgba(17,24,39,0.08)] md:p-5">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/img/campus-life/r2c1.png"
                alt="Main upcoming event"
                width={1200}
                height={760}
                className="h-72 w-full object-cover transition duration-500 hover:scale-[1.03] md:h-96"
              />
            </div>
            <div className="mt-5 inline-flex rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold tracking-wide text-[#3348b8]">
              Featured event
            </div>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] md:text-4xl">
              Can AI and Literature Coexist? Summer School Program Explores the Answer
            </h3>
            <p className="mt-3 text-sm text-[#4b5563] md:text-base">A question lingers in an age in which algorithms shape every discipline.</p>
            <div className="mt-5 flex items-center justify-between border-t border-[#e6e8f0] pt-4">
              <p className="text-sm font-semibold text-[#6b7280]">30 Sep, 2025</p>
              <button type="button" className="inline-flex items-center gap-1 rounded-full bg-[#111827] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1e3a8a]">
                View details <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>

          <div className="rounded-2xl border border-[#d9ddea] bg-white p-3 shadow-[0_12px_30px_rgba(17,24,39,0.06)] md:p-4">
            <div className="max-h-170 overflow-y-auto pr-1 [scrollbar-color:#b7b7d5_transparent] [scrollbar-width:thin]">
              {SIDE_EVENTS.map((event) => (
                <article
                  key={event.title}
                  className="group grid gap-4 rounded-xl px-2 py-3 transition hover:bg-[#f8faff] sm:grid-cols-[180px_1fr] md:px-3"
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={500}
                      height={340}
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold leading-snug text-[#111827]">{event.title}</h4>
                    <p className="mt-2 text-sm text-[#4b5563]">{event.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs font-semibold tracking-wide text-[#6b7280]">{event.date}</p>
                      <span className="text-xs font-semibold text-[#1d4ed8] transition group-hover:text-[#f7941d]">Read article ›</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
