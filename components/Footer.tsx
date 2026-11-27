import Link from "next/link";
import { useState } from "react";
import { navItems, contactDetails } from "../data/siteData";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 6000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Subtle 3-tone architectural accent inspired by MWANA's mark & Angola */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-brand" />
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-terracotta" />
      </div>

      {/* Upper Footer */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 border-b border-slate-800/70">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Col 1: Brand & Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                <img src="/logo.png" alt="MWANA Angola" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-[0.18em] text-white block leading-none">
                  MWANA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 mt-1 block">
                  Angola · Proteção Infantil
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Organização angolana sem fins lucrativos dedicada à proteção da criança, educação inclusiva, saúde comunitária e desenvolvimento sustentável.
            </p>
            <p className="font-serif italic text-sm text-amber-300/90 max-w-sm">
              &ldquo;Crianças livres do estado de vulnerabilidade social.&rdquo;
            </p>
            <div className="max-w-sm pt-1">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-3 font-semibold">
                Subscreva a nossa Newsletter
              </p>
              {subscribed ? (
                <div className="text-xs bg-emerald-950/70 text-emerald-300 border border-emerald-800/60 rounded-xl p-3.5">
                  Obrigado por subscrever. Enviaremos novidades sobre os nossos projetos em Angola.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    aria-label="O seu endereço de email"
                    placeholder="O seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscrever newsletter"
                    className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white hover:bg-blue-600 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Organização */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Organização
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/sobre#historia" className="hover:text-white transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="/sobre#missao" className="hover:text-white transition-colors">
                  Missão &amp; Visão
                </Link>
              </li>
              <li>
                <Link href="/sobre#valores" className="hover:text-white transition-colors">
                  Valores
                </Link>
              </li>
              <li>
                <Link href="/sobre#impacto" className="hover:text-white transition-colors">
                  Impacto Social
                </Link>
              </li>
              <li>
                <Link href="/sobre#equipa" className="hover:text-white transition-colors">
                  A Nossa Equipa
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navegação
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/noticias" className="hover:text-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="hover:text-white transition-colors">
                  Transparência
                </Link>
              </li>
              <li>
                <Link href="/doacoes" className="text-accent hover:text-yellow-300 font-semibold transition-colors">
                  Fazer Doação
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contactos */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
                Sede em Luanda
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin size={17} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{contactDetails.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={17} className="text-accent flex-shrink-0" />
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {contactDetails.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={17} className="text-accent flex-shrink-0" />
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={17} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{contactDetails.hours}</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da MWANA"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-brand hover:border-brand hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da MWANA"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-brand hover:border-brand hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.647.121 4.193 1.567 4.513 4.513.045.968.052 1.322.052 3.751 0 2.43-.008 2.784-.052 3.752-.32 2.942-1.85 4.513-4.513 4.513-.968.044-1.322.052-3.751.052-2.43 0-2.784-.008-3.752-.052-2.648-.12-4.193-1.567-4.513-4.513-.045-.968-.052-1.322-.052-3.751 0-2.43.008-2.784.052-3.752.32-2.942 1.85-4.513 4.513-4.513.968-.044 1.322-.052 3.751-.052zm.5 2h-1.63c-2.324 0-2.6.008-3.514.05-2.203.1-3.324 1.2-3.619 3.619-.04 1.314-.047 1.63-.047 3.514 0 2.324.008 2.6.05 3.514.1 2.203 1.2 3.324 3.619 3.619.915.04 1.314.047 3.514.047 2.324 0 2.601-.008 3.514-.05 2.203-.1 3.324-1.2 3.619-3.619.04-1.314.047-1.63.047-3.514 0-2.324-.008-2.602-.05-3.514-.1-2.203-1.2-3.324-3.619-3.619-.915-.04-1.314-.047-3.514-.047zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 5.75a2 2 0 110-4 2 2 0 010 4zm4.82-5.57a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da MWANA"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-brand hover:border-brand hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} MWANA Angola. Todos os direitos reservados. Associação Social sem fins lucrativos.</p>
        <div className="flex flex-wrap gap-6">
          <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
          <Link href="/termos" className="hover:text-white transition-colors">
            Termos de Uso
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Política de Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
