"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

type MouPartner = {
  name: string;
  year: string;
  imageSrc: string;
  note: string;
};

type MouGroup = {
  key: "SVIET" | "SVCP";
  title: string;
  description: string;
  accent: string;
  highlight: string;
  partners: MouPartner[];
};

const SVIET_GROUP: MouGroup = {
  key: "SVIET",
  title: "SVGOI MoUs",
  description:
    "Institutional and industry collaborations that strengthen training, outreach, and career pathways for SVGOI students.",
  accent: "from-[#f7941d] to-[#ffb347]",
  highlight: "24 active collaborations",
  partners: [
    {
      name: "Butterfly Labs Pvt. Ltd., Mohali",
      year: "2023",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Amcare/IMG_8485.JPG",
      note: "Seminar/Training",
    },
    {
      name: "Career Guidance and Placements Services, Jammu",
      year: "2023",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Coder%20Roots/DSC00975.JPG",
      note: "Student Exchange/Training and Placements",
    },
    {
      name: "Ellocent Lab IT Solution Pvt. Ltd., Mohali",
      year: "2023",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Kreativan%20Technologies/DSC02285.JPG",
      note: "Research Projects/Placement",
    },
    {
      name: "Da-One Sports Club Pvt. Ltd.",
      year: "2023",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Learning%20Roots/Copy%20of%20IMG_1615.JPG",
      note: "Sports Facilities",
    },
    {
      name: "Focus College, Canada",
      year: "2023",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Mou%20with%20HdWM%20%26%20IB/DSC03756.JPG",
      note: "Student Exchange",
    },
    {
      name: "Solitaire Infosys Pvt. Ltd., Mohali",
      year: "2022",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/MWIDM%20India%20Pvt.%20Ltd/DSC00221.JPG",
      note: "Training/Placement",
    },
    {
      name: "Rise n Shine, Punjab",
      year: "2022",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Placement/WhatsApp%20Image%202025-05-21%20at%206.34.07%20AM.jpeg",
      note: "Industrial Training/Research Projects",
    },
    {
      name: "Anvian Solutions Pvt. Ltd., Mohali",
      year: "2022",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Sortiq/DSC06587.JPG",
      note: "Training/Placement",
    },
    {
      name: "Ominnos Technologies International Pvt. Ltd., Mohali",
      year: "2022",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Amcare/IMG_8497.JPG",
      note: "Training and Placement",
    },
    {
      name: "ASD Agro Industries, Mohali",
      year: "2022",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Coder%20Roots/DSC00985.JPG",
      note: "Field Work/On Job Training",
    },
    {
      name: "Abroad Educare, Zirakpur",
      year: "2021",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Kreativan%20Technologies/DSC02286.JPG",
      note: "Faculty Development",
    },
    {
      name: "Mrs Energy Tech, Baddi, HP",
      year: "2021",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Learning%20Roots/Copy%20of%20IMG_1624.JPG",
      note: "Industrial Training/Placement",
    },
    {
      name: "Codevision.io, Mohali",
      year: "2021",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Mou%20with%20HdWM%20%26%20IB/DSC03765.JPG",
      note: "Technical Training",
    },
    {
      name: "Moonlit Industries, Sirhind",
      year: "2021",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/MWIDM%20India%20Pvt.%20Ltd/DSC00262.JPG",
      note: "Training/Internship",
    },
    {
      name: "Hopping Minds, Mohali",
      year: "2021",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Placement/WhatsApp%20Image%202025-05-21%20at%206.37.10%20AM%20(1).jpeg",
      note: "Technical Training",
    },
    {
      name: "Arias Steel Pvt. Ltd., Faridabad",
      year: "2020",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Sortiq/DSC06601.JPG",
      note: "Industrial Training",
    },
    {
      name: "Educational Building Expert, Mohali",
      year: "2020",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Amcare/IMG_8501.JPG",
      note: "Industrial Training/Internship",
    },
    {
      name: "MindCode Lab Pvt. Ltd., Mohali",
      year: "2019",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Coder%20Roots/DSC01017.JPG",
      note: "Summer Industrial Training",
    },
    {
      name: "Talent O Mind, Mohali",
      year: "2019",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Kreativan%20Technologies/DSC02314.JPG",
      note: "Training & Project Work",
    },
    {
      name: "SV Technologies, Chandigarh",
      year: "2019",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Learning%20Roots/IMG_2002.JPG",
      note: "Hardware & Network Training",
    },
    {
      name: "R N Gupta, Ludhiana",
      year: "2019",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Mou%20with%20HdWM%20%26%20IB/DSC03777.JPG",
      note: "Summer Industrial Training/Educational Tour",
    },
    {
      name: "Quipr HR Services, Zirakpur, Punjab",
      year: "2018",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/MWIDM%20India%20Pvt.%20Ltd/DSC00285.JPG",
      note: "Training & Placement",
    },
    {
      name: "AGCL Technologies, Zirakpur, Punjab",
      year: "2018",
      imageSrc:
        "/assets/img/SVIET/SVIET%20Photos/Placement/WhatsApp%20Image%202025-05-21%20at%206.37.10%20AM%20(2).jpeg",
      note: "Expert Lectures/Training",
    },
    {
      name: "Uproar ERP Pvt. Ltd., Mohali, Punjab",
      year: "2018",
      imageSrc: "/assets/img/SVIET/SVIET%20Photos/Sortiq/DSC06639.JPG",
      note: "Technical Training",
    },
  ],
};

