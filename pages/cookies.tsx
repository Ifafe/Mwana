import Head from "next/head";
import { Layout } from "../components/Layout";
import { AfricanPattern } from "../components/AfricanPattern";

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies | MWANA Angola</title>
      </Head>

      <Layout>
        <section className="relative bg-slate-950 text-white overflow-hidden py-24 sm:py-32">
          <AfricanPattern className="text-white" opacity={0.06} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Política de Cookies</h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base font-medium">Última atualização: Julho 2026</p>
          </div>
        </section>

        <section className="py-20 bg-background dark:bg-slate-950 text-slate-700 dark:text-slate-300">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-6 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos ficheiros de texto guardados no seu computador ou dispositivo móvel através do navegador de internet, retendo apenas informação genérica relacionada com as preferências de navegação dos utilizadores no portal institucional da MWANA.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Como os Utilizamos</h2>
            <p>
              Utilizamos cookies para melhorar e otimizar a experiência visual do utilizador. Especificamente, recorremos aos seguintes tipos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies Necessários:</strong> Cruciais para o funcionamento técnico básico do website (ex: navegação de páginas e segurança).</li>
              <li><strong>Cookies de Preferência:</strong> Utilizados para reter as escolhas do utilizador, tais como a seleção de cor ativa do Dark Mode (claro/escuro).</li>
              <li><strong>Cookies de Desempenho:</strong> Recolha anónima e agregada sobre como os utilizadores utilizam o nosso website (ex: quais os relatórios descarregados com mais frequência).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Gestão e Desativação</h2>
            <p>
              O utilizador pode, em qualquer altura, configurar o seu navegador para aceitar, recusar ou eliminar cookies. Por favor note que desativar alguns cookies fundamentais pode impedir que determinadas funcionalidades de formulários ou o simulador de doação operem corretamente. Referencie as secções de Ajuda (Help) do seu browser preferido para mais esclarecimentos sobre a gestão de cookies.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
