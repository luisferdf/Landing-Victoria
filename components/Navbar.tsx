"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "software", label: "Software" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  // Resalta la sección que cruza el centro del viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const linkClass = (id: string, base: string) =>
    `${base} transition-colors ${
      active === id
        ? "bg-surface font-semibold text-foreground"
        : "font-medium text-muted hover:text-foreground"
    }`;

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-[1160px] -translate-x-1/2">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between gap-4 rounded-full border border-border bg-background/90 py-2.5 pr-3 pl-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
      >
        <a
          href="#inicio"
          className="text-lg font-extrabold tracking-[-0.02em] uppercase"
        >
          {profile.firstName}.
        </a>

        <div className="hidden items-center gap-1 min-[820px]:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={linkClass(l.id, "rounded-full px-3.5 py-2 text-sm")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border border-border bg-background transition-transform active:scale-90 min-[820px]:hidden"
          >
            <span className="h-0.5 w-4 rounded bg-foreground" />
            <span className="h-0.5 w-4 rounded bg-foreground" />
            <span className="h-0.5 w-4 rounded bg-foreground" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 flex flex-col rounded-2xl border border-border bg-background p-2 shadow-[0_12px_32px_rgba(0,0,0,0.08)] min-[820px]:hidden"
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={active === l.id ? "true" : undefined}
                className={linkClass(
                  l.id,
                  "rounded-[10px] px-4 py-3 text-[15px]",
                )}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
