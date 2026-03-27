import { RECRUITERS } from "@/components/programs/data";

export function ProgramRecruitersSection() {
  return (
    <section className="mx-auto mt-6 w-full max-w-300 px-3 md:px-5">
      <h3 className="text-center text-3xl font-black text-[#141414] md:text-4xl">Companies That Hire Our Graduates</h3>
      <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-md border border-[#ececec] md:grid-cols-4">
        {RECRUITERS.map((company) => (
          <div
            key={company}
            className="flex min-h-24 items-center justify-center border border-[#efefef] px-4 py-7 text-4xl font-semibold text-[#232323] md:text-5xl"
          >
            <span className="scale-90 md:scale-100">{company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
