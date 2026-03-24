export function ScholarshipSection() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <form className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Scholarship Form</h2>
          <p className="mt-2 text-sm font-medium text-[#555555]">Check your eligibility and scholarship status.</p>
          <div className="mt-5 grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-[#e8e8e8] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-[#e8e8e8] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border border-[#e8e8e8] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            />
            <button className="w-full rounded-full bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105">
              Check Status
            </button>
          </div>
        </form>

        <article className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
            alt="Students with scholarship guidance"
            className="h-90 w-full rounded-xl object-cover"
          />
        </article>
      </div>
    </section>
  );
}
