"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

import { AdminLayout } from "@/components/admin/admin-layout";

type EventStatus = "upcoming" | "ongoing" | "completed";

type AdminEvent = {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string | null;
  category: string;
  isFeatured: boolean;
  createdAt: string;
  status: EventStatus;
};

type EventsResponse = {
  ok?: boolean;
  data?: AdminEvent[];
  error?: {
    message?: string;
  };
};

type EventFormState = {
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  category: string;
  isFeatured: boolean;
};

const DEFAULT_FORM: EventFormState = {
  title: "",
  description: "",
  image: "",
  startDate: "",
  endDate: "",
  category: "tech",
  isFeatured: false,
};

function toDateTimeLocal(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const offsetMs = date.getTimezoneOffset() * 60_000;
  const localDate = new Date(date.getTime() - offsetMs);
  return localDate.toISOString().slice(0, 16);
}

function toIsoString(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<EventFormState>(DEFAULT_FORM);
  const [formError, setFormError] = useState<string | null>(null);

  const [statusFilter, setStatusFilter] = useState<"all" | EventStatus>("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | string>("all");

  async function loadEvents() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/events?take=100", {
        cache: "no-store",
      });
      const payload = (await response.json()) as EventsResponse;

      if (!response.ok || !payload.ok || !payload.data) {
        throw new Error(payload.error?.message ?? "Could not load events.");
      }

      setEvents(payload.data);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Could not load events.",
      );
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadEvents();
  }, []);

  const categories = useMemo(() => {
    const values = Array.from(
      new Set(events.map((event) => event.category)),
    ).sort((a, b) => a.localeCompare(b));
    return values;
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (statusFilter !== "all" && event.status !== statusFilter) {
        return false;
      }

      if (categoryFilter !== "all" && event.category !== categoryFilter) {
        return false;
      }

      return true;
    });
  }, [events, statusFilter, categoryFilter]);

  function startCreate() {
    setEditingId(null);
    setForm(DEFAULT_FORM);
    setFormError(null);
  }

  function startEdit(event: AdminEvent) {
    setEditingId(event.id);
    setForm({
      title: event.title,
      description: event.description,
      image: event.image,
      startDate: toDateTimeLocal(event.startDate),
      endDate: event.endDate ? toDateTimeLocal(event.endDate) : "",
      category: event.category,
      isFeatured: event.isFeatured,
    });
    setFormError(null);
  }

  function resetForm() {
    setEditingId(null);
    setForm(DEFAULT_FORM);
    setFormError(null);
  }

  async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setFormError("Please select a valid image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setFormError("Please upload an image smaller than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (result) {
        setForm((previous) => ({ ...previous, image: result }));
      }
    };

    reader.onerror = () => {
      setFormError("Image upload failed. Please try again.");
    };

    reader.readAsDataURL(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const startDate = toIsoString(form.startDate);
    const endDate = form.endDate ? toIsoString(form.endDate) : null;

    if (!startDate) {
      setFormError("Please provide a valid start date.");
      return;
    }

    if (form.endDate && !endDate) {
      setFormError("Please provide a valid end date.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(
        editingId ? `/api/events/${editingId}` : "/api/events",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: form.title,
            description: form.description,
            image: form.image,
            startDate,
            endDate,
            category: form.category,
            isFeatured: form.isFeatured,
          }),
        },
      );

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: { message?: string };
      } | null;

      if (!response.ok || !payload?.ok) {
        setFormError(payload?.error?.message ?? "Could not save event.");
        return;
      }

      await loadEvents();
      resetForm();
    } catch {
      setFormError("Could not save event.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(eventId: string) {
    const confirmed = window.confirm("Delete this event?");
    if (!confirmed) {
      return;
    }

    setDeletingId(eventId);

    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: { message?: string };
      } | null;

      if (!response.ok || !payload?.ok) {
        setError(payload?.error?.message ?? "Could not delete event.");
        return;
      }

      setEvents((previous) => previous.filter((item) => item.id !== eventId));
      if (editingId === eventId) {
        resetForm();
      }
    } catch {
      setError("Could not delete event.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <AdminLayout title="Events">
      <div className="grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Manage Events
            </h2>
            <button
              type="button"
              onClick={startCreate}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Add Event
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as "all" | EventStatus)
              }
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
            >
              <option value="all">All statuses</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {error ? (
            <p className="text-sm font-medium text-rose-600">{error}</p>
          ) : null}

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Start
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Featured
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-8 text-center text-slate-500"
                      >
                        Loading events...
                      </td>
                    </tr>
                  ) : null}

                  {!loading && filteredEvents.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-8 text-center text-slate-500"
                      >
                        No events found.
                      </td>
                    </tr>
                  ) : null}

                  {!loading
                    ? filteredEvents.map((event) => (
                        <tr key={event.id} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {event.title}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {event.category}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {new Date(event.startDate).toLocaleDateString(
                              "en-IN",
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
                                event.status === "upcoming"
                                  ? "bg-blue-100 text-blue-700"
                                  : event.status === "ongoing"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-slate-200 text-slate-700"
                              }`}
                            >
                              {event.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {event.isFeatured ? "Yes" : "No"}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => startEdit(event)}
                                className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDelete(event.id)}
                                disabled={deletingId === event.id}
                                className="rounded-lg border border-rose-300 px-2.5 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {deletingId === event.id
                                  ? "Deleting..."
                                  : "Delete"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">
            {editingId ? "Edit Event" : "Create Event"}
          </h3>

          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <input
              value={form.title}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  title: event.target.value,
                }))
              }
              type="text"
              required
              placeholder="Event title"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
            />

            <textarea
              value={form.description}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  description: event.target.value,
                }))
              }
              required
              rows={4}
              placeholder="Event description"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
            />

            <input
              value={form.image}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  image: event.target.value.trim(),
                }))
              }
              type="text"
              required
              placeholder="Image URL or uploaded image data"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
            />

            <label className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
              Upload image
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="mt-1 block w-full text-xs text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:font-semibold"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={form.category}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    category: event.target.value,
                  }))
                }
                type="text"
                required
                placeholder="Category (tech, cultural, sports...)"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
              />

              <label className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={form.isFeatured}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      isFeatured: event.target.checked,
                    }))
                  }
                />
                Featured Event
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Start date
                <input
                  value={form.startDate}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      startDate: event.target.value,
                    }))
                  }
                  type="datetime-local"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
                />
              </label>

              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                End date
                <input
                  value={form.endDate}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      endDate: event.target.value,
                    }))
                  }
                  type="datetime-local"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
                />
              </label>
            </div>

            {formError ? (
              <p className="text-sm font-medium text-rose-600">{formError}</p>
            ) : null}

            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Event"
                    : "Create Event"}
              </button>

              {editingId ? (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
              ) : null}
            </div>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
}
