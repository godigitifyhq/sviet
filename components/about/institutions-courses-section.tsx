"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { SectionHeader } from "@/components/about/section-header";

type CourseLevel =
  | "UG"
  | "PG"
  | "DIPLOMA"
  | "VOCATIONAL"
  | "PROFESSIONAL"
  | "CERTIFICATE";

export type InstitutionCourse = {
  id: string;
  slug: string;
  title: string;
  durationMonths: number;
  level: CourseLevel;
};

export type InstitutionCoursesData = {
  id: string;
  name: string;
  description: string;
  coursesByCategory: {
    category: string;
    courses: InstitutionCourse[];
  }[];
};

function formatDuration(durationMonths: number) {
  const years = durationMonths / 12;
  return `${Number.isInteger(years) ? years : years.toFixed(1)} Years`;
}

export function InstitutionsCoursesSection({
  institutions,
}: {
  institutions: InstitutionCoursesData[];
}) {
  const [activeInstitutionId, setActiveInstitutionId] = useState<string>(
    institutions[0]?.id ?? "",
  );

  const activeInstitution = useMemo(
    () =>
      institutions.find(
        (institution) => institution.id === activeInstitutionId,
      ) ?? institutions[0],
    [institutions, activeInstitutionId],
  );

  if (institutions.length === 0 || !activeInstitution) {
    return null;
  }

  return (
    <div>
      <SectionHeader
        id="institutions-programs-heading"
        eyebrow="Academics"
        title="Institutions & Programs"
        description="Select an institution to explore live, database-backed courses grouped by category."
        className="mb-8"
        titleClassName="text-[#000000]"
      />

      <div className="grid gap-0 overflow-hidden border border-[#D1D5DB] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:grid-cols-[320px_1fr]">
        <aside className="bg-[#031A4A] p-5">
          <h3 className="text-xl font-semibold text-white">Our Institutions</h3>
          <ul className="mt-4 space-y-2" aria-label="Institution list">
            {institutions.map((institution) => {
              const isActive = institution.id === activeInstitution.id;

              return (
                <li key={institution.id}>
                  <button
                    type="button"
                    onClick={() => setActiveInstitutionId(institution.id)}
                    className={`w-full border px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "border-[#f7941d] bg-white text-[#111827]"
                        : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="font-semibold">{institution.name}</span>
                    <p
                      className={`mt-1 text-xs ${isActive ? "text-[#4B5563]" : "text-white/70"}`}
                    >
                      {institution.description}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="p-5 sm:p-7">
          <h3 className="text-3xl font-semibold text-[#1F2937]">
            {activeInstitution.name}
          </h3>
          <p className="mt-2 text-sm text-[#6B7280]">
            {activeInstitution.description}
          </p>

          {activeInstitution.coursesByCategory.length === 0 ? (
            <p className="mt-6 border border-dashed border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]">
              No active courses found for this institution yet.
            </p>
          ) : (
            <div className="mt-6 space-y-8">
              {activeInstitution.coursesByCategory.map((category) => (
                <section
                  key={category.category}
                  aria-label={`${category.category} courses`}
                >
                  <div className="mb-3 flex items-center justify-between border-b border-[#E5E7EB] pb-2">
                    <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7941d]">
                      {category.category}
                    </h4>
                    <span className="text-xs font-medium text-[#6B7280]">
                      {category.courses.length} courses
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {category.courses.map((course) => (
                      <li key={course.id}>
                        <Link
                          href={`/programs/${course.slug}`}
                          className="group flex items-center justify-between border border-[#E5E7EB] bg-white px-4 py-3 transition hover:border-[#f7941d] hover:bg-[#FFF8EF]"
                        >
                          <div>
                            <p className="font-medium text-[#111827]">
                              {course.title}
                            </p>
                            <p className="mt-1 text-sm text-[#6B7280]">
                              Duration: {formatDuration(course.durationMonths)}
                            </p>
                          </div>

                          <span className="inline-flex h-7 w-7 items-center justify-center bg-[#F3F4F6] text-[#f7941d] transition group-hover:bg-[#f7941d] group-hover:text-white">
                            <ArrowUpRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
