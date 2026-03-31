import { ImageCard } from "@/components/about/infrastructure/image-card";

type GridItem = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

type ImageGridProps = {
  items: GridItem[];
};

export function ImageGrid({ items }: ImageGridProps) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ImageCard key={`${item.title}-${item.imageSrc}`} title={item.title} imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
      ))}
    </div>
  );
}