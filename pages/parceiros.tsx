import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { AfricanPattern } from "../components/AfricanPattern";
import { partnerLogos } from "../data/siteData";
import { Handshake, Building, ShieldCheck } from "lucide-react";

interface ParceiroFormData {
  organizacao: string;
  contacto: string;
  email: string;
  telefone: string;
  tipo: string;
  mensagem: string;
}

export default function Parceiros() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ParceiroFormData>();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  const partnerTypes = [
    {
      title: "Mecenato Corporativo",
      desc: "Financiamento anual de programas estratégicos ou apoio direto a escolas rurais, com enquadramento na Lei do Mecenato angolana.",
      icon: <Building size={20} className="text-brand dark:text-blue-400" />,
    },
    {
      title: "Projetos Conjuntos",
      desc: "Cooperação técnica partilhada, brigadas de saúde móvel e intervenção coordenada em províncias como Huambo, Moxico e Benguela.",
      icon: <Handshake size={20} className="text-brand dark:text-blue-400" />,
    },
    {
      title: "Apoio Logístico e Insumos",
      desc: "Doação de materiais escolares, medicamentos pediátricos, sistemas solares de água ou equipamentos para os centros de acolhimento.",
      icon: <ShieldCheck size={20} className="text-brand dark:text-blue-400" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Parceiros | MWANA Angola</title>
        <meta
          name="description"
          content="Junte-se à rede de parceiros corporativos, embaixadas, fundações e instituições da MWANA em Angola."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/noticia-formacao-docentes.jpg"
              alt="Encontro de cooperação institucional da MWANA em Angola"
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
              Nossos Parceiros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Trabalhamos em conjunto com empresas angolanas, embaixadas, agências de cooperação e sociedade civil para ampliar o impacto social.
            </motion.p>
          </div>
        </section>

        {/* Partners grid */}
        <section className="py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              eyebrow="Rede Institucional"
              title="Organizações que Confiam em Nós"
              description="Agradecemos às empresas, fundações e missões de cooperação que tornam as nossas operações no terreno possíveis."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand/30"
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white text-xs font-extrabold tracking-wider shadow-sm"
                    style={{ backgroundColor: partner.accent }}
                    aria-hidden="true"
                  >
                    {partner.acronym}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {partner.sector}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forms of partnerships */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Modelos de Cooperação"
              title="Como Tornar-se Parceiro"
              description="Estruturamos parcerias transparentes com prestação de contas dedicada e indicadores claros de impacto."
            />

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {partnerTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-card space-y-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 dark:bg-brand/20">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{type.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-24 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-card space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  Cooperar
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Proposta de Parceria Corporativa
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                  Registe os dados da sua empresa ou instituição. O nosso gabinete de relações institucionais responde em até 3 dias úteis.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl text-center space-y-2"
                >
                  <p className="font-bold text-lg">Proposta de Parceria Recebida</p>
                  <p className="text-sm">
                    Agradecemos o interesse em cooperar com a MWANA. A nossa equipa institucional entrará em contacto brevemente.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Empresa / Instituição
                      </label>
                      <input
                        type="text"
                        {...register("organizacao", { required: "O nome da organização é obrigatório" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        placeholder="Nome da sua entidade"
                      />
                      {errors.organizacao && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.organizacao.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Ponto de Contacto (Nome)
                      </label>
                      <input
                        type="text"
                        {...register("contacto", { required: "O nome do contacto é obrigatório" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        placeholder="Ex: Ana Maria"
                      />
                      {errors.contacto && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.contacto.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Email Corporativo
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "O email corporativo é obrigatório",
                          pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
                        })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        placeholder="parceria@entidade.ao"
                      />
                      {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Contacto Telefónico
                      </label>
                      <input
                        type="tel"
                        {...register("telefone", { required: "O contacto telefónico é obrigatório" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        placeholder="Ex: +244 912 345 678"
                      />
                      {errors.telefone && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.telefone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Tipo de Parceria Pretendida
                    </label>
                    <select
                      {...register("tipo", { required: "Selecione o tipo de parceria" })}
                      className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="Mecenato">Mecenato Corporativo (Apoio Financeiro Anual)</option>
                      <option value="Cooperação">Cooperação Técnica / Projeto Conjunto</option>
                      <option value="Logístico">Apoio em Material / Logística / Medicamentos</option>
                      <option value="Outro">Outro Tipo de Acordo</option>
                    </select>
                    {errors.tipo && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.tipo.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Mensagem / Proposta de Cooperação
                    </label>
                    <textarea
                      rows={4}
                      {...register("mensagem", {
                        required: "Por favor, detalhe a sua proposta",
                        minLength: { value: 20, message: "Escreva uma mensagem mais detalhada (mínimo 20 caracteres)" },
                      })}
                      className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white resize-none"
                      placeholder="Descreva sumariamente os objetivos de parceria da sua organização..."
                    />
                    {errors.mensagem && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.mensagem.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-full bg-brand text-white font-bold py-4 text-center text-xs uppercase tracking-wider transition hover:bg-brand-dark shadow-sm"
                  >
                    Submeter Proposta de Parceria
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
