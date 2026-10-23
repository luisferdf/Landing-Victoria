"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";
import type { Project } from "@/data/types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

// <dialog> nativo con showModal(): aporta focus trap, cierre con Esc y devuelve
// el foco al botón que lo abrió al cerrarse.
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const total = project.gallery.length;
  const image = project.gallery[current];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const go = (delta: number) => setCurrent((c) => (c + delta + total) % total);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  }

  const arrow =
    "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-accent bg-background text-foreground transition-transform active:scale-90";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 text-foreground backdrop:bg-black/70 md:p-8"
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="mx-auto flex max-h-full w-full max-w-[1000px] flex-col gap-4 overflow-y-auto rounded-2xl border border-border bg-background p-5 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h3
              id="project-modal-title"
              className="text-2xl font-bold tracking-[-0.02em]"
            >
              {project.title}
            </h3>
            <p className="max-w-[640px] text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar galería"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border text-xl leading-none transition-transform active:scale-90"
          >
            ×
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className={arrow}
          >
            ←
          </button>
          <div className="flex min-h-[200px] flex-1 items-center justify-center rounded-xl bg-surface">
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 860px, 90vw"
              className="max-h-[48vh] w-auto max-w-full rounded-xl object-contain"
            />
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className={arrow}
          >
            →
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 text-xs text-muted">
          <span aria-live="polite">
            {current + 1} / {total}
          </span>
          {project.externalLink && (
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-foreground"
            >
              {project.externalLink.label} ↗
            </a>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {project.gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={i === current}
              className={`h-16 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-opacity ${
                i === current
                  ? "border-accent"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                width={160}
                height={128}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </dialog>
  );
}
