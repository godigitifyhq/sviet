import Image from "next/image";
import Link from "next/link";

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
            <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text font-extrabold text-transparent">
              5,500+ international students
              <br />
              from 75+ countries.
            </span>
          </h2>

          <div>
            <h3 className="text-2xl font-bold text-[#111827] md:text-3xl">International Students</h3>
            <p className="mt-4 text-base leading-relaxed text-[#374151] md:text-lg">
              At SVIET, we pride ourselves on being a melting pot of cultures, ideas, and innovations. With students
              from 75+ countries, our campus offers a truly global experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#374151] md:text-lg">
              Explore diverse programs, state-of-the-art facilities, and a supportive environment that nurtures your ambitions.
            </p>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl bg-[#f5e2bf] px-6 py-8 md:px-10 md:py-10">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_1fr]">
            <div className="relative min-h-56 md:min-h-64">
              <div className="absolute bottom-0 left-4 h-40 w-40 rounded-t-full bg-[#f7b56b] md:h-44 md:w-44" />
              <Image
                src="/assets/img/students/image (2).png"
                alt="International student"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain object-bottom"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold leading-tight text-[#111827] md:text-4xl">
                Ready to Join the Global Learning Community At SVIET?
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
      </div>
    </section>
  );
}

