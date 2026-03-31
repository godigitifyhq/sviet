import Image from "next/image";

type FacilityCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function FacilityCard({ title, description, imageSrc, imageAlt }: FacilityCardProps) {
  return (
    <article className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-2 px-5 py-5">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </article>
  );
}