import { createAnnouncementAction } from "@/app/actions/cms";
import { SubmitButton } from "@/components/forms/submit-button";
import { getAdminSnapshot } from "@/lib/dal/dashboard";

const cards: Array<{ key: keyof Awaited<ReturnType<typeof getAdminSnapshot>>; label: string }> = [
  { key: "leadCount", label: "Leads" },
  { key: "applicantCount", label: "Applicants" },
  { key: "enrollmentCount", label: "Enrollments" },
  { key: "eventCount", label: "Events" },
  { key: "blogCount", label: "Blog Posts" },
];

export default async function AdminPage() {
  const snapshot = await getAdminSnapshot();

  return (
    <div className="space-y-8 py-8">
      <h1 className="text-4xl">Admin Dashboard</h1>

      <section className="grid gap-4 md:grid-cols-5">
        {cards.map((card) => (
          <article key={card.key} className="card p-4">
            <p className="text-sm text-[var(--ink-700)]">{card.label}</p>
            <p className="text-3xl font-semibold">{snapshot[card.key]}</p>
          </article>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="text-2xl">Publish Announcement</h2>
        <p className="mt-2 text-sm text-[var(--ink-700)]">
          Requires admin token cookie: admin_access_token.
        </p>
        <form action={createAnnouncementAction} className="mt-4 grid gap-3 md:max-w-2xl">
          <input name="title" required placeholder="Title" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
          <textarea name="body" required placeholder="Announcement body" className="min-h-24 rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
          <select name="level" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2">
            <option value="INFO">Info</option>
            <option value="SUCCESS">Success</option>
            <option value="WARNING">Warning</option>
            <option value="CRITICAL">Critical</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-[var(--ink-700)]">
            <input type="checkbox" name="pinned" /> Pin this announcement
          </label>
          <SubmitButton label="Publish" pendingLabel="Publishing..." className="w-fit" />
        </form>
      </section>
    </div>
  );
}
