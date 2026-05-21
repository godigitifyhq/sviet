import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({ id, title, description, className, titleClassName, descriptionClassName }: SectionHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      <h2 id={id} className={cn("text-3xl font-bold text-gray-900 md:text-4xl", titleClassName)}>
        {title}
      </h2>
      {description ? <p className={cn("mt-4 text-base leading-relaxed text-gray-600", descriptionClassName)}>{description}</p> : null}
    </header>
  );
}