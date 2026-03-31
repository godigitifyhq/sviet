import Image from "next/image";

type MembershipCardProps = {
  name: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
};

export function MembershipCard({ name, description, logoSrc, logoAlt }: MembershipCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="relative h-12 w-36">
        <Image src={logoSrc} alt={logoAlt} fill loading="lazy" className="object-contain object-left" sizes="144px" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </article>
  );
}