import Image from "next/image";
import Link from "next/link";

const FLAGS = [
  { src: "/assets/img/flags/Flag-Cameroon.webp", country: "Cameroon" },
  { src: "/assets/img/flags/Flag-Cote-dIvoire.webp", country: "Côte d'Ivoire" },
  { src: "/assets/img/flags/Flag-Guinea.webp", country: "Guinea" },
  { src: "/assets/img/flags/Flag-Malawi.webp", country: "Malawi" },
  { src: "/assets/img/flags/Flag-Zimbabwe.webp", country: "Zimbabwe" },
  { src: "/assets/img/flags/Flag_of_Austria.webp", country: "Austria" },
  { src: "/assets/img/flags/Flag_of_Egypt.svg", country: "Egypt" },
  { src: "/assets/img/flags/Flag_of_Ghana.svg", country: "Ghana" },
  { src: "/assets/img/flags/Flag_of_Kenya.webp", country: "Kenya" },
  { src: "/assets/img/flags/Flag_of_Lesotho.png", country: "Lesotho" },
  { src: "/assets/img/flags/Flag_of_Liberia.png", country: "Liberia" },
  { src: "/assets/img/flags/Flag_of_Mali.png", country: "Mali" },
  { src: "/assets/img/flags/Flag_of_Mozambique.svg", country: "Mozambique" },
  { src: "/assets/img/flags/Flag_of_Nigeria.png", country: "Nigeria" },
  { src: "/assets/img/flags/Flag_of_Rwanda.png", country: "Rwanda" },
  { src: "/assets/img/flags/Flag_of_South_Sudan.png", country: "South Sudan" },
  { src: "/assets/img/flags/Flag_of_Sudan.png", country: "Sudan" },
  { src: "/assets/img/flags/Flag_of_Tanzania.webp", country: "Tanzania" },
  { src: "/assets/img/flags/Flag_of_Thailand_(CMYK).png", country: "Thailand" },
  { src: "/assets/img/flags/Flag_of_Uganda.png", country: "Uganda" },
  { src: "/assets/img/flags/Flag_of_Yemen.png", country: "Yemen" },
  { src: "/assets/img/flags/Flag_of_Zambia.png", country: "Zambia" },
];

export function InternationalHeroIntroSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.05fr_1fr] md:gap-10">
          <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
            Welcome to a vibrant
            <br />
            community of over
            <br />
            <span className="">
              2000+ international students
              <br />
              from 20+ countries.
            </span>
          </h2>

          <div>
            <h3 className="text-2xl font-bold text-[#111827] md:text-3xl">
              International Students
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#374151] md:text-lg">
              At SVGOI, we pride ourselves on being a melting pot of cultures,
              ideas, and innovations. With students from 20+ countries, our
              campus offers a truly global experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#374151] md:text-lg">
              Explore diverse programs, state-of-the-art facilities, and a
              supportive environment that nurtures your ambitions.
            </p>
          </div>
        </div>

        <div className="relative mt-32 overflow-visible rounded-2xl bg-[#f5e2bf] px-6 py-8 md:px-10 md:py-10">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_1fr]">
            <div className="relative min-h-40 md:min-h-40">
              {/* <div className="absolute bottom-0 left-4 h-48 w-48 rounded-t-full bg-[#f7b56b] md:h-56 md:w-56" /> */}
              <Image
                src="https://www.paruluniversity.ac.in/wp-content/uploads/2025/03/mid-banner.svg"
                alt="International student"
                fill
                sizes="(max-width: 968px) 100vw, 45vw"
                className="object-contain object-bottom scale-200 -translate-y-10 md:-translate-y-10"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold leading-tight text-[#111827] md:text-4xl">
                Ready to Join the Global Learning Community At SVGOI?
              </h3>
              <Link
                href="/admissions"
                className="mt-6 inline-flex items-center rounded-lg bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>

        {/* Flags row */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-bold text-[#111827] md:text-xl">
            Students from Around the World
          </h3>
          <div className="mt-6 flex gap-5 overflow-x-auto pb-3 md:flex-wrap md:justify-center md:overflow-x-visible">
            {FLAGS.map((flag) => (
              <div
                key={flag.country}
                className="flex shrink-0 flex-col items-center gap-2"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-md ring-2 ring-gray-100">
                  <Image
                    src={flag.src}
                    alt={`${flag.country} flag`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs text-gray-500">{flag.country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
