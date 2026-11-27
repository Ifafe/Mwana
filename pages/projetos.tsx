import Head from "next/head";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";
import { AfricanPattern } from "../components/AfricanPattern";
import { allProjects } from "../data/siteData";
import { Search } from "lucide-react";

export default function Projetos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = useMemo(() => {
    const cats = new Set(allProjects.map((p) => p.category));
    return ["Todos", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todos" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Head>
        <title>Nossos Projetos | MWANA Angola</title>
        <meta
          name="description"
          content="Conheça as iniciativas da MWANA nas províncias de Angola. Projetos focados em educação escolar, saneamento básico, saúde móvel e proteção da infância."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0">
            <img
              src="/images/hero-angola.jpg"
              alt="Crianças angolanas a caminho da escola no Huambo"
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
              Nossos Projetos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium"
            >
              Navegue pelas nossas frentes de atuação no interior e nas capitais de província em Angola.
            </motion.p>
          </div>
        </section>

        {/* Filter and Content section */}
        <section className="py-20 bg-background dark:bg-slate-950 relative overflow-hidden">
          <AfricanPattern className="text-slate-900 dark:text-white" opacity={0.015} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between pb-10 border-b border-slate-200/80 dark:border-slate-800">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-brand text-white shadow-sm"
                        : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand/40 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="Pesquisar por província ou tema..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pl-11 pr-5 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-colors"
                />
                <Search className="absolute left-4 top-3.5 text-slate-400" size={16} />
              </div>
            </div>

            {/* Grid display */}
            <div className="mt-14">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-slate-500 dark:text-slate-400 text-lg">
                    Nenhum projeto encontrado para os filtros selecionados.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Todos");
                    }}
                    className="mt-4 inline-flex items-center text-sm font-bold text-brand hover:underline"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.slug}
                        layout
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          category={project.category}
                          image={project.image}
                          location={project.location}
                          percent={project.percent}
                          href={`/projetos/${project.slug}`}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