const SVCP_GROUP: MouGroup = {
  key: "SVCP",
  title: "SVCP MoUs",
  description:
    "Pharmacy and healthcare partnerships that support lab-to-industry learning, clinical relevance, and professional exposure for SVCP students.",
  accent: "from-[#5047d8] to-[#6b63ff]",
  highlight: "13 active collaborations",
  partners: [
    {
      name: "Edupyramids Educational Services Pvt. Ltd, A SINE, IIT Bombay",
      year: "2025",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Amicus%20Healthcare/20260116_21111PMByGPSMapCamera.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Katherine & Kyoor Pharmaceuticals, Baddi, HP",
      year: "2025",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Paras%20Pharma/559123212_1197183238908302_7702935883636893618_n.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Dharmayu Wellness, Derabassi, Punjab",
      year: "2025",
      imageSrc: "/assets/img/SVCP/MOU%20Pics/Dharmayu%20Wellness/dharmayu.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Paras Healthcare, Panchkula, Haryana",
      year: "2025",
      imageSrc: "/assets/img/SVCP/MOU%20Pics/Paras%20Pharma/paras.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Gautam College of Pharmacy, Hamirpur, HP",
      year: "2025",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Gautam%20College%20of%20Pharmacy/gautam.jpeg",
      note: "Industry collaboration",
    },
    {
      name: "Krisa Healthcare, Baddi, HP",
      year: "2025",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Dharmayu%20Wellness/558109701_1194380205855272_7387256740285227281_n.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Ion Healthcare Baddi, HP",
      year: "2025",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Paras%20Pharma/559961972_1197183242241635_8347532131443638689_n%20(1).jpg",
      note: "Industry collaboration",
    },
    {
      name: "DS Cosmeceuticals Pvt. Ltd, Ludhiana, Punjab",
      year: "2025",
      imageSrc: "/assets/img/SVCP/MOU%20Pics/DS%20Comoceuticals/ds.jpeg",
      note: "Industry collaboration",
    },
    {
      name: "Amicus Healthcare Pvt. Ltd",
      year: "2026",
      imageSrc: "/assets/img/SVCP/MOU%20Pics/Amicus%20Healthcare/ami.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Chandigarh Agritech Pvt.Ltd",
      year: "2026",
      imageSrc: "/assets/img/SVCP/MOU%20Pics/Amicus%20Healthcare/ami.jpg",
      note: "Industry collaboration",
    },
    {
      name: "Koul Pharmaceutical Distributors, Jammu",
      year: "2024",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Gautam%20College%20of%20Pharmacy/WhatsApp%20Image%202025-11-17%20at%204.20.21%20PM.jpeg",
      note: "Industry collaboration",
    },
    {
      name: "Focus College, Surrey, BC, Canada",
      year: "2023",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/DS%20Comoceuticals/WhatsApp%20Image%202025-12-12%20at%201.56.37%20PM.jpeg",
      note: "Industry collaboration",
    },
    {
      name: "Philadelphia Hospital, Ambala, Punjab",
      year: "2022",
      imageSrc:
        "/assets/img/SVCP/MOU%20Pics/Amicus%20Healthcare/GMC16012026_141200.jpg",
      note: "Industry collaboration",
    },
  ],
};

const MOU_HIGHLIGHTS = [
  {
    partner: "Focus College, Canada",
    year: "2023",
    type: "International Exchange",
    description: "Student exchange and academic collaboration bridging SVGOI with a leading Canadian institution.",
    image: "/assets/img/SVIET/SVIET%20Photos/Mou%20with%20HdWM%20%26%20IB/DSC03756.JPG",
    accent: "from-[#f7941d] to-[#ffb347]",
    category: "International",
  },
  {
    partner: "Edupyramids / IIT Bombay SINE",
    year: "2025",
    type: "Research Collaboration",
    description: "Deep tech research partnership through IIT Bombay's startup incubation ecosystem.",
    image: "/assets/img/SVCP/MOU%20Pics/Amicus%20Healthcare/20260116_21111PMByGPSMapCamera.jpg",
    accent: "from-[#1d4ed8] to-[#3b82f6]",
    category: "Research",
  },
  {
    partner: "Paras Healthcare, Panchkula",
    year: "2025",
    type: "Healthcare & Clinical",
    description: "Clinical training and healthcare industry exposure for pharmacy and allied health students.",
    image: "/assets/img/SVCP/MOU%20Pics/Paras%20Pharma/paras.jpg",
    accent: "from-[#059669] to-[#34d399]",
    category: "Healthcare",
  },
  {
    partner: "Ellocent Lab IT Solutions, Mohali",
    year: "2023",
    type: "Industry Training",
    description: "Research-led placement pathways with one of the region's leading IT solution providers.",
    image: "/assets/img/SVIET/SVIET%20Photos/Kreativan%20Technologies/DSC02285.JPG",
    accent: "from-[#7c3aed] to-[#a78bfa]",
    category: "Technology",
  },
  {
    partner: "Dharmayu Wellness, Derabassi",
    year: "2025",
    type: "Wellness & Pharma",
    description: "Practical exposure in wellness and pharmaceutical distribution for SVCP students.",
    image: "/assets/img/SVCP/MOU%20Pics/Dharmayu%20Wellness/dharmayu.jpg",
    accent: "from-[#db2777] to-[#f472b6]",
    category: "Pharma",
  },
  {
    partner: "Career Guidance & Placements, Jammu",
    year: "2023",
    type: "Placement Support",
    description: "Expanding student placement reach across Jammu and the wider northern India corridor.",
    image: "/assets/img/SVIET/SVIET%20Photos/Coder%20Roots/DSC00975.JPG",
    accent: "from-[#d97706] to-[#fbbf24]",
    category: "Placements",
  },
];

