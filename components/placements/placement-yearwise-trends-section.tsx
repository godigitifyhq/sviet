"use client";

import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const YEARLY_DATA = [
  { year: "2022", placementRate: 82, highestPackage: 8.5, averagePackage: 3.6 },
  { year: "2023", placementRate: 86, highestPackage: 9.2, averagePackage: 3.9 },
  { year: "2024", placementRate: 90, highestPackage: 10.0, averagePackage: 4.2 },
  { year: "2025", placementRate: 93, highestPackage: 11.4, averagePackage: 4.7 },
  { year: "2026", placementRate: 95, highestPackage: 12.0, averagePackage: 5.1 },
] as const;

export function PlacementYearwiseTrendsSection() {
  return (
    <section className="bg-[#F8FAFF] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Placement Analytics</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Year-Wise Placement Trends</h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
            A transparent, year-on-year view of placement outcomes across offer conversion and salary growth.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 shadow-[0_10px_26px_rgba(30,42,120,0.08)] md:p-6">
            <h3 className="text-lg font-semibold text-[#111827]">Placement Percentage Trend</h3>
            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <AreaChart data={YEARLY_DATA}>
                  <defs>
                    <linearGradient id="placementRateFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={{ fill: "#4B5563", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[70, 100]} tick={{ fill: "#4B5563", fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip />
                  <Area type="monotone" dataKey="placementRate" stroke="#2563EB" fill="url(#placementRateFill)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 shadow-[0_10px_26px_rgba(30,42,120,0.08)] md:p-6">
            <h3 className="text-lg font-semibold text-[#111827]">Package Growth Trend (LPA)</h3>
            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={YEARLY_DATA}>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={{ fill: "#4B5563", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#4B5563", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="highestPackage" stroke="#f7941d" strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="averagePackage" stroke="#111827" strokeWidth={3} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">Latest Placement Rate</p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">95%</p>
          </article>
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">Highest Package</p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">12 LPA</p>
          </article>
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">Average Package</p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">5.1 LPA</p>
          </article>
        </div>
      </div>
    </section>
  );
}
