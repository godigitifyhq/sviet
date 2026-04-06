import Image from "next/image";

const PLACEMENT_CARDS = [
  {
    name: "Sajan Kumar Rajbanshi",
    imageSrc: "/assets/img/students/Placement-Mockup-1.png",
    imageAlt: "Sajan Kumar Rajbanshi",
    iconLabel: "</>",
    cardTone: "bg-[#28196f]",
    badgeTone: "bg-[#5562f6]",
  },
  {
    name: "Pranshu Kumar",
    imageSrc: "/assets/img/students/pppp.png",
    imageAlt: "Pranshu Kumar",
    iconLabel: "●",
    cardTone: "bg-[#f4c63f]",
    badgeTone: "bg-[#87d85d]",
  },
  {
    name: "Pratham Pandya",
    imageSrc: "/assets/img/students/1.png",
    imageAlt: "Pratham Pandya",
    iconLabel: "C",
    cardTone: "bg-[#28196f]",
    badgeTone: "bg-white",
  },
  {
    name: "Vedant Mehta",
    imageSrc: "/assets/img/students/image (1).png",
    imageAlt: "Vedant Mehta",
    iconLabel: "|||",
    cardTone: "bg-[#f4c63f]",
    badgeTone: "bg-white",
  },
] as const;

export function PlacementCardsMarqueeSection() {
  return (
    <div className="mt-12 overflow-hidden px-2 pb-2 md:mt-16 md:px-6">
      <style>{`
        @keyframes placementCardsMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-placement-cards-marquee {
          animation: placementCardsMarquee 28s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-placement-cards-marquee gap-6 md:gap-8">
        {[...PLACEMENT_CARDS, ...PLACEMENT_CARDS].map((card, index) => (
          <article key={`${card.name}-${index}`} className="w-74 shrink-0 md:w-88">
            <div className={`relative h-104 overflow-hidden rounded-3xl ${card.cardTone} shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:h-120`}>
              <div className="absolute inset-x-0 top-0 h-[62%] px-4 pt-4 md:px-6 md:pt-6">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 310px, 345px"
                  className="object-contain object-top"
                />
              </div>

              <div className="absolute left-1/2 top-[62%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white text-3xl font-bold text-white shadow-lg md:h-24 md:w-24 md:text-4xl">
                <div className={`flex h-full w-full items-center justify-center rounded-full ${card.badgeTone} ${card.badgeTone === "bg-white" ? "text-[#b93b44]" : "text-white"}`}>
                  <span className="leading-none">{card.iconLabel}</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 rounded-[34px] border border-[#2f266d] bg-white px-4 py-4 text-center text-[0.95rem] font-extrabold leading-tight text-black shadow-[0_12px_28px_rgba(47,38,109,0.12)] md:px-5 md:py-5 md:text-[1.05rem]">
                {card.name}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
