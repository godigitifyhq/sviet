import Link from "next/link";

export function InternationalAdmissionsHelpSection() {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-16">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#f9fafb] px-6 py-8 md:px-10 md:py-10">
        <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
          Need help with
          <br />
          <span className="">International Admissions?</span>
        </h2>
        <p className="mt-4 max-w-3xl text-base text-[#374151] md:text-lg">
          Our admissions team guides you through eligibility, documentation,
          visa support, and onboarding.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
          >
            Talk to us
          </Link>
          <Link
            href="/admissions"
            className="rounded-lg border border-[#2563EB] px-6 py-3 text-sm font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"
          >
            Start application
          </Link>
        </div>
      </div>
    </section>
  );
}
