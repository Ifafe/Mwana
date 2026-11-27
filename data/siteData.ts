export const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Centros", href: "/centros" },
  { label: "Serviços", href: "/servicos" },
  { label: "Programas", href: "/programas" },
  { label: "Projetos", href: "/projetos" },
  { label: "Voluntariado", href: "/voluntariado" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contactos", href: "/contactos" },
];

export const heroStats = [
  { value: "+25.000", label: "Crianças apoiadas" },
  { value: "+80", label: "Projetos executados" },
  { value: "+150", label: "Voluntários ativos" },
  { value: "5", label: "Províncias em Angola" },
];

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  target: string;
  raised: string;
  percent: number;
  beneficiaries: string;
  status: "Ativo" | "Concluído";
  date: string;
  content: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    slug: "educacao-para-todos-huambo",
    title: "Educação Para Todos (Huambo)",
    description:
      "Construção de salas de aula, distribuição de kits escolares e capacitação de professores locais para ampliar o acesso ao ensino primário.",
    category: "Educação",
    image: "/images/sobre-educacao-huambo.jpg",
    location: "Huambo, Angola",
    target: "45.000.000 Kz",
    raised: "37.500.000 Kz",
    percent: 83,
    beneficiaries: "1.200 Crianças",
    status: "Ativo",
    date: "Início: Jan 2026",
    content:
      "O projeto 'Educação Para Todos' combate as barreiras de acesso ao ensino primário no Planalto Central, na província do Huambo. Através da construção de salas de aula resilientes e da entrega de manuais escolares, apoiamos centenas de crianças que antes estudavam ao ar livre. O envolvimento das famílias é central: trabalhamos diretamente com pais, encarregados de educação e direções escolares na gestão participativa.",
  },
  {
    slug: "brigadas-de-saude-moxico",
    title: "Brigadas de Saúde Móveis (Moxico)",
    description:
      "Atendimento pré-natal móvel, vacinação pediátrica e suplementação nutricional em comunidades rurais distantes dos centros hospitalares.",
    category: "Saúde",
    image: "/images/projeto-saude-moxico.jpg",
    location: "Moxico, Angola",
    target: "30.000.000 Kz",
    raised: "24.000.000 Kz",
    percent: 80,
    beneficiaries: "3.550 Famílias",
    status: "Ativo",
    date: "Início: Mar 2026",
    content:
      "Dada a vasta extensão territorial da província do Moxico, muitas famílias vivem a dezenas de quilómetros do posto de saúde mais próximo. As nossas Brigadas de Saúde Móveis deslocam-se com enfermeiros, pediatras e técnicos de nutrição para realizar consultas de rotina, vacinar recém-nascidos e distribuir papas fortificadas no combate à desnutrição infantil.",
  },
  {
    slug: "crescer-protegido-luanda",
    title: "Crescer Protegido (Luanda)",
    description:
      "Centros de acolhimento diurno, acompanhamento psicossocial e apoio à reintegração familiar para crianças em situação de vulnerabilidade urbana.",
    category: "Proteção",
    image: "/images/projeto-protecao-luanda.jpg",
    location: "Luanda, Angola",
    target: "55.000.000 Kz",
    raised: "29.000.000 Kz",
    percent: 53,
    beneficiaries: "600 Crianças",
    status: "Ativo",
    date: "Início: Fev 2026",
    content:
      "A vulnerabilidade infantil nos bairros periféricos de Luanda exige uma resposta próxima e multidisciplinar. O Centro Crescer Protegido oferece acolhimento diurno seguro, refeições equilibradas, reforço escolar, oficinas de expressão artística e mediação familiar orientada para o regresso estável da criança ao convívio da sua família.",
  },
];

