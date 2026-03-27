export function ProgramCtaSection() {
  return (
    <section className="mx-auto mt-30 mb-15 w-full max-w-300 px-3 pb-12 text-center md:px-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Ready To Begin?</p>
      <h2 className="mt-2 text-5xl font-extrabold">Start Your Journey at SVIET</h2>
      <p className="mx-auto mt-3 max-w-3xl text-[#555]">
        Join 10,000+ students who have built their careers at SVIET. Admissions for 2025 batch are now open. Limited seats available.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-lg bg-[#f7941d] px-6 py-3 font-semibold text-white">Apply Now →</button>
        <button className="rounded-lg border border-[#eaeaea] bg-white px-6 py-3 font-semibold">Talk to a Counselor</button>
        <button className="rounded-lg border border-[#f1a866] bg-transparent px-6 py-3 font-semibold text-[#f7941d]">Download Brochure</button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-[#666]">
        {[
          "AICTE Approved",
          "PTU Affiliated",
          "94% Placement Rate",
          "₹28 LPA Highest Package",
          "120+ Recruiters",
        ].map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5">
            <span className="text-[#f7941d]">✓</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
