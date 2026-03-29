"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";

import { LeadStatus } from "@/generated/prisma/enums";
import { AdminLayout } from "@/components/admin/admin-layout";
import { StatusBadge } from "@/components/admin/status-badge";

type LeadNote = {
  id: string;
  body: string;
  createdAt: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  } | null;
};

type LeadDetail = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  source: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  intendedProgram: {
    id: string;
    title: string;
    slug: string;
  } | null;
  ownerCounselor: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  } | null;
  applicant: {
    id: string;
  } | null;
  scholarship: {
    familyIncomeLPA: number;
    academicScore: number;
    category: string;
    eligibilityResult: unknown;
  } | null;
  programFinder: {
    interests: string[];
    careers: string[];
    academicPreference: string | null;
    preferredMode: string | null;
    budgetRange: string | null;
    recommendedPrograms: unknown;
  } | null;
  contactEnquiry: {
    subject: string;
    message: string;
  } | null;
  notes: LeadNote[];
};

type StaffUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

type AssignApiResponse = {
  ok?: boolean;
  error?: {
    message?: string;
  };
};

type EligibilityResult = {
  eligible?: boolean;
  percentage?: number;
  reason?: string;
  conditions?: string[];
};

const LEAD_STATUS_VALUES = Object.values(LeadStatus);

function parseRecommendedProgramTitles(recommendedPrograms: unknown) {
  if (!Array.isArray(recommendedPrograms)) {
    return [];
  }

  return recommendedPrograms
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }
      const title = (item as { title?: unknown }).title;
      return typeof title === "string" ? title : null;
    })
    .filter((title): title is string => Boolean(title));
}

function parseEligibilityResult(input: unknown): EligibilityResult | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const value = input as Record<string, unknown>;
  return {
    eligible: typeof value.eligible === "boolean" ? value.eligible : undefined,
    percentage: typeof value.percentage === "number" ? value.percentage : undefined,
    reason: typeof value.reason === "string" ? value.reason : undefined,
    conditions: Array.isArray(value.conditions)
      ? value.conditions.filter((condition): condition is string => typeof condition === "string")
      : undefined,
  };
}

