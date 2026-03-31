"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    program: "B.Tech CSE, 2023",
    company: "Software Engineer at TCS",
    quote: "SVIET gave me the technical foundation and placement support that launched my career. The faculty mentorship here is exceptional.",
  },
  {
    name: "Priya Singh",
    program: "MBA, 2022",
    company: "Marketing Manager at Dabur",
    quote: "The industry exposure at SVIET is unmatched. From live case studies to corporate internships, every experience prepared me for the real world.",
  },
  {
    name: "Arjun Mehta",
    program: "B.Tech ME, 2023",
    company: "Engineer at Maruti Suzuki",
    quote: "The hands-on lab experience and placement cell at SVIET helped me land my dream job. I'm proud to be a SVIET alumnus.",
  },
  {
    name: "Neha Gupta",
    program: "B.Pharm, 2022",
    company: "Medical Representative at Cipla",
    quote: "The pharmacy department at SVIET has world-class labs and amazing faculty. The practical training prepared me completely for my role.",
  },
  {
    name: "Vikram Patel",
    program: "BCA, 2023",
    company: "Web Developer at Infosys BPM",
    quote: "From coding bootcamps to hackathons, SVIET kept pushing us to grow. The placement support was incredible.",
  },
];

export function StudentTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const swipeThreshold = 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
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
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else if (distance < -swipeThreshold) {
      setIndex((prev) => (prev + 1) % testimonials.length);
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
              {testimonials.map((_, dotIndex) => (
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
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article key={item.name} className="flex min-w-full flex-col gap-6 lg:flex-row">
                  <div className="w-full overflow-hidden rounded-2xl lg:w-[45%]">
                    <div className="relative h-[320px] w-full">
                      <Image
                        src="/assets/img/college/main_gate.png"
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-5 text-white">
                        <p className="text-xl font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-white/90">{item.program}</p>
                        <p className="mt-1 text-sm text-white/90">{item.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-4 lg:w-[55%]">
                    <article className="rounded-xl border border-gray-100 bg-white p-4">
                      <p className="text-sm leading-relaxed text-gray-700">{item.quote}</p>
                    </article>
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
