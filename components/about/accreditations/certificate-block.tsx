import Image from "next/image";

type CertificateBlockProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export function CertificateBlock({ imageSrc, imageAlt, title, description, ctaLabel }: CertificateBlockProps) {
  return (
    <article className="grid gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:items-center">
      <div className="relative aspect-4/3 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
        <Image src={imageSrc} alt={imageAlt} fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-gray-600">{description}</p>
        <button
          type="button"
          className="mt-6 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}