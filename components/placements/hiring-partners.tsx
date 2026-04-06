"use client";

import Image from "next/image";

const HIRING_PARTNERS_ROW_1 = [
  { name: "Microsoft", logoSrc: "/assets/img/companies/microsoft.png", logoAlt: "Microsoft logo" },
  { name: "Commvault", logoSrc: "/assets/img/companies/commvault.png", logoAlt: "Commvault logo" },
  { name: "HCLTech", logoSrc: "/assets/img/companies/hcltech.png", logoAlt: "HCLTech logo" },
  { name: "Accenture", logoSrc: "/assets/img/companies/accenture.png", logoAlt: "Accenture logo" },
  { name: "IBM", logoSrc: "/assets/img/companies/ibm.png", logoAlt: "IBM logo" },
  { name: "IndiGo", logoSrc: "/assets/img/companies/indigo.png", logoAlt: "IndiGo logo" },
  { name: "Reliance", logoSrc: "/assets/img/companies/reliance.png", logoAlt: "Reliance Industries logo" },
  { name: "Infosys", logoSrc: "/assets/img/companies/infosys.png", logoAlt: "Infosys logo" },
  { name: "TCS", logoSrc: "/assets/img/companies/tcs.png", logoAlt: "TCS logo" },
];

const HIRING_PARTNERS_ROW_2 = [
  { name: "Yokohama", logoSrc: "/assets/img/companies/yokohama.png", logoAlt: "Yokohama logo" },
  { name: "Oracle", logoSrc: "/assets/img/companies/oracle.png", logoAlt: "Oracle logo" },
  { name: "Adani", logoSrc: "/assets/img/companies/adani.png", logoAlt: "Adani logo" },
  { name: "Philips", logoSrc: "/assets/img/companies/philips.png", logoAlt: "Philips logo" },
  { name: "Aditya Birla", logoSrc: "/assets/img/companies/aditya_birla.png", logoAlt: "Aditya Birla Group logo" },
  { name: "Zomato", logoSrc: "/assets/img/companies/zomato.png", logoAlt: "Zomato logo" },
  { name: "Blinkit", logoSrc: "/assets/img/companies/blinkit.png", logoAlt: "Blinkit logo" },
  { name: "Larsen & Toubro", logoSrc: "/assets/img/companies/larsen_toubro.png", logoAlt: "Larsen & Toubro logo" },
  { name: "Gateway Group", logoSrc: "/assets/img/companies/gateway_group.png", logoAlt: "Gateway Group logo" },
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
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          @keyframes slideRight {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .animate-slide-left {
            animation: slideLeft 50s linear infinite;
          }
          
          .animate-slide-right {
            animation: slideRight 50s linear infinite;
          }
        `}</style>

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          {/* Title Badge */}
          <div className="flex justify-center mb-12">
            <div className="rounded-lg bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 px-8 py-4">
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
