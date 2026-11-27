import Head from "next/head";
import { Layout } from "../components/Layout";
import { AfricanPattern } from "../components/AfricanPattern";

export default function Termos() {
  return (
    <>
      <Head>
        <title>Termos de Uso | MWANA Angola</title>
      </Head>

      <Layout>
        <section className="relative bg-slate-950 text-white overflow-hidden py-24 sm:py-32">
          <AfricanPattern className="text-white" opacity={0.06} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Termos de Uso</h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base font-medium">Última atualização: Julho 2026</p>
          </div>
        </section>

        <section className="py-20 bg-background dark:bg-slate-950 text-slate-700 dark:text-slate-300">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-6 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Propriedade e Termos Gerais</h2>
            <p>
              O uso deste website é regulado pelos seguintes termos e condições. Ao navegar no portal institucional da MWANA, o utilizador concorda em cumprir e vincular-se a estes termos. Se não concordar com qualquer parte, solicitamos que não continue a utilizar o website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Propriedade Intelectual</h2>
            <p>
              Todos os materiais contidos neste portal (incluindo textos, padrões gráficos africanos personalizados, logótipos oficiais, descrições de projetos e relatórios de transparência em PDF) são de propriedade exclusiva da MWANA ou de parceiros licenciantes, estando sob a salvaguarda das leis de direitos de autor aplicáveis.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Uso Permitido</h2>
            <p>
              O utilizador pode visualizar, descarregar relatórios de atividades para uso pessoal não-comercial e partilhar informações das nossas frentes de educação e saúde rurais desde que referencie a MWANA adequadamente. É estritamente proibido utilizar qualquer conteúdo deste portal para denegrir ou promover atos racistas, difamatórios ou contrários aos direitos básicos da infância angolana.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Isenção de Responsabilidade</h2>
            <p>
              A informação contida neste website serve propósitos institucionais informativos e de captação de voluntariado e doações. Embora façamos todos os esforços para garantir que a prestação de contas e descrição das campanhas estão atualizadas, a MWANA não oferece garantias absolutas e isenta-se de qualquer prejuízo pelo uso incorreto das informações.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Links para Terceiros</h2>
            <p>
              Este website contém links para sites terceiros (como prestadoras de processamento de pagamentos ou redes de parceiros). Não temos qualquer controlo sobre as suas políticas e práticas, pelo que declinamos qualquer responsabilidade legal decorrente do uso dessas ligações externas.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
