"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    imageTitle: "Future-Ready Learners",
    imageSubtitle: "Projects, placements, and leadership outcomes",
    testimonials: [
      "The curriculum was practical, challenging, and directly aligned with placement expectations.",
      "Faculty mentorship and peer culture gave me confidence to take leadership in projects.",
      "Career support, mock interviews, and internships made my transition to industry smooth.",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    imageTitle: "Confident Communicators",
    imageSubtitle: "Industry exposure and interview readiness",
    testimonials: [
      "Workshops and presentations helped me speak confidently in front of recruiters.",
      "The innovation culture pushed me to solve real-world problems with my team.",
      "Internship guidance helped me secure hands-on experience before graduation.",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
    imageTitle: "Career-Focused Journey",
    imageSubtitle: "Supportive mentors and measurable growth",
    testimonials: [
      "Personalized mentorship helped me map a clear path toward my career goals.",
      "Mock interview rounds gave me clarity on what top companies expect.",
      "The campus environment made learning collaborative, intense, and rewarding.",
    ],
  },
];

export function StudentTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const swipeThreshold = 60;
  const trackPositionClasses = ["translate-x-0", "-translate-x-full", "-translate-x-[200%]"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const onDragStart = (clientX: number) => {
    dragStartXRef.current = clientX;
  };

  const onDragEnd = (clientX: number) => {
    if (dragStartXRef.current === null) return;

    const distance = clientX - dragStartXRef.current;
    if (distance > swipeThreshold) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (distance < -swipeThreshold) {
      setIndex((prev) => (prev + 1) % slides.length);
    }

    dragStartXRef.current = null;
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Our Students Speak</h3>
            <p className="mt-3 text-sm text-gray-500">
              Real stories of growth, achievement, and ambition from learners who transformed their careers.
            </p>

            <div className="mt-10 flex  gap-2">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ${index === dotIndex ? "bg-black" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          <div
            className="col-span-2 overflow-hidden"
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseUp={(e) => onDragEnd(e.clientX)}
            onMouseLeave={(e) => onDragEnd(e.clientX)}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${trackPositionClasses[index] ?? "translate-x-0"}`}
            >
              {slides.map((slide, slideIndex) => (
                <article key={slideIndex} className="flex min-w-full flex-col gap-6 lg:flex-row">
                  <div className="w-full overflow-hidden rounded-2xl lg:w-[45%]">
                    <div className="relative h-[320px] w-full">
                      <Image
                        src={slide.image}
                        alt={slide.imageTitle}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-5 text-white">
                        <p className="text-xl font-semibold">{slide.imageTitle}</p>
                        <p className="mt-1 text-sm text-white/90">{slide.imageSubtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-4 lg:w-[55%]">
                    {slide.testimonials.map((item) => (
                      <article key={item} className="rounded-xl border border-gray-100 bg-white p-4">
                        <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
