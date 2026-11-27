import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

export function NewsCard({ title, summary, category, date, image, href }: NewsCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl">
      <div className="relative h-56 sm:h-60 overflow-hidden bg-sand-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex rounded-full bg-accent text-slate-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-between p-6 sm:p-7 space-y-4">
        <div className="space-y-3">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            {date}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-brand dark:group-hover:text-blue-400 transition-colors">
            <Link href={href}>{title}</Link>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
            {summary}
          </p>
        </div>
        <div className="pt-1">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand dark:text-blue-400 hover:text-brand-dark transition-colors"
          >
            <span>Ler artigo</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
