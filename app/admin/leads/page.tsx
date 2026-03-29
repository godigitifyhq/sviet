"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";

import { LeadSource, LeadStatus } from "@/generated/prisma/enums";
import { AdminLayout } from "@/components/admin/admin-layout";
import { StatusBadge } from "@/components/admin/status-badge";

type LeadListItem = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  source: string;
  status: string;
  createdAt: string;
  intendedProgram: {
    id: string;
    title: string;
    slug: string;
  } | null;
};

type LeadsResponse = {
  leads: LeadListItem[];
  total: number;
  page: number;
  totalPages: number;
};

const LEAD_STATUS_VALUES = Object.values(LeadStatus);
const LEAD_SOURCE_VALUES = Object.values(LeadSource);

export default function AdminLeadsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [page, setPage] = useState(1);

  const [leads, setLeads] = useState<LeadListItem[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    setPage(1);
  }, [search, statusFilter, sourceFilter]);

  useEffect(() => {
    let active = true;

    async function loadLeads() {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", "20");

        if (search) {
          params.set("search", search);
        }
        if (statusFilter) {
          params.set("status", statusFilter);
        }
        if (sourceFilter) {
          params.set("source", sourceFilter);
        }

        const response = await fetch(`/api/crm/leads?${params.toString()}`, { cache: "no-store" });
        const payload = (await response.json()) as LeadsResponse;

        if (!active) {
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to load leads.");
        }

        setLeads(payload.leads);
        setTotal(payload.total);
        setTotalPages(payload.totalPages);
      } catch {
        if (active) {
          setError("Unable to load leads. Please refresh.");
          setLeads([]);
          setTotal(0);
          setTotalPages(1);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadLeads();

    return () => {
      active = false;
    };
  }, [page, search, statusFilter, sourceFilter]);

  const resultLabel = useMemo(() => `Showing ${leads.length} of ${total} leads`, [leads.length, total]);

  function clearFilters() {
    setSearchInput("");
    setSearch("");
    setStatusFilter("");
    setSourceFilter("");
    setPage(1);
  }

  return (
    <AdminLayout title="Leads">
      <div className="space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-3 md:grid-cols-4">
            <input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search by name, email, phone"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            >
              <option value="">All Statuses</option>
              {LEAD_STATUS_VALUES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <select
              value={sourceFilter}
              onChange={(event) => setSourceFilter(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            >
              <option value="">All Sources</option>
              {LEAD_SOURCE_VALUES.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={clearFilters}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Clear Filters
            </button>
          </div>
        </section>

        <p className="text-sm font-medium text-slate-600">{resultLabel}</p>

        {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Email</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Phone</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Source</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Program</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                      Loading leads...
                    </td>
                  </tr>
                ) : null}

                {!loading && leads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                      No leads found.
                    </td>
                  </tr>
                ) : null}

                {!loading
                  ? leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50">
                        <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                          <Link href={`/admin/leads/${lead.id}`} className="hover:underline">
                            {lead.firstName} {lead.lastName}
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-slate-700">{lead.email}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-slate-700">{lead.phone ?? "-"}</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <StatusBadge status={lead.source} type="source" />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <StatusBadge status={lead.status} type="lead" />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-slate-700">{lead.intendedProgram?.title ?? "-"}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                          {format(new Date(lead.createdAt), "dd MMM yyyy")}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <Link
                            href={`/admin/leads/${lead.id}`}
                            className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page <= 1 || loading}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Previous
          </button>
          <p className="text-sm text-slate-600">
            Page {page} of {Math.max(totalPages, 1)}
          </p>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(Math.max(totalPages, 1), current + 1))}
            disabled={page >= totalPages || loading}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Next
          </button>
        </section>
      </div>
    </AdminLayout>
  );
}