const testimonials = [
  "The curriculum was practical, challenging, and directly aligned with placement expectations.",
  "Faculty mentorship and peer culture gave me confidence to take leadership in projects.",
  "Career support, mock interviews, and internships made my transition to industry smooth.",
];

export function StudentTestimonialsSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-xl bg-[#f5f5f5] p-5 shadow-md transition duration-200 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Featured student"
            className="h-95 w-full rounded-xl object-cover"
          />
          <h3 className="mt-4 text-2xl font-bold text-foreground">Our Students Speak</h3>
          <p className="mt-2 text-sm font-medium text-[#555555]">
            Real stories of growth, achievement, and ambition from learners who transformed their careers.
          </p>
        </article>

        <div className="grid gap-6">
          {testimonials.map((item) => (
            <article
              key={item}
              className="flex items-start gap-4 rounded-xl bg-[#f5f5f5] p-5 shadow-md transition duration-200 hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=220&q=80"
                alt="Student avatar"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="text-sm font-medium leading-relaxed text-[#2f2f2f]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
