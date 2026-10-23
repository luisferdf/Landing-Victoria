import type { Image, Project } from "./types";

const museo_tokio: Image[] = [
  { src: "/projects/museo-tokio/01.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 1", width: 828, height: 1472 },
  { src: "/projects/museo-tokio/02.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 2", width: 828, height: 1472 },
  { src: "/projects/museo-tokio/03.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 3", width: 828, height: 1472 },
  { src: "/projects/museo-tokio/04.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 4", width: 828, height: 1472 },
  { src: "/projects/museo-tokio/05.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 5", width: 1472, height: 828 },
  { src: "/projects/museo-tokio/06.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 6", width: 1472, height: 828 },
  { src: "/projects/museo-tokio/07.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 7", width: 1600, height: 2133 },
  { src: "/projects/museo-tokio/08.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 8", width: 1600, height: 2133 },
  { src: "/projects/museo-tokio/09.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 9", width: 1600, height: 2133 },
  { src: "/projects/museo-tokio/10.webp", alt: "Maqueta del análisis del Museo Nacional de Arte Occidental de Tokio, vista 10", width: 960, height: 1280 },
];

const casa_guardaparques: Image[] = [
  { src: "/projects/casa-guardaparques/01.webp", alt: "Lámina de componentes y uniones de la casa de guardaparques", width: 828, height: 1472 },
  { src: "/projects/casa-guardaparques/02.webp", alt: "Maqueta de la casa de guardaparques en exhibición", width: 1600, height: 2844 },
  { src: "/projects/casa-guardaparques/03.webp", alt: "Maquetas de la casa de guardaparques en exposición", width: 1600, height: 2844 },
  { src: "/projects/casa-guardaparques/04.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 4", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/05.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 5", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/06.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 6", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/07.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 7", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/08.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 8", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/09.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 9", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/10.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 10", width: 1600, height: 1127 },
  { src: "/projects/casa-guardaparques/11.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 11", width: 1080, height: 760 },
  { src: "/projects/casa-guardaparques/12.webp", alt: "Render de la casa de guardaparques en el bosque, imagen 12", width: 1080, height: 760 },
];

const prototipo_caribe: Image[] = [
  { src: "/projects/prototipo-caribe/01.webp", alt: "Maqueta del prototipo de espacios en el Caribe, vista 1", width: 1080, height: 720 },
  { src: "/projects/prototipo-caribe/02.webp", alt: "Maqueta del prototipo de espacios en el Caribe, vista 2", width: 1600, height: 1630 },
  { src: "/projects/prototipo-caribe/03.webp", alt: "Maqueta del prototipo de espacios en el Caribe, vista 3", width: 1600, height: 2133 },
  { src: "/projects/prototipo-caribe/04.webp", alt: "Maqueta del prototipo de espacios en el Caribe, vista 4", width: 1600, height: 2133 },
  { src: "/projects/prototipo-caribe/05.webp", alt: "Maqueta del prototipo de espacios en el Caribe, vista 5", width: 1600, height: 2134 },
  { src: "/projects/prototipo-caribe/06.webp", alt: "Maqueta del prototipo de espacios en el Caribe, vista 6", width: 1600, height: 2133 },
];

const casa_miami: Image[] = [
  { src: "/projects/casa-miami/01.webp", alt: "Casa Miami: Fachada con piscina", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/02.webp", alt: "Casa Miami: Planta de la casa con zonificación", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/03.webp", alt: "Casa Miami: Dormitorio 1", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/04.webp", alt: "Casa Miami: Dormitorio 1, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/05.webp", alt: "Casa Miami: Baño 1", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/06.webp", alt: "Casa Miami: Dormitorio 2", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/07.webp", alt: "Casa Miami: Dormitorio 2, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/08.webp", alt: "Casa Miami: Baño 2", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/09.webp", alt: "Casa Miami: Dormitorio 3", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/10.webp", alt: "Casa Miami: Dormitorio 3, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/11.webp", alt: "Casa Miami: Dormitorio 4", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/12.webp", alt: "Casa Miami: Dormitorio 4, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/13.webp", alt: "Casa Miami: Baño 3", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/14.webp", alt: "Casa Miami: Dormitorio 5", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/15.webp", alt: "Casa Miami: Dormitorio 6", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/16.webp", alt: "Casa Miami: Baño 4", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/17.webp", alt: "Casa Miami: Dormitorio 5, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/18.webp", alt: "Casa Miami: Dormitorio 6, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/19.webp", alt: "Casa Miami: Sala", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/20.webp", alt: "Casa Miami: Comedor y sala", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/21.webp", alt: "Casa Miami: Comedor", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/22.webp", alt: "Casa Miami: Cocina", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/23.webp", alt: "Casa Miami: Cocina, vista alterna", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/24.webp", alt: "Casa Miami: Área BBQ", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/25.webp", alt: "Casa Miami: Área BBQ, mesa exterior", width: 1521, height: 1075 },
  { src: "/projects/casa-miami/26.webp", alt: "Casa Miami: Área BBQ al atardecer", width: 1521, height: 1075 },
];

export const projects: Project[] = [
  {
    slug: "museo-tokio",
    title: "Museo Nacional de Arte Occidental de Tokio",
    description:
      "Análisis arquitectónico del museo a través de maquetas físicas: organización del programa, recorrido y materialidad.",
    tags: ["Análisis", "Maquetas", "Museo"],
    cover: museo_tokio[7],
    gallery: museo_tokio,
  },
  {
    slug: "casa-guardaparques",
    title: "Casa de guardaparques",
    description:
      "Vivienda de bambú integrada al paisaje, pensada para la funcionalidad espacial y la sostenibilidad ambiental. Taller de Proyectos VI, UCAB.",
    tags: ["Paisaje", "Sostenibilidad", "Render"],
    cover: casa_guardaparques[5],
    gallery: casa_guardaparques,
  },
  {
    slug: "prototipo-caribe",
    title: "Prototipo de espacios en el Caribe",
    description:
      "Prototipo de espacios abiertos y cubiertos para el contexto caribeño, desarrollado con maquetas y láminas de presentación.",
    tags: ["Prototipo", "Maquetas", "Caribe"],
    cover: prototipo_caribe[1],
    gallery: prototipo_caribe,
  },
  {
    slug: "casa-miami",
    title: "Casa Miami",
    description:
      "Diseño de una vivienda unifamiliar con piscina y área BBQ: zonificación, interiores y visualización 3D de cada ambiente.",
    tags: ["Vivienda", "Interiorismo", "Visualización 3D"],
    cover: casa_miami[0],
    gallery: casa_miami,
  },
];
