"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "../useReducedMotion";
import { software } from "@/data/software";
import { Reveal, RevealGroup } from "../Reveal";
import SectionHeading from "../SectionHeading";

// Sin íconos de marca: el tile muestra las iniciales del nombre.
function initials(name: string) {
  const words = name
    .split("·")[0]
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .split(/[\s-]+/)
    .filter((w) => w.length > 2 || /\d/.test(w));
  const letters =
    words.length > 1
      ? words
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
      : (words[0] ?? name).slice(0, 2);
  return letters.toUpperCase();
}

export default function Software() {
  const reduced = useReducedMotion();

  return (
    <section
      id="software"
      className="border-t border-surface px-6 py-[120px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Software" title="Herramientas y habilidades" />
        </div>

        <div className="flex flex-col gap-6">
          {software.map((group) => (
            <Reveal key={group.category}>
              <div className="flex flex-wrap items-center gap-8 rounded-2xl border border-border bg-background p-8">
                <div className="flex flex-[1_1_220px] flex-col gap-2.5">
                  <h3 className="text-[22px] font-bold">{group.category}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>
                </div>
                <RevealGroup className="grid flex-[2_1_400px] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-y-4">
                  {group.items.map((item) => (
                    <Reveal key={item.name}>
                      <motion.div
                        whileHover={reduced ? undefined : { y: -4 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col items-center gap-3 px-2 py-3 text-center"
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-sm font-bold tracking-wide text-muted">
                          {initials(item.name)}
                        </span>
                        <span className="text-[13px] text-muted">
                          {item.name}
                        </span>
                      </motion.div>
                    </Reveal>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