const ALL_PARTNER_NAMES_ROW_1 = [
  "Butterfly Labs", "Focus College", "Ellocent Lab IT", "Solitaire Infosys",
  "Anvian Solutions", "Ominnos Technologies", "Codevision.io", "MindCode Lab",
  "Talent O Mind", "SV Technologies", "Quipr HR Services", "AGCL Technologies",
];

const ALL_PARTNER_NAMES_ROW_2 = [
  "Paras Healthcare", "Dharmayu Wellness", "IIT Bombay SINE", "Amicus Healthcare",
  "Gautam College of Pharmacy", "Krisa Healthcare", "Ion Healthcare",
  "DS Cosmeceuticals", "Philadelphia Hospital", "Chandigarh Agritech",
  "Katherine & Kyoor Pharma", "Koul Pharma Distributors",
];

export function MOUImpactSection() {
  return (
    <>
      <style>{`
        .mou-swiper-pagination.swiper-pagination {
          position: relative !important;
          margin-top: 16px;
        }
        .mou-swiper-pagination .swiper-pagination-bullet {
          background: #D1D5DB;
          opacity: 1;
        }
        .mou-swiper-pagination .swiper-pagination-bullet-active {
          background: #f7941d;
        }
        @keyframes mouSlideLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes mouSlideRight {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        .mou-animate-left {
          animation: mouSlideLeft 28s linear infinite;
          will-change: transform;
        }
        .mou-animate-right {
          animation: mouSlideRight 28s linear infinite;
          will-change: transform;
        }
      `}</style>

      <section className="bg-[#f4f7fb] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Part 1 — Description Block */}
          <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d]">
                MoU Network
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
                Building Global
                <br />
                <span className="text-[#f7941d]">Partnerships</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6b7280] md:text-lg">
                SVGOI has established <strong className="text-[#111827]">37+ active MoUs</strong> with leading
                industry partners, academic institutions, and research organizations across
                India and internationally — fostering knowledge exchange, placement pathways,
                and collaborative innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "37+", label: "Active MoUs" },
                { value: "2026", label: "Latest Partnership" },
                { value: "India & International", label: "Reach" },
                { value: "2018", label: "Partnership Since" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-xl font-black text-[#f7941d] md:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-[#6b7280]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2 — MOU Highlights Carousel */}
          <div className="mb-14">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#9ca3af]">
              Partnership Highlights
            </p>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1}
              pagination={{ clickable: true, el: ".mou-swiper-pagination" }}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              loop={true}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="mou-swiper"
            >
              {MOU_HIGHLIGHTS.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <article className="overflow-hidden rounded-2xl bg-white shadow-sm border border-[#e5e7eb]">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.partner} MoU signing`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-linear-to-b from-transparent to-black/60`} />
                      <div className={`absolute left-3 top-3 rounded-full bg-linear-to-r ${item.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}>
                        {item.category}
                      </div>
                      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#374151]">
                        {item.year}
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f7941d]">
                        {item.type}
                      </p>
                      <h3 className="mt-1 text-sm font-bold leading-snug text-[#111827]">
                        {item.partner}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mou-swiper-pagination mt-6 flex justify-center" />
          </div>

          {/* Part 3 — Partner Name Marquee */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#9ca3af]">
              Our Partner Network
            </p>
            <div className="space-y-4 overflow-hidden">
              <div className="overflow-hidden">
                <div className="flex gap-4 mou-animate-left">
                  {[...ALL_PARTNER_NAMES_ROW_1, ...ALL_PARTNER_NAMES_ROW_1].map((name, i) => (
                    <div
                      key={`r1-${i}`}
                      className="shrink-0 whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-xs font-semibold text-[#374151] shadow-sm"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="flex gap-4 mou-animate-right">
                  {[...ALL_PARTNER_NAMES_ROW_2, ...ALL_PARTNER_NAMES_ROW_2].map((name, i) => (
                    <div
                      key={`r2-${i}`}
                      className="shrink-0 whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-xs font-semibold text-[#374151] shadow-sm"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
