import Image from "next/image";

import { cn } from "@/lib/utils";

export type Leader = {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  messageParagraphs?: string[];
  socialLinks?: Array<{
    label: string;
    href: string;
  }>;
  quote?: string;
  quoteAttribution?: string;
  highlight?: string;
};

type LeaderCardProps = {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  active?: boolean;
  onSelect?: () => void;
  dataIndex?: number;
  className?: string;
};

export function LeaderCard({ name, title, imageSrc, imageAlt, active = false, onSelect, dataIndex, className }: LeaderCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      data-leader-index={dataIndex}
      aria-current={active ? "true" : undefined}
      aria-label={`Show profile for ${name}`}
      className={cn(
        "snap-start shrink-0 basis-55 overflow-hidden border text-left transition shadow-none sm:basis-60",
        active
          ? "border-zinc-200 bg-zinc-800 text-white"
          : "border-zinc-800 bg-zinc-950/70 text-zinc-100 hover:bg-zinc-900",
        className,
      )}
    >
      <div className="relative aspect-4/3 w-full ">
        <Image
          src={imageSrc}
          alt={imageAlt ?? name}
          fill
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 240px, 240px"
          className="object-cover object-top"
        />
      </div>
      <div className="p-4">
        <p className="text-2xl font-semibold leading-tight">{name}</p>
        <p className={cn("mt-2 text-base", active ? "text-amber-300" : "text-zinc-300")}>{title}</p>
      </div>
    </button>
  );
}
