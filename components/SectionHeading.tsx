import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`${
        isLeft ? "max-w-2xl text-left" : "max-w-3xl mx-auto text-center px-4"
      } mb-12 ${className}`}
    >
      {eyebrow ? (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400 mb-3">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
