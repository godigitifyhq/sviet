"use client";

import Image from "next/image";

const HIRING_PARTNERS_ROW_1 = [
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
];

const HIRING_PARTNERS_ROW_2 = [
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
];

export function HiringPartners() {
  return (
    <>
      {/* Golden header bar */}
      <div className="w-full bg-[#FEA700] h-8 md:h-12" />

      {/* Main section with white background */}
      <section className="w-full bg-white py-12 md:py-16">
        <style>{`
          @keyframes slideLeft {
            from {
                transform: translate3d(0, 0, 0);
            }
            to {
                transform: translate3d(-50%, 0, 0);
            }
          }
          
          @keyframes slideRight {
            from {
                transform: translate3d(-50%, 0, 0);
            }
            to {
                transform: translate3d(0, 0, 0);
            }
          }
          
          .animate-slide-left {
            animation: slideLeft 22s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
          }
          
          .animate-slide-right {
            animation: slideRight 22s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
          }
        `}</style>

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          {/* Title Badge */}
          <div className="mb-12 flex justify-center">
            <div className="rounded-lg border border-[#0b3b8f]/20 bg-[#0b3b8f] px-8 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center whitespace-nowrap">
                Our Hiring Partners
              </h2>
            </div>
          </div>

          {/* Logo Rows */}
          <div className="space-y-8">
            {/* Row 1 - Moving Left */}
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-slide-left">
                {[...HIRING_PARTNERS_ROW_1, ...HIRING_PARTNERS_ROW_1].map((partner, index) => (
                  <div
                    key={`row1-${index}`}
                    className="shrink-0 w-28 md:w-32 h-16 md:h-20 flex items-center justify-center"
                  >
                    <Image
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      width={120}
                      height={70}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Moving Right */}
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-slide-right">
                {[...HIRING_PARTNERS_ROW_2, ...HIRING_PARTNERS_ROW_2].map((partner, index) => (
                  <div
                    key={`row2-${index}`}
                    className="shrink-0 w-28 md:w-32 h-16 md:h-20 flex items-center justify-center"
                  >
                    <Image
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      width={120}
                      height={70}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
