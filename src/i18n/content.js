// Todo o texto do site. Inglês é o idioma principal; português é a alternativa.
export const DEFAULT_LANG = 'en';

export const content = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Vazio Design Studio | Brand Identity, Art Direction & Web Design',
      description:
        'Vazio is a small design studio in São Paulo, Brazil. Brand identity, art direction and websites for brands that want to be remembered.',
    },
    skip: 'Skip to content',
    loading: 'Loading',
    nav: {
      aria: 'Main',
      home: 'Vazio Design Studio, home',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      switchTo: 'PT',
      switchLabel: 'Ler em português',
    },
    hero: {
      lines: ['Brands that say', 'what they are.'],
      sub: 'Design studio in São Paulo. Identity, art direction and websites for brands that want to be remembered.',
      cta: 'See our work',
      faceAlt: 'Smiling face that follows your cursor',
    },
    work: {
      title: 'Work',
      placeholder: 'Project name',
      alt: (n) => `Placeholder image for project ${n}`,
      categories: {
        identity: 'Brand identity',
        art: 'Art direction',
        web: 'Web design',
        motion: 'Motion',
      },
    },
    about: {
      statement:
        'We are a small studio in São Paulo. We work side by side with brands and founders, from the first sketch to the live site.',
      services: [
        { name: 'Brand identity', text: 'Name, logo, color and type that work anywhere.' },
        { name: 'Art direction', text: 'Visual language for campaigns, products and events.' },
        { name: 'Web design', text: 'Clear, fast sites that are easy to maintain.' },
        { name: 'Motion', text: 'Animation that gives the brand movement and voice.' },
      ],
    },
    contact: {
      title: "Let's talk.",
      note: 'We reply within 24 hours.',
      rights: '© 2026 Vazio Design Studio',
      place: 'São Paulo, Brazil',
      top: 'Back to top',
    },
  },

  pt: {
    htmlLang: 'pt-BR',
    meta: {
      title: 'Vazio Design Studio | Identidade Visual, Direção de Arte e Web Design',
      description:
        'Vazio é um pequeno estúdio de design em São Paulo. Identidade visual, direção de arte e sites para marcas que querem ser lembradas.',
    },
    skip: 'Ir para o conteúdo',
    loading: 'Carregando',
    nav: {
      aria: 'Principal',
      home: 'Vazio Design Studio, início',
      work: 'Trabalhos',
      about: 'Sobre',
      contact: 'Contato',
      switchTo: 'EN',
      switchLabel: 'Read in English',
    },
    hero: {
      lines: ['Marcas que dizem', 'o que são.'],
      sub: 'Estúdio de design em São Paulo. Identidade, direção de arte e sites para marcas que querem ser lembradas.',
      cta: 'Ver trabalhos',
      faceAlt: 'Rosto sorridente que acompanha o cursor',
    },
    work: {
      title: 'Trabalhos',
      placeholder: 'Nome do projeto',
      alt: (n) => `Imagem provisória do projeto ${n}`,
      categories: {
        identity: 'Identidade visual',
        art: 'Direção de arte',
        web: 'Web design',
        motion: 'Motion',
      },
    },
    about: {
      statement:
        'Somos um estúdio pequeno de São Paulo. Trabalhamos lado a lado com marcas e fundadores, do primeiro rascunho ao site no ar.',
      services: [
        { name: 'Identidade visual', text: 'Nome, logo, cores e tipografia que funcionam em qualquer lugar.' },
        { name: 'Direção de arte', text: 'Linguagem visual para campanhas, produtos e eventos.' },
        { name: 'Web design', text: 'Sites claros, rápidos e fáceis de manter.' },
        { name: 'Motion', text: 'Animação que dá movimento e voz à marca.' },
      ],
    },
    contact: {
      title: 'Vamos conversar.',
      note: 'Respondemos em até 24 horas.',
      rights: '© 2026 Vazio Design Studio',
      place: 'São Paulo, Brasil',
      top: 'Voltar ao topo',
    },
  },
};
