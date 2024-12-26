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
    <div className={`mx-auto w-full max-w-7xl pb-16 ${className}`}>
      <div className="text-center">
        <div className="mb-3 inline-flex items-center gap-2.5 rounded-full 
          bg-gradient-to-r from-gray-50/90 via-gray-100/80 to-gray-200/70
          dark:from-gray-900/60 dark:via-gray-800/50 dark:to-gray-900/40
          px-4 py-1.5 text-sm font-medium
          text-gray-700 dark:text-gray-300
          transition-all duration-300 
          hover:scale-[1.02] hover:from-gray-100/90 hover:via-gray-200/80 hover:to-gray-300/70
          dark:hover:from-gray-800/60 dark:hover:via-gray-700/50 dark:hover:to-gray-800/40
          active:scale-[0.98]">
          ✨ {subTitle}
        </div>
        {title}
        <p className="mx-auto max-w-2xl py-5 text-base leading-relaxed 
          text-gray-600/90 dark:text-neutral-300/90 md:text-lg 
          transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}
