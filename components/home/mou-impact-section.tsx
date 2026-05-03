"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  title: "SVIET MoUs",
  description:
    "Institutional and industry collaborations that strengthen training, outreach, and career pathways for SVIET students.",
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

const MOU_GROUPS: MouGroup[] = [SVIET_GROUP, SVCP_GROUP];

function MouGroupSection({ group }: { group: MouGroup }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const offset = Math.round(track.clientWidth * 0.9);
    track.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const maxScrollLeft = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScrollLeft - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      scrollByAmount("right");
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="rounded-[28px] border border-[#e7e7ef] bg-white p-5  md:p-7">
      <div className="flex flex-col gap-3 border-b border-[#ececf4] pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-linear-to-r ${group.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white`}
          >
            {group.key}
          </div>
          <h3 className="mt-3 text-2xl font-bold text-[#111827] md:text-3xl">
            {group.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6b7280] md:text-base">
            {group.description}
          </p>
        </div>

        <div className="rounded-2xl bg-[#f8faff] px-4 py-3 text-left md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
            {group.highlight}
          </p>
          <p className="mt-1 text-sm text-[#374151]">
            Year-wise collaboration archive
          </p>
          <div className="mt-3 flex items-center gap-2 md:justify-end">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e6e8f2] bg-white text-[#5047d8] transition hover:bg-[#f3f4ff]"
              aria-label={`Show previous ${group.key} collaboration`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e6e8f2] bg-white text-[#5047d8] transition hover:bg-[#f3f4ff]"
              aria-label={`Show next ${group.key} collaboration`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth"
      >
        {group.partners.map((partner) => (
          <article
            key={partner.name}
            className="group min-w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#ececf4] bg-[#fcfcff] transition duration-300  sm:min-w-[48%] xl:min-w-[24%]"
          >
            <div className="relative h-44 overflow-hidden bg-[#f1f5ff]">
              <Image
                src={partner.imageSrc}
                alt={`${partner.name} MoU photo`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-500 "
              />
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#5047d8] ">
                {partner.year}
              </div>
            </div>

            <div className="space-y-2 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f7941d]">
                {group.key}
              </p>
              <h4 className="text-sm font-semibold leading-6 text-[#111827]">
                {partner.name}
              </h4>
              <p className="text-xs text-[#6b7280]">{partner.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MOUImpactSection() {
  return (
    <section className="bg-[#f4f7fb] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">
            MoU Network
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">
            MoU Collaborations Across SVIET and SVCP
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6b7280] md:text-lg">
            A structured view of the current MoU portfolio, split by institution
            type so the homepage clearly separates SVIET and SVCP collaborations
            and showcases supporting event photographs.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {MOU_GROUPS.map((group) => (
            <div
              key={group.key}
              className="rounded-2xl border border-[#e6e8f2] bg-white p-5 "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
                {group.key}
              </p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <h3 className="text-2xl font-bold text-[#111827]">
                  {group.partners.length}
                </h3>
                <span className="rounded-full bg-[#f8faff] px-3 py-1 text-xs font-semibold text-[#5047d8]">
                  {group.highlight}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                {group.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <MouGroupSection group={SVIET_GROUP} />
          <MouGroupSection group={SVCP_GROUP} />
        </div>
      </div>
    </section>
  );
}
