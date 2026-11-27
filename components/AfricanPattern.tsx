import React, { useId } from "react";

interface AfricanPatternProps {
  className?: string;
  opacity?: number;
}

/**
 * Subtle geometric texture inspired by Angolan Samakaka & Chokwe Sona motifs.
 * Uses useId() so multiple instances on the same page never collide in SVG defs.
 */
export function AfricanPattern({ className = "", opacity = 0.04 }: AfricanPatternProps) {
  const patternId = useId();

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Geometric Samakaka-inspired diamond & chevron weave */}
            <path
              d="M 0 16 L 16 0 L 32 16 L 48 0 L 64 16 M 0 48 L 16 64 L 32 48 L 48 64 L 64 48 M 16 32 L 32 16 L 48 32 L 32 48 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="32" r="2.2" fill="currentColor" />
            <circle cx="0" cy="32" r="1.5" fill="currentColor" />
            <circle cx="64" cy="32" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
