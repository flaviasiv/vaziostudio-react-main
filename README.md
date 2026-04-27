# Vazio Design Studio - Portfolio (React)

Site do Vazio Design Studio - Creative Design & Art Direction

## Migração para React

Este projeto foi migrado de HTML/CSS/JS estático para React com Vite.

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server rápido
- **React Router DOM** - Navegação entre páginas
- **Swiper** - Carrossel de slides responsivo
- **CSS Modules** - Estilos organizados por componente

## Estrutura do Projeto

```
vazio-design-studio/
├── public/
│   ├── assets/          # Imagens, vídeos e GIFs dos projetos
│   └── fonts/           # Fontes customizadas
├── src/
│   ├── components/      # Componentes reutilizáveis (Header, Footer)
│   ├── pages/           # Páginas do site
│   │   ├── Home.jsx
│   │   ├── Supernova.jsx
│   │   ├── Botteghe.jsx
│   │   ├── BuddyNutrition.jsx
│   │   ├── Lata.jsx
│   │   ├── ClicksCorres.jsx
│   │   └── Estadio97.jsx
│   ├── styles/          # Arquivos CSS
│   ├── App.jsx          # Componente principal com rotas
│   └── main.jsx         # Entry point
└── package.json
```

## Como Executar

### Desenvolvimento

```bash
cd vazio-design-studio
npm install
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

### Preview do Build

```bash
npm run preview
```

## Páginas

- `/` - Home (página principal com lista de projetos)
- `/supernova` - Projeto Supernova Entertainment
- `/botteghe` - Projeto Botteghe Del Caffè
- `/buddynutrition` - Projeto Buddy Nutrition
- `/lata` - Projeto Lata 05
- `/clickscorres` - Projeto Clicks & Corres
- `/estadio97` - Projeto Estadio 97

## Funcionalidades

- ✅ Navegação SPA (Single Page Application)
- ✅ Menu mobile responsivo
- ✅ Carrossel de skills com Swiper
- ✅ Vídeos e imagens otimizados
- ✅ SEO com meta tags
- ✅ Scroll automático ao topo em mudanças de rota

## Autor

**Vazio Design Studio** - Creative Design & Art Direction

**Desenvolvimento**: Flavia Sigoli

---

© 2024 Vazio Design Studio. Todos os direitos reservados.
