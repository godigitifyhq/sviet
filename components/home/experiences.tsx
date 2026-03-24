export function ExperiencesSection() {
  return (
    <section className="bg-[#fff4ea] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="self-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Experiences That Shape Future
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#3d3d3d]">
            From innovation challenges to community immersion, every experience is designed to build confidence,
            creativity, and practical problem-solving in real contexts.
          </p>
          <button className="mt-6 w-full rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105 sm:w-auto">
            GET YOUR OWN STARTUP
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
            alt="Students in workshop"
            className="h-52 w-full rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Classroom collaboration"
            className="h-52 w-full rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
            alt="Presentation in hall"
            className="col-span-2 h-64 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
