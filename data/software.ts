import type { SoftwareGroup } from "./types";

export const software: SoftwareGroup[] = [
  {
    category: "Software",
    description: "Herramientas de dibujo técnico, modelado, render y ofimática.",
    items: [
      { name: "AutoCAD" },
      { name: "SketchUp" },
      { name: "V-Ray" },
      { name: "D5 Render" },
      { name: "Adobe Photoshop" },
      { name: "Microsoft Excel" },
    ],
  },
  {
    category: "Representación manual",
    description: "Pensar y comunicar el proyecto con las manos.",
    items: [{ name: "Dibujo a mano" }, { name: "Maquetas físicas" }],
  },
  {
    category: "Idiomas",
    description: "Comunicación en español e inglés.",
    items: [{ name: "Español · Nativo" }, { name: "Inglés · B1" }],
  },
];
