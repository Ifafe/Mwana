import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { DonationCard } from "../components/DonationCard";
import { AfricanPattern } from "../components/AfricanPattern";
import { allProjects } from "../data/siteData";
import { Heart, ShieldCheck, Check, Copy } from "lucide-react";

const IBAN_VALUE = "AO06.0006.0000.1234.5678.9012.3";

export default function Doacoes() {
  const router = useRouter();
  const [frequency, setFrequency] = useState<"mensal" | "unica">("mensal");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentStep, setPaymentStep] = useState(1);
  const [amountError, setAmountError] = useState("");
  const [ibanCopied, setIbanCopied] = useState(false);
  const [donationConfirmed, setDonationConfirmed] = useState(false);

  const referencedProject = useMemo(() => {
    if (!router.query.ref || typeof router.query.ref !== "string") return null;
    return allProjects.find((p) => p.slug === router.query.ref) || null;
  }, [router.query.ref]);

  const campaignProgress = {
    title: "Campanha de Proteção e Nutrição 2026",
    percent: 74,
    raised: "74.000.000 Kz",
    target: "100.000.000 Kz",
    kidsSupported: "3.700 crianças",
  };

  const donationImpacts = [
    { amount: 5000, text: "Garante um Kit Escolar completo (mochila, cadernos e lápis) para 1 criança em Angola." },
    { amount: 10000, text: "Garante acompanhamento pediátrico móvel e vacinação básica para 2 crianças." },
    { amount: 20000, text: "Garante alimentação e suplementação nutricional diária para uma criança durante 1 mês." },
    { amount: 50000, text: "Apoia saneamento escolar e kits de higiene para as alunas de uma sala de aula rural." },
  ];

  const activeAmount = selectedAmount ?? (Number(customAmount) > 0 ? Number(customAmount) : 0);

  const handleCustomAmountChange = (val: string) => {
    setCustomAmount(val);
    setSelectedAmount(null);
    setAmountError("");
  };

  const handleSelectPredefined = (val: number) => {
    setSelectedAmount(val);
    setCustomAmount("");
    setAmountError("");
  };

  const handleNextStep = () => {
    if (activeAmount > 0) {
      setAmountError("");
      setPaymentStep(2);
    } else {
      setAmountError("Por favor, selecione ou introduza um valor de doação válido.");
    }
  };

  const handleCopyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN_VALUE);
    } catch {
      // Fallback handled silently
    }
    setIbanCopied(true);
    setTimeout(() => setIbanCopied(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Fazer Doação | MWANA Angola</title>
        <meta
          name="description"
          content="Faça uma doação para a MWANA e garanta alimentação, educação primária e cuidados de saúde pediátricos para crianças em Angola."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/projeto-protecao-luanda.jpg"
              alt="Crianças angolanas no centro de acolhimento da MWANA em Luanda"
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
              Fazer a Diferença
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              A sua generosidade transforma-se diretamente em vacinas, kits escolares e furos de água potável nas comunidades de Angola.
            </motion.p>
          </div>
        </section>

        {/* Global Campaign Progress */}
        <section className="py-16 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-11 shadow-card space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  Objetivo Anual
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {campaignProgress.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Meta: apoiar diretamente {campaignProgress.kidsSupported} em situação de vulnerabilidade nas escolas rurais.
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-3.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand dark:bg-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${campaignProgress.percent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-slate-400 text-xs uppercase tracking-wider block">Angariado</span>
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white tabular-nums">
                      {campaignProgress.raised}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-brand dark:text-blue-400 font-extrabold text-lg tabular-nums">
                      {campaignProgress.percent}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-xs uppercase tracking-wider block">Meta</span>
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white tabular-nums">
                      {campaignProgress.target}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive simulator */}
        <section
          id="simulador"
          className="scroll-mt-24 py-20 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Simulador de Impacto"
              title="Formulário de Apoio Rápido"
              description="Escolha o valor em Kwanzas e veja o impacto prático associado ao seu contributo."
            />

            <div className="rounded-3xl bg-white dark:bg-slate-900 p-7 sm:p-11 shadow-card border border-slate-200/90 dark:border-slate-800 space-y-8">
              {referencedProject ? (
                <div className="rounded-2xl bg-brand/5 dark:bg-brand/15 border border-brand/20 px-5 py-3.5 text-sm text-slate-800 dark:text-slate-200 flex items-center justify-between gap-4">
                  <span>
                    Apoio direcionado para: <strong>{referencedProject.title}</strong>
                  </span>
                </div>
              ) : null}

              {donationConfirmed ? (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Obrigado pelo seu gesto solidário!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    A sua intenção de doação ({frequency === "mensal" ? "Apoio Mensal" : "Doação Única"} de{" "}
                    <strong>{activeAmount.toLocaleString("pt-PT")} Kz</strong>) foi registada. Em produção, este passo liga-se diretamente ao gateway de pagamento seguro.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setDonationConfirmed(false);
                      setPaymentStep(1);
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-brand text-white font-bold px-7 py-3 text-xs uppercase tracking-wider hover:bg-brand-dark transition"
                  >
                    Fazer nova simulação
                  </button>
                </div>
              ) : paymentStep === 1 ? (
                <>
                  {/* Toggle frequency */}
                  <div className="flex justify-center">
                    <div className="inline-flex rounded-full bg-sand-100 dark:bg-slate-950 p-1 border border-slate-200/80 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setFrequency("mensal")}
                        className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                          frequency === "mensal"
                            ? "bg-brand text-white shadow-sm"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                        }`}
                      >
                        Mensal
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency("unica")}
                        className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                          frequency === "unica"
                            ? "bg-brand text-white shadow-sm"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                        }`}
                      >
                        Doação Única
                      </button>
                    </div>
                  </div>

                  {/* Predefined buttons grid */}
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                    {donationImpacts.map((imp) => (
                      <button
                        type="button"
                        key={imp.amount}
                        onClick={() => handleSelectPredefined(imp.amount)}
                        className={`rounded-2xl border p-5 text-center transition-all ${
                          selectedAmount === imp.amount
                            ? "bg-brand/5 border-brand ring-2 ring-brand/25 dark:border-blue-500"
                            : "border-slate-200 dark:border-slate-800 hover:border-brand/40 hover:bg-sand-50 dark:hover:bg-slate-800/60"
                        }`}
                      >
                        <span className="block text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                          {imp.amount.toLocaleString("pt-PT")} Kz
                        </span>
                        <span className="block text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                          Selecionar
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Custom input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Outro Valor (Kz)
                    </label>
                    <input
                      type="number"
                      min={500}
                      placeholder="Introduza o valor pretendido em Kwanzas..."
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                    />
                    {amountError ? (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-2">{amountError}</p>
                    ) : null}
                  </div>

                  {/* Highlight impact description */}
                  <div className="p-5 bg-brand/[0.04] dark:bg-blue-950/30 border border-brand/15 dark:border-blue-900/40 rounded-2xl flex gap-3.5 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <Heart size={20} className="text-brand dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>
                      {selectedAmount
                        ? donationImpacts.find((i) => i.amount === selectedAmount)?.text
                        : activeAmount > 0
                        ? `A sua contribuição personalizada de ${activeAmount.toLocaleString("pt-PT")} Kz será canalizada para apoiar as prioridades pedagógicas e nutricionais das crianças apoiadas pela MWANA.`
                        : "Selecione uma quantia acima para visualizar a equivalência prática do seu apoio."}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full inline-flex items-center justify-center rounded-full bg-brand text-white font-bold py-4 text-center text-xs uppercase tracking-wider transition hover:bg-brand-dark shadow-sm"
                  >
                    Prosseguir com Doação
                  </button>
                </>
              ) : (
                <div className="space-y-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      Opções de Pagamento Seguro
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                      Resumo: <strong>{frequency === "mensal" ? "Apoio Mensal" : "Doação Única"}</strong> de{" "}
                      <strong>{activeAmount.toLocaleString("pt-PT")} Kz</strong>.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 text-left pt-2">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3 bg-sand-50/70 dark:bg-slate-950/60">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Multicaixa Express / IBAN Angola
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        Transferência interbancária a partir de qualquer banco em Angola ou via Multicaixa Express.
                      </p>
                      <div className="text-xs bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 font-mono space-y-1">
                        <p className="font-semibold text-slate-900 dark:text-white">{IBAN_VALUE}</p>
                        <p className="text-slate-500 dark:text-slate-400">Titular: MWANA Associação Social</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyIban}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand dark:text-blue-400 hover:underline"
                      >
                        {ibanCopied ? (
                          <>
                            <Check size={14} className="text-emerald-500" />
                            <span>IBAN copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copiar IBAN</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3 bg-sand-50/70 dark:bg-slate-950/60 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 dark:text-white">
                          Cartão Internacional (Visa / Mastercard)
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          Para doações internacionais da diáspora angolana, Europa e resto do mundo.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDonationConfirmed(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-5 py-3 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all"
                      >
                        Confirmar Doação
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setPaymentStep(1)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
                    >
                      ← Alterar quantia
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Donation plans cards */}
        <section className="py-24 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Modalidades"
              title="Outras Formas de Doar"
              description="Apoios pontuais, suporte mensal contínuo ou parcerias corporativas com enquadramento fiscal."
            />

            <div className="grid gap-7 md:grid-cols-3">
              <DonationCard
                title="Doação Única"
                price="Valor Livre"
                description="Contributo individual imediato aplicável onde houver maior prioridade no terreno."
                href="#simulador"
              />
              <DonationCard
                title="Apoio Mensal"
                price="Desde 5.000 Kz/mês"
                description="Garanta refeições equilibradas e kits didáticos contínuos para as salas de aula apoiadas."
                href="#simulador"
                featured
              />
              <DonationCard
                title="Apadrinhamento Contínuo"
                price="Desde 12.000 Kz/mês"
                description="Acompanhe de forma contínua e ética o percurso escolar, nutricional e emocional de uma criança ou sala apoiada."
                href="/servicos#apadrinhamento"
              />
            </div>
          </div>
        </section>

        {/* Stories of Impact */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-t border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Impacto Real"
              title="Histórias que o Seu Apoio Torna Possíveis"
              description="Veja como cada contributo se traduz em dignidade no dia a dia das crianças angolanas."
            />

            <div className="grid gap-12 lg:grid-cols-2 items-center mt-12">
              <div className="space-y-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  Benguela · Água Viva nas Escolas
                </span>
                <h3 className="font-serif italic text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
                  &ldquo;Agora já temos água limpa e fresca mesmo aqui na escola!&rdquo;
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  O pequeno Kassoma, de 8 anos, vive numa comunidade rural no interior de Benguela. Antes, percorria vários quilómetros com a mãe ao amanhecer para buscar água antes das aulas.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Com o financiamento conjunto dos nossos doadores, instalámos um chafariz alimentado por energia solar na escola do Kassoma. Hoje, mais de 400 alunos têm água potável segura todos os dias, reduzindo doenças hídricas e aumentando a assiduidade escolar.
                </p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand-100 dark:bg-slate-900 shadow-card ring-1 ring-slate-900/5 dark:ring-white/10">
                <img
                  src="/images/projeto-agua-benguela.jpg"
                  alt="Crianças angolanas a recolher água limpa no chafariz solar da escola em Benguela"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
