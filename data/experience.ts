import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "fipev",
    kind: "work",
    date: "Noviembre 2025",
    title: "Diseñadora / Colaboradora independiente",
    organization: "FIPEV · Centro Comercial El Líder, Caracas",
    description: [
      "Diseño de los espacios de la feria, en trabajo de equipo.",
      "Desarrollo de propuestas de diseño y representación gráfica.",
      "Documentación técnica y apoyo en la toma de decisiones proyectuales.",
    ],
    tags: ["Diseño de espacios", "Representación gráfica", "Documentación técnica"],
  },
  {
    id: "sistemas-hibridos",
    kind: "work",
    date: "Ene – Mar 2025",
    title: "Pasante de Arquitectura y Proyectos",
    organization: "Sistemas Híbridos",
    description: [
      "Apoyo en la elaboración de planos y revisión de detalles constructivos.",
      "Asistencia técnica en el desarrollo de soluciones integrales.",
    ],
    tags: ["Planos", "Detalles constructivos", "AutoCAD"],
  },
  {
    id: "casa-guardaparque",
    kind: "project",
    date: "2025",
    title: "Casa de Guardaparque",
    organization: "Taller de Proyectos VI · UCAB",
    description: [
      "Diseño enfocado en la integración paisajística, la funcionalidad espacial y la sostenibilidad ambiental.",
    ],
    tags: ["Paisaje", "Sostenibilidad", "Proyecto destacado"],
  },
  {
    id: "ucab",
    kind: "education",
    date: "2022 – Presente",
    title: "Pregrado en Arquitectura",
    organization: "Universidad Católica Andrés Bello (UCAB)",
    description: ["Cursando el 9.º semestre."],
    tags: ["Arquitectura", "UCAB"],
  },
  {
    id: "san-ignacio",
    kind: "education",
    date: "2022",
    title: "Bachiller",
    organization: "Colegio San Ignacio de Loyola",
    description: ["Educación media general."],
    tags: ["Bachillerato"],
  },
];
