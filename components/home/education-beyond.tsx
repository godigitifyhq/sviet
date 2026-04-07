import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, Search, Users } from "lucide-react";

const audienceCards = [
  {
    title: "For Prospective Students",
    href: "/admissions",
    image: "https://cdn2.hubspot.net/hubfs/4094901/iStock-489808285.jpg",
    icon: Users,
    iconLabel: "Prospective students",
  },
  {
    title: "For Current Students",
    href: "/campus-life",
    image: "/assets/img/campus-life/r2c1.png",
    icon: Search,
    iconLabel: "Current students",
  },
  {
    title: "For Faculties & Professors",
    href: "/research",
    image: "/assets/img/campus-life/r3c1.png",
    icon: ClipboardCheck,
    iconLabel: "Faculties and professors",
  },
] as const;

export function EducationBeyondSection() {
  return (
    <section className=" bg-[#ffffff] py-14 md:py-18">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl font-medium leading-tight text-[#6B7280] md:text-2xl">Information for</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#000000] md:text-5xl">
          One Place, Different Paths
        </h2>
        <p className="mt-3 text-2xl font-medium leading-tight text-[#111827] md:text-4xl">We have something for everyone!</p>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-lg">
          Whether you&apos;re a prospective student just starting their journey or an alumni who has just finished it,
          here is where you will find your way around SVIET.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {audienceCards.map((card) => {
            const CardIcon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group relative block h-64 !rounded-[15px]  overflow-hidden rounded-[28px]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-[28px] bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <CardIcon className="h-10 w-10 text-[#f7941d]" aria-label={card.iconLabel} />
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#ffffff]">{card.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[#f7941d] transition group-hover:gap-3">
                    Read more
                    <span aria-hidden="true">›</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

