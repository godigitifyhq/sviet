const features = [
  {
    title: "Industry Mentorship",
    text: "Students learn directly from active professionals through real-world case sessions and domain guidance.",
  },
  {
    title: "Startup Incubation",
    text: "The institute supports idea validation, product building, and launch strategies from day one.",
  },
  {
    title: "Leadership Labs",
    text: "Workshops and high-pressure simulations sharpen communication, ownership, and decision making.",
  },
];

export function EducationBeyondSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Education Beyond Classroom
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#3b3b3b]">
              SVIET builds future-ready professionals through hands-on exposure, entrepreneurship programs, and
              leadership initiatives that go far beyond traditional academics.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-[#ececec] bg-white p-6 shadow-md transition duration-200 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#4b4b4b]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
            alt="Seminar hall with students"
            className="h-82.5 w-full rounded-xl object-cover"
          />
          <div>
            <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105 sm:w-auto">
              GET YOUR OWN STARTUP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