export const allProjects: ProjectItem[] = [
  ...featuredProjects,
  {
    slug: "agua-viva-benguela",
    title: "Água Viva nas Escolas (Benguela)",
    description:
      "Instalação de furos de água potável movidos a energia solar e blocos sanitários em escolas rurais da província de Benguela.",
    category: "Desenvolvimento",
    image: "/images/projeto-agua-benguela.jpg",
    location: "Benguela, Angola",
    target: "20.000.000 Kz",
    raised: "20.000.000 Kz",
    percent: 100,
    beneficiaries: "2.000 Alunos",
    status: "Concluído",
    date: "Concluído: Jun 2026",
    content:
      "A falta de água potável e saneamento nas escolas é uma das principais causas do absentismo escolar, sobretudo entre raparigas. Este projeto instalou chafarizes alimentados por painéis solares e construiu blocos sanitários dignos em escolas periféricas de Benguela, promovendo saúde, higiene e permanência escolar.",
  },
  {
    slug: "inclusao-pelo-desporto",
    title: "Inclusão Social pelo Desporto (Cabinda)",
    description:
      "Escolinhas de futebol e atletismo aliadas à formação cívica e ao acompanhamento escolar para crianças e jovens de bairros periféricos.",
    category: "Inclusão",
    image: "/images/projeto-desporto-cabinda.jpg",
    location: "Cabinda, Angola",
    target: "12.000.000 Kz",
    raised: "7.200.000 Kz",
    percent: 60,
    beneficiaries: "450 Jovens",
    status: "Ativo",
    date: "Início: Abr 2026",
    content:
      "O desporto é um poderoso elo de coesão comunitária. Em parceria com treinadores e clubes locais em Cabinda, as escolinhas combinam treinos regulares de futebol e atletismo com sessões de mentoria sobre cidadania, resolução pacífica de conflitos e incentivo à assiduidade escolar.",
  },
];

export const newsArticles = [
  {
    slug: "mwana-parceria-ministerio-educacao",
    title: "MWANA assina acordo de cooperação para formação docente no sul de Angola",
    summary:
      "O novo protocolo vai alargar o programa de capacitação pedagógica a mais de 500 professores do ensino primário em comunidades rurais.",
    category: "Institucional",
    date: "14 de Julho, 2026",
    author: "Gabinete de Comunicação",
    image: "/images/noticia-formacao-docentes.jpg",
    content:
      "A MWANA formalizou esta semana um protocolo de cooperação técnica com as delegações provinciais de educação. A iniciativa introduz metodologias participativas de ensino e recursos didáticos adaptados às salas de aula rurais, com o objetivo de reduzir o abandono escolar e tornar o ambiente de aprendizagem mais acolhedor para cada criança.",
  },
  {
    slug: "impacto-doacoes-primeiro-semestre",
    title: "Como as doações chegaram a 5.000 crianças no primeiro semestre de 2026",
    summary:
      "Publicamos o balanço de impacto das campanhas de vacinação pediátrica e acesso a água potável realizadas entre Janeiro e Junho.",
    category: "Transparência",
    date: "28 de Junho, 2026",
    author: "Direção de Programas",
    image: "/images/projeto-agua-benguela.jpg",
    content:
      "Graças ao apoio contínuo de doadores individuais e parceiros institucionais, o primeiro semestre de 2026 trouxe avanços concretos no terreno. Alargámos as brigadas pediátricas móveis no Moxico e assegurámos vacinação básica, suplementação nutricional e acesso a água limpa a mais de 5.000 crianças. Todos os dados financeiros e pareceres de auditoria encontram-se disponíveis no portal de transparência.",
  },
  {
    slug: "dia-da-crianca-angolana-celebrado",
    title: "Dia da Criança Angolana: Cultura, jogos e cidadania em Luanda e Huambo",
    summary:
      "As celebrações reuniram centenas de crianças, famílias e voluntários em atividades artísticas, desportivas e de sensibilização comunitária.",
    category: "Comunidade",
    date: "01 de Junho, 2026",
    author: "Equipa de Voluntariado",
    image: "/images/noticia-dia-crianca.jpg",
    content:
      "O Dia da Criança foi celebrado com teatro infantil, pintura, jogos tradicionais angolanos e entrega de materiais pedagógicos nos nossos centros comunitários de Luanda e Huambo. O encontro reforçou também a mobilização da sociedade civil em torno dos direitos fundamentais da infância e da proteção contra qualquer forma de violência ou trabalho infantil.",
  },
];

export interface PartnerItem {
  name: string;
  acronym: string;
  sector: string;
  accent: string;
}

