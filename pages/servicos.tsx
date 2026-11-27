import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Layout";
import { AfricanPattern } from "../components/AfricanPattern";
import {
  advisoryAreas,
  angolaProvinces,
  internshipTracks,
  sponsorshipTiers,
  trainingCourses,
} from "../data/siteData";
import { ArrowRight, Check } from "lucide-react";

type ServiceType = "formacao" | "assessoria" | "estagio" | "apadrinhamento";

interface ServiceRequestForm {
  nome: string;
  email: string;
  telefone: string;
  provincia: string;
  organizacao: string;
  detalhe: string;
  mensagem: string;
}

const serviceLabels: Record<
  ServiceType,
  { short: string; label: string; detailLabel: string; detailPlaceholder: string }
> = {
  formacao: {
    short: "Formações",
    label: "Formações (Cursos e Treinamentos)",
    detailLabel: "Formação pretendida",
    detailPlaceholder: "Selecione ou indique o curso pretendido",
  },
  assessoria: {
    short: "Assessoria",
    label: "Assessoria Técnica",
    detailLabel: "Área de assessoria",
    detailPlaceholder: "Ex.: Salvaguarda infantil, regularização de projeto, RSC",
  },
  estagio: {
    short: "Estágios",
    label: "Estágios",
    detailLabel: "Curso / Área de estágio",
    detailPlaceholder: "Ex.: Serviço Social — 4.º ano",
  },
  apadrinhamento: {
    short: "Apadrinhamento",
    label: "Apadrinhamento",
    detailLabel: "Modalidade de apadrinhamento",
    detailPlaceholder: "Ex.: Apadrinhamento Integral (25.000 Kz/mês)",
  },
};

