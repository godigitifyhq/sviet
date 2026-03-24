export function PivotEducationSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="self-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">The Pivot Of Education</h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#3f3f3f]">
            SVIET integrates rigorous academics with practical execution, helping learners transform strong intent into
            measurable outcomes through modern labs, mentors, and career acceleration pathways.
          </p>
        </div>

        <article className="overflow-hidden rounded-xl bg-[#f5f5f5] p-4 shadow-md transition duration-200 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1300&q=80"
            alt="Award ceremony"
            className="h-80 w-full rounded-xl object-cover"
          />
        </article>
      </div>
    </section>
  );
}