export const partnerLogos: PartnerItem[] = [
  { name: "Banco de Fomento Angola", acronym: "BFA", sector: "Mecenato Bancário", accent: "#E07A00" },
  { name: "União Europeia em Angola", acronym: "UE", sector: "Cooperação Internacional", accent: "#003399" },
  { name: "Unitel Solidária", acronym: "UNITEL", sector: "Responsabilidade Social", accent: "#E65100" },
  { name: "Fundação Angola Viva", acronym: "FAV", sector: "Filantropia Nacional", accent: "#0052B4" },
  { name: "Camões · Embaixada de Portugal", acronym: "PT", sector: "Cooperação Bilateral", accent: "#15803D" },
  { name: "Cooperação Suíça", acronym: "SDC", sector: "Desenvolvimento Rural", accent: "#C53030" },
];

export const programCards = [
  {
    title: "Proteção Infantil",
    description:
      "Políticas de salvaguarda, prevenção de riscos sociais e criação de espaços seguros de acolhimento, lazer e aprendizagem para crianças vulneráveis.",
  },
  {
    title: "Educação Inclusiva",
    description:
      "Reabilitação de escolas rurais, formação contínua de professores de comunidades isoladas e entrega de kits escolares e materiais pedagógicos.",
  },
  {
    title: "Saúde e Nutrição",
    description:
      "Rastreio e combate à desnutrição infantil, vacinação comunitária através de brigadas móveis, educação sanitária e acesso sustentável a água potável.",
  },
  {
    title: "Desenvolvimento Comunitário",
    description:
      "Fortalecimento das famílias rurais através de pequenas cooperativas agrícolas, literacia financeira e fomento do empreendedorismo feminino local.",
  },
];

export const teamMembers = [
  {
    name: "Dr. Domingos Kassoma",
    initials: "DK",
    role: "Diretor Executivo e Fundador",
    bio: "Mais de 15 anos de experiência na gestão de programas de desenvolvimento social e políticas públicas de infância em Angola e na África Austral.",
  },
  {
    name: "Amélia Lemos",
    initials: "AL",
    role: "Coordenadora de Saúde e Nutrição",
    bio: "Enfermeira especialista em saúde pública e nutrição pediátrica comunitária, liderando as nossas brigadas móveis no interior há 5 anos.",
  },
  {
    name: "Eng. Pedro Zua",
    initials: "PZ",
    role: "Gestor de Infraestruturas e Logística",
    bio: "Engenheiro civil dedicado a projetos de saneamento básico, salas de aula resilientes e sistemas solares de captação de água potável.",
  },
  {
    name: "Paula Vunge",
    initials: "PV",
    role: "Diretora Financeira e Transparência",
    bio: "Contabilista certificada pela OCPCA com sólida experiência em auditoria de fundos de cooperação internacional e prestação de contas.",
  },
];

export const donationPlans = [
  {
    title: "Doação Única",
    price: "Valor livre",
    description:
      "Permite-nos responder rapidamente a emergências pediátricas, campanhas de vacinação ou aquisição imediata de kits escolares.",
  },
  {
    title: "Apoio Mensal",
    price: "Desde 5.000 Kz/mês",
    description:
      "Assegura a continuidade de um centro de acolhimento diurno, garantindo refeições nutritivas e acompanhamento escolar regular.",
  },
  {
    title: "Parceiro Corporativo",
    price: "Planos Anuais",
    description:
      "Programas estruturados de responsabilidade social corporativa com relatórios de impacto e dedutibilidade fiscal prevista em lei.",
  },
];

export const transparencyReports = [
  {
    title: "Relatório de Atividades e Impacto Anual 2025",
    description:
      "Resultados por província, número de beneficiários alcançados, balanço patrimonial e parecer do auditor independente.",
    size: "4.2 MB",
    date: "Março 2026",
  },
  {
    title: "Prestação de Contas Trimestral — Q1 2026",
    description:
      "Detalhamento de receitas de cooperação internacional, doações privadas e respetiva alocação nos projetos de campo.",
    size: "1.8 MB",
    date: "Maio 2026",
  },
  {
    title: "Plano Estratégico de Intervenção 2026–2028",
    description:
      "Metas organizacionais de proteção infantil, escolarização e saúde comunitária para os próximos três anos em Angola.",
    size: "3.5 MB",
    date: "Janeiro 2026",
  },
];

