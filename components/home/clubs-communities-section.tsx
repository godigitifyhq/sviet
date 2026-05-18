import Link from "next/link";

const CLUBS = [
  {
    name: "Google Developer Student Club",
    short: "GDSC",
    tagline: "Build for everyone with Google technologies.",
    bg: "bg-[#4285F4]",
    text: "text-white",
  },
  {
    name: "Microsoft Learn Student Ambassadors",
    short: "MLSA",
    tagline: "Lead, learn, and connect with Microsoft tools.",
    bg: "bg-[#00a4ef]",
    text: "text-white",
  },
  {
    name: "GeeksForGeeks Campus Chapter",
    short: "GFG",
    tagline: "Master DSA and competitive programming.",
    bg: "bg-[#2f8d46]",
    text: "text-white",
  },
  {
    name: "CodeChef Campus Chapter",
    short: "CC",
    tagline: "Compete, grow, and code at every level.",
    bg: "bg-[#1a1a1a]",
    text: "text-white",
  },
  {
    name: "IEEE Student Branch",
    short: "IEEE",
    tagline: "Advancing technology for humanity.",
    bg: "bg-[#00629B]",
    text: "text-white",
  },
  {
    name: "Photography Club",
    short: "📷",
    tagline: "Capture stories one frame at a time.",
    bg: "bg-[#374151]",
    text: "text-white",
  },
  {
    name: "Drama & Theatre Club",
    short: "🎭",
    tagline: "Express, perform, and inspire on stage.",
    bg: "bg-[#7c3aed]",
    text: "text-white",
  },
  {
    name: "Robotics Club",
    short: "🤖",
    tagline: "Design, build, and innovate with robotics.",
    bg: "bg-[#0f172a]",
    text: "text-white",
  },
];

export function ClubsCommunitiesSection() {
  return (
    <section className="bg-[#eef2ff] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d]">
          Campus Life
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
              Student Clubs &amp; Communities
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6b7280] md:text-base">
              Active student ecosystem — learn, build, and grow together across technology,
              arts, and culture.
            </p>
          </div>
          <Link
            href="/campus-life"
            className="shrink-0 border border-[#f7941d] px-5 py-2.5 text-sm font-semibold text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white"
          >
            Explore Campus Life →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLUBS.map((club) => (
            <div
              key={club.name}
              className="flex flex-col rounded-2xl border border-[#e0e7ff] bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:-translate-y-0.5 duration-200"
            >
              <div className={`flex h-16 items-center justify-center ${club.bg}`}>
                <span className={`text-lg font-black tracking-tight ${club.text}`}>
                  {club.short}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold leading-snug text-[#111827]">{club.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">{club.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
