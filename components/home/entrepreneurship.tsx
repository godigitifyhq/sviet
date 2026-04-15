"use client";

import Image from "next/image";

export function EntrepreneurshipSection() {
  const stats = [
    {
      id: 1,
      number: "15+",
      label: "Startup Initiatives Supported",
      description: "SVIET has supported early-stage student ventures with guidance, mentoring, and execution support.",
    },
    {
      id: 2,
      number: "Live",
      label: "Startup Exposure on Campus",
      description:
        "Students engage with ventures like Godigitify and other campus-led initiatives to understand how startups operate.",
    },
    {
      id: 3,
      number: "MVP to Market",
      label: "Execution-Focused Learning",
      description: "Workshops and practical sessions help students test ideas, build MVPs, and move from concept to execution.",
    },
  ];

  const programs = [
    {
      id: 1,
      title: "Real Startup Exposure on Campus",
      description:
        "Entrepreneurship at SVIET is not limited to theory. Students actively engage with running ventures and learn business models, marketing, and execution in real environments.",
      bgColor: "from-orange-500 to-orange-600",
      icon: "🚀",
      textColor: "text-white",
      hasImage: false,
    },
    {
      id: 2,
      title: "Supported by Innovation & Incubation",
      description:
        "On-campus incubation support, mentorship in product, marketing, and strategy, plus startup-focused workshops help students shape ideas into ventures.",
      bgColor: "from-purple-500 to-purple-700",
      textColor: "text-white",
      hasImage: true,
      imagePlaceholder: "👨‍💼",
    },
    {
      id: 3,
      title: "Driven by Entrepreneurship-Focused Initiatives",
      description:
        "Programs like BharatTechXperience, Elevate, IdeaJam, and innovation sessions create continuous engagement through hackathons and problem-solving platforms.",
      bgColor: "from-teal-500 to-teal-600",
      textColor: "text-white",
      hasImage: false,
      icon: "💡",
    },
    {
      id: 4,
      title: "Guided by Industry & Institutional Support",
      description:
        "Through IIC and entrepreneurship-focused sessions, students receive structured guidance on MVP building, startup ecosystems, and sustainable business ideas.",
      bgColor: "from-indigo-700 to-indigo-900",
      textColor: "text-white",
      hasImage: true,
      imagePlaceholder: "🏭",
    },
    {
      id: 5,
      title: "Building a Mindset, Not Just Startups",
      description:
        "SVIET develops thinkers, problem-solvers, and self-starters so students graduate with the confidence to create opportunities and build their own paths.",
      bgColor: "from-pink-500 to-pink-600",
      textColor: "text-white",
      hasImage: true,
      imagePlaceholder: "📡",
    },
  ];

  return (
    <section className="bg-[#000000d7] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            An Ecosystem
          </h2>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Where Ideas{" "}
            <span className="bg-linear-to-r from-[#F4B740] to-[#f7941d] bg-clip-text text-transparent">
              Turn Into Action
            </span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
            At SVIET, entrepreneurship is built through experience. Students are encouraged to
            explore ideas, test them in real environments, and understand how ventures grow
            from concept to execution.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="border-l-2 border-[#f7941d] bg-[#111111]/50 p-6 backdrop-blur">
              <div className="mb-3 text-4xl font-bold text-[#f7941d]">{stat.number}</div>
              <h4 className="mb-2 font-semibold text-white">{stat.label}</h4>
              <p className="text-xs leading-relaxed text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Research Centre Label */}
        <div className="mb-12 flex items-center gap-2">
          <div className="h-1 w-1.5 bg-[#f7941d]"></div>
          <p className="text-sm font-semibold text-white">
            SVIET innovation and entrepreneurship ecosystem
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Start-up Incubation - Large card spanning 1 col */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${programs[0].bgColor} p-8 text-white md:col-span-1`}
          >
            <div className="relative z-10">
              <h3 className="mb-3 text-xl font-bold">{programs[0].title}</h3>
              <p className="mb-8 text-sm leading-relaxed">{programs[0].description}</p>
            </div>
            <Image
              src="/assets/img/section_card/group-img-1.png"
              alt="Startup growth illustration"
              width={170}
              height={170}
              className="pointer-events-none absolute bottom-0 right-0 w-36 opacity-90 md:w-44"
            />
          </div>

          {/* Leading Entrepreneurship Events - with image placeholder */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${programs[1].bgColor} p-8 text-white`}
          >
            <div className="relative z-10">
              <h3 className="mb-3 text-xl font-bold">{programs[1].title}</h3>
              <p className="text-sm leading-relaxed">{programs[1].description}</p>
            </div>
            <Image
              src="/assets/img/section_card/group-img-5.png"
              alt="Entrepreneurship event speaker"
              width={180}
              height={180}
              className="pointer-events-none absolute bottom-0 right-0 w-36 opacity-95 md:w-44"
            />
          </div>

          {/* Start-up Studios */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${programs[2].bgColor} p-8 text-white`}
          >
            <div className="relative z-10">
              <h3 className="mb-3 text-xl font-bold">{programs[2].title}</h3>
              <p className="text-sm leading-relaxed">{programs[2].description}</p>
            </div>
            <Image
              src="/assets/img/section_card/group-img-2.png"
              alt="Startup studio ideation"
              width={160}
              height={160}
              className="pointer-events-none absolute bottom-0 right-0 w-32 opacity-90 md:w-40"
            />
          </div>

          {/* Fabrication Lab - Full width bottom row left */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${programs[3].bgColor} p-8 text-white`}
          >
            <Image
              src="/assets/img/section_card/group-img-3.png"
              alt="Fabrication lab equipment"
              width={210}
              height={170}
              className="pointer-events-none absolute top-0 right-0 w-40 opacity-90 md:w-52"
            />
            <div className="relative mt-12 z-10">
              <h3 className="mb-3 text-xl font-bold">{programs[3].title}</h3>
              <p className="text-sm leading-relaxed">{programs[3].description}</p>
            </div>
            
          </div>

          {/* Start Incubation Centre - spanning across */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${programs[4].bgColor} p-8 text-white md:col-span-2`}
          >
            <div className="relative z-10">
              <h3 className="mb-3 text-xl font-bold">{programs[4].title}</h3>
              <p className="text-sm leading-relaxed">{programs[4].description}</p>
            </div>
            <Image
              src="/assets/img/section_card/group-img-4.png"
              alt="Incubation centre research"
              width={190}
              height={150}
              className="pointer-events-none absolute bottom-0 right-0 w-36 opacity-90 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
