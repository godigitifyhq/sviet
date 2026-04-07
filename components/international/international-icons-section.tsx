import Image from "next/image";

const ICONS = [
  { name: "Rath Yatra", imageSrc: "/assets/img/placements/featured-companies/disney.svg", bg: "bg-[#f59e0b]" },
  { name: "NCC", imageSrc: "/assets/img/placements/featured-companies/netflix.svg", bg: "bg-[#2563EB]" },
  { name: "NSS", imageSrc: "/assets/img/placements/featured-companies/google.svg", bg: "bg-[#0f766e]" },
  { name: "Karnavati Club", imageSrc: "/assets/img/placements/featured-companies/microsoft.svg", bg: "bg-[#dc2626]" },
  { name: "Khel Mahakumbh", imageSrc: "/assets/img/placements/featured-companies/ibm.svg", bg: "bg-[#1d4ed8]" },
  { name: "Youth Fest", imageSrc: "/assets/img/placements/featured-companies/infosys.svg", bg: "bg-[#7c3aed]" },
] as const;

export function InternationalIconsSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
            Get Better Exposure in
            <br />
            <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text font-extrabold text-transparent">Renowned Events and Activities</span>
          </h2>
          <p className="mt-3 text-base text-[#374151] md:text-lg">Experience leadership, culture, service and teamwork through enriching activities.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ICONS.map((icon) => (
            <article key={icon.name} className={`${icon.bg} flex flex-col items-center justify-center rounded-xl p-4 text-center text-white`}>
              <div className="relative h-10 w-10">
                <Image src={icon.imageSrc} alt={icon.name} fill sizes="40px" className="object-contain" />
              </div>
              <p className="mt-2 text-xs font-semibold">{icon.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

