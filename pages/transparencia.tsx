import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { AfricanPattern } from "../components/AfricanPattern";
import { transparencyReports } from "../data/siteData";
import { FileText, Download, ShieldCheck, TrendingUp, DollarSign, Check } from "lucide-react";

export default function Transparencia() {
  const [downloadedTitle, setDownloadedTitle] = useState<string | null>(null);

  const receipts = [
    { label: "Doações Privadas Individuais", value: "34%", amount: "34.000.000 Kz" },
    { label: "Doações de Empresas (Mecenato)", value: "28%", amount: "28.000.000 Kz" },
    { label: "Fundos de Cooperação Internacional", value: "31%", amount: "31.000.000 Kz" },
    { label: "Outros Contributos e Eventos", value: "7%", amount: "7.000.000 Kz" },
  ];

  const expenses = [
    { label: "Educação e Escolas Rurais", value: "38%", amount: "38.000.000 Kz", color: "bg-brand" },
    { label: "Brigadas de Saúde e Nutrição", value: "30%", amount: "30.000.000 Kz", color: "bg-emerald-600" },
    { label: "Centros de Proteção Infantil", value: "19%", amount: "19.000.000 Kz", color: "bg-accent" },
    { label: "Custos Operacionais e Captação", value: "13%", amount: "13.000.000 Kz", color: "bg-slate-400 dark:bg-slate-500" },
  ];

  const handleDownload = (title: string) => {
    setDownloadedTitle(title);
    setTimeout(() => setDownloadedTitle(null), 4000);
  };

  return (
    <>
      <Head>
        <title>Transparência | MWANA Angola</title>
        <meta
          name="description"
          content="Aceda aos relatórios anuais de atividades e prestação de contas financeiras da MWANA em Angola."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/noticia-formacao-docentes.jpg"
              alt="Gestão e prestação de contas da MWANA em Angola"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/75 to-slate-950/90" />
          </div>

          <AfricanPattern className="text-white" opacity={0.06} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Transparência
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Compromisso ético absoluto. Todos os fundos angariados são auditados e aplicados com rigor e abertura total de contas.
            </motion.p>
          </div>
        </section>

        {/* Financial Charts & Ratios */}
        <section className="py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              eyebrow="Prestação de Contas"
              title="Origem e Alocação dos Fundos"
              description="Discriminação detalhada dos recursos obtidos e da sua aplicação nas operações em Angola durante o último exercício."
            />

            <div className="grid gap-10 lg:grid-cols-2 mt-14">
              {/* Origin of Funds Card */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-card space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 dark:bg-brand/20 text-brand dark:text-blue-400">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Origem das Receitas</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">De onde provêm os nossos fundos comunitários</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {receipts.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                        <span className="text-slate-900 dark:text-white font-extrabold tabular-nums">
                          {item.value} ({item.amount})
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand rounded-full" style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destination of Resources Card */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-card space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Alocação de Despesas</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Onde aplicamos o contributo dos nossos doadores</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {expenses.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                        <span className="text-slate-900 dark:text-white font-extrabold tabular-nums">
                          {item.value} ({item.amount})
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ratio Banner */}
            <div className="mt-12 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-card flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-xl space-y-3">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Rácio de Eficiência da MWANA
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Por cada 1.000 Kz doados à nossa associação, <strong>870 Kwanzas</strong> são aplicados diretamente nos projetos sociais no Huambo, Moxico, Luanda, Benguela e Cabinda. Os restantes 130 Kwanzas cobrem gestão administrativa, auditoria independente e processamento bancário.
                </p>
              </div>
              <div className="flex-shrink-0 text-center rounded-2xl bg-brand/5 dark:bg-brand/15 border border-brand/20 dark:border-brand/30 p-6 min-w-[200px]">
                <span className="block text-5xl font-extrabold text-brand dark:text-blue-400 tabular-nums">
                  87%
                </span>
                <span className="block text-xs uppercase tracking-[0.16em] font-bold text-slate-500 dark:text-slate-400 mt-1.5">
                  Impacto Direto
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Download list */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-t border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Arquivo Público"
              title="Relatórios e Documentos Oficiais"
              description="Consulte os relatórios de atividades e pareceres de auditoria financeira independente da MWANA."
            />

            <div className="mt-12 max-w-4xl mx-auto space-y-5">
              {transparencyReports.map((report) => {
                const isDownloaded = downloadedTitle === report.title;
                return (
                  <div
                    key={report.title}
                    className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-card hover:border-brand/30 transition-all duration-200"
                  >
                    <div className="flex gap-4 items-start sm:items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 dark:bg-brand/20 text-brand dark:text-blue-400 flex-shrink-0">
                        <FileText size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                          {report.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                          {report.description}
                        </p>
                        <div className="flex gap-4 text-[11px] uppercase tracking-wider text-slate-400 mt-2 font-bold">
                          <span>Tamanho: {report.size}</span>
                          <span>Publicado: {report.date}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDownload(report.title)}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-brand hover:text-brand dark:hover:text-blue-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all bg-sand-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 flex-shrink-0"
                    >
                      {isDownloaded ? (
                        <>
                          <Check size={14} className="text-emerald-500" />
                          <span>Pedido registado</span>
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          <span>Descarregar</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Corporate transparency and audits banner */}
        <section className="py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
              <AfricanPattern className="text-white" opacity={0.06} />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 px-4 py-1.5 font-bold text-xs uppercase tracking-wider gap-2">
                  <ShieldCheck size={16} /> Auditores Independentes
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Contas Auditadas Anualmente em Angola
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  Todas as demonstrações financeiras da MWANA são examinadas anualmente por gabinetes de auditoria externa independente certificados pela OCPCA (Ordem dos Contabilistas e Peritos Contabilistas de Angola), garantindo o rigor exigido por doadores nacionais e internacionais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
