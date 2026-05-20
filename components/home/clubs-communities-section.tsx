import Image from "next/image";
import Link from "next/link";

const CLUBS = [
  {
    name: "Google Developer Groups on Campus",
    tagline: "Build for everyone with Google technologies.",
    logo: "/assets/img/club/GDGC.png",
    bg: "bg-white",
  },
  {
    name: "Microsoft Learn Student Ambassadors",
    tagline: "Lead, learn, and connect with Microsoft tools.",
    logo: "/assets/img/club/mlsa.webp",
    bg: "bg-white",
  },
  {
    name: "GeeksForGeeks Campus Chapter",
    tagline: "Master DSA and competitive programming.",
    logo: "/assets/img/club/gfg.jpg",
    bg: "bg-white",
  },
  {
    name: "CodeChef Campus Chapter",
    tagline: "Compete, grow, and code at every level.",
    logo: "/assets/img/club/cc.png",
    bg: "bg-white",
  },
  {
    name: "IEEE Student Branch",
    tagline: "Advancing technology for humanity.",
    logo: "/assets/img/club/IEEE.jpg",
    bg: "bg-white",
  },
];

export function ClubsCommunitiesSection() {
  return (
    <section className="bg-[#eef2ff] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f7941d]">
          Campus Life
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
              Student Clubs &amp; Communities
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6b7280] md:text-base">
              Active student ecosystem — learn, build, and grow together across
              technology, arts, and culture.
            </p>
          </div>
          <Link
            href="/campus-life"
            className="shrink-0 border border-[#f7941d] px-5 py-2.5 text-sm font-semibold text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white"
          >
            Explore Campus Life →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CLUBS.map((club) => (
            <div
              key={club.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#e0e7ff] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Logo area */}
              <div className="flex h-32 items-center justify-center p-6 bg-white">
                <div className="relative h-full w-full">
                  <Image
                    src={club.logo}
                    alt={`${club.name} logo`}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Info */}
              <div className="border-t border-[#e0e7ff] p-4">
                <h3 className="text-sm font-bold leading-snug text-[#111827]">
                  {club.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                  {club.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
