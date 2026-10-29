// Estrutura dos projetos: mídia, links e ordem das seções. O texto (EN/PT) mora em i18n/content.js,
// em work.items[slug], e cada bloco aponta para ele pela chave (`text`) ou pelo nome do alt.
// Bloco de mídia = uma linha: os itens dividem a largura na proporção de cada imagem e ficam com a mesma altura.

const img = (src, w, h, alt) => ({ type: 'img', src, w, h, alt });
const vid = (src, w, h) => ({ type: 'video', src, w, h });
const media = (...items) => ({ type: 'media', items });
const text = (key) => ({ type: 'text', key });

export const works = [
  {
    slug: 'matarasso',
    year: '2026',
    href: 'https://www.matarasso.adv.br',
    featured: true,
    cover: img('/work/matarasso/hero.webp', 1440, 800, 'home'),
    tile: { ...img('/work/matarasso/hero.webp', 1440, 800, 'home'), cls: 'wide' },
    hero: img('/work/matarasso/guide-cover.webp', 1600, 900, 'guide'),
    blocks: [
      text('context'),
      media(img('/work/matarasso/guide-before-after.webp', 1600, 1200, 'beforeAfter')),
      text('strategy'),
      media(img('/work/matarasso/guide-imagery.webp', 1600, 1200, 'imagery')),
      text('identity'),
      media(img('/work/matarasso/guide-logo.webp', 1600, 1200, 'logo')),
      media(img('/work/matarasso/guide-monogram.webp', 1600, 1200, 'monogram'), img('/work/matarasso/guide-palette-use.webp', 1600, 1200, 'paletteUse')),
      media(img('/work/matarasso/guide-palette.webp', 1600, 1200, 'palette'), img('/work/matarasso/guide-type.webp', 1600, 1200, 'type')),
      text('applications'),
      media(img('/work/matarasso/guide-card.webp', 1600, 1200, 'card'), img('/work/matarasso/guide-stationery.webp', 1600, 1200, 'stationery')),
      media(img('/work/matarasso/guide-linkedin.webp', 1600, 1200, 'linkedin'), img('/work/matarasso/guide-stories.webp', 1600, 1200, 'stories')),
      text('website'),
      media(img('/work/matarasso/guide-site.webp', 1600, 1200, 'siteMock')),
      media(img('/work/matarasso/hero.webp', 1440, 800, 'home')),
      media(img('/work/matarasso/about.webp', 1440, 900, 'about'), img('/work/matarasso/approach.webp', 1440, 820, 'approach')),
      media(img('/work/matarasso/areas.webp', 1440, 800, 'areas'), img('/work/matarasso/area.webp', 1440, 900, 'area')),
      media(img('/work/matarasso/team.webp', 1440, 800, 'team'), img('/work/matarasso/office.webp', 1440, 1300, 'office')),
    ],
  },
  {
    slug: 'pura-terapia',
    year: '2026',
    href: 'https://puraterapia.com.br',
    featured: true,
    cover: img('/work/pura-terapia/identity.webp', 1600, 842, 'identity'),
    tile: { ...img('/work/pura-terapia/identity.webp', 1600, 842, 'identity'), cls: 'tall' },
    hero: vid('/work/pura-terapia/cover.mp4', 1440, 600),
    blocks: [
      text('context'),
      media(img('/work/pura-terapia/identity.webp', 1600, 842, 'identity')),
      text('identity'),
      media(vid('/work/pura-terapia/logo-grid.mp4', 2880, 1516)),
      media(img('/work/pura-terapia/symbol.webp', 1440, 800, 'symbol')),
      media(img('/work/pura-terapia/brand.webp', 1600, 842, 'brand')),
      text('website'),
      media(vid('/work/pura-terapia/website.mp4', 1440, 800)),
      media(img('/work/pura-terapia/website.webp', 1440, 799, 'website')),
      text('whatsapp'),
      media(vid('/work/pura-terapia/whatsapp.mp4', 1440, 800), img('/work/pura-terapia/whatsapp.webp', 1440, 800, 'whatsapp')),
      text('result'),
    ],
  },
  {
    slug: 'supernova',
    year: '2023',
    cover: img('/work/supernova/mark.webp', 1440, 758, 'mark'),
    hero: vid('/work/supernova/cover.mp4', 1440, 600),
    blocks: [
      media(vid('/work/supernova/launch.mp4', 1440, 758)),
      text('challenge'),
      media(img('/work/supernova/mark.webp', 1440, 758, 'mark')),
      media(vid('/work/supernova/motion-1.mp4', 1920, 1080)),
      text('identity'),
      media(img('/work/supernova/type.webp', 1440, 758, 'type')),
      media(
        vid('/work/supernova/type-1.mp4', 1440, 1218),
        vid('/work/supernova/type-2.mp4', 1920, 1080),
        vid('/work/supernova/type-3.mp4', 1928, 1576),
      ),
      text('solution'),
      media(
        img('/work/supernova/elements.webp', 672, 836, 'elements'),
        img('/work/supernova/collateral-1.webp', 279, 501, 'collateral'),
        img('/work/supernova/collateral-2.webp', 280, 501, 'collateral'),
        img('/work/supernova/collateral-3.webp', 280, 501, 'collateral'),
        img('/work/supernova/collateral-4.webp', 279, 501, 'collateral'),
      ),
      media(vid('/work/supernova/motion-2.mp4', 1440, 960), vid('/work/supernova/motion-3.mp4', 1440, 960)),
    ],
  },
  {
    slug: 'estadio97',
    year: '2024',
    cover: img('/work/estadio97/logo.webp', 1440, 810, 'logo'),
    hero: vid('/work/estadio97/cover.mp4', 1280, 720),
    blocks: [
      media(vid('/work/estadio97/reveal.mp4', 1280, 720)),
      text('challenge'),
      media(img('/work/estadio97/logo.webp', 1440, 810, 'logo')),
      text('solution'),
      media(vid('/work/estadio97/icon.mp4', 512, 660), img('/work/estadio97/icon.webp', 595, 335, 'icon')),
      text('symbol'),
      media(
        vid('/work/estadio97/radio-1.mp4', 1280, 720),
        img('/work/estadio97/applied.webp', 1440, 931, 'applied'),
        vid('/work/estadio97/radio-2.mp4', 1280, 720),
      ),
      media(img('/work/estadio97/channel.webp', 1136, 600, 'channel')),
      media(img('/work/estadio97/apps-1.webp', 1440, 747, 'apps'), img('/work/estadio97/apps-2.webp', 1441, 915, 'apps')),
      media(vid('/work/estadio97/screen.mp4', 1440, 1080), img('/work/estadio97/showcase.webp', 1440, 810, 'showcase')),
    ],
  },
];

export const findWork = (slug) => works.find((w) => w.slug === slug);
