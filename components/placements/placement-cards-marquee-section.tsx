import Image from "next/image";

const PLACEMENT_CARDS = [
  {
    name: "Avinash Verma - 50 LPA",
    imageSrc: "/assets/img/students/Placement-Mockup-1.png",
    imageAlt: "Avinash Verma placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-[#fea700]",
  },
  {
    name: "Ankit Kumar - 27 LPA",
    imageSrc: "/assets/img/students/pppp.png",
    imageAlt: "Ankit Kumar placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-[#0b3b8f]",
  },
  {
    name: "Aditi Rashmi - 18 LPA",
    imageSrc: "/assets/img/students/1.png",
    imageAlt: "Aditi Rashmi placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-white",
  },
  {
    name: "Rohan Shukla - 18 LPA",
    imageSrc: "/assets/img/students/image (1).png",
    imageAlt: "Rohan Shukla placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-white",
  },
  {
    name: "Swati Khanna - 16 LPA",
    imageSrc: "/assets/img/students/moon_mandal.png",
    imageAlt: "Swati Khanna placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-[#fea700]",
  },
  {
    name: "Yash Khandelwal - 16 LPA",
    imageSrc: "/assets/img/students/slider-img-1.png",
    imageAlt: "Yash Khandelwal placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-[#0b3b8f]",
  },
  {
    name: "Payal Kumari - 16 LPA",
    imageSrc: "/assets/img/students/1.png",
    imageAlt: "Payal Kumari placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-white",
  },
  {
    name: "Farzan Alam - 14 LPA",
    imageSrc: "/assets/img/students/pppp.png",
    imageAlt: "Farzan Alam placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-white",
  },
  {
    name: "Ritik Kumar - 14 LPA",
    imageSrc: "/assets/img/students/image (1).png",
    imageAlt: "Ritik Kumar placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#0b3b8f]",
    badgeTone: "bg-[#fea700]",
  },
  {
    name: "Ritu Koul - 13 LPA",
    imageSrc: "/assets/img/students/moon_mandal.png",
    imageAlt: "Ritu Koul placement highlight",
    iconLabel: "SV",
    cardTone: "bg-[#fea700]",
    badgeTone: "bg-[#0b3b8f]",
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

        .placement-card-shell {
          border-top-left-radius: 5rem;
          border-top-right-radius: 5rem;
          clip-path: inset(0 round 5rem 5rem 0 0);
        }

        .placement-card-top {
          border-top-left-radius: 5rem;
          border-top-right-radius: 5rem;
        }

        @media (min-width: 768px) {
          .placement-card-shell,
          .placement-card-top {
            border-top-left-radius: 6rem;
            border-top-right-radius: 6rem;
          }

          .placement-card-shell {
            clip-path: inset(0 round 6rem 6rem 0 0);
          }
        }
      `}</style>

      <div className="flex w-max animate-placement-cards-marquee gap-6 md:gap-8">
        {[...PLACEMENT_CARDS, ...PLACEMENT_CARDS].map((card, index) => (
          <article
            key={`${card.name}-${index}`}
            className="w-56 shrink-0 md:w-64"
          >
            <div className="placement-card-shell relative h-80 overflow-hidden md:h-92">
              <div
                className={`placement-card-top absolute inset-x-0 top-0 h-[80%] ${card.cardTone} shadow-[0_18px_40px_rgba(0,0,0,0.12)]`}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-contain object-bottom"
                />
              </div>

              <div className="absolute left-1/2 top-[70%] z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-lg font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.22)] md:h-16 md:w-16 md:text-xl">
                <div
                  className={`flex h-full w-full items-center justify-center rounded-full ${card.badgeTone} ${card.badgeTone === "bg-white" ? "text-[#0b3b8f]" : "text-white"}`}
                >
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