export const faqItems = [
  {
    question: "Como são geridos os fundos recebidos pela MWANA?",
    answer:
      "Os fundos são alocados diretamente aos projetos escolhidos pelo doador ou ao fundo de resposta prioritária. 87% de cada kwanza recebido é aplicado diretamente em atividades no terreno, enquanto 13% cobre gestão administrativa, auditoria e logística. As nossas contas são auditadas anualmente por gabinetes independentes certificados pela OCPCA.",
  },
  {
    question: "Como posso candidatar-me a voluntário em Angola?",
    answer:
      "Basta preencher o formulário na página de Voluntariado. Aceitamos voluntários residentes em Angola e internacionais. Após a submissão, a nossa equipa analisa o perfil e agenda uma entrevista de enquadramento numa das áreas de atuação (educação, saúde, logística ou comunicação).",
  },
  {
    question: "Em que províncias de Angola atua a MWANA?",
    answer:
      "Atualmente concentramos operações permanentes em Luanda, Huambo, Moxico, Benguela e Cabinda, priorizando comunidades rurais e bairros periféricos com maior índice de vulnerabilidade infantil.",
  },
  {
    question: "As doações de empresas têm enquadramento fiscal em Angola?",
    answer:
      "Sim. A MWANA é uma associação de utilidade pública legalmente registada em Angola. Emitimos recibos oficiais de doação enquadráveis na Lei do Mecenato vigente para efeitos de dedutibilidade fiscal empresarial.",
  },
];

export const contactDetails = {
  email: "contacto@mwana.org",
  phone: "+244 912 345 678",
  address: "Rua da Esperança 121, Ingombota, Luanda, Angola",
  hours: "Segunda a Sexta-feira, das 8h00 às 17h00",
};

export const angolaProvinces = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

export interface ShelterCenter {
  id: string;
  name: string;
  province: string;
  municipality: string;
  address: string;
  phone: string;
  regime: "24h" | "Diurno";
  ageRange: string;
  capacityStatus: "Vagas disponíveis" | "Acolhimento de emergência";
  services: string[];
  lat: number;
  lng: number;
  verified: boolean;
}

export const shelterCenters: ShelterCenter[] = [
  {
    id: "centro-crescer-protegido-luanda",
    name: "Centro de Acolhimento Crescer Protegido",
    province: "Luanda",
    municipality: "Cazenga",
    address: "Rua dos Comandos, Bairro Hoji-ya-Henda, Cazenga",
    phone: "+244 923 410 112",
    regime: "24h",
    ageRange: "0 a 14 anos",
    capacityStatus: "Acolhimento de emergência",
    services: ["Acolhimento imediato", "Apoio psicossocial", "Mediação familiar"],
    lat: -8.8265,
    lng: 13.2894,
    verified: true,
  },
  {
    id: "casa-esperanca-viana",
    name: "Casa Esperança de Viana",
    province: "Luanda",
    municipality: "Viana",
    address: "Zango 1, Travessa da Escola Primária nº 5012, Viana",
    phone: "+244 924 618 205",
    regime: "24h",
    ageRange: "4 a 16 anos",
    capacityStatus: "Vagas disponíveis",
    services: ["Acolhimento temporário", "Reforço escolar", "Enfermaria básica"],
    lat: -8.9838,
    lng: 13.4122,
    verified: true,
  },
  {
    id: "centro-ingombota-diurno",
    name: "Espaço Seguro MWANA — Ingombota",
    province: "Luanda",
    municipality: "Ingombota",
    address: "Rua da Esperança 121, Ingombota, Luanda",
    phone: "+244 912 345 678",
    regime: "Diurno",
    ageRange: "3 a 15 anos",
    capacityStatus: "Vagas disponíveis",
    services: ["Encaminhamento INAC", "Apoio alimentar", "Escuta psicológica"],
    lat: -8.8147,
    lng: 13.2302,
    verified: true,
  },
  {
    id: "lar-planalto-huambo",
    name: "Lar Infantil do Planalto",
    province: "Huambo",
    municipality: "Huambo",
    address: "Bairro São Pedro, Avenida Norton de Matos, Huambo",
    phone: "+244 925 330 419",
    regime: "24h",
    ageRange: "0 a 15 anos",
    capacityStatus: "Acolhimento de emergência",
    services: ["Acolhimento imediato", "Nutrição infantil", "Reintegração familiar"],
    lat: -12.7761,
    lng: 15.7392,
    verified: true,
  },
  {
    id: "centro-baia-benguela",
    name: "Centro Comunitário Baía Segura",
    province: "Benguela",
    municipality: "Benguela",
    address: "Bairro da Graça, Rua 4 de Fevereiro, Benguela",
    phone: "+244 922 714 890",
    regime: "24h",
    ageRange: "2 a 16 anos",
    capacityStatus: "Vagas disponíveis",
    services: ["Acolhimento temporário", "Apoio pedagógico", "Acompanhamento jurídico"],
    lat: -12.5763,
    lng: 13.4055,
    verified: true,
  },
  {
    id: "abrigo-luena-moxico",
    name: "Abrigo Solidário do Luena",
    province: "Moxico",
    municipality: "Luena",
    address: "Bairro Sangondo, próximo ao Hospital Geral, Luena",
    phone: "+244 926 105 744",
    regime: "24h",
    ageRange: "0 a 14 anos",
    capacityStatus: "Acolhimento de emergência",
    services: ["Acolhimento imediato", "Triagem pediátrica", "Localização familiar"],
    lat: -11.7833,
    lng: 19.9167,
    verified: true,
  },
  {
    id: "casa-futuro-cabinda",
    name: "Casa Futuro de Cabinda",
    province: "Cabinda",
    municipality: "Cabinda",
    address: "Bairro Simulambuco, Rua da Missão, Cabinda",
    phone: "+244 921 884 310",
    regime: "Diurno",
    ageRange: "5 a 17 anos",
    capacityStatus: "Vagas disponíveis",
    services: ["Proteção diurna", "Desporto e mentoria", "Encaminhamento social"],
    lat: -5.55,
    lng: 12.2,
    verified: true,
  },
  {
    id: "lar-lubango-huila",
    name: "Centro de Proteção Serra da Leba",
    province: "Huíla",
    municipality: "Lubango",
    address: "Bairro Comercial, Rua Dr. António Agostinho Neto, Lubango",
    phone: "+244 927 441 902",
    regime: "24h",
    ageRange: "0 a 16 anos",
    capacityStatus: "Acolhimento de emergência",
    services: ["Acolhimento imediato", "Apoio psicossocial", "Articulação INAC"],
    lat: -14.9172,
    lng: 13.4925,
    verified: true,
  },
];

