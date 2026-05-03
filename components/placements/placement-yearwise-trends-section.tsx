"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { YEARLY_PLACEMENT_TRENDS } from "@/components/placements/placement-data";

type ChartView = "placement" | "highest" | "average" | "both";

export function PlacementYearwiseTrendsSection() {
  const [packageView, setPackageView] = useState<ChartView>("both");
  const latestTrend =
    YEARLY_PLACEMENT_TRENDS[YEARLY_PLACEMENT_TRENDS.length - 1];

  return (
    <section className=" px-4 py-16 md:px-6 md:py-20">
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
            growth based on the shared student records.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 md:p-6">
            <h3 className="text-lg font-semibold text-[#111827]">
              Placement Volume Trend
            </h3>
            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <AreaChart data={YEARLY_PLACEMENT_TRENDS}>
                  <defs>
                    <linearGradient
                      id="placementRateFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                      <stop
                        offset="95%"
                        stopColor="#2563EB"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#4B5563", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, (dataMax: number) => dataMax + 2]}
                    tick={{ fill: "#4B5563", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #DCE7FF",
                      borderRadius: "8px",
                    }}
                    formatter={(value) => [`${value} students`, "Placements"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="placements"
                    stroke="#2563EB"
                    fill="url(#placementRateFill)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-2xl border border-[#DCE7FF] bg-white p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#111827]">
                Package Growth Trend (LPA)
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setPackageView("both")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  packageView === "both"
                    ? "bg-[#f7941d] text-white "
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Both
              </button>
              <button
                onClick={() => setPackageView("highest")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  packageView === "highest"
                    ? "bg-[#f7941d] text-white "
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Highest Only
              </button>
              <button
                onClick={() => setPackageView("average")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  packageView === "average"
                    ? "bg-[#f7941d] text-white "
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Average Only
              </button>
            </div>

            <div className="mt-5 h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={YEARLY_PLACEMENT_TRENDS}>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#4B5563", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#4B5563", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #DCE7FF",
                      borderRadius: "8px",
                    }}
                    formatter={(value) => `${value} LPA`}
                  />
                  <Legend />
                  {(packageView === "both" || packageView === "highest") && (
                    <Line
                      type="monotone"
                      dataKey="highestPackage"
                      stroke="#f7941d"
                      strokeWidth={3}
                      dot={{ r: 3 }}
                      name="Highest Package"
                    />
                  )}
                  {(packageView === "both" || packageView === "average") && (
                    <Line
                      type="monotone"
                      dataKey="averagePackage"
                      stroke="#111827"
                      strokeWidth={3}
                      dot={{ r: 3 }}
                      name="Average Package"
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">
              Latest Placement Count
            </p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">
              {latestTrend.placements}
            </p>
          </article>
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">
              Highest Package
            </p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">
              {latestTrend.highestPackage} LPA
            </p>
          </article>
          <article className="rounded-xl border border-[#DCE7FF] bg-white p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">
              Average Package
            </p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">
              {latestTrend.averagePackage} LPA
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
