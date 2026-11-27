import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Layout } from "../../components/Layout";
import { AfricanPattern } from "../../components/AfricanPattern";
import { newsArticles } from "../../data/siteData";
import { ArrowLeft, User, Calendar, BookOpen, Share2, Check } from "lucide-react";

export default function DetalheNoticia() {
  const router = useRouter();
  const { slug } = router.query;
  const [copied, setCopied] = useState(false);

  const article = useMemo(() => {
    if (!slug) return null;
    return newsArticles.find((a) => a.slug === slug) || null;
  }, [slug]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (router.isFallback) {
    return (
      <div className="flex h-screen items-center justify-center bg-background text-slate-500">
        A carregar...
      </div>
    );
  }

  if (!article && slug) {
    return (
      <Layout>
        <section className="py-40 text-center px-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Artigo não encontrado</h1>
          <Link href="/noticias" className="mt-4 inline-block text-brand font-semibold hover:underline">
            Voltar para notícias
          </Link>
        </section>
      </Layout>
    );
  }

  if (!article) return null;

  return (
    <>
      <Head>
        <title>{article.title} | Notícias MWANA</title>
        <meta name="description" content={article.summary} />
      </Head>

      <Layout>
        {/* News Hero */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/75 to-slate-950/90" />
          </div>

          <AfricanPattern className="text-white" opacity={0.06} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl space-y-4">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:underline mb-2"
              >
                <ArrowLeft size={14} /> Voltar para Notícias
              </Link>
              <div>
                <span className="inline-block rounded-full bg-accent text-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <User size={15} className="text-accent" />
                  <span>Por {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-accent" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Reading View */}
        <section className="py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[2fr_1fr] items-start">
              <article className="space-y-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-card">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-slate-200 border-l-4 border-brand pl-6">
                    {article.summary}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
                    {article.content}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    Comités escolares, voluntários, enfermeiros comunitários e os próprios encarregados de educação unem esforços diários no terreno. A publicação periódica de relatórios, atividades e balanços de despesas faz parte do compromisso ético da MWANA com todos os seus parceiros institucionais e doadores privados em Angola e na diáspora.
                  </p>
                </div>

                {/* Share bar */}
                <div className="flex flex-wrap items-center gap-4 py-6 border-y border-slate-200/80 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 flex items-center gap-2">
                    <Share2 size={15} /> Partilhar Artigo
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-brand hover:text-brand dark:hover:text-blue-400 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-500" />
                        <span>Link copiado!</span>
                      </>
                    ) : (
                      <span>Copiar Link</span>
                    )}
                  </button>
                </div>
              </article>

              {/* Sidebar */}
              <div className="space-y-7 lg:sticky lg:top-24">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 space-y-6 shadow-card">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-[0.16em] pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <BookOpen size={16} className="text-brand dark:text-blue-400" /> Mais Novidades
                  </h3>
                  <div className="space-y-5">
                    {newsArticles
                      .filter((n) => n.slug !== article.slug)
                      .slice(0, 2)
                      .map((item) => (
                        <div key={item.slug} className="space-y-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-brand dark:text-blue-400">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand dark:hover:text-blue-400 transition-colors line-clamp-2">
                            <Link href={`/noticias/${item.slug}`}>{item.title}</Link>
                          </h4>
                          <p className="text-xs text-slate-400">{item.date}</p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-sand-100/80 dark:bg-slate-900 p-7 space-y-4 text-center">
                  <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    Quer Fazer Parte da História?
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Junte-se à nossa equipa técnica ou atue como voluntário no ensino e na saúde nas comunidades apoiadas em Angola.
                  </p>
                  <div className="pt-1">
                    <Link
                      href="/voluntariado"
                      className="inline-flex w-full items-center justify-center rounded-full bg-brand text-white font-bold py-3 text-center text-xs uppercase tracking-wider transition hover:bg-brand-dark"
                    >
                      Registar Candidatura
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
