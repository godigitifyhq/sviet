import Image from "next/image";

type LogoCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  logoSrc: string;
  logoAlt: string;
};

export function LogoCard({ title, description, ctaLabel, logoSrc, logoAlt }: LogoCardProps) {
  return (
    <article className="rounded-lg border border-white/30 bg-white/10 p-5 shadow-sm backdrop-blur-[1px]">
      <div className="relative h-12 w-32">
        <Image src={logoSrc} alt={logoAlt} fill loading="lazy" className="object-contain object-left" sizes="128px" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-red-100">{description}</p>
      <button
        type="button"
        className="mt-4 inline-flex items-center rounded-md border border-white/40 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        {ctaLabel}
      </button>
    </article>
  );
}