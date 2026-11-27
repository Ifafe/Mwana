import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { AfricanPattern } from "../components/AfricanPattern";
import { angolaProvinces } from "../data/siteData";
import { ShieldAlert, Check, Users, Award, BookOpen } from "lucide-react";

interface VoluntarioFormData {
  nome: string;
  email: string;
  telefone: string;
  provincia: string;
  area: string;
  motivacao: string;
  termos: boolean;
}

export default function Voluntariado() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VoluntarioFormData>();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  const benefits = [
    {
      title: "Impacto Comunitário",
      desc: "Acompanhe de perto o impacto das suas ações na aprendizagem, saúde e bem-estar das crianças angolanas.",
      icon: <Users size={22} className="text-brand dark:text-blue-400" />,
    },
    {
      title: "Desenvolvimento Humano",
      desc: "Formação cívica contínua e imersão cultural genuína nas comunidades rurais e urbanas de Angola.",
      icon: <Award size={22} className="text-brand dark:text-blue-400" />,
    },
    {
      title: "Rede Solidária",
      desc: "Ligação com dezenas de voluntários nacionais e da diáspora comprometidos com a mudança social.",
      icon: <BookOpen size={22} className="text-brand dark:text-blue-400" />,
    },
  ];

  const steps = [
    { num: "01", title: "Candidatura Online", desc: "Preencha o formulário detalhando o seu perfil, disponibilidade e motivações." },
    { num: "02", title: "Entrevista de Enquadramento", desc: "Conversa com o gabinete de voluntariado para alinhar expectativas e competências." },
    { num: "03", title: "Formação de Salvaguarda", desc: "Formação obrigatória sobre os direitos da infância e o nosso código de conduta." },
    { num: "04", title: "Ação no Terreno", desc: "Integração nas atividades educativas, clínicas ou logísticas junto das comunidades." },
  ];

  return (
    <>
      <Head>
        <title>Voluntariado | MWANA Angola</title>
        <meta
          name="description"
          content="Junte-se à equipa da MWANA como voluntário em Angola. Apoie programas de ensino primário, cuidados pediátricos móveis e ação comunitária."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/comunidade-voluntariado.jpg"
              alt="Voluntários e líderes comunitários em Angola"
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
              Fazer Voluntariado
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Doe o seu tempo e conhecimento para capacitar crianças e fortalecer famílias vulneráveis em Angola.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              eyebrow="Participação Cívica"
              title="Porquê ser Voluntário na MWANA?"
              description="Acreditamos num voluntariado qualificado, ético e transformador. O seu tempo é um recurso decisivo."
            />

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-card space-y-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 dark:bg-brand/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Process */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Integração"
              title="Como Funciona o Processo"
              description="Quatro passos simples para garantir uma integração responsável e alinhada com as comunidades."
            />

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 space-y-3 shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-brand dark:text-blue-400 tabular-nums">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Form */}
        <section className="py-24 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                    Requisitos Básicos
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    O que procuramos nos candidatos
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Idade mínima de 18 anos completos na data de início da ação.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Compromisso mínimo de 3 meses para projetos educativos em comunidades rurais.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Apresentação de Registo Criminal sem antecedentes (obrigatório para proteção de menores).</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Espírito de cooperação, respeito cultural e adaptação a contextos comunitários.</span>
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/30 p-6 space-y-2.5">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                    <ShieldAlert size={17} /> Política de Proteção Infantil
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed">
                    A MWANA aplica uma política de tolerância zero contra todas as formas de abuso infantil. Todos os voluntários subscrevem e cumprem rigorosamente o nosso Código de Conduta.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400">
                    Procura Estágio ou Formação?
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Se é estudante universitário ou profissional da área social, consulte os nossos programas dedicados de{" "}
                    <Link href="/servicos#estagios" className="font-bold text-brand dark:text-blue-400 hover:underline">
                      Estágios
                    </Link>{" "}
                    e{" "}
                    <Link href="/servicos#formacoes" className="font-bold text-brand dark:text-blue-400 hover:underline">
                      Formações Técnicas
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-card space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Formulário de Candidatura
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Preencha os seus dados abaixo. A nossa coordenação de voluntariado responde em até 10 dias úteis.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl text-center space-y-2"
                  >
                    <p className="font-bold text-lg">Candidatura Recebida</p>
                    <p className="text-sm">
                      Agradecemos sinceramente a sua disponibilidade. Entraremos em contacto brevemente com os próximos passos.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        {...register("nome", { required: "O nome é obrigatório" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                      />
                      {errors.nome && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.nome.message}</p>}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "O email é obrigatório",
                            pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
                          })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Telemóvel
                        </label>
                        <input
                          type="tel"
                          placeholder="+244 9XX XXX XXX"
                          {...register("telefone", { required: "O telemóvel é obrigatório" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.telefone && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.telefone.message}</p>}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Província Preferencial
                        </label>
                        <select
                          {...register("provincia", { required: "Selecione uma província" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        >
                          <option value="">Selecione...</option>
                          {angolaProvinces.map((prov) => (
                            <option key={prov} value={prov}>
                              {prov}
                            </option>
                          ))}
                          <option value="Internacional">Diáspora / Internacional</option>
                        </select>
                        {errors.provincia && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.provincia.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Área de Interesse
                        </label>
                        <select
                          {...register("area", { required: "Selecione uma área" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        >
                          <option value="">Selecione...</option>
                          <option value="Educação">Educação e Apoio Escolar</option>
                          <option value="Saúde">Saúde Pediátrica e Nutrição</option>
                          <option value="Logística">Logística e Infraestruturas</option>
                          <option value="Comunicação">Comunicação e Sensibilização</option>
                        </select>
                        {errors.area && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.area.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Motivação / Experiência
                      </label>
                      <textarea
                        rows={4}
                        {...register("motivacao", {
                          required: "A motivação é obrigatória",
                          minLength: { value: 20, message: "Escreva pelo menos 20 caracteres sobre a sua motivação" },
                        })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white resize-none"
                        placeholder="Fale um pouco sobre si, experiências anteriores e como gostaria de contribuir..."
                      />
                      {errors.motivacao && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.motivacao.message}</p>}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="termos-voluntario"
                        type="checkbox"
                        {...register("termos", { required: "Tem de aceitar a política de proteção infantil" })}
                        className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-brand focus:ring-brand mt-1"
                      />
                      <label htmlFor="termos-voluntario" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Confirmo que tenho mais de 18 anos, não tenho antecedentes criminais relacionados com menores e aceito subscrever a política de proteção infantil da MWANA.
                      </label>
                    </div>
                    {errors.termos && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.termos.message}</p>}

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-full bg-brand text-white font-bold py-4 text-center text-xs uppercase tracking-wider transition hover:bg-brand-dark shadow-sm"
                    >
                      Enviar Candidatura
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
