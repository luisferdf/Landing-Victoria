import type { Profile } from "./types";

export const profile: Profile = {
  name: "Victoria del Valle Astorga Sucre",
  firstName: "Victoria",
  roles: [
    "Estudiante de Arquitectura",
    "Diseño de espacios",
    "Visualización 3D",
    "Dibujo a mano y maquetas",
  ],
  tagline:
    "Combino el trabajo digital con el dibujo a mano y las maquetas físicas para diseñar espacios funcionales y bien resueltos.",
  about: {
    title: "Diseñar espacios con oficio y mirada propia",
    blocks: [
      {
        heading: "Quién soy",
        text: "Soy estudiante de 9.º semestre de Arquitectura en la UCAB, en Caracas. Me interesa el diseño arquitectónico, la representación gráfica y la optimización de espacios.",
      },
      {
        heading: "Cómo trabajo",
        text: "Combino herramientas digitales como AutoCAD, SketchUp, V-Ray y D5 Render con el dibujo a mano y las maquetas físicas. Cada proyecto parte de entender el lugar y termina en documentación técnica clara.",
      },
    ],
  },
  personalData: [
    { label: "Ubicación", value: "Caracas, Venezuela" },
    { label: "Universidad", value: "Universidad Católica Andrés Bello (UCAB)" },
    { label: "Semestre", value: "9.º semestre de Arquitectura" },
    { label: "Idiomas", value: "Español (nativo) · Inglés (B1)" },
    {
      label: "Certificaciones",
      value: "Instituto Arts: AutoCAD, SketchUp, V-Ray, Photoshop y Excel",
    },
  ],
  photo: {
    src: "/victoria.jpg",
    alt: "Retrato de Victoria Astorga",
    width: 473,
    height: 1024,
  },
  cvUrl: "/cv-victoria-astorga.pdf",
  contact: {
    city: "Caracas, Venezuela",
    email: "victoria.astorga2004@gmail.com",
    phone: "+58 412 325 7504",
    instagramUrl: "https://www.instagram.com/victoriaastorgas",
    mapEmbedUrl: "https://www.google.com/maps?q=Caracas,Venezuela&output=embed",
  },
};
