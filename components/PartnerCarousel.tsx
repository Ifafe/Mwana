import React from "react";
import type { PartnerItem } from "../data/siteData";

interface PartnerCarouselProps {
  logos: PartnerItem[];
}

export function PartnerCarousel({ logos }: PartnerCarouselProps) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden w-full py-4">
      {/* Subtle edge fades matching sand-100 / dark slate-900 */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sand-100 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sand-100 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <div className="animate-partner-slider flex gap-5 items-stretch">
          {repeatedLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex min-w-[260px] items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4 shadow-sm transition-colors hover:border-brand/40"
            >
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white text-xs font-extrabold tracking-wider shadow-sm"
                style={{ backgroundColor: partner.accent }}
                aria-hidden="true"
              >
                {partner.acronym}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {partner.name}
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                  {partner.sector}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
