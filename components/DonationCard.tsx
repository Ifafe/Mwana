import Link from "next/link";

interface DonationCardProps {
  title: string;
  price: string;
  description: string;
  href: string;
  featured?: boolean;
}

export function DonationCard({ title, price, description, href, featured }: DonationCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "border-brand/50 bg-brand/[0.03] dark:bg-brand/10 ring-1 ring-brand/20"
          : "border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900"
      }`}
    >
      <div className="flex-grow">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          {title}
        </p>
        <p className="mt-3 text-3xl font-extrabold text-brand dark:text-blue-400 tracking-tight">
          {price}
        </p>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
      <Link
        href={href}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand text-white py-3.5 text-center text-xs font-bold uppercase tracking-wider transition hover:bg-brand-dark shadow-sm"
      >
        Doar agora
      </Link>
    </div>
  );
}