export interface SupportNetworkContact {
  name: string;
  number: string;
  telHref: string;
  availability: string;
  role: string;
  priority: "emergencia" | "protecao" | "apoio";
}

export const supportNetworkContacts: SupportNetworkContact[] = [
  {
    name: "SOS Criança (INAC)",
    number: "15015",
    telHref: "tel:15015",
    availability: "Gratuito · 24h",
    role: "Linha nacional oficial para denúncia, proteção e encaminhamento de crianças em risco ou perdidas.",
    priority: "protecao",
  },
  {
    name: "Polícia Nacional",
    number: "113",
    telHref: "tel:113",
    availability: "Gratuito · 24h",
    role: "Intervenção imediata em situações de perigo físico, abandono na via pública ou desaparecimento.",
    priority: "emergencia",
  },
  {
    name: "INEMA — Emergência Médica",
    number: "112",
    telHref: "tel:112",
    availability: "Gratuito · 24h",
    role: "Socorro médico de urgência caso a criança apresente ferimentos, desidratação ou sinais de maus-tratos.",
    priority: "emergencia",
  },
  {
    name: "Central de Apoio MWANA",
    number: "+244 912 345 678",
    telHref: "tel:+244912345678",
    availability: "Seg–Dom · Triagem ativa",
    role: "Articulação direta com centros parceiros, equipas técnicas locais e acompanhamento de reintegração.",
    priority: "apoio",
  },
];

export interface TrainingCourse {
  id: string;
  title: string;
  format: "Presencial" | "Híbrido" | "Online";
  duration: string;
  audience: string;
  nextCohort: string;
  summary: string;
}

