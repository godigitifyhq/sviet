import Image from "next/image";

const VISIT_PHOTOS = [
  {
    src: "/assets/img/section_card/Industrial Visit.jpeg",
    caption: "Industrial visit — strengthening recruiter partnerships",
  },
  {
    src: "/assets/img/section_card/GFS.JPG",
    caption: "Global Futures Summit — HR industry leaders at SVGOI",
  },
  {
    src: "/assets/img/section_card/GFS2.JPG",
    caption: "Director-level corporate meet at SVGOI Auditorium",
  },
  {
    src: "/assets/img/section_card/GFS3.JPG",
    caption: "Interactive roundtable with top recruiters",
  },
  {
    src: "/assets/img/section_card/Dev1.jpeg",
    caption: "DevFest 2025 — tech leaders engaging with students",
  },
  {
    src: "/assets/img/section_card/Dev2.jpeg",
    caption: "Workshops and live demos at corporate connect events",
  },
];

export function CorporateConnectSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d]">
          Corporate Connect
        </p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
              Building Bridges Between SVGOI and India&apos;s Top Employers
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6b7280]">
              Our directors and placement team actively visit leading companies across India,
              building relationships that translate into real opportunities for our students.
              Every handshake is a career pathway.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["2,200+ Partner Companies", "Pan-India Reach", "Ongoing Corporate Visits"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#f7941d]/30 bg-[#fff7ed] px-4 py-2 text-xs font-semibold text-[#f7941d]"
                >
                  {badge}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VISIT_PHOTOS.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden rounded-2xl">
              <div className="relative h-52 overflow-hidden bg-[#f5f7fb]">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
              </div>
              <figcaption className="mt-2 px-1 text-xs leading-snug text-[#6b7280]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
