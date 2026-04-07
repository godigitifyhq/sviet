import Image from "next/image";

const OPPORTUNITIES = [
  { title: "Get an exposure to leading placements!", description: "Career development support throughout your studies.", imageSrc: "/assets/img/students/image (2).png", tone: "from-[#f97316] to-[#ea580c]" },
  { title: "Get training for Civil Services UPSC & GPSC!", description: "Structured coaching for competitive exam success.", imageSrc: "/assets/img/students/Placement-Mockup-1.png", tone: "from-[#2563EB] to-[#1d4ed8]" },
  { title: "Get Armed Force training while you study!", description: "Special training opportunities for aspiring students.", imageSrc: "/assets/img/students/1.png", tone: "from-[#0f766e] to-[#0d9488]" },
  { title: "Get support for entrepreneurship and start-ups!", description: "Mentorship and resources for student founders.", imageSrc: "/assets/img/students/moon_mandal.png", tone: "from-[#f59e0b] to-[#d97706]" },
] as const;

export function InternationalOpportunitiesSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-10">
          <div className="lg:sticky lg:top-25 lg:self-start">
            <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-4xl">
              What else can <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text font-extrabold text-transparent">you do
              {/* <br /> */}
              while studying at SVIET</span>
            </h2>
            <p className="mt-5 text-xl font-medium text-[#111827] md:text-3xl">Shape your future, lead the nation</p>
            <p className="mt-3 text-base text-[#374151] md:text-lg">Forge your path to excellence with opportunities that empower you to lead, serve, and innovate.</p>
          </div>

          <div className="space-y-4">
            {OPPORTUNITIES.map((item) => (
              <article key={item.title} className={`relative overflow-hidden rounded-2xl bg-linear-to-r ${item.tone} p-5 text-white shadow-sm transition  md:p-6`}>
                <div className="grid items-end gap-3 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight md:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/95 md:text-lg">{item.description}</p>
                  </div>
                  <div className="relative h-40 w-36 md:h-44 md:w-40">
                    <Image src={item.imageSrc} alt={item.title} fill sizes="160px" className="object-contain object-bottom" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

