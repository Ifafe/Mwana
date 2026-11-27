import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Array<{ value: string; label: string }>;
}

export function HeroSection({ eyebrow, title, description, image, primaryCta, secondaryCta, stats }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-100 shadow-sm shadow-slate-900/20">{eyebrow}</p> : null}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
            {description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={primaryCta.href} className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-brand/90">
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/15">
                {secondaryCta.label}
              </Link>
            ) : null}
          </motion.div>

          {stats ? (
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-3 text-sm text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
