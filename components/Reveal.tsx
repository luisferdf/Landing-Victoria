"use client";

import { createContext, useContext } from "react";
import { motion, type Variants } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

const variants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const viewport = { once: true, margin: "-60px" } as const;
const InGroup = createContext(false);

type RevealProps = React.ComponentProps<"div"> & { delay?: number };

// Aparece con blur/opacity/y al entrar en el viewport. Dentro de un
// RevealGroup hereda el stagger del padre; solo, usa `delay`.
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  const inGroup = useContext(InGroup);
  const reduced = useReducedMotion();

  if (reduced) return <div {...rest}>{children}</div>;

  return (
    <motion.div
      {...(rest as object)}
      variants={variants}
      {...(inGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "show",
            viewport,
            transition: { delay },
          })}
    >
      {children}
    </motion.div>
  );
}

// Contenedor que escalona (0.1s) a los Reveal hijos.
export function RevealGroup({
  stagger = 0.1,
  children,
  ...rest
}: React.ComponentProps<"div"> & { stagger?: number }) {
  const reduced = useReducedMotion();

  if (reduced) return <div {...rest}>{children}</div>;

  return (
    <InGroup.Provider value>
      <motion.div
        {...(rest as object)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={{ staggerChildren: stagger }}
      >
        {children}
      </motion.div>
    </InGroup.Provider>
  );
}
