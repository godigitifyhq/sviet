import { FACILITIES } from "@/components/programs/data";

export function ProgramFacilitiesSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <h2 className="text-4xl font-extrabold">World-Class Campus Facilities</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-4">
        {FACILITIES.map((facility) => (
          <article key={facility} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
              alt={facility}
              className="h-32.5 w-full object-cover"
            />
            <p className="p-3 text-sm font-semibold">{facility}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
