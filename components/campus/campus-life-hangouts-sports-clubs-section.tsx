import Image from "next/image";
import { Dumbbell, Medal, Trophy } from "lucide-react";

const HANGOUTS_CARDS = [
  {
    title: "Fest Evenings & Celebrations ",
    subtitle:
      "Be part of iconic celebrations like Lohri, Garba Night, and annual fests that create unforgettable memories beyond classrooms.",
    image: "/assets/img/fest.jpg",
    alt: "Open-air movie night at the auditorium",
  },
  {
    title: "Cultural Nights",
    subtitle:
      "Celebrate with themed nights, DJ sessions, and cultural showcases that bring together students from across departments in a vibrant atmosphere.",
    image: "/assets/img/show2.jpg",
    alt: "Stand-up comedy night on stage",
  },
  {
    title: "Star Nights & Live Performances",
    subtitle:
      "Experience the thrill of large-scale performances during flagship events like Spontania and Elevate, where music, dance, and crowd energy take over the campus.",
    image: "/assets/img/show.jpg",
    alt: "Evening musical night with a live crowd",
  },
] as const;

const SPORTS_ITEMS = [
  {
    title: "SVGOI premier league",
    description: "Our own cricket league",
    icon: Trophy,
  },
  {
    title: "Annual sports fest",
    description: "With inter-college competitions.",
    icon: Medal,
  },
  {
    title: "Fitness challenges",
    description: "Fitness challenges and yoga workshops.",
    icon: Dumbbell,
  },
] as const;

export function CampusLifeHangoutsSportsClubsSection() {
  return (
    <section className="w-full text-[#171717]">
      <div className="mx-auto w-full max-w-360 px-4 py-12 md:px-6 md:py-16">
        <div className="relative h-72 overflow-hidden rounded-xl md:h-96">
          <Image
            src="/assets/img/campus-life/audi.png"
            alt="Campus life quote banner"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/35 to-black/20" />
          <div className="absolute left-6 bottom-8 max-w-xl text-white md:left-8 md:bottom-10">
            <p className="text-5xl font-bold leading-none text-[#f7941d] md:text-6xl">
              “
            </p>
            <p className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
              For us it&apos;s more than learning. It&apos;s a way of life at
              SVGOI
            </p>
          </div>
        </div>

        <div
          id="campus-hangouts"
          className="mt-10 scroll-mt-36 md:mt-24 md:scroll-mt-44"
        >
          <p className="text-2xl font-medium md:text-3xl">SVGOI Hangouts</p>
          <h2 className="mt-3 max-w-5xl text-4xl font-medium leading-tight md:text-5xl">
            <span className="font-semibold text-[#1d4ed8]">
              Evening at SVGOI
            </span>{" "}
            are never dull, at a campus that never sleeps!
          </h2>
          <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#3e3e3e] md:text-xl">
            Whether it&apos;s open mic nights, stand-up comedy, cultural
            performances, or karaoke sessions, the campus is alive with endless
            possibilities. Enjoy movie nights under the stars, campfire
            gatherings, and themed social events that make every evening
            special.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
            {HANGOUTS_CARDS.map((card) => (
              <article
                key={card.title}
                className="relative h-80 overflow-hidden rounded-xl md:h-96"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 md:px-6 md:pb-6">
                  <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/85 md:text-base">
                    {card.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-24">
          <p className="text-2xl font-medium md:text-3xl">Sports and games</p>
          <h2 className="mt-3 max-w-5xl text-4xl font-medium leading-tight md:text-5xl">
            Sports & Games -{" "}
            <span className="font-semibold text-[#1d4ed8]">Play.</span>{" "}
            <span className="font-semibold text-[#1d4ed8]">Compete.</span>{" "}
            <span className="font-semibold text-[#f7941d]">Win!</span>
          </h2>
          <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#3e3e3e] md:text-xl">
            Whether you&apos;re a pro athlete or just playing for fun, our
            inter-university tournaments and championships keep the competitive
            spirit alive. Enjoy indoor sports arenas, swimming pools, and
            fitness centers to stay active.
          </p>

          <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-3 md:gap-5">
            {SPORTS_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#d8deee] bg-white p-5 shadow-[0_10px_24px_rgba(17,24,39,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#1d4ed8]/30 hover:shadow-[0_14px_30px_rgba(37,99,235,0.15)] md:p-6"
                >
                  <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-[#1d4ed8]/8 transition group-hover:bg-[#f7941d]/12" />
                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff2e2] text-[#f7941d] ring-1 ring-[#f7941d]/10 transition group-hover:bg-[#f7941d] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#121212] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4b5563] md:text-base">
                    {item.description}
                  </p>
                  {/* <p className="mt-5 text-xs font-semibold tracking-wide text-[#1d4ed8] transition group-hover:text-[#f7941d]">
                    Explore activities ›
                  </p> */}
                </article>
              );
            })}
          </div>
        </div>

        <div
          id="campus-student-clubs"
          className="mt-12  scroll-mt-36 gap-8 rounded-2xl bg-[#eef2ff] p-6 md:mt-24 md:scroll-mt-44 md:p-8"
        >
          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight text-[#161616] md:text-5xl">
              Find your tribe & discover yourself with our unique{" "}
              <span className="bg-linear-to-r from-[#1d4ed8] to-[#f7941d] bg-clip-text font-semibold text-transparent">
                Student clubs
              </span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3e3e3e] md:text-xl">
              Join 50+ student clubs that cater to diverse interests, from
              dance, music, photography, and debate to coding.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#3e3e3e] md:text-xl">
              Be a part of something bigger and unleash your creativity! Each
              club hosts regular workshops, competitions, and events to keep the
              energy flowing.
            </p>
          </div>
{/* 
          <div className="grid grid-cols-2 gap-3 self-end">
            <div className="relative h-44 overflow-hidden rounded-xl md:h-56">
              <Image
                src="/assets/img/campus-life/r3c1.png"
                alt="Student clubs activity"
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
            <div className="relative h-44 overflow-hidden rounded-xl md:h-56">
              <Image
                src="/assets/img/campus-life/r3c2.png"
                alt="Creative club session"
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
