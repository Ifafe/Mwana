interface ProgramCardProps {
  title: string;
  description: string;
}

export function ProgramCard({ title, description }: ProgramCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
