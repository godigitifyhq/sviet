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
     <article className="border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 shadow-[0_8px_24px_rgba(30,42,120,0.08)]">
      <div className="relative h-12 w-32">
        <Image src={logoSrc} alt={logoAlt} fill loading="lazy" className="object-contain object-left" sizes="128px" />
      </div>

       <h3 className="mt-4 text-lg font-semibold text-[#111827]">{title}</h3>
       <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{description}</p>
      <button
        type="button"
         className="mt-4 inline-flex items-center rounded-md border border-[#BFDBFE] bg-white px-3 py-2 text-sm font-semibold text-[#f7941d] transition hover:border-[#60A5FA] hover:bg-[#EFF6FF]"
      >
        {ctaLabel}
      </button>
    </article>
  );
}