export const trainingCourses: TrainingCourse[] = [
  {
    id: "salvaguarda-infantil",
    title: "Proteção e Salvaguarda Infantil no Terreno",
    format: "Híbrido",
    duration: "24 horas (3 semanas)",
    audience: "Educadores, cuidadores e voluntários",
    nextCohort: "Próxima turma: Maio 2026",
    summary:
      "Protocolos de prevenção, identificação precoce de sinais de risco e procedimentos éticos de encaminhamento junto do INAC e centros locais.",
  },
  {
    id: "gestao-centros",
    title: "Gestão Operacional de Centros de Acolhimento",
    format: "Presencial",
    duration: "32 horas (4 semanas)",
    audience: "Diretores e técnicos de lares parceiros",
    nextCohort: "Próxima turma: Junho 2026",
    summary:
      "Organização de fichas individuais, planeamento nutricional, prestação de contas e boas práticas de acolhimento temporário.",
  },
  {
    id: "primeiros-socorros-pediatricos",
    title: "Primeiros Socorros Pediátricos e Nutrição Comunitária",
    format: "Presencial",
    duration: "16 horas (2 fins de semana)",
    audience: "Mães comunitárias, cuidadores e monitores",
    nextCohort: "Próxima turma: Julho 2026",
    summary:
      "Atuação imediata em urgências pediátricas, rastreio básico de desnutrição infantil e preparação de suplementação alimentar.",
  },
  {
    id: "mediacao-reintegracao",
    title: "Mediação Familiar e Reintegração Social",
    format: "Online",
    duration: "20 horas (4 semanas)",
    audience: "Assistentes sociais, psicólogos e estudantes",
    nextCohort: "Próxima turma: Agosto 2026",
    summary:
      "Metodologias de escuta ativa, avaliação de contexto familiar e acompanhamento pós-reintegração para reduzir reincidência de vulnerabilidade.",
  },
];

export const advisoryAreas = [
  {
    title: "Políticas de Salvaguarda para Escolas e Centros",
    description:
      "Elaboração de códigos de conduta, fluxos internos de resposta a incidentes e formação de equipas em proteção de menores.",
    deliverable: "Manual interno + sessão de capacitação",
  },
  {
    title: "Estruturação e Regularização de Projetos Sociais",
    description:
      "Apoio técnico a associações locais na elaboração de planos de ação, indicadores de impacto e candidatura a fundos de cooperação.",
    deliverable: "Diagnóstico técnico + dossiê de projeto",
  },
  {
    title: "Responsabilidade Social Corporativa (RSC)",
    description:
      "Desenho de programas empresariais de impacto infantil em Angola com enquadramento na Lei do Mecenato e reporte auditável.",
    deliverable: "Plano anual de impacto + métricas",
  },
];

export const internshipTracks = [
  {
    area: "Serviço Social e Proteção",
    locations: "Luanda, Huambo, Benguela",
    duration: "3 a 6 meses",
    profile: "Estudantes a partir do 3.º ano ou recém-licenciados em Serviço Social ou Sociologia.",
  },
  {
    area: "Psicologia Comunitária e Infantil",
    locations: "Luanda, Huambo",
    duration: "4 a 6 meses",
    profile: "Estudantes finalistas ou licenciados em Psicologia com interesse em apoio psicossocial.",
  },
  {
    area: "Pedagogia e Apoio Escolar",
    locations: "Luanda, Huambo, Moxico, Cabinda",
    duration: "3 a 6 meses",
    profile: "Estudantes de Pedagogia, Ensino Primário ou Ciências da Educação.",
  },
  {
    area: "Saúde Pública e Nutrição",
    locations: "Moxico, Benguela, Huambo",
    duration: "3 a 6 meses",
    profile: "Finalistas de Enfermagem, Nutrição ou Medicina Comunitária para apoio às brigadas.",
  },
];

export const sponsorshipTiers = [
  {
    id: "escolar",
    title: "Apadrinhamento Escolar",
    amount: "12.000 Kz / mês",
    scope: "Material didático, uniforme, reforço escolar e acompanhamento pedagógico semestral.",
    highlight: false,
  },
  {
    id: "integral",
    title: "Apadrinhamento Integral",
    amount: "25.000 Kz / mês",
    scope: "Educação, alimentação escolar diária, rastreio pediátrico e apoio psicossocial contínuo.",
    highlight: true,
  },
  {
    id: "turma",
    title: "Apadrinhamento de Sala ou Centro",
    amount: "80.000 Kz / mês",
    scope: "Ideal para famílias, grupos ou empresas: apoia uma turma inteira ou um centro de acolhimento parceiro.",
    highlight: false,
  },
];
