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
    <article className="border border-white/35 bg-white/10 p-5 shadow-[0_10px_22px_rgba(2,6,23,0.2)] backdrop-blur-[2px]">
      <div className="relative h-12 w-32">
        <Image src={logoSrc} alt={logoAlt} fill loading="lazy" className="object-contain object-left" sizes="128px" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#DBEAFE]">{description}</p>
      <button
        type="button"
        className="mt-4 inline-flex items-center rounded-md border border-white/45 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
      >
        {ctaLabel}
      </button>
    </article>
  );
}