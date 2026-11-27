import Link from "next/link";
import { AfricanPattern } from "./AfricanPattern";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

export function CTASection({ eyebrow, title, description, buttonLabel, buttonHref, image }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl my-16">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-35"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
      </div>

      <AfricanPattern className="text-white" opacity={0.07} />

      <div className="relative mx-auto max-w-7xl px-7 py-14 sm:py-20 sm:px-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between z-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href={buttonHref}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent text-slate-950 font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-200 hover:bg-yellow-400 hover:-translate-y-0.5 shadow-lg shadow-accent/20"
          >
            <span>{buttonLabel}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
