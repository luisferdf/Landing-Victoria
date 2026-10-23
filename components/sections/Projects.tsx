"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  type AnimationPlaybackControls,
} from "motion/react";
import { useReducedMotion } from "../useReducedMotion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import ProjectModal from "../ProjectModal";
import { Reveal } from "../Reveal";
import SectionHeading from "../SectionHeading";

const GAP = 28;
const MAX_TAGS = 3;
const n = projects.length;
// Se renderizan 3 copias; el carrusel vive en la copia del medio y salta
// entre copias sin animación para dar el loop infinito.
const slides = [...projects, ...projects, ...projects];

function ProjectCard({
  project,
  num,
  hidden,
  onOpen,
}: {
  project: Project;
  num: string;
  hidden: boolean;
  onOpen: (project: Project) => void;
}) {
  const extraTags = project.tags.length - MAX_TAGS;

  return (
    <article
      aria-hidden={hidden || undefined}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(0,0,0,0.10)]"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(min-width: 1024px) 380px, (min-width: 680px) 50vw, 100vw"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <span className="text-[44px] leading-none font-extrabold tracking-[-0.03em] text-border">
          {num}
        </span>
        <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, MAX_TAGS).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
          {extraTags > 0 && (
            <span className="rounded-full border border-border-strong bg-background px-2.5 py-1 text-xs font-semibold">
              +{extraTags}
            </span>
          )}
        </div>
        <div className="mt-auto flex items-center gap-3.5 pt-3.5">
          <button
            type="button"
            tabIndex={hidden ? -1 : undefined}
            onClick={() => onOpen(project)}
            className="flex-1 cursor-pointer rounded-xl border border-accent bg-background p-3 text-center text-xs font-semibold tracking-[0.15em] transition-transform active:scale-[0.97]"
          >
            VER DETALLES
          </button>
          {project.externalLink && (
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener"
              tabIndex={hidden ? -1 : undefined}
              className="flex items-center gap-1.5 text-[13px] whitespace-nowrap text-muted transition-colors hover:text-foreground"
            >
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-md border border-border bg-surface text-[11px] text-foreground">
                ↗
              </span>
              {project.externalLink.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(n);
  const stepRef = useRef(0);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const draggedRef = useRef(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const measure = () => {
    const first = trackRef.current?.children[0] as HTMLElement | undefined;
    if (first) stepRef.current = first.offsetWidth + GAP;
  };

  // Si el índice salió de la copia del medio, lo devuelve sin que se note.
  const settle = () => {
    const step = stepRef.current;
    if (indexRef.current >= 2 * n) {
      indexRef.current -= n;
      x.set(x.get() + n * step);
    } else if (indexRef.current < n) {
      indexRef.current += n;
      x.set(x.get() - n * step);
    }
  };

  const go = (delta: number) => {
    controlsRef.current?.stop();
    settle();
    indexRef.current += delta;
    controlsRef.current = animate(x, -indexRef.current * stepRef.current, {
      duration: reduced ? 0 : 0.5,
      ease: "easeInOut",
      onComplete: settle,
    });
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const align = () => {
      measure();
      x.set(-indexRef.current * stepRef.current);
    };
    align();
    const observer = new ResizeObserver(align);
    observer.observe(viewport);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="proyectos"
      className="border-t border-surface bg-surface-hover px-6 py-[120px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Proyectos" title="Trabajos seleccionados" />
        </div>

        <Reveal>
          <div className="mb-5 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Proyecto anterior"
              className="h-11 w-11 cursor-pointer rounded-full border border-accent bg-background text-base transition-transform active:scale-90"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Proyecto siguiente"
              className="h-11 w-11 cursor-pointer rounded-full border border-accent bg-accent text-base text-accent-foreground transition-transform active:scale-90"
            >
              →
            </button>
          </div>

          <div
            ref={viewportRef}
            onScroll={(e) => {
              // El foco en una copia fuera de vista no debe desplazar el overflow.
              e.currentTarget.scrollLeft = 0;
            }}
            className="-m-4 cursor-grab touch-pan-y overflow-hidden p-4 select-none active:cursor-grabbing"
          >
            <motion.div
              ref={trackRef}
              drag="x"
              dragMomentum={false}
              dragElastic={0.1}
              style={{ x, gap: GAP }}
              onDragStart={() => {
                draggedRef.current = true;
                controlsRef.current?.stop();
                settle();
              }}
              onDragEnd={(_, info) => {
                setTimeout(() => (draggedRef.current = false), 0);
                const step = stepRef.current;
                const moved = Math.abs(info.offset.x);
                const count =
                  moved > step * 0.2 ? Math.max(1, Math.round(moved / step)) : 0;
                go(info.offset.x < 0 ? count : -count);
              }}
              onClickCapture={(e) => {
                if (draggedRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              className="flex"
            >
              {slides.map((project, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 basis-full min-[680px]:basis-[calc((100%-28px)/2)] min-[1024px]:basis-[calc((100%-56px)/3)]"
                >
                  <ProjectCard
                    project={project}
                    num={String((i % n) + 1).padStart(2, "0")}
                    hidden={i < n || i >= 2 * n}
                    onOpen={setSelected}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
