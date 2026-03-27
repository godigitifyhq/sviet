import { CURRICULUM_ROWS } from "@/components/programs/data";

export function ProgramCurriculumSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <h2 className="text-4xl font-extrabold">What You&apos;ll Study</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#fafafa] text-[#666]">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Course Name</th>
              <th className="px-4 py-3">Credits</th>
            </tr>
          </thead>
          <tbody>
            {CURRICULUM_ROWS.map(([code, course, credits]) => (
              <tr key={code} className="border-t border-[#efefef]">
                <td className="px-4 py-3 text-[#f7941d]">{code}</td>
                <td className="px-4 py-3">{course}</td>
                <td className="px-4 py-3">{credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
