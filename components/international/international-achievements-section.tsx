import Image from "next/image";

const ACHIEVERS = [
  { name: "Tshering Deki | Bhutan", program: "B.A. (English)", description: "Recognized for active cultural engagement and representation.", imageSrc: "/assets/img/students/moon_mandal.png" },
  { name: "Theophilus Makazhe | Zimbabwe", program: "B.A. L.L.B", description: "Winner of major public speaking contests with global impact.", imageSrc: "/assets/img/students/Placement-Mockup-1.png" },
  { name: "Hastings Kankhuni | Malawi", program: "H.M.A.C.T.", description: "Contributing in global hospitality with discipline and excellence.", imageSrc: "/assets/img/students/1.png" },
] as const;

export function InternationalAchievementsSection() {
  return (
    <section className="bg-[#111c6b] py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
          Meet Our <span className="font-extrabold">International Students</span>
          <br />
          Who Have Made <span className="font-extrabold">Remarkable Achievements</span>
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {ACHIEVERS.map((item) => (
            <article key={item.name} className="relative min-h-96 overflow-hidden rounded-2xl bg-[#1c2a86] p-5 md:p-6">
              <h3 className="text-xl font-bold md:text-2xl">{item.name}</h3>
              <p className="mt-1 text-lg font-semibold text-[#f7941d] md:text-xl">{item.program}</p>
              <p className="mt-2 text-sm text-white/90 md:text-base">{item.description}</p>
              <div className="absolute bottom-0 left-1/2 h-56 w-44 -translate-x-1/2 md:h-64 md:w-52">
                <Image src={item.imageSrc} alt={item.name} fill sizes="220px" className="object-contain object-bottom" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

