# Software Engineer Portfolio

Portfolio profesional desarrollado con **Astro** y **Tailwind CSS**, optimizado para rendimiento, SEO y mantenibilidad.

## Descripción

Este proyecto presenta una marca personal técnica con secciones desacopladas (Hero, Experiencia, Proyectos, Presencia Profesional, Contacto y Footer), animaciones ligeras de scroll y una estructura pensada para escalar contenido sin concentrar lógica en `index.astro`.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- Cloudflare Workers (deploy)

## Requisitos

- Node.js 20+
- npm 10+

## Instalación y ejecución local

1. Instalar dependencias:
   `npm install`
2. Ejecutar entorno de desarrollo:
   `npm run dev`
3. Abrir en navegador:
   `http://localhost:3000`

## Scripts

- `npm run dev`: inicia servidor de desarrollo
- `npm run build`: genera build de producción
- `npm run preview`: previsualiza el build
- `npm run lint`: valida tipos/plantillas con `astro check`
- `npm run clean`: elimina artefactos (`dist` y `.astro`)
- `npm run deploy`: build + deploy a Cloudflare Workers

## Estructura del proyecto

- `src/pages/index.astro`: composición principal de secciones
- `src/layouts/Layout.astro`: layout base y metadatos SEO
- `src/components/sections/`: secciones visuales (Header, Trust, Experience, Projects, etc.)
- `src/components/behaviors/`: scripts de comportamiento aislados (scroll/progreso)
- `src/styles/global.css`: estilos globales y utilidades
- `public/shared/resources/images/`: imágenes del portfolio
- `public/shared/resources/logos/technologies/`: logos SVG de tecnologías
- `public/shared/resources/logos/`: favicon e iconos del sitio

## Deploy en Cloudflare

1. Asegúrate de tener sesión activa en Cloudflare CLI:
   `npx wrangler login`
2. Ejecuta deploy:
   `npm run deploy`
3. Configuración principal en:
   `wrangler.jsonc`

## Convención recomendada para nuevas secciones

1. Crear sección en `src/components/sections/<Nombre>Section.astro`
2. Importarla en `src/pages/index.astro`
3. Mantener datos dentro del componente o moverlos a `src/shared/` si serán reutilizados

## Producción

```bash
npm run build
npm run deploy
```
