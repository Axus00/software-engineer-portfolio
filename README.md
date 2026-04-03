# Software Engineer Portfolio

Portfolio profesional desarrollado con **Astro** y **Tailwind CSS**, optimizado para rendimiento, SEO y mantenibilidad.

## Descripción

Este proyecto presenta una marca personal técnica con secciones desacopladas (Hero, Experiencia, Proyectos, Presencia Profesional, Contacto y Footer), animaciones ligeras de scroll y una estructura pensada para escalar contenido sin concentrar lógica en `index.astro`.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript

## Requisitos

- Node.js 20+
- npm 10+

## Instalación y ejecución

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

## Estructura del proyecto

- `src/pages/index.astro`: composición principal de secciones
- `src/layouts/Layout.astro`: layout base y metadatos
- `src/components/sections/`: secciones visuales (Header, Trust, Experience, Projects, etc.)
- `src/components/behaviors/`: scripts de comportamiento aislados (scroll/progreso)
- `src/shared/resources/images/`: imágenes del portfolio
- `src/shared/resources/logos/technologies/`: logos SVG de tecnologías
- `src/styles/global.css`: estilos globales y utilidades

## Convención recomendada para nuevas secciones

1. Crear sección en `src/components/sections/<Nombre>Section.astro`
2. Importarla en `src/pages/index.astro`
3. Mantener datos de la sección dentro del componente o moverlos a `src/shared/` si serán reutilizados

## Build de producción

```bash
npm run build
npm run preview
```
