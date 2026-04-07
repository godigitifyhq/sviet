import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const RELATED_LINKS = [
  {
    title: "Master's programs",
    description: "Ready for your next leap after graduation? Start here.",
    href: "/programs",
  },
  {
    title: "Dual degree programs",
    description: "Two credentials. One bold career launch.",
    href: "/programs",
  },
  {
    title: "Bachelor programs",
    description: "Finished 12th? Let your degree do the talking.",
    href: "/programs",
  },
] as const;

export function AdmissionsRelatedLinksSection() {
  return (
    <section className="bg-[#f5f7fb] py-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#1f1f1f]">
          <span className="text-[#1ca1b8]">▸</span>
          Related links
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {RELATED_LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start justify-between rounded-xl border border-[#d8d8de] bg-white px-5 py-4 transition hover:border-[#b6b6c8]"
            >
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 text-[#2563EB]" />
                <div>
                  <h3 className="text-base font-semibold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#5a5a67]">{item.description}</p>
                </div>
              </div>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fff4ec] text-[#f7941d] transition group-hover:bg-[#f7941d] group-hover:text-white">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
