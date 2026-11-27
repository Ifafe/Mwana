import Head from "next/head";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionBlock } from "../components/SectionBlock";
import { CTASection } from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";
import { AfricanPattern } from "../components/AfricanPattern";
import { teamMembers } from "../data/siteData";

export default function Sobre() {
  const blocks = [
    {
      id: "historia",
      title: "Nossa História",
      badge: "História",
      description:
        "Fundada em Luanda, a MWANA nasceu da indignação diante da vulnerabilidade social enfrentada por milhares de crianças em Angola. Iniciámos as nossas atividades com reforço escolar em quintais comunitários e, ao longo dos anos, expandimos a nossa atuação para o Huambo, Moxico, Benguela e Cabinda, estruturando soluções duradouras focadas em infraestrutura, saúde e educação.",
      image: "/images/hero-angola.jpg",
      reverse: false,
    },
    {
      id: "missao",
      title: "Proteger e capacitar a infância angolana",
      badge: "Missão",
      description:
        "A nossa missão é combater a vulnerabilidade social infantil através do fornecimento de educação inclusiva de qualidade, cuidados pediátricos básicos, segurança alimentar e salvaguarda integral dos direitos da criança, fortalecendo a autonomia das famílias e comunidades.",
      image: "/images/sobre-educacao-huambo.jpg",
      reverse: true,
    },
    {
      id: "visao",
      title: "Uma Angola onde cada criança floresça",
      badge: "Visão",
      description:
        "Ser uma referência nacional e internacional de desenvolvimento social sustentável focado na infância em Angola, reconhecida pela transparência rigorosa de contas, excelência metodológica e impacto comunitário de longo prazo.",
      image: "/images/projeto-protecao-luanda.jpg",
      reverse: false,
    },
    {
      id: "valores",
      title: "Os pilares do nosso trabalho diário",
      badge: "Valores",
      description:
        "Transparência total com prestação de contas aberta, empatia ativa junto das famílias, dignidade infantil, cooperação com líderes locais e resiliência. Não toleramos nenhuma forma de discriminação ou exploração de menores.",
      image: "/images/comunidade-voluntariado.jpg",
      reverse: true,
    },
    {
      id: "objetivos",
      title: "Focos estratégicos de intervenção",
      badge: "Objetivos",
      description:
        "Reduzir o analfabetismo funcional nas comunidades rurais, erradicar a desnutrição severa na primeira infância, garantir que 100% dos centros parceiros cumpram políticas rigorosas de salvaguarda e capacitar as famílias em atividades produtivas autossuficientes.",
      image: "/images/projeto-saude-moxico.jpg",
      reverse: false,
    },
    {
      id: "impacto",
      title: "Resultados mensuráveis no terreno",
      badge: "Impacto",
      description:
        "Desde o início das nossas operações, reduzimos o abandono escolar em 40% nas escolas rurais apoiadas no Huambo. As brigadas de saúde registaram uma quebra de 25% na desnutrição comunitária no Moxico e assegurámos água potável solar estável para mais de 2.000 alunos em Benguela.",
      image: "/images/projeto-agua-benguela.jpg",
      reverse: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Quem Somos | MWANA Angola</title>
        <meta
          name="description"
          content="Conheça a história, missão, visão, valores e a equipa por trás da MWANA, a organização angolana dedicada à proteção e educação da infância."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/sobre-educacao-huambo.jpg"
              alt="Crianças angolanas na escola no Huambo"
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
              Quem Somos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Conheça o nosso compromisso com a infância angolana, as metas que nos movem e os valores de transparência que pautam o nosso impacto social.
            </motion.p>
          </div>
        </section>

        {/* Alternating Blocks */}
        <section className="py-16 sm:py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.02} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8 relative z-10">
            {blocks.map((block) => (
              <SectionBlock
                key={block.id}
                id={block.id}
                title={block.title}
                description={block.description}
                image={block.image}
                badge={block.badge}
                reverse={block.reverse}
              />
            ))}
          </div>
        </section>

        {/* Equipa Section */}
        <section
          id="equipa"
          className="scroll-mt-24 py-24 bg-sand-100/75 dark:bg-slate-900/50 border-t border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Liderança"
              title="A Nossa Equipa"
              description="Profissionais angolanos experientes no terreno e na gestão institucional, dedicados ao desenvolvimento e salvaguarda das nossas comunidades."
            />
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card text-center space-y-4 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white text-lg font-extrabold tracking-wider shadow-sm">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-brand dark:text-blue-400 font-bold mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Apoie as nossas ações"
            title="Deseja apoiar a nossa equipa e os nossos projetos?"
            description="Tornando-se doador ou voluntário, ajuda-nos a garantir que mais comunidades em Angola saiam da vulnerabilidade extrema."
            buttonLabel="Fazer Doação"
            buttonHref="/doacoes"
            image="/images/noticia-dia-crianca.jpg"
          />
        </div>
      </Layout>
    </>
  );
}
