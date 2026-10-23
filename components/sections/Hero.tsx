"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotion } from "../useReducedMotion";
import { profile } from "@/data/profile";
import { Reveal, RevealGroup } from "../Reveal";
import Typewriter from "../Typewriter";

const badges = ["AutoCAD", "SketchUp", "D5 Render"];

function FloatingBadge({ label, index }: { label: string; index: number }) {
  const reduced = useReducedMotion();
  return (
    <Reveal>
      <motion.div
        animate={reduced ? undefined : { y: [0, -8, 0] }}
        transition={{
          duration: 3.2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.6,
        }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 py-2.5 text-[13px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      >
        <span className="h-6 w-6 rounded-md bg-surface text-center text-[11px] leading-6 text-muted">
          {label[0]}
        </span>
        {label}
      </motion.div>
    </Reveal>
  );
}

export default function Hero() {
  const { contact } = profile;
  const iconLink =
    "flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:bg-surface-hover";

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center px-6 pt-[140px] pb-20"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap-reverse items-center justify-between gap-16">
        <RevealGroup className="flex flex-[1_1_440px] flex-col gap-6">
          <Reveal>
            <h1 className="text-[clamp(44px,7vw,80px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
              Hola, soy {profile.firstName}
            </h1>
          </Reveal>
          <Reveal className="min-h-[1.4em] text-[clamp(20px,2.4vw,28px)] font-medium text-muted">
            <Typewriter roles={profile.roles} />
          </Reveal>
          <Reveal className="max-w-[520px] text-base leading-relaxed text-muted">
            {profile.tagline}
          </Reveal>
          <Reveal className="mt-2 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="group flex items-center gap-2.5 rounded-xl border border-accent bg-accent px-[26px] py-3.5 text-[15px] font-semibold text-accent-foreground transition-transform active:scale-[0.97]"
            >
              Ver mi trabajo
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[5px]">
                →
              </span>
            </a>
            <a
              href={profile.cvUrl}
              download
              className="flex items-center rounded-xl border border-accent bg-background px-[26px] py-3.5 text-[15px] font-semibold transition-transform active:scale-[0.97]"
            >
              Descargar CV
            </a>
          </Reveal>
          <Reveal className="mt-2 flex items-center gap-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-muted">
              CONECTA
            </span>
            <div className="flex gap-2.5">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener"
                aria-label="Instagram de Victoria"
                className={iconLink}
              >
                <svg
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Enviar correo a Victoria"
                className={iconLink}
              >
                <svg
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </Reveal>
        </RevealGroup>

        <div className="flex flex-[0_1_400px] justify-center px-6">
          <div className="relative w-full max-w-[320px]">
            <Reveal>
              <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border bg-surface">
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={profile.photo.width}
                  height={profile.photo.height}
                  priority
                  sizes="320px"
                  className="h-full w-full object-cover object-[50%_12%]"
                />
              </div>
            </Reveal>
            <RevealGroup
              stagger={0.15}
              className="absolute -bottom-2 -left-9 flex flex-col gap-2.5"
            >
              {badges.map((label, i) => (
                <FloatingBadge key={label} label={label} index={i} />
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
