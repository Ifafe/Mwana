interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 text-left shadow-card transition-all duration-200 hover:border-brand/30">
      <div className="h-1 w-8 rounded-full bg-accent mb-4" />
      <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
        {value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}
