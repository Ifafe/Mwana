import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "../../components/Layout";
import { AfricanPattern } from "../../components/AfricanPattern";
import { allProjects } from "../../data/siteData";
import { MapPin, Users, Activity, Calendar, ArrowLeft, Heart } from "lucide-react";

export default function DetalheProjeto() {
  const router = useRouter();
  const { slug } = router.query;

  const project = useMemo(() => {
    if (!slug) return null;
    return allProjects.find((p) => p.slug === slug) || null;
  }, [slug]);

  if (router.isFallback) {
    return (
      <div className="flex h-screen items-center justify-center bg-background text-slate-500">
        A carregar...
      </div>
    );
  }

  if (!project && slug) {
    return (
      <Layout>
        <section className="py-40 text-center px-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Projeto não encontrado</h1>
          <Link href="/projetos" className="mt-4 inline-block text-brand font-semibold hover:underline">
            Voltar para projetos
          </Link>
        </section>
      </Layout>
    );
  }

  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | MWANA Angola</title>
        <meta name="description" content={project.description} />
      </Head>

      <Layout>
        {/* Dynamic Project Hero */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/70 to-slate-950/90" />
          </div>

          <AfricanPattern className="text-white" opacity={0.06} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl space-y-4">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:underline mb-2"
              >
                <ArrowLeft size={14} /> Voltar para Projetos
              </Link>
              <div>
                <span className="inline-block rounded-full bg-brand px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                {project.title}
              </h1>
              <p className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <MapPin size={16} className="text-accent" /> {project.location}
              </p>
            </div>
          </div>
        </section>

        {/* Content & Details Grid */}
        <section className="py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
              {/* Left Side: Editorial Content */}
              <div className="space-y-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>

                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Sobre a Iniciativa
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                    {project.content}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                    Através do nosso modelo de acompanhamento de proximidade, avaliamos trimestralmente os avanços do projeto juntamente com os comités comunitários parceiros. O seu apoio direto a este projeto garante a reposição de materiais didáticos, assistência clínica contínua e a manutenção das infraestruturas no terreno.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-8 space-y-4 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      Angariação de Fundos
                    </span>
                    <span className="text-sm font-extrabold text-brand dark:text-blue-400 tabular-nums">
                      {project.percent}% Concluído
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.percent}%` }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full bg-brand dark:bg-blue-500 rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Angariado</p>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                        {project.raised}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wider text-slate-400">Meta do Projeto</p>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                        {project.target}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Sidebar */}
              <div className="space-y-7">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card space-y-6">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-[0.16em] pb-4 border-b border-slate-100 dark:border-slate-800">
                    Detalhes do Impacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400">
                        <Users size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">Beneficiários</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{project.beneficiaries}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">Localização</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400">
                        <Activity size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">Estado do Projeto</p>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold mt-0.5 ${
                            project.status === "Concluído"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                              : "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">Cronograma</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{project.date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specific donation box */}
                <div className="rounded-2xl bg-brand text-white p-7 shadow-xl relative overflow-hidden space-y-5">
                  <AfricanPattern className="text-white" opacity={0.07} />

                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                      <Heart size={20} className="fill-white text-white" />
                    </div>
                    <h4 className="text-2xl font-extrabold tracking-tight leading-snug">
                      Apoie este Projeto Específico
                    </h4>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      Todas as doações efetuadas com referência a esta iniciativa são canalizadas diretamente para a sua execução no terreno.
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/doacoes?ref=${project.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-full bg-accent text-slate-950 font-bold py-3.5 text-center text-xs uppercase tracking-wider transition hover:bg-yellow-400 shadow-md"
                      >
                        Apoiar Agora
                      </Link>
                    </div>
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
