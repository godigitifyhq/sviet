import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <article className={cn("border border-gray-200 bg-white p-6", className)}>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{label}</p>
    </article>
  );
}
