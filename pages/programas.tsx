import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";
import { AfricanPattern } from "../components/AfricanPattern";
import { programCards } from "../data/siteData";
import { ShieldCheck, BookOpen, HeartPulse, Sprout, ArrowRight } from "lucide-react";

export default function Programas() {
  const icons = [
    <ShieldCheck key="shield" size={28} className="text-brand dark:text-blue-400" />,
    <BookOpen key="book" size={28} className="text-brand dark:text-blue-400" />,
    <HeartPulse key="health" size={28} className="text-brand dark:text-blue-400" />,
    <Sprout key="community" size={28} className="text-brand dark:text-blue-400" />,
  ];

  return (
    <>
      <Head>
        <title>Nossos Programas | MWANA Angola</title>
        <meta
          name="description"
          content="Conheça os programas estratégicos de intervenção social da MWANA nas áreas de proteção infantil, saúde materno-infantil, nutrição e educação inclusiva em Angola."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/sobre-educacao-huambo.jpg"
              alt="Programa de educação inclusiva MWANA em Angola"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/70 to-slate-950/85" />
          </div>

          <AfricanPattern className="text-white" opacity={0.06} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Nossos Programas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Conheça os pilares estratégicos de intervenção contínua que orientam a nossa presença nas comunidades angolanas.
            </motion.p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              eyebrow="Eixos de Atuação"
              title="Pilares de Intervenção Estrutural"
              description="Acreditamos numa abordagem integrada. Cada programa reforça os demais para assegurar mudanças sustentáveis e duradouras."
            />

            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {programCards.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 dark:bg-brand/20 flex-shrink-0">
                    {icons[index] || icons[0]}
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Program Approach */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  O Nosso Método de Trabalho
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Como garantimos eficácia em cada comunidade angolana
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      1. Co-Diagnóstico Local
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Nunca iniciamos um programa sem diálogo prévio com as autoridades tradicionais (sobas), comités de mães e professores da localidade.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      2. Capacitação e Autonomia
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Privilegiamos a formação de quadros locais — enfermeiros comunitários e professores da própria província — promovendo emprego local e continuidade autónoma.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      3. Monitorização Independente
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Avaliamos trimestralmente os indicadores-chave (desnutrição infantil, assiduidade escolar e acesso a água) e publicamos os resultados no portal da transparência.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand-100 dark:bg-slate-900 shadow-card ring-1 ring-slate-900/5 dark:ring-white/10">
                <img
                  src="/images/comunidade-voluntariado.jpg"
                  alt="Reunião comunitária com líderes locais e voluntários em Angola"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bridge to Services & Shelter Network */}
        <section className="py-16 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card flex flex-col justify-between gap-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-blue-400">
                    Serviços e Capacitação
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Formações, Assessoria, Estágios e Apadrinhamento
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Consulte os nossos cursos técnicos, peça assessoria institucional, candidate-se a um estágio ou apadrinhe o percurso de uma criança.
                  </p>
                </div>
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 hover:underline"
                >
                  Explorar Serviços
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card flex flex-col justify-between gap-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta dark:text-red-400">
                    Rede de Proteção
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Centros de Acolhimento e Rede de Apoio
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Encontre o centro de acolhimento mais próximo em caso de vulnerabilidade infantil, aceda à linha 15015 ou cadastre o seu centro.
                  </p>
                </div>
                <Link
                  href="/centros"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 hover:underline"
                >
                  Abrir Localizador de Centros
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Partilhe da nossa caminhada"
            title="Deseja financiar um programa específico?"
            description="Entre em contacto para conhecer a nossa carteira de programas anuais e como a sua empresa pode apoiar uma comunidade em Angola."
            buttonLabel="Tornar-se Parceiro"
            buttonHref="/parceiros"
            image="/images/noticia-formacao-docentes.jpg"
          />
        </div>
      </Layout>
    </>
  );
}
