import Image from "next/image";

type MembershipCardProps = {
  name: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
};

export function MembershipCard({ name, description, logoSrc, logoAlt }: MembershipCardProps) {
  return (
    <article className="border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 shadow-[0_8px_24px_rgba(30,42,120,0.08)]">
      <div className="relative h-12 w-36">
        <Image src={logoSrc} alt={logoAlt} fill loading="lazy" className="object-contain object-left" sizes="144px" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#111827]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{description}</p>
    </article>
  );
}