export default function Servicos() {
  const [activeService, setActiveService] = useState<ServiceType>("formacao");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ServiceRequestForm>();

  const jumpToForm = (service: ServiceType, prefillDetail?: string) => {
    setActiveService(service);
    setSubmitted(false);
    if (prefillDetail) {
      setValue("detalhe", prefillDetail);
    }
    document.getElementById("solicitar")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <>
      <Head>
        <title>Serviços — Formações, Assessoria, Estágios e Apadrinhamento | MWANA Angola</title>
        <meta
          name="description"
          content="Formações em proteção infantil, assessoria técnica para centros e empresas, programas de estágio e apadrinhamento contínuo em Angola."
        />
      </Head>

      <Layout>
        {/* Editorial Hero */}
        <section className="relative bg-slate-950 text-white overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="absolute inset-0">
            <img
              src="/images/noticia-formacao-docentes.jpg"
              alt="Sessão de formação e capacitação técnica da MWANA em Angola"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950" />
          </div>

          <AfricanPattern className="text-white" opacity={0.04} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Serviços &amp; Capacitação
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
                Formações, Assessoria, Estágios e Apadrinhamento.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Para além da intervenção direta nas comunidades, a MWANA capacita profissionais, apoia associações locais, integra estagiários e liga padrinhos ao percurso educativo das crianças.
              </p>
            </div>

            {/* Clean editorial index strip */}
            <nav
              aria-label="Secções de serviços"
              className="mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { num: "01", href: "#formacoes", label: "Formações" },
                { num: "02", href: "#assessoria", label: "Assessoria" },
                { num: "03", href: "#estagios", label: "Estágios" },
                { num: "04", href: "#apadrinhamento", label: "Apadrinhamento" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span className="font-serif italic text-accent text-xs">{item.num}</span>
                  <span className="group-hover:underline underline-offset-4">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* 1. Formações — Editorial Catalogue */}
        <section id="formacoes" className="scroll-mt-24 py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                01 · Cursos e Treinamentos
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Formações Técnicas em Proteção Infantil
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Programas práticos com certificado para cuidadores, professores, assistentes sociais e equipas de centros de acolhimento.
              </p>
            </div>

            <div className="mt-10 grid gap-px bg-slate-200/80 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden md:grid-cols-2">
              {trainingCourses.map((course) => (
                <article
                  key={course.id}
                  className="flex flex-col justify-between bg-white dark:bg-slate-900 p-7"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <span className="text-brand dark:text-blue-400 font-bold">{course.format}</span>
                      {" · "}
                      {course.duration}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold text-slate-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {course.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      <span className="block font-semibold text-slate-800 dark:text-slate-200">
                        {course.nextCohort}
                      </span>
                      <span>Público: {course.audience}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => jumpToForm("formacao", course.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 hover:underline self-start sm:self-center flex-shrink-0"
                    >
                      Inscrever-se
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Assessoria — Two-column editorial split */}
        <section
          id="assessoria"
          className="scroll-mt-24 py-20 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.35fr] items-start">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  02 · Apoio Institucional
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Assessoria Técnica e Salvaguarda
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Acompanhamos associações locais, escolas, centros de acolhimento e departamentos de responsabilidade social na implementação de padrões rigorosos de proteção infantil.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => jumpToForm("assessoria", "Diagnóstico de Assessoria Institucional")}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold px-6 py-3 text-xs uppercase tracking-wider hover:opacity-90 transition"
                  >
                    Solicitar reunião técnica
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
                {advisoryAreas.map((area) => (
                  <div
                    key={area.title}
                    className="py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {area.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {area.description}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                        Entregável: <span className="text-slate-800 dark:text-slate-200">{area.deliverable}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => jumpToForm("assessoria", area.title)}
                      className="text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 hover:underline flex-shrink-0 self-start sm:mt-1"
                    >
                      Pedir proposta →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Estágios — Clean tabular list */}
        <section id="estagios" className="scroll-mt-24 py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                03 · Talento Jovem
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Estágios Académicos e Profissionais
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Experiência supervisionada no terreno junto de equipas multidisciplinares em Angola.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-200/80 dark:divide-slate-800">
              {internshipTracks.map((track) => (
                <div
                  key={track.area}
                  className="p-6 sm:px-7 grid gap-4 lg:grid-cols-[1.4fr_0.9fr_auto] lg:items-center"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                      {track.area}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{track.profile}</p>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <p className="font-semibold text-slate-700 dark:text-slate-200">{track.locations}</p>
                    <p>Duração: {track.duration}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => jumpToForm("estagio", track.area)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 hover:underline justify-self-start lg:justify-self-end"
                  >
                    Candidatar-me
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Apadrinhamento — Dignified editorial grid (non-SaaS) */}
        <section
          id="apadrinhamento"
          className="scroll-mt-24 py-20 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  04 · Apoio Contínuo
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Programa de Apadrinhamento
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  Sustente de forma contínua o percurso escolar, nutricional e emocional de crianças ou salas apoiadas pela MWANA.
                </p>
              </div>
              <Link
                href="/doacoes"
                className="text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 hover:underline self-start md:self-auto"
              >
                Prefere doação pontual? →
              </Link>
            </div>

            <div className="mt-10 grid gap-px bg-slate-200/80 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden lg:grid-cols-3">
              {sponsorshipTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`flex flex-col justify-between bg-white dark:bg-slate-900 p-7 ${
                    tier.highlight ? "border-t-4 border-t-brand" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {tier.title}
                    </h3>
                    <p className="mt-2 text-2xl font-extrabold text-brand dark:text-blue-400 tabular-nums">
                      {tier.amount}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {tier.scope}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => jumpToForm("apadrinhamento", `${tier.title} (${tier.amount})`)}
                    className={`mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-wider transition ${
                      tier.highlight
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-brand hover:text-brand dark:hover:text-blue-400"
                    }`}
                  >
                    Quero apadrinhar
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-l-2 border-brand pl-4 max-w-3xl leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Compromisso de salvaguarda:</strong>{" "}
              A MWANA não expõe rostos nem dados privados de menores. Os padrinhos recebem relatórios semestrais de assiduidade escolar, nutrição e progresso comunitário.
            </p>
          </div>
        </section>

        {/* Contextual Request Form */}
        <section id="solicitar" className="scroll-mt-24 py-24 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                Inscrição &amp; Contacto Direto
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Submeta o seu pedido
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Selecione o serviço abaixo. A equipa responsável responde em até 5 dias úteis.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-10 shadow-card">
              {/* Underlined institutional tabs */}
              <div className="flex flex-wrap gap-6 border-b border-slate-200 dark:border-slate-800 mb-7">
                {(Object.keys(serviceLabels) as ServiceType[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveService(key);
                      setSubmitted(false);
                    }}
                    className={`pb-3.5 text-xs font-bold uppercase tracking-wider border-b-2 -mb-px transition-colors ${
                      activeService === key
                        ? "border-brand text-brand dark:border-blue-400 dark:text-blue-400"
                        : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {serviceLabels[key].short}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Check size={22} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Pedido registado com sucesso
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Recebemos a sua solicitação para <strong>{serviceLabels[activeService].label}</strong>. Entraremos em contacto brevemente.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        {...register("nome", { required: "O nome é obrigatório" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                      />
                      {errors.nome && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.nome.message}</p>
                      )}
                    </div>
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
                      {errors.email && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
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
                      {errors.telefone && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.telefone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Província
                      </label>
                      <select
                        {...register("provincia", { required: "Selecione a província" })}
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
                      {errors.provincia && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.provincia.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        {serviceLabels[activeService].detailLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={serviceLabels[activeService].detailPlaceholder}
                        {...register("detalhe", { required: "Indique o detalhe pretendido" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                      />
                      {errors.detalhe && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.detalhe.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        {activeService === "estagio"
                          ? "Universidade / Instituto (Opcional)"
                          : "Organização / Empresa (Opcional)"}
                      </label>
                      <input
                        type="text"
                        {...register("organizacao")}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Observações / Disponibilidade
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Indique datas preferenciais, número de participantes ou questões específicas..."
                      {...register("mensagem")}
                      className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-full bg-brand text-white font-bold py-4 text-xs uppercase tracking-wider transition hover:bg-brand-dark"
                  >
                    Enviar Pedido — {serviceLabels[activeService].short}
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
