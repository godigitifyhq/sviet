import Image from "next/image";

const experiences = [
  {
    title: "Spontania - Annual Cultural Fest",
    description: "North India's biggest college cultural festival with 10,000+ participants, celebrity performances, and Rs1 Crore+ prize pool",
  },
  {
    title: "Sports & Athletics",
    description: "Multi-sport facilities including cricket ground, basketball courts, gym, and swimming pool. Annual sports meet with inter-college competitions",
  },
  {
    title: "NCC & NSS Programs",
    description: "Active NCC unit and NSS wing conducting community service, camps, and social initiatives across Punjab",
  },
  {
    title: "Student Clubs & Societies",
    description: "50+ active clubs spanning robotics, coding, debate, music, photography, and social entrepreneurship",
  },
];

export function ExperiencesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex flex-1 gap-4">
          <div className="flex mt-6 justify-center items-center">
            <Image
              src="/assets/img/s60.png"
              alt="uniques logo"
              width={100}
              height={10}
              className=""
              style={{ width: "auto" }}
            />
          </div>

        <div className="flex-1 flex mt-6 items-center">
            <div className="mt-7  bg-[#F58634] flex-1 px-5 py-2.5 text-sm font-medium tracking-wide text-white">
            Experiences That Shape Future Professionals
          </div>
        </div>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <article className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-lg font-semibold text-foreground">
                Industry Mentorship
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Students receive guidance from experienced professionals who
                share real-world insights, career advice, and industry trends.
                Mentorship bridges the gap between academic learning and
                professional expectations.
              </p>
            </article>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                width={1200}
                height={1000}
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
                alt="Seminar hall with students"
                className="h-55 w-full object-cover transition duration-200 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((feature, index) => (
              <article
                key={feature.title}
                className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p
                  className={`mt-2 text-sm text-gray-500 ${index > 0 ? "border-t border-gray-100 pt-4" : ""}`}
                >
                  {feature.description}
                </p>
              </article>
            ))}

            <button className="w-full bg-black text-white px-6 py-3 rounded-full flex items-center justify-between transition duration-200 hover:bg-gray-900 sm:w-auto sm:min-w-[320px]">
              <span className="text-sm font-semibold">
                GET YOUR OWN STARTUP
              </span>
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
