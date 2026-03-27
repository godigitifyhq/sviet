import { COMPARISON_ROWS } from "@/components/programs/data";

export function ProgramComparisonSection() {
  return (
    <section className="mx-auto mt-12 w-full max-w-300 px-3 md:px-5">
      <div className="overflow-hidden rounded-xl border border-[#e9e9e9] bg-white">
        <div className="flex items-center justify-between bg-[#fafafa] px-4 py-3">
          <h2 className="text-3xl font-extrabold">Compare with Other Programs</h2>
          <button className="rounded border border-[#f7941d] px-3 py-1 text-sm text-[#f7941d]">Hide Comparison</button>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="border-t border-[#efefef] bg-white text-[#666]">
            <tr>
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">B.Tech CSE</th>
              <th className="px-4 py-3">B.Tech IT</th>
              <th className="px-4 py-3">BCA</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row[0]} className="border-t border-[#efefef]">
                <td className="px-4 py-3">{row[0]}</td>
                <td className="px-4 py-3">{row[1]}</td>
                <td className="px-4 py-3">{row[2]}</td>
                <td className="px-4 py-3">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
