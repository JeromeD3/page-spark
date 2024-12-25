interface SectionContainerProps {
  title: React.ReactNode;
  description: string;
  subTitle: string;
  className?: string;
}

export default function SectionContainer({
  subTitle,
  title,
  description,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl bg-white pb-12 dark:bg-black ${className}`}
    >
      <div className="text-center">
        ✨ {subTitle}
        {title}
        <p className="mx-auto max-w-2xl py-4 text-sm text-neutral-500 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
