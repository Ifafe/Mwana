import Head from "next/head";
import { Layout } from "../components/Layout";
import { AfricanPattern } from "../components/AfricanPattern";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | MWANA Angola</title>
      </Head>

      <Layout>
        <section className="relative bg-slate-950 text-white overflow-hidden py-24 sm:py-32">
          <AfricanPattern className="text-white" opacity={0.06} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Política de Privacidade</h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base font-medium">Última atualização: Julho 2026</p>
          </div>
        </section>

        <section className="py-20 bg-background dark:bg-slate-950 text-slate-700 dark:text-slate-300">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-6 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Introdução</h2>
            <p>
              A MWANA (Associação Social) está comprometida em proteger os dados pessoais de todos os voluntários, doadores, beneficiários e visitantes do nosso portal institucional. Esta política de privacidade descreve como recolhemos, guardamos e processamos a sua informação pessoal de acordo com a legislação de proteção de dados vigente em Angola e na União Europeia (RGPD).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Dados que Recolhemos</h2>
            <p>
              Recolhemos dados pessoais através dos nossos formulários de Voluntariado, Parcerias, Contacto e Doações. Estes dados incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome Completo e informações de contacto (Email e número de telemóvel).</li>
              <li>Dados de residência ou província de intervenção para voluntários.</li>
              <li>Informações da organização ou instituição no caso de propostas corporativas.</li>
              <li>Montantes simulados de doação e dados básicos de processamento de pagamentos.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Finalidade do Tratamento</h2>
            <p>
              Os dados recolhidos são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar candidaturas de voluntariado e propostas de parcerias institucionais.</li>
              <li>Responder a pedidos de esclarecimento enviados através do formulário de contactos.</li>
              <li>Emitir recibos de doação e gerir os rácios de campanhas públicas de angariação.</li>
              <li>Enviar atualizações sobre o impacto dos nossos projetos rurais (apenas com consentimento prévio).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Conservação e Partilha</h2>
            <p>
              Não vendemos, partilhamos ou alugamos dados pessoais a terceiras entidades para fins lucrativos comerciais. A informação pessoal é conservada em servidores seguros apenas durante o período estritamente necessário para cumprir com as obrigações legais da associação social ou até que o utilizador solicite a sua remoção.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Os Seus Direitos</h2>
            <p>
              O titular dos dados tem o direito de aceder, retificar, limitar ou solicitar a eliminação dos seus dados pessoais em qualquer altura. Para exercer estes direitos, contacte o nosso encarregado de proteção de dados através do email <strong>contacto@mwana.org</strong>.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
