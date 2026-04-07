import Image from "next/image";

const PLACEMENT_CARDS = [
  {
    name: "Sajan Kumar Rajbanshi",
    imageSrc: "/assets/img/students/Placement-Mockup-1.png",
    imageAlt: "Sajan Kumar Rajbanshi",
    iconLabel: "</>",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-[#fea700]",
  },
  {
    name: "Pranshu Kumar",
    imageSrc: "/assets/img/students/pppp.png",
    imageAlt: "Pranshu Kumar",
    iconLabel: "●",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-[#0b3b8f]",
  },
  {
    name: "Pratham Pandya",
    imageSrc: "/assets/img/students/1.png",
    imageAlt: "Pratham Pandya",
    iconLabel: "C",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-white",
  },
  {
    name: "Vedant Mehta",
    imageSrc: "/assets/img/students/image (1).png",
    imageAlt: "Vedant Mehta",
    iconLabel: "|||",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-white",
  },
] as const;

export function PlacementCardsMarqueeSection() {
  return (
    <div className="mt-12 overflow-hidden px-2 pb-2 md:mt-16 md:px-6">
      <style>{`
        @keyframes placementCardsMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-placement-cards-marquee {
          animation: placementCardsMarquee 16s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>

      <div className="flex w-max animate-placement-cards-marquee gap-6 md:gap-8">
        {[...PLACEMENT_CARDS, ...PLACEMENT_CARDS].map((card, index) => (
          <article key={`${card.name}-${index}`} className="w-56 shrink-0 md:w-64">
            <div className="relative h-80 md:h-92">
              <div className={`absolute inset-x-0 top-0 h-[80%] overflow-hidden rounded-t-[4.5rem] ${card.cardTone} shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:rounded-t-[5.6rem]`}>
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-contain object-bottom"
                />
              </div>

              <div className="absolute left-1/2 top-[70%] z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-lg font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.22)] md:h-16 md:w-16 md:text-xl">
                <div className={`flex h-full w-full items-center justify-center rounded-full ${card.badgeTone} ${card.badgeTone === "bg-white" ? "text-[#0b3b8f]" : "text-white"}`}>
                  <span className="leading-none">{card.iconLabel}</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0">
                <div className="rounded-2xl border border-[#2f266d] bg-[#f2f2f2] px-3 py-2.5 text-center text-[0.6rem] font-medium leading-tight text-black shadow-[0_12px_24px_rgba(11,59,143,0.12)] md:px-4 md:py-3 md:text-[1.55rem]">
                  {card.name}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
