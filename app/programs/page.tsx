import { listActivePrograms } from "@/lib/dal/admissions";

export default async function ProgramsPage() {
  const programs = await listActivePrograms();

  return (
    <div className="space-y-6 py-8">
      <h1 className="text-4xl">Programs</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <article className="card p-5" key={program.id}>
            <h2 className="text-2xl">{program.title}</h2>
            <p className="mt-2 text-[var(--ink-700)]">{program.shortDescription}</p>
            <p className="mt-3 text-sm text-[var(--ink-700)]">
              Duration: {program.durationMonths} months
            </p>
            <p className="text-sm text-[var(--ink-700)]">
              Tuition: ${(program.tuitionCents / 100).toLocaleString()}
            </p>
          </article>
        ))}
        {programs.length === 0 ? <p>No active programs found.</p> : null}
      </div>
    </div>
  );
}
