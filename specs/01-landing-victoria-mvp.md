# 01 — Landing page de Victoria Astorga (MVP)

- **Estado:** implementado
- **Dependencias:** Ninguna (primera spec)
- **Fecha:** 2026-10-23
- **Objetivo:** Implementar en Next.js la landing de una sola página de Victoria Astorga (estudiante de arquitectura), basada en `references/Landing/Portfolio Wireframe.dc.html` y adaptada a arquitectura, con contenido real del CV, foto y proyectos, tema claro/oscuro y animaciones.

## Alcance

### Dentro
- Una sola ruta `/` con: Loader, navbar flotante (anchors + menú móvil), Hero, Sobre mí, Experiencia, Software, Proyectos, Contacto, Footer.
- Contenido real desde el CV, `foto de perfil.jpeg` y carpetas de `references/Proyectos/Portafolio`.
- Adaptación a arquitectura:
  - "Stack" → "Software" + Representación manual + Idiomas.
  - Badge "DEV." → "ARQ.".
- Tema claro/oscuro con toggle (persistido en localStorage).
- Animaciones con `motion`: loader, reveal (blur/opacity/y + stagger), typewriter de roles, badges flotantes, línea de timeline con scroll, carrusel con drag/flechas/loop, hovers. Respetan `prefers-reduced-motion`.
- Proyectos: 4 (Museo Tokio, Casa de guardaparques, Prototipo Caribe, Casa Miami). Portada elegida por Claude (la usuaria puede pedir cambios), imágenes convertidas de HEIC/PNG a WebP/JPG optimizado en `public/`.
- "Ver detalles" abre un modal con galería de imágenes del proyecto.
- Botón "Descargar CV" (PDF en `public/`).
- Contacto: ciudad (Caracas), mapa, correo, teléfono e Instagram (`https://www.instagram.com/victoriaastorgas`) como links. Sin formulario.
- Responsive (móvil, tablet, desktop). Metadata/título SEO propios.

### Fuera (specs futuras)
- Chat AI y cualquier backend/LLM.
- Formulario de contacto.
- WhatsApp, GitHub, TikTok y LinkedIn.
- Página `Proyectos` (listado/detalle) y Admin Panel.
- Botón "Ver más proyectos".
- Videos (.mp4) de proyectos.
- CMS/DB: datos en archivos TS locales.
- i18n (solo español).

## Modelo de datos

Archivos en `data/`, tipos en `data/types.ts`.

### `Profile` (`data/profile.ts`)
- `name`: "Victoria del Valle Astorga Sucre"
- `firstName`: "Victoria"
- `roles`: string[] — typewriter del hero
- `tagline`: string — resumen corto del hero
- `about`: { title, blocks: { heading, text }[] } — textos de Sobre mí
- `personalData`: { label, value }[] — Ubicación, Universidad, Semestre, Idiomas, etc.
- `photo`: ruta en `public/` (hero y Sobre mí)
- `cvUrl`: "/cv-victoria-astorga.pdf"
- `contact`: { city, email, phone, instagramUrl, mapEmbedUrl }

### `ExperienceItem` (`data/experience.ts`)
- `id`, `kind`: "work" | "project" | "education"
- `date`: string, `title`: string, `organization`: string
- `description`: string[] (bullets), `tags`: string[]

### `SoftwareGroup` (`data/software.ts`)
- `category`: "Software" | "Representación manual" | "Idiomas"
- `description`: string
- `items`: { name, icon? }[]

### `Project` (`data/projects.ts`)
- `slug`, `title`, `description`, `tags`: string[]
- `cover`: Image
- `gallery`: Image[] (para el modal)
- `externalLink?`: { label, url } (opcional; si no existe, el card oculta el link)

### `Image`
- `src`: ruta en `public/projects/<slug>/`, `alt`, `width`, `height`

### Convenciones
- `num` ("01"…) del card se deriva del índice, no se guarda.
- Imágenes convertidas a WebP/JPG en `public/projects/<slug>/`; originales siguen en `references/`.
- PDF de Casa Miami: se extraen páginas a imágenes para su galería.
- Tema: clave `theme` en localStorage ("light" | "dark"); sin más persistencia.

## Plan de implementación

Cada paso deja `npm run build` y `npm run lint` pasando.

1. **Base y tema.** Leer guías relevantes en `node_modules/next/dist/docs/`. Reemplazar boilerplate en `app/layout.tsx` (metadata, `lang="es"`, Poppins vía `next/font`) y `app/globals.css` (tokens de color claro/oscuro del wireframe). Instalar `motion`. Script inline anti-flash de tema. Crear `components/ThemeToggle.tsx`.
2. **Datos y assets.** Crear `data/types.ts`, `profile.ts`, `experience.ts`, `software.ts`, `projects.ts`. Convertir HEIC/PNG/JPG y PDF Casa Miami a WebP/JPG en `public/projects/<slug>/`. Foto de perfil a `public/`. Copiar CV a `public/cv-victoria-astorga.pdf`. Elegir portadas.
3. **Utilidades de animación.** `components/Reveal.tsx` (blur/opacity/y + stagger, respeta reduced-motion), `components/Typewriter.tsx`.
4. **Shell.** `components/Navbar.tsx` (pill flotante, link activo por scroll, menú móvil, toggle de tema), `components/Loader.tsx`, `components/Footer.tsx`, `components/SectionHeading.tsx`. `app/page.tsx` compone las secciones.
5. **Hero.** `components/sections/Hero.tsx`: título, typewriter, botones (Ver mi trabajo / Descargar CV), Instagram y correo, foto circular con badges flotantes.
6. **Sobre mí.** `components/sections/About.tsx`: foto, bloques de texto, datos personales, badge "ARQ.".
7. **Experiencia.** `components/sections/Experience.tsx`: timeline con línea que se llena con scroll, tarjetas alternadas (una columna en móvil).
8. **Software.** `components/sections/Software.tsx`: filas por categoría con tiles y hover.
9. **Proyectos.** `components/sections/Projects.tsx` (carrusel con drag, flechas, loop, 1/2/3 visibles) y `components/ProjectModal.tsx` (galería, cierre con Esc/overlay, foco accesible).
10. **Contacto.** `components/sections/Contact.tsx`: ciudad, mapa embed, links correo/teléfono/Instagram.
11. **Pulido y verificación.** Responsive 375/768/1280, ambos temas, reduced-motion, SEO/metadata, alt en imágenes, `npm run lint` y `npm run build`, revisión visual con Playwright vs. wireframe.

