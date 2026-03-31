import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  meta?: string;
  className?: string;
  children?: ReactNode;
};

export function InfoCard({ title, description, meta, className, children }: InfoCardProps) {
  return (
    <article className={cn("border border-gray-200 bg-white p-6", className)}>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
      {meta ? <p className="mt-3 text-sm font-semibold text-gray-800">{meta}</p> : null}
      {children}
    </article>
  );
}
