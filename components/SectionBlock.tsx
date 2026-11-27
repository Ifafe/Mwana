interface SectionBlockProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  badge?: string;
}

export function SectionBlock({ id, title, description, image, reverse, badge }: SectionBlockProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 grid gap-10 lg:gap-16 py-10 md:py-16 lg:grid-cols-2 items-center ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image column */}
      <div
        className={`${
          reverse ? "lg:col-start-2" : ""
        } relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand-100 dark:bg-slate-800 shadow-card ring-1 ring-slate-900/5 dark:ring-white/10`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content column */}
      <div className="flex flex-col justify-center space-y-5">
        {badge ? (
          <div>
            <span className="inline-flex rounded-full bg-brand/10 dark:bg-brand/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-blue-400">
              {badge}
            </span>
          </div>
        ) : null}
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
