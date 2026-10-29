// Todo o texto do site, em inglês (padrão) e português. Um único rótulo de CTA por intenção.
export const DEFAULT_LANG = 'en';

export const content = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Vazio Design Studio | Brand strategy for B2B companies',
      description:
        'Vazio is a brand strategy studio in São Paulo. We define what your company defends, for whom and against which alternatives, and write the guide that keeps it consistent.',
    },
    skip: 'Skip to content',
    nav: {
      aria: 'Main',
      home: 'Vazio Design Studio, home',
      work: 'Work',
      method: 'Method',
      faq: 'Questions',
      switchTo: 'PT',
      switchLabel: 'Ler em português',
    },
    cta: 'Start a project',
    hero: {
      title: 'Brand strategy for B2B companies.',
      sub: 'We define what your company defends, for whom and against which alternatives, so every later decision has a reference.',
      work: 'See the work',
    },
    situations: {
      title: 'Four situations that bring clients to us',
      items: [
        {
          problem: 'Your team pitches the company differently every time.',
          answer: 'We write one position that everyone can repeat.',
        },
        {
          problem: 'The brand looks smaller than the company is.',
          answer: 'We redefine what the brand stands for, at the size you reached.',
        },
        {
          problem: 'A new market or service, and the old story no longer fits.',
          answer: 'We rebuild the narrative around the new scope.',
        },
        {
          problem: 'Your competitors say the same things you do, in the same words.',
          answer: 'We find the territory only you can credibly occupy.',
        },
      ],
    },
    method: {
      title: 'How a project runs',
      steps: [
        {
          verb: 'Diagnose',
          text: 'We interview your leaders and customers and research the market. You receive a written diagnosis, with every gap marked as a gap.',
        },
        {
          verb: 'Position',
          text: 'We choose what the company defends, for which buyers and against which alternatives. One strategy report, approved by you.',
        },
        {
          verb: 'Say it',
          text: 'We define the key word, the name when it is needed, and the verbal identity: how the company speaks and what it never says.',
        },
        {
          verb: 'Guide',
          text: 'Creative direction and a brand guide, so any designer, developer or agency you hire carries the brand out without guessing.',
        },
      ],
    },
    work: {
      title: 'Work',
      all: 'All work',
      visit: 'Visit site',
      cursor: 'View',
      back: 'All work',
      next: 'Next project',
      year: 'Year',
      scope: 'Scope',
      indexTitle: 'Projects',
      indexIntro: 'Identity, art direction and websites, each with the decision that shaped it.',
      items: {
        matarasso: {
          name: 'Matarasso Advogados',
          text: 'Logo, brand strategy and website for a law firm built around permanence.',
          scope: 'Logo, rebrand, brand strategy, website',
          summary:
            'A law firm built around permanence: protection as a relationship that continues after the contract is paid. Logo, rebrand, brand strategy and website.',
          alts: {
            home: 'Matarasso Advogados website, home page',
            guide: 'Matarasso Advogados brand guidelines cover, logo over a classical statue',
            beforeAfter: 'The previous Matarasso shield logo beside the new monogram, which is applied over statuary and architecture',
            imagery: 'Brand imagery of classical columns, statues and stone',
            logo: 'Matarasso monogram and logotype',
            monogram: 'Matarasso monogram at large scale',
            paletteUse: 'Matarasso palette applied to cards and quotes',
            palette: 'Matarasso palette: marble, plaster, limestone, basalt, stone and old gold',
            type: 'Matarasso typography, PT Serif paired with Public Sans',
            card: 'Matarasso embossed business card',
            stationery: 'Matarasso letterhead, cards and envelope',
            linkedin: 'Matarasso LinkedIn page',
            stories: 'Matarasso social story templates',
            siteMock: 'Matarasso website on a laptop',
            about: 'Matarasso Advogados website, the firm page',
            approach: 'Matarasso Advogados website, approach section',
            areas: 'Matarasso Advogados website, practice areas',
            area: 'Matarasso Advogados website, tax practice area page',
            team: 'Matarasso Advogados website, team section',
            office: 'Matarasso Advogados website, office section',
          },
          sections: {
            context: {
              label: 'Starting point',
              body: [
                'The brief asked to modernize the logo. The research showed a larger request: a firm about ten years old, strongest in tax law, that needed a position of its own in a category that talks about victory.',
              ],
            },
            strategy: {
              label: 'Strategy',
              body: [
                'Law firms talk about victory, dispute and outcome, the moment the problem already exists. Almost nobody talks about what comes before and what stays after. The strategy placed the brand there: protecting assets as a relationship that continues, from the first conversation and after the contract is paid.',
                'The anchor concept reads “Patrimônio não se protege uma vez. Se protege sempre.” (assets are protected always). Visual references came from family private banks and wealth houses, outside law. Brazilian Bar rules on advertising (Provimento 205/2021) set the register: restrained, with no promise and no comparison.',
              ],
            },
            identity: {
              label: 'Identity',
              body: [
                'The monogram draws the initials M and A as one closed loop, a bond that does not end when the contract is paid. The same line suggests a crown, a discreet nod to time in the market. The surname leads the logotype and works as a personal guarantee, as it does in family private banks.',
                'The palette comes from materials that cross time: marble, plaster, limestone and basalt, with gold as a rare accent in place of corporate navy. PT Serif institutes and signs, Public Sans explains. Images come from classical statuary and architecture.',
              ],
            },
            applications: {
              label: 'Applications',
              body: ['The brand lives where trust is built: documents, proposals, stationery, LinkedIn and the website. A logo on a contract is where a given word becomes visible.'],
            },
            website: {
              label: 'Website',
              body: [
                'The website is the application in production so far. The hero says the idea in three words, “Proteger é permanecer.” Below it come who the firm is, nine practice areas under one care, the team, the publications and four offices. Proof stays within what the Bar allows: names, training and dates. It runs in Portuguese, English and Chinese.',
              ],
            },
          },
        },
        'pura-terapia': {
          name: 'PuraTerapia',
          text: 'Brand for online mental health and weight-loss care, carried into its website.',
          scope: 'Brand identity, website, WhatsApp service flow',
          summary:
            'A telemedicine platform in a market surrounded by stigma and misinformation. The brand had to read as clinical and still feel close.',
          alts: {
            identity: 'PuraTerapia brand applied to printed and digital pieces',
            symbol: 'PuraTerapia symbol construction',
            brand: 'PuraTerapia brand content',
            website: 'PuraTerapia website',
            whatsapp: 'PuraTerapia WhatsApp service flow',
          },
          sections: {
            context: {
              label: 'Scope',
              body: ['The project started with the full scope: create the brand, build the institutional website and structure an automated service flow on WhatsApp.'],
            },
            identity: {
              label: 'Identity',
              body: [
                'The symbol is two overlapping circles that stand for welcome, care and closeness. Repeated, they suggest an exchange between equals, patient and professional, and together they recall a flower.',
                'The logotype has rounded details to soften the reading. The palette pairs an institutional dark green with lime yellow, lavender and wine, so authority and lightness share the same page.',
              ],
            },
            website: {
              label: 'Website',
              body: [
                'The site moves a visitor to a first appointment with little friction. A white background, bold black type and generous spacing keep the reading direct.',
                'Three steps explain the process: schedule, receive the prescription, start treatment. Testimonials, a FAQ and lime-green calls to action along the scroll support the decision.',
              ],
            },
            whatsapp: {
              label: 'WhatsApp',
              body: ['An automated service flow maps the most critical conversations, so the welcoming tone of the brand holds in automated messages too.'],
            },
            result: {
              label: 'Result',
              body: ['Identity, website and service flow speak the same language. The brand went from nothing to a consistent presence at each patient touchpoint.'],
            },
          },
        },
        supernova: {
          name: 'Supernova Entertainment',
          text: 'Brand identity for a São Paulo record label whose artists rose fast.',
          scope: 'Brand identity, art direction',
          summary:
            'A record label and music producer in São Paulo. Its rapper Thiago Veigh reached the global top 1 on Spotify in 2023 (Correio Braziliense, May 2023).',
          alts: {
            mark: 'Supernova Entertainment identity, the rising star mark',
            type: 'Supernova Entertainment typography',
            elements: 'Supernova Entertainment wave motif',
            collateral: 'Supernova Entertainment brand collateral',
          },
          sections: {
            challenge: {
              label: 'Challenge',
              body: ['The label wanted to professionalize its brand and show how its productions polish and boost young Brazilian trap talent.'],
            },
            identity: {
              label: 'Identity',
              body: [
                'Ascension and dimension guided the choices. The typography had to stand out in any application, impactful and dense enough to hold the rising-star mark. The Humane family has a range of weights that carries the idea of rise.',
                'Waves, drawn in a playful way, represent expansion and amplification.',
              ],
            },
            solution: {
              label: 'Decision',
              body: ['Built with the founders and the producer’s own background, the visual decisions reflect the scale in the brand’s DNA: an identity as deliberately impactful as the astronomical event it is named after.'],
            },
          },
        },
        estadio97: {
          name: 'Estádio 97',
          text: 'Anniversary logo for one of Brazil’s most traditional sports radio programs.',
          scope: 'Logo, art direction',
          summary:
            'One of the most traditional sports radio programs in Brazil, produced by Energia 97 FM. Its 25th anniversary called for a logo with the weight of that history.',
          alts: {
            logo: 'Estádio 97 logo for the 25th anniversary',
            icon: 'Estádio 97 laurel wreath and ball detail',
            applied: 'Estádio 97 logo applied to radio branding',
            channel: 'Estádio 97 branding on the Energia 97 FM channel',
            apps: 'Estádio 97 brand applications',
            showcase: 'Estádio 97 final identity showcase',
          },
          sections: {
            challenge: {
              label: 'Challenge',
              body: ['The program has a long history of leading sports radio audiences in Brazil. The 25th anniversary asked for a logo that represents and sustains the greatness and tradition of the medium.'],
            },
            solution: {
              label: 'Logo',
              body: ['Heavy extremes give the sense of something established, enduring and solid. Tall type carries authority. A separate icon for the number 97 stands for the dial frequency and for the station’s popular name, Rádio 97.'],
            },
            symbol: {
              label: 'Symbol',
              body: ['The laurel wreath marks the triumph of longevity, a traditional sign of merit. The ball sits where it subtly recalls the origin of it all and the motivation behind the whole trajectory.'],
            },
          },
        },
      },
    },
    note: {
      text: 'We also get tired of brands that say what every other brand in the category says. So before anything is drawn, we help you find what sets your company apart and shape its vision.',
      sign: 'Lucas and Flavia, Vazio',
    },
    faq: {
      title: 'Questions we hear before the first call',
      items: [
        {
          q: 'What is B2B brand strategy?',
          a: 'It is the decision about what your company defends, for which buyers and against which alternatives, written down before any design starts.',
        },
        {
          q: 'How long does a project take?',
          a: 'It depends on the scope. We set dates in the proposal, after the first conversation.',
        },
        {
          q: 'Do you work with one industry only?',
          a: 'No. So far we have worked in law and telemedicine. The method starts from your market, not from ours.',
        },
        {
          q: 'Do you also design and build the website?',
          a: 'Yes, when the brand needs it, as the stage after the strategy. The strategy comes first.',
        },
        {
          q: 'What do we need to start?',
          a: 'A first conversation with 24 questions, and access to the people who know the business best.',
        },
      ],
    },
    contact: {
      title: 'Tell us where your brand is stuck.',
      rights: '© 2026 Vazio Design Studio',
      place: 'São Paulo, Brazil',
      top: 'Back to top',
    },
    loader: { label: 'Loading', skip: 'Skip intro' },
  },

  pt: {
    htmlLang: 'pt-BR',
    meta: {
      title: 'Vazio Design Studio | Estratégia de marca para empresas B2B',
      description:
        'A Vazio é um estúdio de estratégia de marca em São Paulo. Definimos o que a empresa defende, para quem e diante de quais alternativas, e escrevemos o guia que mantém tudo coerente.',
    },
    skip: 'Pular para o conteúdo',
    nav: {
      aria: 'Principal',
      home: 'Vazio Design Studio, início',
      work: 'Projetos',
      method: 'Método',
      faq: 'Perguntas',
      switchTo: 'EN',
      switchLabel: 'Read in English',
    },
    cta: 'Começar um projeto',
    hero: {
      title: 'Estratégia de marca para empresas B2B.',
      sub: 'Definimos o que a empresa defende, para quem e diante de quais alternativas, para que toda decisão seguinte tenha uma referência.',
      work: 'Ver os projetos',
    },
    situations: {
      title: 'Quatro situações que trazem clientes até nós',
      items: [
        {
          problem: 'O seu time apresenta a empresa de um jeito diferente a cada conversa.',
          answer: 'Escrevemos uma posição que todo mundo consegue repetir.',
        },
        {
          problem: 'A marca parece menor do que a empresa é.',
          answer: 'Redefinimos o que a marca representa, no tamanho que vocês alcançaram.',
        },
        {
          problem: 'Um mercado ou serviço novo, e a história antiga já não serve.',
          answer: 'Reconstruímos a narrativa em torno do novo escopo.',
        },
        {
          problem: 'Os concorrentes dizem o mesmo que vocês, com as mesmas palavras.',
          answer: 'Encontramos o território que só vocês ocupam com credibilidade.',
        },
      ],
    },
    method: {
      title: 'Como um projeto acontece',
      steps: [
        {
          verb: 'Diagnosticar',
          text: 'Entrevistamos lideranças e clientes e pesquisamos o mercado. Vocês recebem um diagnóstico escrito, com cada lacuna marcada como lacuna.',
        },
        {
          verb: 'Posicionar',
          text: 'Escolhemos o que a empresa defende, para quais compradores e diante de quais alternativas. Um relatório de estratégia, aprovado por vocês.',
        },
        {
          verb: 'Dizer',
          text: 'Definimos a palavra-chave, o nome quando for preciso e a identidade verbal: como a empresa fala e o que ela nunca diz.',
        },
        {
          verb: 'Orientar',
          text: 'Direção criativa e guia de marca, para que qualquer designer, desenvolvedor ou agência contratada execute a marca sem adivinhar.',
        },
      ],
    },
    work: {
      title: 'Projetos',
      all: 'Todos os projetos',
      visit: 'Visitar o site',
      cursor: 'Ver',
      back: 'Todos os projetos',
      next: 'Próximo projeto',
      year: 'Ano',
      scope: 'Escopo',
      indexTitle: 'Projetos',
      indexIntro: 'Identidade, direção de arte e sites, cada um com a decisão que o moldou.',
      items: {
        matarasso: {
          name: 'Matarasso Advogados',
          text: 'Logo, estratégia de marca e site de um escritório de advocacia construído sobre a permanência.',
          scope: 'Logo, rebranding, estratégia de marca, site',
          summary:
            'Um escritório de advocacia construído sobre a permanência: proteção como relação que continua depois que o contrato é pago. Logo, rebranding, estratégia de marca e site.',
          alts: {
            home: 'Site da Matarasso Advogados, página inicial',
            guide: 'Capa do guia de marca da Matarasso Advogados, logo sobre uma estátua clássica',
            beforeAfter: 'O logo anterior da Matarasso, um escudo, ao lado do novo monograma, aplicado sobre estatuária e arquitetura',
            imagery: 'Imagens da marca: colunas, estátuas e pedra clássicas',
            logo: 'Monograma e logotipo da Matarasso',
            monogram: 'Monograma da Matarasso em grande escala',
            paletteUse: 'Paleta da Matarasso aplicada em cartões e frases',
            palette: 'Paleta da Matarasso: mármore, gesso, calcário, basalto, pedra e ouro velho',
            type: 'Tipografia da Matarasso, PT Serif com Public Sans',
            card: 'Cartão de visita da Matarasso em relevo',
            stationery: 'Papel timbrado, cartões e envelope da Matarasso',
            linkedin: 'Página da Matarasso no LinkedIn',
            stories: 'Modelos de stories da Matarasso',
            siteMock: 'Site da Matarasso em um notebook',
            about: 'Site da Matarasso Advogados, página do escritório',
            approach: 'Site da Matarasso Advogados, seção sobre a forma de atuar',
            areas: 'Site da Matarasso Advogados, áreas de atuação',
            area: 'Site da Matarasso Advogados, página da área tributária',
            team: 'Site da Matarasso Advogados, seção da equipe',
            office: 'Site da Matarasso Advogados, seção do escritório',
          },
          sections: {
            context: {
              label: 'Ponto de partida',
              body: [
                'O briefing pedia a modernização do logo. A pesquisa mostrou um pedido maior: um escritório com cerca de dez anos, mais forte em tributário, que precisava de uma posição própria numa categoria que fala de vitória.',
              ],
            },
            strategy: {
              label: 'Estratégia',
              body: [
                'A advocacia fala de vitória, de disputa, de desfecho: o momento em que o problema já existe. Quase ninguém fala do que vem antes e do que permanece depois. A estratégia colocou a marca aí: a proteção do patrimônio como relação que continua, desde a primeira conversa e depois que o contrato é pago.',
                'O conceito-âncora diz “Patrimônio não se protege uma vez. Se protege sempre.” As referências visuais vieram de bancos privados de família e casas de patrimônio, fora do direito. As regras da OAB sobre publicidade (Provimento 205/2021) definem o registro: contido, sem promessa e sem comparação.',
              ],
            },
            identity: {
              label: 'Identidade',
              body: [
                'O monograma desenha as iniciais M e A como um único ciclo fechado, um vínculo que não se encerra quando o contrato é pago. A mesma linha insinua uma coroa, um gesto discreto ao tempo de mercado. O sobrenome conduz o logotipo e funciona como garantia pessoal, como nos bancos privados de família.',
                'A paleta vem de materiais que atravessam o tempo: mármore, gesso, calcário e basalto, com o ouro como acento raro no lugar do azul-marinho corporativo. A PT Serif institui e assina, a Public Sans explica. As imagens vêm da estatuária e da arquitetura clássicas.',
              ],
            },
            applications: {
              label: 'Aplicações',
              body: ['A marca vive onde a confiança se constrói: documentos, propostas, papelaria, LinkedIn e o site. O logo num contrato é o ponto em que a palavra dada se torna visível.'],
            },
            website: {
              label: 'Site',
              body: [
                'O site é a aplicação em produção até agora. O hero diz a ideia em três palavras, “Proteger é permanecer.” Depois vêm quem é o escritório, nove áreas de atuação sob um só cuidado, a equipe, as publicações e quatro escritórios. A prova fica dentro do que a OAB permite: nomes, formação e datas. O site funciona em português, inglês e chinês.',
              ],
            },
          },
        },
        'pura-terapia': {
          name: 'PuraTerapia',
          text: 'Marca de um atendimento on-line de saúde mental e emagrecimento, levada ao site.',
          scope: 'Identidade de marca, site, fluxo de atendimento no WhatsApp',
          summary:
            'Uma plataforma de telemedicina em um mercado cercado de estigma e desinformação. A marca precisava parecer clínica e, ainda assim, próxima.',
          alts: {
            identity: 'Marca da PuraTerapia aplicada em peças impressas e digitais',
            symbol: 'Construção do símbolo da PuraTerapia',
            brand: 'Conteúdo de marca da PuraTerapia',
            website: 'Site da PuraTerapia',
            whatsapp: 'Fluxo de atendimento da PuraTerapia no WhatsApp',
          },
          sections: {
            context: {
              label: 'Escopo',
              body: ['O projeto nasceu com o escopo completo: criar a marca, desenvolver o site institucional e estruturar um fluxo de atendimento automatizado no WhatsApp.'],
            },
            identity: {
              label: 'Identidade',
              body: [
                'O símbolo é formado por dois círculos sobrepostos que expressam acolhimento, cuidado e proximidade. Repetidos, sugerem uma troca de igual para igual entre paciente e profissional e, juntos, lembram uma flor.',
                'O logotipo tem detalhes arredondados para suavizar a leitura. A paleta combina um verde-escuro institucional com amarelo-limão, lavanda e vinho, de modo que autoridade e leveza dividam a mesma página.',
              ],
            },
            website: {
              label: 'Site',
              body: [
                'O site leva o visitante à primeira consulta com pouco atrito. Fundo branco, tipografia preta em bold e espaçamento generoso mantêm a leitura direta.',
                'Três passos explicam o processo: agendar, receber a prescrição, iniciar o tratamento. Depoimentos, um FAQ e chamadas em verde-limão ao longo do scroll sustentam a decisão.',
              ],
            },
            whatsapp: {
              label: 'WhatsApp',
              body: ['Um fluxo de atendimento automatizado mapeia as conversas mais críticas, para que o tom acolhedor da marca se mantenha também nas mensagens automáticas.'],
            },
            result: {
              label: 'Resultado',
              body: ['Identidade, site e fluxo de atendimento falam a mesma língua. A marca saiu do zero para uma presença consistente em cada ponto de contato com o paciente.'],
            },
          },
        },
        supernova: {
          name: 'Supernova Entertainment',
          text: 'Identidade de marca de uma gravadora paulistana cujos artistas subiram rápido.',
          scope: 'Identidade de marca, direção de arte',
          summary:
            'Gravadora e produtora musical de São Paulo. O rapper Thiago Veigh chegou ao top 1 global do Spotify em 2023 (Correio Braziliense, maio de 2023).',
          alts: {
            mark: 'Identidade da Supernova Entertainment, a marca da estrela ascendente',
            type: 'Tipografia da Supernova Entertainment',
            elements: 'Motivo de ondas da Supernova Entertainment',
            collateral: 'Peças de marca da Supernova Entertainment',
          },
          sections: {
            challenge: {
              label: 'Desafio',
              body: ['A gravadora queria profissionalizar a marca e mostrar o quanto suas produções lapidam e impulsionam jovens talentos do trap brasileiro.'],
            },
            identity: {
              label: 'Identidade',
              body: [
                'Ascensão e dimensão guiaram as escolhas. A tipografia precisava se destacar em qualquer aplicação, impactante e densa o bastante para comportar a marca da estrela ascendente. A família Humane tem uma variedade de pesos que sustenta a ideia de subida.',
                'As ondas, desenhadas de maneira lúdica, representam expansão e amplificação.',
              ],
            },
            solution: {
              label: 'Decisão',
              body: ['Construídas com os fundadores e com o repertório da própria produtora, as decisões visuais refletem a grandeza que há no DNA da marca: uma identidade tão propositalmente impactante quanto o evento astronômico que lhe dá nome.'],
            },
          },
        },
        estadio97: {
          name: 'Estádio 97',
          text: 'Logo de aniversário de um dos programas de rádio esportivos mais tradicionais do Brasil.',
          scope: 'Logo, direção de arte',
          summary:
            'Um dos programas esportivos de rádio mais tradicionais do Brasil, produzido pela Energia 97 FM. Os 25 anos pediam um logo com o peso dessa história.',
          alts: {
            logo: 'Logo do Estádio 97 para os 25 anos',
            icon: 'Detalhe da coroa de louros e da bola do Estádio 97',
            applied: 'Logo do Estádio 97 aplicado na identidade da rádio',
            channel: 'Identidade do Estádio 97 no canal da Energia 97 FM',
            apps: 'Aplicações da marca Estádio 97',
            showcase: 'Apresentação final da identidade do Estádio 97',
          },
          sections: {
            challenge: {
              label: 'Desafio',
              body: ['O programa tem uma longa trajetória como líder de audiência nas rádios esportivas do Brasil. Os 25 anos pediam um logo que representasse e sustentasse a grandeza e a tradição desse meio de comunicação.'],
            },
            solution: {
              label: 'Logo',
              body: ['Extremos prolongados passam a sensação de algo bem estabelecido, longevo, sólido. A tipografia alta sustenta a autoridade. Um ícone independente para o número 97 representa a sintonia da rádio e o nome pelo qual ela é conhecida, Rádio 97.'],
            },
            symbol: {
              label: 'Símbolo',
              body: ['A coroa de louros marca o triunfo da longevidade, sinal tradicional de mérito. A bola está posicionada de modo a lembrar, com sutileza, a origem de tudo e a motivação de toda a trajetória.'],
            },
          },
        },
      },
    },
    note: {
      text: 'Nós também nos cansamos de marcas que dizem o mesmo que todas as outras da categoria. Por isso, antes de desenhar qualquer coisa, ajudamos a encontrar o que diferencia a sua empresa e desenhamos a visão dela.',
      sign: 'Lucas e Flavia, Vazio',
    },
    faq: {
      title: 'Perguntas que ouvimos antes da primeira conversa',
      items: [
        {
          q: 'O que é estratégia de marca B2B?',
          a: 'É a decisão sobre o que a empresa defende, para quais compradores e diante de quais alternativas, escrita antes de qualquer design.',
        },
        {
          q: 'Quanto tempo leva um projeto?',
          a: 'Depende do escopo. Os prazos entram na proposta, depois da primeira conversa.',
        },
        {
          q: 'Vocês atendem um setor só?',
          a: 'Não. Até agora trabalhamos com advocacia e telemedicina. O método parte do mercado de vocês, não do nosso.',
        },
        {
          q: 'Vocês também desenham e constroem o site?',
          a: 'Sim, quando a marca precisa, como etapa depois da estratégia. A estratégia vem primeiro.',
        },
        {
          q: 'O que precisamos para começar?',
          a: 'Uma primeira conversa com 24 perguntas e acesso às pessoas que mais conhecem o negócio.',
        },
      ],
    },
    contact: {
      title: 'Conte onde a sua marca está travada.',
      rights: '© 2026 Vazio Design Studio',
      place: 'São Paulo, Brasil',
      top: 'Voltar ao topo',
    },
    loader: { label: 'Carregando', skip: 'Pular a abertura' },
  },
};
