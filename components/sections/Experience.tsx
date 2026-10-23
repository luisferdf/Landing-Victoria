"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { useReducedMotion } from "../useReducedMotion";
import { experience } from "@/data/experience";
import { Reveal, RevealGroup } from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section
      id="experiencia"
      className="border-t border-surface bg-surface-hover px-6 py-[120px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Experiencia" title="Mi trayectoria" />
        </div>

        <div
          ref={timelineRef}
          className="relative flex flex-col gap-12 py-2"
        >
          <div className="absolute top-0 bottom-0 left-[7px] w-0.5 -translate-x-1/2 rounded-sm bg-border md:left-1/2">
            <motion.div
              className="h-full w-full origin-top rounded-sm bg-accent"
              style={{ scaleY: reduced ? 1 : scrollYProgress }}
            />
          </div>

          {experience.map((item, i) => (
            <div
              key={item.id}
              className={`relative flex pl-9 md:pl-0 ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <span className="absolute top-[30px] left-[7px] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2" />
              <Reveal className="w-full md:w-[calc(50%-40px)]">
                <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-background p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <span className="text-[13px] text-muted">{item.date}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
                    {item.organization}
                  </span>
                  <ul className="mt-1.5 flex flex-col gap-2 text-[15px] leading-relaxed text-muted">
                    {item.description.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <RevealGroup className="mt-2.5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Reveal
                        key={tag}
                        className="rounded-full border border-border bg-surface px-3 py-[5px] text-xs text-muted"
                      >
                        {tag}
                      </Reveal>
                    ))}
                  </RevealGroup>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
