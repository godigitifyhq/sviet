"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const leaders = [
  {
    name: "Aman Gupta",
    role: "Co-Founder, boAt",
    image: "/assets/img/college/guests/aman_gupta.png",
    quote: "Build products that solve real problems",
  },
  {
    name: "Ashneer Grover",
    role: "Co-Founder, BharatPe",
    image: "/assets/img/college/guests/ashneer_groveer.png",
    quote: "Entrepreneurship is about creating value at scale",
  },
  {
    name: "Anand Kumar Sir",
    role: "Distinguished Guest",
    image: "/assets/img/college/guests/anand_kumar_sir.png",
    quote: "Education has the power to transform every life",
  },
  {
    name: "PK Desai Sir",
    role: "Distinguished Guest",
    image: "/assets/img/college/guests/pkdesaisir.jpeg",
    quote: "Discipline and consistency drive long-term success",
  },
  {
    name: "Rajeev Ahuja Sir",
    role: "Distinguished Guest",
    image: "/assets/img/college/guests/rajeev_ahuja_sir.jpg.jpeg",
    quote: "Innovation begins when curiosity meets execution",
  },
  {
    name: "Susheel Mital Sir",
    role: "Distinguished Guest",
    image: "/assets/img/college/guests/susheel_mital_sir.jpg.jpeg",
    quote: "Leadership is about enabling others to excel",
  },
];

export function DistinguishedLeadersSection() {
  return (
    <>
      <style>{`
        .leaders-swiper-pagination.swiper-pagination {
          position: relative !important;
          margin-top: 16px;
        }
        
        .leaders-swiper-pagination .swiper-pagination-bullet {
          background: #D1D5DB;
          opacity: 1;
        }
        
        .leaders-swiper-pagination .swiper-pagination-bullet-active {
          background: #3B82F6;
        }
      `}</style>
      <section className="bg-[#FFFFFF] px-6 py-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Area */}
        <div className=" w-[80%] max-md:w-[92%] space-y-2">
          <p className="text-xl font-medium leading-tight text-[#6B7280] md:text-2xl">Meet the visionary leaders</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#1E2A78] md:text-5xl">
            Distinguished Leaders & Changemakers
          </h2>
          <p className="mt-3 text-2xl font-medium leading-tight text-[#111827] md:text-4xl">Inspiring innovation and transformation</p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-lg">
            Meet the visionary leaders and changemakers who inspire innovation and drive positive transformation in their industries.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={false}
            pagination={{ clickable: true, el: ".leaders-swiper-pagination" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            allowTouchMove={true}
            loop={true}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="leaders-swiper"
          >
            {leaders.map((leader, index) => (
              <SwiperSlide key={`${leader.name}-${index}`} className="h-full">
                <article className="flex h-full flex-col items-start md:min-h-[320px] md:items-stretch md:flex-row">
                  {/* Left Side - Image */}
                  <div className="w-[400px] overflow-hidden md:w-[45%]">
                    <div className="h-[400px] w-full overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover grayscale"
                        width={400}
                        height={320}
                      />
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex h-full w-full flex-col p-4 md:min-h-[320px] md:w-[55%]">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold md:pl-6 text-[#111827]">{leader.name}</h3>
                      <span className="mt-2 inline-block md:ml-[-16px] md:pl-9 bg-[#3B82F6] px-4 py-1.5 text-xs font-medium text-white">
                        {leader.role}
                      </span>
                      <p className="mt-4 text-sm leading-relaxed md:pl-6 text-[#6B7280]">{leader.quote}</p>
                    </div>
                    <button className="mt-8 flex w-full justify-center gap-2 bg-[#3B82F6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2563EB] md:mt-6 md:w-auto md:justify-start md:pl-6">
                      Check Event
                      <span>→</span>
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="leaders-swiper-pagination mt-6 flex justify-center">{/* pagination will render here */}</div>
        </div>
      </div>
    </section>
    </>
  );
}
