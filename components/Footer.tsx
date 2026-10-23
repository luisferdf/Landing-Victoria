"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";
import { profile } from "@/data/profile";

export default function Footer() {
  const reduced = useReducedMotion();
  const motionProps = reduced
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  return (
    <motion.footer
      {...motionProps}
      className="flex flex-col items-center gap-4 border-t border-border px-6 py-12"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-sm font-medium">
          © 2026 {profile.name}. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted">Hecho con Next.js y Tailwind CSS</p>
      </div>
      <div className="flex gap-4 text-sm text-muted">
        <a
          href={profile.contact.instagramUrl}
          target="_blank"
          rel="noopener"
          className="transition-colors hover:text-foreground"
        >
          Instagram
        </a>
        <a
          href={`mailto:${profile.contact.email}`}
          className="transition-colors hover:text-foreground"
        >
          Correo
        </a>
      </div>
    </motion.footer>
  );
}
