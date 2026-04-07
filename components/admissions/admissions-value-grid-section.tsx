import Image from "next/image";
import { BookOpenCheck, BriefcaseBusiness, GraduationCap, Trophy } from "lucide-react";

const VALUE_CARDS = [
  {
    title: "Top-class infrastructure and digital learning, all in one place.",
    tone: "image",
    image: "/assets/img/college/auditorium.png",
  },
  {
    title: "Teaching that sharpens skills and shapes confident professionals.",
    tone: "blue",
    icon: GraduationCap,
  },
  {
    title: "A curriculum that stays relevant, from local industry to global demand.",
    tone: "orange",
    icon: BriefcaseBusiness,
  },
  {
    title: "Graduate with a degree that carries weight and credibility.",
    tone: "navy",
    icon: Trophy,
  },
  {
    title: "Research and innovation opportunities that keep you ahead.",
    tone: "teal",
    icon: BookOpenCheck,
  },
  {
    title: "Practical training that turns classroom learning into career readiness.",
    tone: "image",
    image: "/assets/img/college/main_gate.png",
  },
] as const;

function cardToneClass(tone: (typeof VALUE_CARDS)[number]["tone"]) {
  if (tone === "blue") {
    return "bg-[#2563EB]";
  }

  if (tone === "orange") {
    return "bg-[#f7941d]";
  }

  if (tone === "navy") {
    return "bg-[#111827]";
  }

  if (tone === "teal") {
    return "bg-[#0f766e]";
  }

  return "";
}

export function AdmissionsValueGridSection() {
  return (
    <section className="bg-[#f5f7fb] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#202027] md:text-5xl">
          You bring the ambition.
          <span className="text-[#f7941d]"> We deliver the edge.</span>
        </h2>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-[#4d4d57] md:text-base">
          At SVIET, everything is built around one promise: better learning, better exposure, and better career outcomes.
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-12">
          {VALUE_CARDS.map((card, index) => {
            const wide = index === 0 || index === 5;
            const colClass = wide ? "md:col-span-6" : "md:col-span-3";

            if (card.tone === "image") {
              return (
                <article key={card.title} className={`relative h-52 overflow-hidden rounded-xl ${colClass}`}>
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">{card.title}</p>
                </article>
              );
            }

            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`relative flex h-52 flex-col justify-between overflow-hidden rounded-xl p-4 text-white ${cardToneClass(card.tone)} ${colClass}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
                <Icon className="relative h-5 w-5" />
                <p className="relative text-sm font-semibold leading-snug">{card.title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
