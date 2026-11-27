/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0052B4",
          dark: "#003B82",
          light: "#E6F0FA",
        },
        accent: {
          DEFAULT: "#F2B705",
          dark: "#C99600",
        },
        terracotta: "#C53030",
        sand: {
          50: "#FAF9F6",
          100: "#F3F0E8",
          200: "#E6E0D3",
        },
        surface: "#FFFFFF",
        surfaceAlt: "#F3F0E8",
        text: "#0F172A",
        muted: "#526075",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 16px 40px -12px rgba(15, 23, 42, 0.07)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -12px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
