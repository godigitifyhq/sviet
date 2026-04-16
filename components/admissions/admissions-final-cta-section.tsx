import Link from "next/link";

export function AdmissionsFinalCtaSection() {
  return (
    <section className="bg-[#0e1230] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(11,59,143,0.96)_0%,rgba(15,23,42,0.96)_100%)] px-6 py-10 text-center shadow-[0_20px_55px_rgba(11,59,143,0.22)] md:px-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Final Step</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
            Take the First Step Towards Your Future
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
            Your journey toward success starts here. Apply now and become part of a learning environment that prepares
            you for real-world opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center rounded-md bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
