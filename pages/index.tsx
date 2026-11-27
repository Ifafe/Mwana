import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { StatCard } from "../components/StatCard";
import { ProjectCard } from "../components/ProjectCard";
import { NewsCard } from "../components/NewsCard";
import { PartnerCarousel } from "../components/PartnerCarousel";
import { CTASection } from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";
import { AfricanPattern } from "../components/AfricanPattern";
import { heroStats, featuredProjects, newsArticles, partnerLogos } from "../data/siteData";
import { MapPin, PhoneCall, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>MWANA | Proteção, Educação e Impacto Social para Crianças em Angola</title>
        <meta
          name="description"
          content="A MWANA é uma organização sem fins lucrativos dedicada à proteção da criança, saúde comunitária, inclusão e combate à vulnerabilidade infantil em Angola."
        />
        <meta property="og:title" content="MWANA | Proteção e Impacto Social em Angola" />
        <meta property="og:description" content="Unindo esforços pela educação, nutrição e salvaguarda das crianças angolanas." />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <Layout>
        {/* 1. Hero Section */}
        <section className="relative min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden pt-28">
          {/* Background image & directional overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-angola.jpg"
              alt="Crianças angolanas sorrindo a caminho da escola no Huambo"
              className="h-full w-full object-cover object-[center_25%] opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/35" />
          </div>

          <AfricanPattern className="text-white" opacity={0.03} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
            <div className="max-w-3xl space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Criar oportunidades para <span className="text-accent">transformar vidas</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
              >
                A MWANA promove educação inclusiva, cuidados pediátricos essenciais, nutrição e a salvaguarda de direitos para milhares de crianças e suas famílias em comunidades em risco.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/projetos"
                  className="inline-flex items-center justify-center rounded-full bg-brand text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition hover:bg-blue-600 shadow-lg shadow-brand/20"
                >
                  Conhecer Projetos
                </Link>
                <Link
                  href="/doacoes"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition hover:bg-white/20 backdrop-blur-sm"
                >
                  Fazer Doação
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Stats Section (overlapping or directly below Hero) */}
        <section className="relative z-20 -mt-14 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <StatCard value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2b. Child Protection & Nearest Shelter Quick Access */}
        <section className="pt-12 pb-2 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 border-l-4 border-l-terracotta bg-white dark:bg-slate-900 p-6 sm:px-8 shadow-card flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta dark:text-red-400">
                  Apoio Imediato · Proteção Infantil
                </p>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  Encontrou uma criança perdida ou em vulnerabilidade?
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Localize o centro de acolhimento mais perto de si ou acione de imediato a rede oficial de proteção em Angola.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <Link
                  href="/centros"
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-white font-bold px-5 py-3 text-xs uppercase tracking-wider hover:bg-brand-dark transition-colors"
                >
                  <MapPin size={14} />
                  Achar centro mais próximo
                  <ArrowRight size={13} />
                </Link>
                <a
                  href="tel:15015"
                  className="inline-flex items-center gap-2 rounded-full border border-terracotta/40 text-terracotta dark:text-red-400 font-bold px-5 py-3 text-xs uppercase tracking-wider hover:bg-terracotta hover:text-white transition-colors"
                >
                  <PhoneCall size={14} />
                  SOS Criança · 15015
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sobre Section */}
        <section className="py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.025} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Image side */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-sand-100 dark:bg-slate-900 shadow-card ring-1 ring-slate-900/5 dark:ring-white/10">
                <img
                  src="/images/sobre-educacao-huambo.jpg"
                  alt="Professora angolana a orientar alunos numa sala de aula no Huambo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 rounded-xl bg-slate-950/75 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white">
                  Huambo · Ensino Primário Comunitário
                </div>
              </div>

              {/* Text side */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                    Quem Somos
                  </span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    Dedicados à proteção infantil e ao desenvolvimento das comunidades em Angola.
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Trabalhamos nas províncias mais vulneráveis de Angola — de Luanda ao Huambo, Moxico, Benguela e Cabinda — promovendo a escolarização contínua das crianças, a segurança nutricional das famílias e o empoderamento comunitário através de metodologias participativas locais.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Acreditamos num futuro onde cada criança angolana cresça protegida, livre da vulnerabilidade social e equipada com as ferramentas educativas necessárias para liderar a sua própria história.
                </p>
                <div className="pt-2">
                  <Link
                    href="/sobre"
                    className="inline-flex items-center justify-center rounded-full bg-brand text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition hover:bg-brand-dark shadow-sm"
                  >
                    Conhecer a Nossa História
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projetos em Destaque */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="No Terreno"
              title="Projetos em Destaque"
              description="Iniciativas ativas nas províncias de Angola com impacto direto na educação, saúde pediátrica e proteção infantil."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  image={project.image}
                  location={project.location}
                  percent={project.percent}
                  href={`/projetos/${project.slug}`}
                />
              ))}
            </div>
            <div className="mt-14 text-center">
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition hover:border-brand hover:text-brand dark:hover:text-blue-400 shadow-sm"
              >
                Ver Todos os Projetos
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Notícias Recentes */}
        <section className="py-24 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Atualidade"
              title="Notícias & Histórias"
              description="Acompanhe os avanços no terreno, acordos institucionais e histórias reais das comunidades angolanas apoiadas pela MWANA."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <NewsCard
                  key={article.slug}
                  title={article.title}
                  summary={article.summary}
                  category={article.category}
                  date={article.date}
                  image={article.image}
                  href={`/noticias/${article.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Parceiros */}
        <section className="py-20 bg-sand-100 dark:bg-slate-900/60 border-y border-slate-200/70 dark:border-slate-800/70 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                Organizações e Empresas Parceiras
              </h3>
              <h4 className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Unidos para maximizar o impacto social em Angola
              </h4>
            </div>
            <PartnerCarousel logos={partnerLogos} />
          </div>
        </section>

        {/* 7. CTA Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Junte-se à nossa missão"
            title="Dê o seu contributo hoje para mudar um futuro."
            description="Com apenas um gesto solidário, pode garantir alimentação escolar, vacinas e proteção contínua para as crianças angolanas que mais necessitam."
            buttonLabel="Fazer Doação"
            buttonHref="/doacoes"
            image="/images/hero-angola.jpg"
          />
        </div>
      </Layout>
    </>
  );
}