export default function AdminLeadDetailsPage() {
  const params = useParams<{ id: string }>();
  const leadId = params.id;

  const [lead, setLead] = useState<LeadDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [staff, setStaff] = useState<StaffUser[]>([]);
  const [assignedTo, setAssignedTo] = useState("");
  const [assigning, setAssigning] = useState(false);
  const [assignMessage, setAssignMessage] = useState<string | null>(null);
  const [assignError, setAssignError] = useState<string | null>(null);

  const [statusValue, setStatusValue] = useState("");
  const [statusNote, setStatusNote] = useState("");
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);

  const [newNote, setNewNote] = useState("");
  const [postingNote, setPostingNote] = useState(false);
  const [noteError, setNoteError] = useState<string | null>(null);

  const fetchLead = useCallback(
    async (showLoadingState = true) => {
      if (!leadId) {
        return;
      }

      if (showLoadingState) {
        setLoading(true);
      }

      try {
        const response = await fetch(`/api/crm/leads/${leadId}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Unable to load lead.");
        }

        const payload = (await response.json()) as LeadDetail;
        setLead(payload);
        setStatusValue(payload.status);
        setAssignedTo(payload.ownerCounselor?.id ?? "");
        setError(null);
      } catch {
        setError("Could not load lead details.");
      } finally {
        if (showLoadingState) {
          setLoading(false);
        }
      }
    },
    [leadId],
  );

  useEffect(() => {
    fetchLead();
  }, [fetchLead]);

  useEffect(() => {
    let active = true;

    async function loadStaff() {
      try {
        const response = await fetch("/api/crm/staff", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Could not load staff.");
        }

        const payload = (await response.json()) as StaffUser[];
        if (active) {
          setStaff(payload);
        }
      } catch {
        if (active) {
          setStaff([]);
        }
      }
    }

    loadStaff();

    return () => {
      active = false;
    };
  }, []);

  const eligibility = useMemo(
    () => parseEligibilityResult(lead?.scholarship?.eligibilityResult),
    [lead?.scholarship?.eligibilityResult],
  );

  const recommendedProgramTitles = useMemo(
    () => parseRecommendedProgramTitles(lead?.programFinder?.recommendedPrograms),
    [lead?.programFinder?.recommendedPrograms],
  );

  async function handleStatusSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!lead) {
      return;
    }

    setUpdatingStatus(true);
    setStatusError(null);

    try {
      const response = await fetch(`/api/crm/leads/${lead.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: statusValue,
          note: statusNote.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update lead status.");
      }

      const payload = (await response.json()) as LeadDetail;
      setLead(payload);
      setStatusNote("");
      setStatusValue(payload.status);
    } catch {
      setStatusError("Could not update lead status.");
    } finally {
      setUpdatingStatus(false);
    }
  }

  async function handleAssignSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!lead || !assignedTo) {
      return;
    }

    setAssigning(true);
    setAssignError(null);
    setAssignMessage(null);

    try {
      const response = await fetch(`/api/leads/${lead.id}/assign`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ counselorId: assignedTo }),
      });

      const payload = (await response.json().catch(() => null)) as AssignApiResponse | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error?.message ?? "Assignment failed.");
      }

      setAssignMessage("Lead assigned successfully.");
      await fetchLead(false);
    } catch {
      setAssignError("Could not assign lead.");
    } finally {
      setAssigning(false);
    }
  }

  async function handlePostNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!lead || !newNote.trim()) {
      return;
    }

    setPostingNote(true);
    setNoteError(null);

    const tempId = `temp-${Date.now()}`;
    const optimisticNote: LeadNote = {
      id: tempId,
      body: newNote.trim(),
      createdAt: new Date().toISOString(),
      author: null,
    };

    setLead((previous) =>
      previous
        ? {
            ...previous,
            notes: [optimisticNote, ...previous.notes],
          }
        : previous,
    );
    setNewNote("");

    try {
      const response = await fetch(`/api/crm/leads/${lead.id}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: optimisticNote.body }),
      });

      if (!response.ok) {
        throw new Error("Could not save note.");
      }

      const savedNote = (await response.json()) as LeadNote;

      setLead((previous) =>
        previous
          ? {
              ...previous,
              notes: previous.notes.map((note) => (note.id === tempId ? savedNote : note)),
            }
          : previous,
      );
    } catch {
      setLead((previous) =>
        previous
          ? {
              ...previous,
              notes: previous.notes.filter((note) => note.id !== tempId),
            }
          : previous,
      );
      setNoteError("Could not post note.");
    } finally {
      setPostingNote(false);
    }
  }

  if (loading) {
    return (
      <AdminLayout title="Lead Details">
        <p className="text-sm text-slate-500">Loading lead details...</p>
      </AdminLayout>
    );
  }

  if (!lead || error) {
    return (
      <AdminLayout title="Lead Details">
        <p className="text-sm text-rose-600">{error ?? "Lead not found."}</p>
        <Link href="/admin/leads" className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline">
          Back to Leads
        </Link>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Lead Details">
      <div className="space-y-6">
        <Link href="/admin/leads" className="inline-flex text-sm font-semibold text-slate-700 hover:underline">
          ← Back to Leads
        </Link>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h1 className="text-2xl font-bold text-slate-900">
                {lead.firstName} {lead.lastName}
              </h1>
              <p className="mt-2 text-sm text-slate-600">{lead.email}</p>
              <p className="text-sm text-slate-600">{lead.phone ?? "No phone"}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <StatusBadge status={lead.source} type="source" />
                <StatusBadge status={lead.status} type="lead" />
                <span className="text-xs text-slate-500">Created {format(new Date(lead.createdAt), "dd MMM yyyy, p")}</span>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Form Submission Data</h2>

              {lead.source === "APPLY_NOW" ? (
                <p className="mt-3 text-sm text-slate-700">
                  Applied For: <span className="font-semibold">{lead.intendedProgram?.title ?? "Not specified"}</span>
                </p>
              ) : null}

              {lead.source === "SCHOLARSHIP_CHECK" && lead.scholarship ? (
                <div className="mt-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-slate-200 p-3 text-sm">
                      <p className="text-slate-500">Academic Score</p>
                      <p className="font-semibold text-slate-800">{lead.scholarship.academicScore}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 p-3 text-sm">
                      <p className="text-slate-500">Family Income (LPA)</p>
                      <p className="font-semibold text-slate-800">{lead.scholarship.familyIncomeLPA}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 p-3 text-sm">
                      <p className="text-slate-500">Category</p>
                      <p className="font-semibold text-slate-800">{lead.scholarship.category}</p>
                    </div>
                  </div>

                  <div
                    className={`rounded-lg border p-3 text-sm ${
                      eligibility?.eligible === true
                        ? "border-green-200 bg-green-50 text-green-800"
                        : eligibility?.eligible === false
                          ? "border-rose-200 bg-rose-50 text-rose-800"
                          : "border-amber-200 bg-amber-50 text-amber-800"
                    }`}
                  >
                    <p className="font-semibold">Eligibility Result</p>
                    <p>Percentage: {eligibility?.percentage ?? "N/A"}%</p>
                    <p>{eligibility?.reason ?? "No reason provided."}</p>
                    {eligibility?.conditions?.length ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {eligibility.conditions.map((condition) => (
                          <li key={condition}>{condition}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {lead.source === "PROGRAM_FINDER" && lead.programFinder ? (
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="mb-1 font-semibold text-slate-900">Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {lead.programFinder.interests.map((interest) => (
                        <span key={interest} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-semibold text-slate-900">Career Goals</p>
                    <div className="flex flex-wrap gap-2">
                      {lead.programFinder.careers.map((career) => (
                        <span key={career} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <p>
                      Preferred Mode: <span className="font-medium">{lead.programFinder.preferredMode ?? "-"}</span>
                    </p>
                    <p>
                      Budget Range: <span className="font-medium">{lead.programFinder.budgetRange ?? "-"}</span>
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 font-semibold text-slate-900">Recommended Programs</p>
                    <ul className="list-disc space-y-1 pl-5">
                      {recommendedProgramTitles.map((program) => (
                        <li key={program}>{program}</li>
                      ))}
                      {recommendedProgramTitles.length === 0 ? <li>-</li> : null}
                    </ul>
                  </div>
                </div>
              ) : null}

              {lead.source === "CONTACT_ENQUIRY" && lead.contactEnquiry ? (
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <p>
                    Subject: <span className="font-semibold text-slate-900">{lead.contactEnquiry.subject}</span>
                  </p>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">{lead.contactEnquiry.message}</div>
                </div>
              ) : null}
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Notes</h2>

              <form onSubmit={handlePostNote} className="mt-3 space-y-3">
                <textarea
                  value={newNote}
                  onChange={(event) => setNewNote(event.target.value)}
                  placeholder="Add an internal note..."
                  className="min-h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
                {noteError ? <p className="text-sm text-rose-600">{noteError}</p> : null}
                <button
                  type="submit"
                  disabled={postingNote || !newNote.trim()}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {postingNote ? "Posting..." : "Post Note"}
                </button>
              </form>

              <div className="mt-5 space-y-3">
                {lead.notes.map((note) => (
                  <article key={note.id} className="rounded-lg border border-slate-200 p-3">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>
                        {note.author ? `${note.author.firstName} ${note.author.lastName}` : "System"}
                      </span>
                      <span>{format(new Date(note.createdAt), "dd MMM yyyy, p")}</span>
                    </div>
                    <p className="text-sm text-slate-800">{note.body}</p>
                  </article>
                ))}
                {lead.notes.length === 0 ? <p className="text-sm text-slate-500">No notes yet.</p> : null}
              </div>
            </section>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Status Management</h2>
              <div className="mt-3">
                <StatusBadge status={lead.status} type="lead" />
              </div>

              <form onSubmit={handleStatusSubmit} className="mt-4 space-y-3">
                <select
                  value={statusValue}
                  onChange={(event) => setStatusValue(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                >
                  {LEAD_STATUS_VALUES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <textarea
                  value={statusNote}
                  onChange={(event) => setStatusNote(event.target.value)}
                  placeholder="Reason for status change (optional)"
                  className="min-h-20 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />

                {statusError ? <p className="text-sm text-rose-600">{statusError}</p> : null}

                <button
                  type="submit"
                  disabled={updatingStatus}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {updatingStatus ? "Updating..." : "Update Status"}
                </button>
              </form>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Assignment</h2>
              <p className="mt-2 text-sm text-slate-600">
                Assigned To:{" "}
                <span className="font-semibold text-slate-900">
                  {lead.ownerCounselor ? `${lead.ownerCounselor.firstName} ${lead.ownerCounselor.lastName}` : "Unassigned"}
                </span>
              </p>

              <form onSubmit={handleAssignSubmit} className="mt-4 space-y-3">
                <select
                  value={assignedTo}
                  onChange={(event) => setAssignedTo(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                >
                  <option value="">Select staff</option>
                  {staff.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.firstName} {member.lastName} ({member.role})
                    </option>
                  ))}
                </select>

                {assignError ? <p className="text-sm text-rose-600">{assignError}</p> : null}
                {assignMessage ? <p className="text-sm text-emerald-600">{assignMessage}</p> : null}

                <button
                  type="submit"
                  disabled={assigning || !assignedTo}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {assigning ? "Assigning..." : "Assign"}
                </button>
              </form>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Quick Info</h2>
              <dl className="mt-3 space-y-2 text-sm text-slate-700">
                <div>
                  <dt className="text-slate-500">Lead ID</dt>
                  <dd className="font-medium text-slate-900">{`${lead.id.slice(0, 8)}...`}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Source</dt>
                  <dd className="font-medium text-slate-900">{lead.source}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Created</dt>
                  <dd>{format(new Date(lead.createdAt), "dd MMM yyyy, p")}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Last Updated</dt>
                  <dd>{format(new Date(lead.updatedAt), "dd MMM yyyy, p")}</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}