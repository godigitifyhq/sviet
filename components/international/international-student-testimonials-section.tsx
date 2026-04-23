import Image from "next/image";
import { Play } from "lucide-react";

const TESTIMONIALS = [
  {
    title: "SVIET gave me confidence and global exposure to shape my future.",
    name: "Rohit Banik",
    image: "/assets/img/students/moon_mandal.png",
  },
  {
    title:
      "From academics to campus life, every experience here helped me grow.",
    name: "Khalid Mahmood",
    image: "/assets/img/students/Placement-Mockup-1.png",
  },
  {
    title:
      "I found mentorship, opportunities, and lifelong friendships at SVIET.",
    name: "Akash Pal",
    image: "/assets/img/students/1.png",
  },
] as const;

export function InternationalStudentTestimonialsSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
          Here Is What Our
          <br />
          <span className="">International Students Have To Say</span>
        </h2>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-3 no-scrollbar">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative h-80 w-80 shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-white p-5 md:w-88"
            >
              <div className="text-4xl font-bold text-[#f7941d]">&quot;</div>
              <p className="mt-2 text-base font-semibold leading-snug text-[#111827]">
                {testimonial.title}
              </p>
              <p className="mt-2 text-sm text-[#6b7280]">{testimonial.name}</p>

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <div className="relative h-28 w-24">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="96px"
                    className="object-contain object-bottom"
                  />
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-[#f7941d] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2563EB]">
                  Watch Video
                  <Play size={14} className="fill-white text-white" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
