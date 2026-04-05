import Image from "next/image";

const educationPillars = [
  {
    title: "A lifetime exposure to leading minds",
    description:
      "An immersive academic culture that brings students into dialogue with pioneers, innovators, and thought leaders through infra-mural and extramural programs.",
    image: "/assets/img/campus-life/r1c1.png",
  },
  {
    title: "Thrilling study tours & academic events",
    description:
      "Learning that travels beyond the classroom. Be it national industry tours or international academic summits, we offer a rich context to every discipline.",
    image: "/assets/img/campus-life/r2c1.png",
  },
  {
    title: "A vibrant & diverse campus",
    description:
      "A community where cultures, disciplines, and ideas converge, celebrating diversity through art, festivals, research, and student-led initiatives.",
    image: "/assets/img/college/1st.png",
  },
  {
    title: "A skill-based & NEP aligned learning",
    description:
      "A forward-looking approach to education that integrates skill development, interdisciplinary learning, and NEP-driven pedagogy for future-ready graduates.",
    image: "/assets/img/college/8th.png",
  },
];

export function PivotEducationSection() {
  return (
    <section className="bg-[#000000fd] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <h2 className="text-3xl font-bold text-[#3B82F6] md:text-4xl lg:text-5xl">
            One choice, endless opportunities
          </h2>
          <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
            everything you need to become anything you want to be!
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
            Experience a dynamic learning journey enriched with global perspectives, hands-on training, and mentorship
            designed to shape your ambition into achievement.
          </p>
        </div>

        {/* Grid of Cards - 2x2 */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {educationPillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative !rounded-[15px] inline-block h-72 w-full overflow-hidden bg-black md:h-80"
            >
              {/* Background Image with overlay */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text Content - Positioned at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h4 className="text-base font-bold leading-snug text-[#FF6B6B] md:text-lg">
                  {pillar.title}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-white/90 md:mt-4 md:text-sm">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
