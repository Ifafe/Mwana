import Head from "next/head";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Layout";
import { AfricanPattern } from "../components/AfricanPattern";
import {
  angolaProvinces,
  shelterCenters,
  supportNetworkContacts,
  type ShelterCenter,
} from "../data/siteData";
import {
  PhoneCall,
  MapPin,
  Navigation,
  Search,
  Check,
  ExternalLink,
  LocateFixed,
} from "lucide-react";

interface UserCoords {
  lat: number;
  lng: number;
}

interface CenterRegistrationForm {
  nomeCentro: string;
  responsavel: string;
  telefone: string;
  email: string;
  provincia: string;
  municipio: string;
  endereco: string;
  regime: "24h" | "Diurno";
  capacidade: string;
  servicos: string;
  compromisso: boolean;
}

function haversineDistanceKm(a: UserCoords, b: { lat: number; lng: number }): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  if (km < 20) return `${km.toFixed(1).replace(".", ",")} km`;
  return `${Math.round(km)} km`;
}

export default function Centros() {
  const [userCoords, setUserCoords] = useState<UserCoords | null>(null);
  const [geoStatus, setGeoStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [geoMessage, setGeoMessage] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Todas");
  const [regimeFilter, setRegimeFilter] = useState<"Todos" | "24h" | "Diurno">("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [registered, setRegistered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CenterRegistrationForm>({
    defaultValues: { regime: "24h" },
  });

  const handleLocateUser = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setGeoStatus("error");
      setGeoMessage(
        "O seu navegador não suporta geolocalização. Selecione a província abaixo para encontrar o centro mais próximo."
      );
      return;
    }

    setGeoStatus("loading");
    setGeoMessage("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setSelectedProvince("Todas");
        setGeoStatus("ready");
        setGeoMessage("Centros ordenados por proximidade a partir da sua localização atual.");
      },
      () => {
        setGeoStatus("error");
        setGeoMessage(
          "Localização automática indisponível. Escolha a província ou pesquise pelo município abaixo."
        );
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const availableProvinces = useMemo(() => {
    return Array.from(new Set(shelterCenters.map((c) => c.province))).sort();
  }, []);

  const filteredCenters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const enriched: Array<ShelterCenter & { distanceKm?: number }> = shelterCenters
      .filter((center) => {
        if (selectedProvince !== "Todas" && center.province !== selectedProvince) {
          return false;
        }
        if (regimeFilter !== "Todos" && center.regime !== regimeFilter) {
          return false;
        }
        if (!query) return true;
        return (
          center.name.toLowerCase().includes(query) ||
          center.municipality.toLowerCase().includes(query) ||
          center.province.toLowerCase().includes(query) ||
          center.address.toLowerCase().includes(query)
        );
      })
      .map((center) => ({
        ...center,
        distanceKm: userCoords ? haversineDistanceKm(userCoords, center) : undefined,
      }));

    if (userCoords) {
      enriched.sort((a, b) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity));
    }

    return enriched;
  }, [selectedProvince, regimeFilter, searchQuery, userCoords]);

  const nearestCenter = userCoords && filteredCenters.length > 0 ? filteredCenters[0] : null;

  const onRegisterCenter = () => {
    setRegistered(true);
    reset();
    setTimeout(() => setRegistered(false), 9000);
  };

  return (
    <>
      <Head>
        <title>Centros de Acolhimento e Rede de Apoio | MWANA Angola</title>
        <meta
          name="description"
          content="Encontrou uma criança em situação de vulnerabilidade? Localize o centro de acolhimento mais próximo em Angola, acione a rede de apoio 24h ou cadastre o seu centro."
        />
      </Head>

      <Layout>
        {/* Action-first editorial header */}
        <section className="relative bg-slate-950 text-white overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div className="absolute inset-0">
            <img
              src="/images/projeto-protecao-luanda.jpg"
              alt="Centro de acolhimento e proteção infantil da MWANA em Angola"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950" />
          </div>

          <AfricanPattern className="text-white" opacity={0.04} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <p className="border-l-2 border-terracotta pl-3.5 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                Proteção Infantil · Resposta Imediata
              </p>

              <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight">
                Encontrou uma criança em risco? Ache o centro mais próximo.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Localize um centro de acolhimento verificado perto de si, acione as linhas oficiais de proteção em Angola ou registe a sua instituição na rede MWANA.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    handleLocateUser();
                    document.getElementById("localizador")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent text-slate-950 font-bold px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition hover:bg-yellow-400"
                >
                  <LocateFixed size={16} />
                  Achar centro mais perto
                </button>

                <a
                  href="tel:15015"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-white font-bold px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition hover:bg-red-700"
                >
                  <PhoneCall size={15} />
                  SOS Criança · 15015
                </a>

                <a
                  href="#cadastrar"
                  className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white underline underline-offset-4 px-2 py-2"
                >
                  Cadastre o seu centro
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support Network Strip + 3-step Guidance */}
        <section
          id="rede-de-apoio"
          className="scroll-mt-24 py-16 bg-sand-100/80 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta dark:text-red-400">
                  Rede de Apoio em Angola
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Linhas de resposta imediata
                </h2>

                <div className="mt-6 grid sm:grid-cols-2 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 dark:divide-slate-800">
                  {supportNetworkContacts.map((contact, idx) => (
                    <a
                      key={contact.name}
                      href={contact.telHref}
                      className={`group p-6 flex flex-col justify-between hover:bg-sand-50 dark:hover:bg-slate-900/70 transition-colors ${
                        idx >= 2 ? "sm:border-t border-slate-200/80 dark:border-slate-800" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          <span>{contact.availability}</span>
                          <PhoneCall
                            size={14}
                            className="text-brand dark:text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-blue-400 tabular-nums tracking-tight transition-colors">
                          {contact.number}
                        </p>
                        <h3 className="mt-0.5 text-sm font-bold text-slate-800 dark:text-slate-200">
                          {contact.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {contact.role}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Clean typographic 3-step protocol */}
              <div className="lg:border-l border-slate-200 dark:border-slate-800 lg:pl-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  Procedimento Seguro
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white">
                  O que fazer ao encontrar uma criança
                </h3>

                <ol className="mt-6 space-y-6 text-sm text-slate-600 dark:text-slate-300">
                  <li className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-serif italic text-lg font-semibold text-brand dark:text-blue-400">
                      01
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5">
                        Garanta segurança num local visível
                      </strong>
                      Acalme a criança e permaneça num espaço público ou junto de autoridades locais (administração, esquadra ou posto de saúde).
                    </div>
                  </li>
                  <li className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-serif italic text-lg font-semibold text-brand dark:text-blue-400">
                      02
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5">
                        Ligue antes de se deslocar
                      </strong>
                      Contacte o <strong>15015</strong> (SOS Criança) ou o centro mais próximo abaixo para confirmar receção imediata e registo oficial.
                    </div>
                  </li>
                  <li className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-serif italic text-lg font-semibold text-terracotta dark:text-red-400">
                      03
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5">
                        Não divulgue fotos nas redes sociais
                      </strong>
                      Expor a imagem ou localização de um menor vulnerável coloca-o em risco. Partilhe os dados apenas com autoridades e centros acreditados.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Shelter Center Locator */}
        <section id="localizador" className="scroll-mt-24 py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  Diretório Verificado
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Centros de Acolhimento
                </h2>
                <p className="mt-2.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  Ative a localização para ordenar pela menor distância ou filtre por província e município.
                </p>
              </div>

              <button
                type="button"
                onClick={handleLocateUser}
                disabled={geoStatus === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white font-bold px-6 py-3 text-xs uppercase tracking-wider transition hover:bg-brand-dark disabled:opacity-60 self-start lg:self-auto"
              >
                <LocateFixed size={15} />
                {geoStatus === "loading" ? "A obter localização..." : "Usar minha localização"}
              </button>
            </div>

            {geoMessage && (
              <p
                className={`mt-5 text-xs sm:text-sm font-medium border-l-2 pl-3.5 py-1 ${
                  geoStatus === "ready"
                    ? "border-emerald-600 text-emerald-800 dark:text-emerald-300"
                    : "border-amber-600 text-amber-800 dark:text-amber-200"
                }`}
              >
                {geoMessage}
              </p>
            )}

            {/* Nearest center spotlight */}
            {nearestCenter && (
              <div className="mt-7 rounded-2xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-brand bg-white dark:bg-slate-900 p-6 shadow-card flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand dark:text-blue-400 tabular-nums">
                    Centro mais próximo
                    {nearestCenter.distanceKm !== undefined
                      ? ` · ≈ ${formatDistance(nearestCenter.distanceKm)}`
                      : ""}
                  </p>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {nearestCenter.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {nearestCenter.address} · {nearestCenter.municipality}, {nearestCenter.province}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 flex-shrink-0">
                  <a
                    href={`tel:${nearestCenter.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand text-white font-bold px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-brand-dark transition"
                  >
                    <PhoneCall size={14} />
                    Ligar agora
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${nearestCenter.lat},${nearestCenter.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold px-5 py-2.5 text-xs uppercase tracking-wider hover:border-brand transition"
                  >
                    <Navigation size={14} />
                    Abrir rota
                  </a>
                </div>
              </div>
            )}

            {/* Filters Bar */}
            <div className="mt-8 grid gap-3.5 md:grid-cols-[1.5fr_1fr_auto]">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar por bairro, município ou nome do centro..."
                  aria-label="Pesquisar centro de acolhimento"
                  className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none"
                />
              </div>

              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                aria-label="Filtrar por província"
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none"
              >
                <option value="Todas">Todas as províncias ({shelterCenters.length})</option>
                {availableProvinces.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>

              <div className="inline-flex rounded-xl bg-sand-100 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800">
                {(["Todos", "24h", "Diurno"] as const).map((regime) => (
                  <button
                    key={regime}
                    type="button"
                    onClick={() => setRegimeFilter(regime)}
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition-colors ${
                      regimeFilter === regime
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {regime === "24h" ? "24h" : regime}
                  </button>
                ))}
              </div>
            </div>

            {/* Centers Directory — Clean hairline list/grid without pill clutter */}
            {filteredCenters.length === 0 ? (
              <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center space-y-3">
                <p className="text-base font-bold text-slate-900 dark:text-white">
                  Nenhum centro encontrado com estes filtros.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Caso esteja numa província sem centro listado, ligue de imediato para a linha gratuita{" "}
                  <a href="tel:15015" className="font-bold text-brand dark:text-blue-400 underline">
                    SOS Criança (15015)
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProvince("Todas");
                    setRegimeFilter("Todos");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400 underline underline-offset-4"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="mt-8 grid gap-px bg-slate-200/80 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden md:grid-cols-2">
                {filteredCenters.map((center) => (
                  <article
                    key={center.id}
                    className="flex flex-col justify-between bg-white dark:bg-slate-900 p-6 sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <span className="inline-flex items-center gap-2 font-semibold text-slate-600 dark:text-slate-300">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              center.regime === "24h" ? "bg-emerald-500" : "bg-brand dark:bg-blue-400"
                            }`}
                          />
                          {center.regime === "24h" ? "Acolhimento 24h" : "Regime Diurno"} · {center.ageRange}
                        </span>

                        {center.distanceKm !== undefined ? (
                          <span className="font-extrabold text-brand dark:text-blue-400 tabular-nums">
                            {formatDistance(center.distanceKm)}
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            {center.province}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-lg font-extrabold text-slate-900 dark:text-white">
                        {center.name}
                      </h3>

                      <p className="mt-2 flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <MapPin size={15} className="text-slate-400 flex-shrink-0 mt-1" />
                        <span>
                          {center.address} — {center.municipality}, {center.province}
                        </span>
                      </p>

                      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                        {center.services.join(" · ")}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <a
                        href={`tel:${center.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand dark:text-blue-400 hover:underline tabular-nums"
                      >
                        <PhoneCall size={14} />
                        {center.phone}
                      </a>

                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-blue-400 transition-colors"
                      >
                        <Navigation size={13} />
                        Rota no mapa
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Register Your Center ("Cadastre o seu centro") */}
        <section
          id="cadastrar"
          className="scroll-mt-24 py-24 bg-sand-100/75 dark:bg-slate-900/50 border-t border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.35fr] items-start">
              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                  Rede de Associados
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Cadastre o seu centro de acolhimento
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Lares infantis, centros temporários e associações comunitárias em Angola podem integrar a rede MWANA para encaminhamentos coordenados, formação técnica e apoio logístico.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-slate-300 dark:border-slate-700 pl-3.5">
                  Todos os pedidos passam por verificação documental e visita técnica antes da publicação no diretório público.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-card">
                {registered ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <Check size={22} />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      Pedido de registo recebido
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      A coordenação da rede entrará em contacto em até 5 dias úteis para agendar a verificação do centro.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onRegisterCenter)} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Nome do Centro / Associação
                        </label>
                        <input
                          type="text"
                          {...register("nomeCentro", { required: "Indique o nome do centro" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.nomeCentro && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.nomeCentro.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Responsável / Direção
                        </label>
                        <input
                          type="text"
                          {...register("responsavel", { required: "Indique o nome do responsável" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.responsavel && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.responsavel.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Telefone Direto
                        </label>
                        <input
                          type="tel"
                          placeholder="+244 9XX XXX XXX"
                          {...register("telefone", { required: "O telefone é obrigatório" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.telefone && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.telefone.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Email Institucional
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

                    <div className="grid gap-5 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Província
                        </label>
                        <select
                          {...register("provincia", { required: "Selecione a província" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        >
                          <option value="">Selecione...</option>
                          {angolaProvinces.map((prov) => (
                            <option key={prov} value={prov}>
                              {prov}
                            </option>
                          ))}
                        </select>
                        {errors.provincia && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.provincia.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Município
                        </label>
                        <input
                          type="text"
                          {...register("municipio", { required: "Indique o município" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.municipio && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.municipio.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Regime
                        </label>
                        <select
                          {...register("regime")}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        >
                          <option value="24h">Acolhimento 24h</option>
                          <option value="Diurno">Regime Diurno</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-[1.6fr_0.8fr]">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Endereço / Referência
                        </label>
                        <input
                          type="text"
                          placeholder="Rua, bairro e ponto de referência"
                          {...register("endereco", { required: "Indique o endereço do centro" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.endereco && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.endereco.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Capacidade (vagas)
                        </label>
                        <input
                          type="number"
                          min={1}
                          placeholder="Ex.: 30"
                          {...register("capacidade", { required: "Indique a capacidade" })}
                          className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        />
                        {errors.capacidade && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.capacidade.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Serviços Prestados e Faixa Etária
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ex.: Acolhimento temporário de 0 a 14 anos, apoio escolar, nutrição e mediação familiar..."
                        {...register("servicos", { required: "Descreva brevemente os serviços" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white resize-none"
                      />
                      {errors.servicos && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.servicos.message}</p>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="compromisso-centro"
                        type="checkbox"
                        {...register("compromisso", {
                          required: "É obrigatório confirmar o compromisso de salvaguarda infantil",
                        })}
                        className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-brand focus:ring-brand mt-1"
                      />
                      <label
                        htmlFor="compromisso-centro"
                        className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        Confirmo que o centro está legalmente constituído ou em articulação com as autoridades locais e aceita a visita técnica e a política de salvaguarda infantil da MWANA.
                      </label>
                    </div>
                    {errors.compromisso && (
                      <p className="text-xs text-red-600 dark:text-red-400">{errors.compromisso.message}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-full bg-brand text-white font-bold py-4 text-xs uppercase tracking-wider transition hover:bg-brand-dark"
                    >
                      Submeter Pedido de Registo
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
