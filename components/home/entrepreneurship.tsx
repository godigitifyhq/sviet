"use client";

import Image from "next/image";

const ACHIEVEMENT_STATS = [
  { value: "₹2.5 Cr+", label: "Total Grants Received", icon: "🏆" },
  { value: "50+", label: "Startups Incubated", icon: "🚀" },
  { value: "15+", label: "Initiatives Launched", icon: "💡" },
  { value: "3", label: "Government Partnerships", icon: "🤝" },
];

const GOVERNMENT_PARTNERS = [
  {
    name: "ImPunjab",
    subtitle: "Govt. of Punjab",
    className: "border-blue-200 bg-blue-50",
    textClass: "text-blue-700",
    icon: "🏛️",
  },
  {
    name: "Invest Punjab",
    subtitle: "Investment Facilitation",
    className: "border-emerald-200 bg-emerald-50",
    textClass: "text-emerald-700",
    icon: "📈",
  },
  {
    name: "Startup India",
    subtitle: "DPIIT Recognized",
    className: "border-orange-200 bg-orange-50",
    textClass: "text-orange-600",
    icon: "🇮🇳",
  },
];

const INITIATIVE_TILES = [
  {
    title: "Real Startup Exposure",
    description: "Students engage with running ventures and learn real business models on campus.",
    image: "/assets/img/section_card/group-img-1.png",
    gradient: "from-orange-600 to-orange-800",
    span: "md:col-span-1",
  },
  {
    title: "Innovation & Incubation",
    description: "On-campus incubation with mentorship in product, marketing, and strategy.",
    image: "/assets/img/section_card/group-img-5.png",
    gradient: "from-purple-600 to-purple-800",
    span: "md:col-span-1",
  },
  {
    title: "Hackathons & IdeaJam",
    description: "Programs like Elevate, IdeaJam, and BharatTechXperience drive continuous innovation.",
    image: "/assets/img/section_card/group-img-2.png",
    gradient: "from-teal-600 to-teal-800",
    span: "md:col-span-1",
  },
  {
    title: "IIC & Institutional Support",
    description: "Structured guidance through IIC on MVP building and sustainable startup ideas.",
    image: "/assets/img/section_card/group-img-3.png",
    gradient: "from-indigo-700 to-indigo-900",
    span: "md:col-span-1",
  },
  {
    title: "Entrepreneurship Mindset",
    description: "SVGOI develops thinkers, problem-solvers, and self-starters who create their own opportunities.",
    image: "/assets/img/section_card/group-img-4.png",
    gradient: "from-pink-600 to-rose-800",
    span: "md:col-span-2",
  },
];

export function EntrepreneurshipSection() {
  return (
    <section className="bg-[#000000d7] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d]">
            Startup Zone
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            SVGOI Startup Zone
          </h2>
          <h3 className="mt-1 text-xl font-light text-[#f7941d] md:text-2xl">
            Where Ideas Become Ventures
          </h3>
        </div>
        <p className="mb-12 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
          Backed by government grants, industry mentors, and a thriving innovation culture,
          SVGOI has built one of Punjab's most active student startup ecosystems — turning
          campus ideas into real, impactful ventures.
        </p>

        {/* Government Partnership Badges */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Supported By
          </p>
          <div className="flex flex-wrap gap-3">
            {GOVERNMENT_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className={`flex items-center gap-2.5 rounded-xl border px-4 py-2.5 ${partner.className}`}
              >
                <span className="text-lg">{partner.icon}</span>
                <div>
                  <p className={`text-sm font-bold ${partner.textClass}`}>
                    {partner.name}
                  </p>
                  <p className="text-[10px] font-medium text-gray-500">{partner.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-[#f7941d] bg-black/50 p-5 backdrop-blur"
            >
              <div className="mb-1 text-2xl">{stat.icon}</div>
              <div className="text-3xl font-black text-[#f7941d]">{stat.value}</div>
              <p className="mt-1 text-xs font-semibold text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Divider label */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-1 w-1.5 bg-[#f7941d]" />
          <p className="text-sm font-semibold text-white">
            SVGOI innovation and entrepreneurship ecosystem
          </p>
        </div>

        {/* Initiative Tile Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {INITIATIVE_TILES.map((tile) => (
            <div
              key={tile.title}
              className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${tile.gradient} p-7 text-white ${tile.span}`}
            >
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-bold">{tile.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{tile.description}</p>
              </div>
              <Image
                src={tile.image}
                alt={tile.title}
                width={200}
                height={180}
                className="pointer-events-none absolute bottom-0 right-0 w-36 opacity-90 md:w-44"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
