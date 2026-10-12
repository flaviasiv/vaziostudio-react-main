// Todo o texto do site. Inglês é o idioma principal; português é a alternativa.
export const DEFAULT_LANG = 'en';

export const content = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Vazio Design Studio | Brand Identity, Web Design & Development',
      description:
        'Vazio is a small design studio in São Paulo, Brazil. We create brand identities, design and build websites, and automate WhatsApp service.',
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
      lines: ['Building brands', 'that work.'],
      sub: 'Design studio in São Paulo. We create the identity, build the site and automate the conversation that follows.',
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
        identityWeb: 'Brand identity, Web',
      },
    },
    about: {
      statement:
        'We are a small studio in São Paulo. One team takes a brand from the first sketch to a live site, and to the tools that keep it running.',
      services: [
        { name: 'Brand identity', text: 'Logo, color and type that hold up on every screen.' },
        { name: 'UI/UX design', text: 'Interfaces planned around what people need to do next.' },
        { name: 'Web development', text: 'Fast sites that are easy to maintain, in as many languages as you need.' },
        { name: 'WhatsApp automation', text: 'Bookings, payments and reminders handled in the chat, so your team can talk to people.' },
      ],
    },
    contact: {
      title: "Let's talk.",
      note: 'We reply within 24 hours.',
      rights: '© 2026 Vazio Design Studio',
      place: 'São Paulo, Brazil',
      top: 'Back to top',
    },
    caseUi: {
      back: 'All work',
      client: 'Client',
      services: 'Services',
      year: 'Year',
      languages: 'Languages',
      palette: 'Palette',
      type: 'Typography',
      live: 'Live site',
      visit: 'Visit',
      screenshotAlt: (title, caption) => `${title}: ${caption}`,
    },
    cases: {
      matarasso: {
        cardAlt: 'Matarasso Advogados home page over a video of the Winged Victory of Samothrace',
        title: 'Matarasso Advogados',
        tagline: 'To protect is to remain.',
        intro:
          'A law firm that sells continuity, not disputes. We built its brand identity and website around one idea: stay calm, stay present, last.',
        client: 'Matarasso Advogados',
        services: ['Brand identity', 'UI/UX design', 'Web development'],
        year: '2026',
        languages: 'Portuguese, English, Chinese',
        url: 'https://www.matarasso.adv.br',
        urlLabel: 'matarasso.adv.br',
        heroAlt: 'Matarasso Advogados home page: the headline "To protect is to remain" over the Winged Victory of Samothrace',
        brief: {
          title: 'The brief',
          text: 'Matarasso Advogados is a law firm founded in 2016 in São Paulo, with offices in Brasília, Orlando and Miami. Its clients are companies, families and business owners protecting wealth built over time. Corporate, tax, contract and succession law sit under one team. The firm needed a brand and a site that sell long-term care instead of urgency, with discretion at the center.',
        },
        concept: {
          title: 'The idea',
          statement:
            'The Winged Victory of Samothrace became the center of the system: monumental, timeless, victorious without showing off.',
          text: 'The site reads like a classical atrium, not a storefront. A dark base, large serif type, a single gold accent used sparingly and thin lines instead of boxes. No decorative shadows. Depth comes from dark gradients over video.',
          imageAlt: 'The Winged Victory of Samothrace in silhouette against a low sun, used on the approach section',
        },
        identity: {
          title: 'Identity',
          swatches: [
            { name: 'Ouro', hex: '#a9863f', dark: false },
            { name: 'Mármore', hex: '#f6f4ef', dark: true },
            { name: 'Calcário', hex: '#dad5c9', dark: true },
            { name: 'Pedra', hex: '#6b6557', dark: false },
            { name: 'Basalto', hex: '#1b1a17', dark: false },
            { name: 'Preto', hex: '#000000', dark: false },
          ],
          fonts: [
            { name: 'PT Serif', role: 'Headlines', family: "'PT Serif', Georgia, serif" },
            { name: 'Public Sans', role: 'Text and labels', family: "'Public Sans Variable', system-ui, sans-serif" },
          ],
        },
        site: {
          title: 'The site',
          shots: [
            { id: 'office', caption: 'The firm page', width: 1440, height: 1300 },
            { id: 'area', caption: 'A practice area page, Tax', width: 1440, height: 900 },
            { id: 'team', caption: 'The team carousel on the home page', width: 1440, height: 800 },
            { id: 'areas', caption: 'Nine practice areas in one carousel', width: 1440, height: 800 },
            { id: 'about', caption: 'Who we are, in three ideas', width: 1440, height: 900 },
            { id: 'why', caption: 'Why clients choose the firm', width: 1440, height: 700 },
          ],
        },
        build: {
          title: 'How it was built',
          groups: [
            { name: 'Front end', text: 'Next.js 16, React 19, TypeScript and Tailwind CSS v4, with Motion for reveals and parallax.' },
            { name: 'Languages', text: 'Portuguese, English and Chinese through next-intl, with the language in every URL.' },
            { name: 'Content', text: 'The firm publications come from a headless WordPress and are sanitized before they reach the page.' },
            { name: 'Contact', text: 'The form sends through Resend. Client testimonials are always anonymous: initials and role only.' },
          ],
        },
      },
      puraterapia: {
        cardAlt: 'A smiling person in a rounded frame, from the PuraTerapia home page, on lime green',
        title: 'PuraTerapia',
        tagline: 'Your well-being starts here.',
        intro:
          'An online care brand where everything leads to one conversation. We designed and built its identity, its site and the WhatsApp flow behind it.',
        client: 'PuraTerapia',
        services: ['Brand identity', 'UI/UX design', 'Web development', 'WhatsApp automation'],
        year: '2025 to 2026',
        languages: 'Portuguese',
        url: 'https://puraterapia.com.br',
        urlLabel: 'puraterapia.com.br',
        heroHeight: 960,
        heroAlt: 'PuraTerapia home page: the headline "Seu bem-estar começa aqui" beside a smiling person in a rounded frame',
        brief: {
          title: 'The brief',
          text: 'PuraTerapia offers online care for mental health and weight loss, with medical consultations by video. People arrive anxious and unsure, usually from a phone. The brand had to feel light and human, explain the path in a few lines, and make the next step obvious: talk to a specialist on WhatsApp.',
        },
        concept: {
          title: 'The idea',
          statement: 'One color to find the button, one conversation to start.',
          text: 'The site is white and quiet. A single lime accent marks every way into WhatsApp, headlines are large and condensed, and images sit in generously rounded frames that soften the page. The path is explained in three numbered steps, then the page keeps repeating the same invitation.',
          imageHeight: 390,
          imageAlt: 'The PuraTerapia wordmark in white across a band over a photo of hands on a laptop',
        },
        identity: {
          title: 'Identity',
          swatches: [
            { name: 'Lime', hex: '#CFEE0C', dark: true },
            { name: 'Ink green', hex: '#00160A', dark: false },
            { name: 'Forest', hex: '#133F26', dark: false },
            { name: 'Moss', hex: '#485C11', dark: false },
            { name: 'Lavender', hex: '#D5BBEA', dark: true },
            { name: 'Mist', hex: '#F4F8E6', dark: true },
          ],
          fonts: [
            { name: 'Oswald', role: 'Headlines', family: "'Oswald', 'Helvetica Neue', sans-serif" },
            { name: 'DM Sans', role: 'Text and buttons', family: "'DM Sans Variable', system-ui, sans-serif" },
          ],
        },
        site: {
          title: 'The site',
          shots: [
            { id: 'how', caption: 'How it works, in three steps', width: 1440, height: 670 },
            { id: 'about', caption: 'Three reasons to trust the service', width: 1440, height: 830 },
            { id: 'cta', caption: 'The closing invitation', width: 1440, height: 640 },
          ],
        },
        build: {
          title: 'How it was built',
          groups: [
            { name: 'Front end', text: 'React 18, TypeScript, Vite and Tailwind CSS, with Framer Motion for reveals. Mobile layouts were designed alongside desktop.' },
            { name: 'WhatsApp flow', text: 'A Node.js bot on the Meta WhatsApp Cloud API. It handles service choice, the first description of the case and the conversation state.' },
            { name: 'Payment and scheduling', text: 'PIX charges through Mercado Pago, Calendly bookings with the video link, and reminders 24 hours and 1 hour before each consultation.' },
            { name: 'Back office', text: 'MongoDB, Redis queues and Chatwoot, so the team can follow every conversation and every lead from one place.' },
          ],
        },
      },
    },
  },

  pt: {
    htmlLang: 'pt-BR',
    meta: {
      title: 'Vazio Design Studio | Identidade Visual, Web Design e Desenvolvimento',
      description:
        'Vazio é um pequeno estúdio de design em São Paulo. Criamos identidades visuais, desenhamos e desenvolvemos sites e automatizamos o atendimento por WhatsApp.',
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
      lines: ['Construindo marcas', 'que funcionam.'],
      sub: 'Estúdio de design em São Paulo. Criamos a identidade, desenvolvemos o site e automatizamos a conversa que vem depois.',
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
        identityWeb: 'Identidade visual, Web',
      },
    },
    about: {
      statement:
        'Somos um estúdio pequeno de São Paulo. Um só time leva a marca do primeiro rascunho ao site no ar, e às ferramentas que o mantêm funcionando.',
      services: [
        { name: 'Identidade visual', text: 'Logo, cores e tipografia que se sustentam em qualquer tela.' },
        { name: 'Design UI/UX', text: 'Interfaces pensadas no que a pessoa precisa fazer em seguida.' },
        { name: 'Desenvolvimento web', text: 'Sites rápidos e fáceis de manter, em quantos idiomas você precisar.' },
        { name: 'Automação de WhatsApp', text: 'Agendamento, pagamento e lembretes resolvidos no chat, para o time conversar com as pessoas.' },
      ],
    },
    contact: {
      title: 'Vamos conversar.',
      note: 'Respondemos em até 24 horas.',
      rights: '© 2026 Vazio Design Studio',
      place: 'São Paulo, Brasil',
      top: 'Voltar ao topo',
    },
    caseUi: {
      back: 'Todos os trabalhos',
      client: 'Cliente',
      services: 'Serviços',
      year: 'Ano',
      languages: 'Idiomas',
      palette: 'Paleta',
      type: 'Tipografia',
      live: 'Site no ar',
      visit: 'Visitar',
      screenshotAlt: (title, caption) => `${title}: ${caption}`,
    },
    cases: {
      matarasso: {
        cardAlt: 'Página inicial da Matarasso Advogados sobre um vídeo da Vitória Alada de Samotrácia',
        title: 'Matarasso Advogados',
        tagline: 'Proteger é permanecer.',
        intro:
          'Um escritório de advocacia que vende continuidade, não disputa. Criamos a identidade visual e o site em torno de uma ideia: manter a calma, estar presente, durar.',
        client: 'Matarasso Advogados',
        services: ['Identidade visual', 'Design UI/UX', 'Desenvolvimento web'],
        year: '2026',
        languages: 'Português, inglês, chinês',
        url: 'https://www.matarasso.adv.br',
        urlLabel: 'matarasso.adv.br',
        heroAlt: 'Página inicial da Matarasso Advogados: o título "Proteger é permanecer" sobre a Vitória Alada de Samotrácia',
        brief: {
          title: 'O desafio',
          text: 'A Matarasso Advogados é um escritório fundado em 2016 em São Paulo, com unidades em Brasília, Orlando e Miami. Seus clientes são empresas, famílias e empresários que protegem um patrimônio construído ao longo do tempo. Direito societário, tributário, contratual e sucessório ficam sob o mesmo time. O escritório precisava de uma marca e de um site que vendessem acompanhamento de longo prazo no lugar de urgência, com a discrição no centro.',
        },
        concept: {
          title: 'A ideia',
          statement:
            'A Vitória Alada de Samotrácia virou o centro do sistema: monumental, atemporal, vitoriosa sem ostentar.',
          text: 'O site se lê como um átrio clássico, não como uma vitrine. Base escura, tipografia serifada grande, um único acento dourado usado com raridade e linhas finas no lugar de caixas. Sem sombras decorativas. A profundidade vem de gradientes escuros sobre vídeo.',
          imageAlt: 'A Vitória Alada de Samotrácia em silhueta contra um sol baixo, usada na seção de abordagem',
        },
        identity: {
          title: 'Identidade',
          swatches: [
            { name: 'Ouro', hex: '#a9863f', dark: false },
            { name: 'Mármore', hex: '#f6f4ef', dark: true },
            { name: 'Calcário', hex: '#dad5c9', dark: true },
            { name: 'Pedra', hex: '#6b6557', dark: false },
            { name: 'Basalto', hex: '#1b1a17', dark: false },
            { name: 'Preto', hex: '#000000', dark: false },
          ],
          fonts: [
            { name: 'PT Serif', role: 'Títulos', family: "'PT Serif', Georgia, serif" },
            { name: 'Public Sans', role: 'Texto e rótulos', family: "'Public Sans Variable', system-ui, sans-serif" },
          ],
        },
        site: {
          title: 'O site',
          shots: [
            { id: 'office', caption: 'A página do escritório', width: 1440, height: 1300 },
            { id: 'area', caption: 'Uma página de área de atuação, Tributário', width: 1440, height: 900 },
            { id: 'team', caption: 'O carrossel da equipe na home', width: 1440, height: 800 },
            { id: 'areas', caption: 'Nove áreas de atuação em um carrossel', width: 1440, height: 800 },
            { id: 'about', caption: 'Quem somos, em três ideias', width: 1440, height: 900 },
            { id: 'why', caption: 'Por que os clientes escolhem o escritório', width: 1440, height: 700 },
          ],
        },
        build: {
          title: 'Como foi construído',
          groups: [
            { name: 'Front end', text: 'Next.js 16, React 19, TypeScript e Tailwind CSS v4, com Motion para revelações e parallax.' },
            { name: 'Idiomas', text: 'Português, inglês e chinês com next-intl, com o idioma em toda URL.' },
            { name: 'Conteúdo', text: 'As publicações do escritório vêm de um WordPress headless e são sanitizadas antes de chegar à página.' },
            { name: 'Contato', text: 'O formulário envia pelo Resend. Os depoimentos de clientes são sempre anônimos: só iniciais e cargo.' },
          ],
        },
      },
      puraterapia: {
        cardAlt: 'Uma pessoa sorrindo em uma moldura arredondada, da página inicial da PuraTerapia, sobre verde-limão',
        title: 'PuraTerapia',
        tagline: 'Seu bem-estar começa aqui.',
        intro:
          'Uma marca de cuidado online em que tudo leva a uma conversa. Desenhamos e construímos a identidade, o site e o fluxo de WhatsApp por trás dele.',
        client: 'PuraTerapia',
        services: ['Identidade visual', 'Design UI/UX', 'Desenvolvimento web', 'Automação de WhatsApp'],
        year: '2025 a 2026',
        languages: 'Português',
        url: 'https://puraterapia.com.br',
        urlLabel: 'puraterapia.com.br',
        heroHeight: 960,
        heroAlt: 'Página inicial da PuraTerapia: o título "Seu bem-estar começa aqui" ao lado de uma pessoa sorrindo em uma moldura arredondada',
        brief: {
          title: 'O desafio',
          text: 'A PuraTerapia oferece cuidado online para saúde mental e emagrecimento, com consultas médicas por vídeo. As pessoas chegam ansiosas e inseguras, quase sempre pelo celular. A marca precisava ser leve e humana, explicar o caminho em poucas linhas e deixar o próximo passo óbvio: falar com um especialista no WhatsApp.',
        },
        concept: {
          title: 'A ideia',
          statement: 'Uma cor para achar o botão, uma conversa para começar.',
          text: 'O site é branco e silencioso. Um único verde-limão marca cada entrada para o WhatsApp, os títulos são grandes e condensados, e as imagens ficam em molduras bem arredondadas que suavizam a página. O caminho é explicado em três passos numerados, e a página repete o mesmo convite até o fim.',
          imageHeight: 390,
          imageAlt: 'O logotipo da PuraTerapia em branco sobre uma faixa com a foto de mãos em um notebook',
        },
        identity: {
          title: 'Identidade',
          swatches: [
            { name: 'Limão', hex: '#CFEE0C', dark: true },
            { name: 'Verde tinta', hex: '#00160A', dark: false },
            { name: 'Floresta', hex: '#133F26', dark: false },
            { name: 'Musgo', hex: '#485C11', dark: false },
            { name: 'Lavanda', hex: '#D5BBEA', dark: true },
            { name: 'Névoa', hex: '#F4F8E6', dark: true },
          ],
          fonts: [
            { name: 'Oswald', role: 'Títulos', family: "'Oswald', 'Helvetica Neue', sans-serif" },
            { name: 'DM Sans', role: 'Texto e botões', family: "'DM Sans Variable', system-ui, sans-serif" },
          ],
        },
        site: {
          title: 'O site',
          shots: [
            { id: 'how', caption: 'Como funciona, em três passos', width: 1440, height: 670 },
            { id: 'about', caption: 'Três motivos para confiar no serviço', width: 1440, height: 830 },
            { id: 'cta', caption: 'O convite final', width: 1440, height: 640 },
          ],
        },
        build: {
          title: 'Como foi construído',
          groups: [
            { name: 'Front end', text: 'React 18, TypeScript, Vite e Tailwind CSS, com Framer Motion nas revelações. Os layouts mobile foram desenhados junto com o desktop.' },
            { name: 'Fluxo de WhatsApp', text: 'Um bot em Node.js sobre a API oficial do WhatsApp Cloud da Meta. Ele cuida da escolha do serviço, da descrição inicial do caso e do estado da conversa.' },
            { name: 'Pagamento e agenda', text: 'Cobrança por PIX pelo Mercado Pago, agendamento no Calendly com o link do vídeo e lembretes 24 horas e 1 hora antes de cada consulta.' },
            { name: 'Retaguarda', text: 'MongoDB, filas em Redis e Chatwoot, para a equipe acompanhar cada conversa e cada contato em um só lugar.' },
          ],
        },
      },
    },
  },
};