## Criterios de aceptación

- [ ] `npm run lint` y `npm run build` terminan sin errores.
- [ ] `/` renderiza las 7 secciones (Hero, Sobre mí, Experiencia, Software, Proyectos, Contacto, Footer) en ese orden, sin rastro del boilerplate de create-next-app.
- [ ] Ningún texto placeholder del wireframe ("Título de la sección", "[Nombre]", "TuMarca", "ejemplo.com", barras grises) visible.
- [ ] Los datos de experiencia, educación, software, idiomas y contacto coinciden con el CV.
- [ ] El hero muestra la foto de perfil y el typewriter cicla por todos los roles de `profile.roles`.
- [ ] Los links del navbar hacen scroll suave a su sección y resaltan la sección activa al hacer scroll.
- [ ] Menú hamburguesa visible y funcional por debajo de 820px; links de navbar visibles por encima.
- [ ] El toggle cambia entre tema claro y oscuro, persiste tras recargar y no produce flash de tema incorrecto.
- [ ] El carrusel muestra 4 proyectos, avanza con flechas y drag, hace loop, y muestra 1/2/3 cards según ancho (<680 / 680–1023 / ≥1024).
- [ ] "Ver detalles" abre un modal con la galería del proyecto; se cierra con Esc y clic en overlay, y devuelve el foco al botón.
- [ ] "Descargar CV" descarga el PDF; el link de Instagram abre `https://www.instagram.com/victoriaastorgas` en nueva pestaña con `rel="noopener"`.
- [ ] No existen chat, formulario de contacto, WhatsApp ni botón "Ver más proyectos".
- [ ] Con `prefers-reduced-motion: reduce` no hay animaciones de movimiento y todo el contenido es visible.
- [ ] Sin scroll horizontal en 375px, 768px y 1280px.
- [ ] Todas las imágenes tienen `alt`; no hay archivos HEIC ni mp4 en `public/`.
- [ ] Lighthouse (móvil, build de producción): Accesibilidad ≥ 90 y SEO ≥ 90.

## Decisiones tomadas y descartadas

**Tomadas**
- **Solo landing `/`.** Proyectos (listado/detalle) y Admin Panel van en specs aparte para mantener el MVP acotado.
- **Sin chat AI ni formulario.** Requieren backend/servicio externo; la usuaria los descartó por ahora. Contacto es solo links.
- **Sin WhatsApp.** Decisión de la usuaria; solo correo, teléfono e Instagram.
- **Modal para "Ver detalles".** Da valor a los proyectos sin crear rutas nuevas; se elimina "Ver más proyectos".
- **Tema claro/oscuro y animaciones incluidos.** Pedido explícito de la usuaria; animaciones con `motion`.
- **Datos en archivos TS locales.** Sin CMS/DB; el contenido cambia poco y se versiona en git.
- **Imágenes convertidas a WebP/JPG.** HEIC no se muestra en navegadores; se optimiza peso.
- **Videos fuera.** Peso y complejidad; candidatos a spec futura.
- **Poppins y paleta del wireframe** en lugar de Geist del boilerplate.
- **Textos redactados por Claude desde el CV**, revisados por la usuaria al final.
- **Definición parcial.** La usuaria revisa el spec completo al final en lugar de confirmar sección por sección; las secciones de criterios, decisiones y riesgos fueron redactadas sin confirmación individual.

**Descartadas**
- Modal vs. página de detalle por proyecto: página descartada (requiere rutas dinámicas y más alcance).
- Solo CSS + IntersectionObserver para animaciones: descartado a favor de `motion` (drag, scroll-linked, AnimatePresence más simples).

## Riesgos identificados

- **Next.js 16 con cambios de ruptura** (`cacheComponents`, `partialPrefetching`): leer docs locales antes de codificar; componentes con estado/animación son Client Components.
- **Conversión HEIC y extracción de PDF** pueden requerir herramientas externas (sharp/ImageMagick/pdftoppm) no instaladas en Windows; fallback: pedir a la usuaria exportar a JPG.
- **Peso de imágenes** de proyectos puede degradar LCP; mitigar con WebP, `next/image`, tamaños y `loading="lazy"` salvo el hero.
- **Flash de tema incorrecto** al cargar si el script anti-flash falla; verificar en criterios.
- **Contenido redactado por IA** (Sobre mí, roles, descripciones de proyectos) puede no reflejar la voz de Victoria; se revisa al final.
- **Datos personales públicos** (teléfono y correo del CV) quedan expuestos en la web.
