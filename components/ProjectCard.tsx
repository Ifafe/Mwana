import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
  location?: string;
  percent?: number;
}

export function ProjectCard({
  title,
  description,
  category,
  image,
  href,
  location,
  percent,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl">
      <div className="relative h-56 sm:h-60 overflow-hidden bg-sand-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex rounded-full bg-brand/95 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
            {category}
          </span>
        </div>
        {location ? (
          <div className="absolute bottom-3.5 left-4 flex items-center gap-1.5 text-xs font-semibold text-white/95 drop-shadow-sm">
            <MapPin size={13} className="text-accent flex-shrink-0" />
            <span>{location}</span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-grow flex-col justify-between p-6 sm:p-7 space-y-5">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand dark:group-hover:text-blue-400 transition-colors">
            <Link href={href}>{title}</Link>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="space-y-4 pt-1">
          {typeof percent === "number" ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500 dark:text-slate-400">Financiamento</span>
                <span className="text-brand dark:text-blue-400 tabular-nums">{percent}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand dark:bg-blue-500 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
                />
              </div>
            </div>
          ) : null}

          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand dark:text-blue-400 hover:text-brand-dark transition-colors"
          >
            <span>Ver projeto</span>
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
