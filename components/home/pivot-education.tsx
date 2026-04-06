import Image from "next/image";

const educationPillars = [
  {
    title: "A lifetime exposure to leading minds",
    description:
      "An immersive academic culture that brings students into dialogue with pioneers, innovators, and thought leaders through infra-mural and extramural programs.",
    image: "/assets/img/students/1.png",
  },
  {
    title: "Thrilling study tours & academic events",
    description:
      "Learning that travels beyond the classroom. Be it national industry tours or international academic summits, we offer a rich context to every discipline.",
    image: "/assets/img/students/slider-img-1.png",
  },
  {
    title: "A vibrant & diverse campus",
    description:
      "A community where cultures, disciplines, and ideas converge, celebrating diversity through art, festivals, research, and student-led initiatives.",
    image: "/assets/img/students/1.png",
  },
  {
    title: "A skill-based & NEP aligned learning",
    description:
      "A forward-looking approach to education that integrates skill development, interdisciplinary learning, and NEP-driven pedagogy for future-ready graduates.",
    image: "/assets/img/students/slider-img-1.png",
  },
];

export function PivotEducationSection() {
  return (
    <section className="bg-[#000000e7] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <h2 className="text-3xl font-bold text-[#ffffff] md:text-4xl lg:text-5xl">
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

        {/* Grid of Cards - Asymmetrical 8-4, 4-8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationPillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl h-96 w-full bg-black ${
                index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Background Image */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 saturate-0 grayscale"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent" />

              {/* Text Content - Positioned at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h4 className="text-xl font-bold text-[#f7941d]">
                  {pillar.title}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-white/90">
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
