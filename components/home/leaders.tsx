"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const leaders = [
  {
    name: "Aman Gupta",
    role: "Co-Founder And CMO Of boAt",
    description: "The special guest at SVIET's 'Elevate 2.0 – Launching Future 2025' event in September 2025.",
    image: "/assets/img/college/aman_gupta.png",
  },
  {
    name: "Ashneer",
    role: "Co-Founder Of BharatPe",
    description: "A guest speaker at the Swami Vivekanand Institute Of Engineering & Technology (SVIET), Chandigarh, for their 'Elevate 2024'.",
    image: "/assets/img/college/Ashneer_groveer.png",
  },
  {
    name: "Aman Gupta",
    role: "Co-Founder And CMO Of boAt",
    description: "The special guest at SVIET's 'Elevate 2.0 – Launching Future 2025' event in September 2025.",
    image: "/assets/img/college/aman_gupta.png",
  },
  {
    name: "Ashneer",
    role: "Co-Founder Of BharatPe",
    description: "A guest speaker at the Swami Vivekanand Institute Of Engineering & Technology (SVIET), Chandigarh, for their 'Elevate 2024'.",
    image: "/assets/img/college/Ashneer_groveer.png",
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
          background: #d1d5db;
          opacity: 1;
        }
        
        .leaders-swiper-pagination .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>
      <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Area */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Distinguished: Leaders, Visionaries And Changemakers
          </h2>
          <Image src={'/assets/img/line_vector.png'} className="mt-[-12]" alt="Line Vector" height={3} width={100} />
          <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
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
                  <div className="w-full overflow-hidden rounded-2xl md:w-[45%]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className=" w-full object-cover grayscale "
                      width={400}
                      height={320}
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex h-full w-full flex-col p-4 md:min-h-[320px] md:w-[55%]">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold md:pl-6 text-gray-900">{leader.name}</h3>
                      <span className="mt-2 inline-block md:ml-[-16px] md:pl-9 bg-gray-800 px-4 py-1.5 text-xs font-medium text-white">
                        {leader.role}
                      </span>
                      <p className="mt-4 text-sm leading-relaxed md:pl-6 text-gray-600">{leader.description}</p>
                    </div>
                    <button className="mt-8 flex w-full justify-center gap-2 bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900 md:mt-6 md:w-auto md:justify-start md:pl-6">
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
