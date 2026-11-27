import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { AfricanPattern } from "../components/AfricanPattern";
import { faqItems, contactDetails } from "../data/siteData";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, ChevronUp } from "lucide-react";

interface ContactoFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export default function Contactos() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactoFormData>();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Contactos e FAQ | MWANA Angola</title>
        <meta
          name="description"
          content="Fale com a equipa da MWANA em Luanda. Envie dúvidas, sugestões ou pedidos de informação geral e consulte as perguntas frequentes."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/noticia-dia-crianca.jpg"
              alt="Crianças angolanas sorrindo em atividade comunitária"
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
              Fale Connosco
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Envie-nos uma mensagem, apresente uma proposta ou conheça os nossos canais de atendimento em Luanda.
            </motion.p>
          </div>
        </section>

        {/* Contact info and Form */}
        <section className="py-24 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-blue-400">
                    Escritórios
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Sede em Luanda
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    A partir de Luanda coordenamos as operações logísticas, a articulação institucional e as brigadas que atuam no Huambo, Moxico, Benguela e Cabinda.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 space-y-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Morada</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {contactDetails.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Telemóvel</p>
                      <a
                        href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand dark:hover:text-blue-400 mt-0.5 block"
                      >
                        {contactDetails.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Correio Eletrónico</p>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand dark:hover:text-blue-400 mt-0.5 block"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 dark:bg-slate-800 text-brand dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Horário de Atendimento</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {contactDetails.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-card space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Envie uma Mensagem
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Os seus dados são tratados com confidencialidade e respondidos pelo nosso secretariado em até 48 horas úteis.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl text-center space-y-2"
                  >
                    <p className="font-bold text-lg">Mensagem Enviada</p>
                    <p className="text-sm">
                      Obrigado pelo seu contacto. Um membro da nossa equipa responderá com a maior brevidade.
                    </p>
                  </motion.div>
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
                          placeholder="O seu nome"
                        />
                        {errors.nome && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.nome.message}</p>}
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
                          placeholder="exemplo@mail.com"
                        />
                        {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Assunto
                      </label>
                      <input
                        type="text"
                        {...register("assunto", { required: "O assunto é obrigatório" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white"
                        placeholder="Ex: Pedido de informação, parcerias..."
                      />
                      {errors.assunto && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.assunto.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        rows={4}
                        {...register("mensagem", { required: "A mensagem é obrigatória" })}
                        className="w-full rounded-xl bg-sand-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none dark:text-white resize-none"
                        placeholder="Escreva a sua mensagem..."
                      />
                      {errors.mensagem && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.mensagem.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-full bg-brand text-white font-bold py-4 text-center text-xs uppercase tracking-wider transition hover:bg-brand-dark shadow-sm gap-2"
                    >
                      <Send size={14} /> Enviar Mensagem
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 bg-sand-100/75 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Esclarecimentos"
              title="Perguntas Frequentes (FAQ)"
              description="Respostas diretas sobre gestão de fundos, mecenato em Angola, províncias de atuação e voluntariado."
            />

            <div className="mt-14 space-y-4">
              {faqItems.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 text-left font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center justify-between gap-4"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-brand dark:text-blue-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-brand dark:text-blue-400 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Map Card */}
        <section className="py-20 bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-card aspect-[21/9] w-full min-h-[300px]">
              <iframe
                title="Localização Sede MWANA em Luanda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.120786968037!2d13.23000575!3d-8.8155556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3b0c102a9e5%3A0x7d6f5c5b2e04e9c7!2sLuanda%2C%20Angola!5e0!3m2!1spt!2spt!4v1721323456789!5m2!1spt!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-110 dark:invert dark:opacity-85"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
