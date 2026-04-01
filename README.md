# Software Engineer Portfolio

Portfolio profesional construido con **Astro** y **Tailwind CSS**, enfocado en alto rendimiento, buena experiencia de usuario y optimización SEO.

## ¿Qué incluye?

- Landing de perfil profesional
- Secciones de experiencia, proyectos, contacto y redes
- Diseño moderno con estilos utilitarios de Tailwind
- Interacciones ligeras en cliente (scroll/reveal/navbar)

## Requisitos

- Node.js 20+
- npm 10+

## Cómo ejecutarlo en local

1. Instala dependencias:
   `npm install`
2. Inicia el entorno de desarrollo:
   `npm run dev`
3. Abre en el navegador:
   `http://localhost:3000`

## Scripts disponibles

- `npm run dev`: levanta el servidor de desarrollo
- `npm run build`: genera el build de producción
- `npm run preview`: previsualiza el build generado
- `npm run lint`: ejecuta validaciones con `astro check`
- `npm run clean`: elimina artefactos (`dist` y `.astro`)

## Estructura base

- `src/layouts/`: layout principal del sitio
- `src/pages/`: páginas Astro
- `src/styles/`: estilos globales y utilidades

## Build para producción

```bash
npm run build
npm run preview
```
