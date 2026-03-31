import Image from "next/image";

type AccreditationCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  logoSrc: string;
  logoAlt: string;
};

export function AccreditationCard({ title, description, ctaLabel, logoSrc, logoAlt }: AccreditationCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="relative h-14 w-40">
        <Image src={logoSrc} alt={logoAlt} fill loading="lazy" className="object-contain object-left" sizes="160px" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
      <button
        type="button"
        className="mt-5 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
      >
        {ctaLabel}
      </button>
    </article>
  );
}