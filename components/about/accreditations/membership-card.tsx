import Image from "next/image";

type MembershipCardProps = {
  name: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
};

export function MembershipCard({
  name,
  description,
  logoSrc,
  logoAlt,
}: MembershipCardProps) {
  const hasLogo = Boolean(logoSrc?.trim());
  const isExternalLogo = /^https?:\/\//.test(logoSrc);

  return (
    <article className="border border-[#DCE7FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,42,120,0.08)]">
      {hasLogo ? (
        <div className="relative h-12 w-36">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            unoptimized={isExternalLogo}
            loading="lazy"
            className="object-contain object-left"
            sizes="144px"
          />
        </div>
      ) : null}
      <h3
        className={`text-lg font-semibold text-[#111827] ${hasLogo ? "mt-4" : "mt-0"}`}
      >
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
        {description}
      </p>
    </article>
  );
}
