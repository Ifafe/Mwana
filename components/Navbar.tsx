import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { navItems } from "../data/siteData";
import { Menu, X, Sun, Moon, Heart } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const desktopNavItems = navItems.filter((item) => item.href !== "/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 shadow-soft border-b border-slate-200/70 dark:border-slate-800/80 backdrop-blur-md py-3"
          : "bg-gradient-to-b from-slate-950/65 to-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none group"
        >
          <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-900/5 transition-transform duration-200 group-hover:scale-105">
            <img src="/logo.png" alt="MWANA Angola" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-base font-extrabold tracking-[0.18em] leading-none ${
                scrolled
                  ? "text-slate-900 dark:text-white"
                  : "text-white"
              }`}
            >
              MWANA
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] mt-0.5 ${
                scrolled
                  ? "text-slate-500 dark:text-slate-400"
                  : "text-white/75"
              }`}
            >
              Angola
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-semibold">
          {desktopNavItems.map((item) => {
            const isActive =
              router.pathname === item.href ||
              (item.href !== "/" && router.pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? scrolled
                      ? "text-brand dark:text-blue-400"
                      : "text-accent"
                    : scrolled
                    ? "text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-blue-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full ${
                      scrolled ? "bg-brand dark:bg-blue-400" : "bg-accent"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`rounded-full p-2.5 transition-colors ${
              scrolled
                ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                : "text-white/90 hover:bg-white/15"
            }`}
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/doacoes"
            className={`hidden sm:inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              scrolled
                ? "bg-brand text-white hover:bg-brand-dark shadow-sm"
                : "bg-accent text-slate-950 hover:bg-yellow-400 shadow-md"
            }`}
          >
            <Heart size={13} className="fill-current" />
            Doar
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden rounded-full p-2 transition-colors ${
              scrolled
                ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                : "text-white hover:bg-white/15"
            }`}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            <nav aria-label="Menu móvel" className="flex flex-col gap-1 text-base font-semibold">
              {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`py-3 border-b border-slate-100 dark:border-slate-800/80 transition-colors ${
                      isActive
                        ? "text-brand dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300 hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/doacoes"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-center text-sm font-bold text-white transition hover:bg-brand-dark shadow-sm"
            >
              <Heart size={15} className="fill-current" />
              Fazer Doação
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
