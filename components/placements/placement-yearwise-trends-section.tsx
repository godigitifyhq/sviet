"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COMPANIES_DATA = [
  { year: "2022", companies: 260 },
  { year: "2023", companies: 285 },
  { year: "2024", companies: 315 },
  { year: "2025", companies: 320 },
  { year: "2026", companies: 350 },
];

const HIGHEST_PACKAGE_DATA = [
  { year: "2022", lpa: 19 },
  { year: "2023", lpa: 28 },
  { year: "2024", lpa: 45 },
  { year: "2025", lpa: 50 },
  { year: "2026", lpa: 60 },
];

const AVERAGE_PACKAGE_DATA = [
  { year: "2022", lpa: 3.6 },
  { year: "2023", lpa: 3.5 },
  { year: "2024", lpa: 4.8 },
  { year: "2025", lpa: 5.5 },
  { year: "2026", lpa: 5.8 },
];

const AXIS_STYLE = { fill: "#4B5563", fontSize: 12 };

const TOOLTIP_STYLE = {
  backgroundColor: "#fff",
  border: "1px solid #DCE7FF",
  borderRadius: "8px",
};

export function PlacementYearwiseTrendsSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">
            Placement Analytics
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">
            Year-Wise Placement Volume &amp; Package Trends
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
            A transparent, year-on-year view of placement volumes and salary
            growth based on aggregate records across all SVGOI colleges.
          </p>
          <p className="mt-2 text-xs text-[#9ca3af]">
            * Data represents aggregate placement outcomes across all colleges under SVGOI Group.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Graph 1 — Companies Visited */}
          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 md:p-6">
            <h3 className="text-base font-semibold text-[#111827]">
              Companies Visited
            </h3>
            <p className="mt-0.5 text-xs text-[#9ca3af]">Year-wise recruiter count</p>
            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <BarChart data={COMPANIES_DATA} barSize={28}>
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f7941d" stopOpacity={1} />
                      <stop offset="100%" stopColor="#ffb347" stopOpacity={0.7} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" tick={AXIS_STYLE} axisLine={false} tickLine={false} />
                  <YAxis
                    domain={[200, 400]}
                    tick={AXIS_STYLE}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(value) => [`${value} companies`, "Recruiters"]}
                  />
                  <Bar dataKey="companies" fill="url(#barGrad)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          {/* Graph 2 — Highest Package */}
          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 md:p-6">
            <h3 className="text-base font-semibold text-[#111827]">
              Highest Package
            </h3>
            <p className="mt-0.5 text-xs text-[#9ca3af]">Peak offer per year (LPA)</p>
            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={HIGHEST_PACKAGE_DATA}>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={AXIS_STYLE} axisLine={false} tickLine={false} />
                  <YAxis
                    domain={[0, 70]}
                    tick={AXIS_STYLE}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}`}
                  />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(value) => [`${value} LPA`, "Highest Package"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="lpa"
                    stroke="#f7941d"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#f7941d", strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                    name="Highest Package"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </article>

          {/* Graph 3 — Average Package */}
          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 md:p-6">
            <h3 className="text-base font-semibold text-[#111827]">
              Average Package
            </h3>
            <p className="mt-0.5 text-xs text-[#9ca3af]">Mean CTC trend (LPA)</p>
            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <AreaChart data={AVERAGE_PACKAGE_DATA}>
                  <defs>
                    <linearGradient id="avgGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0.03} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={AXIS_STYLE} axisLine={false} tickLine={false} />
                  <YAxis
                    domain={[2, 7]}
                    tick={AXIS_STYLE}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}`}
                  />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(value) => [`${value} LPA`, "Average Package"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="lpa"
                    stroke="#2563EB"
                    fill="url(#avgGrad)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#2563EB", strokeWidth: 0 }}
                    name="Average Package"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>
        </div>

        {/* Summary strip */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">
              Companies Visited (2026)
            </p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">350+</p>
          </article>
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">
              Highest Package (2026)
            </p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">60 LPA</p>
          </article>
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">
              Average Package (2026)
            </p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">5.8 LPA</p>
          </article>
        </div>
      </div>
    </section>
  );
}
