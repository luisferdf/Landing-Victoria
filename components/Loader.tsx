"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";
import { profile } from "@/data/profile";

const DURATION_MS = 1500;

export default function Loader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), reduced ? 0 : DURATION_MS);
    return () => clearTimeout(id);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Cargando"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-[18px] bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[32px] font-extrabold tracking-[-0.02em] uppercase">
            {profile.firstName}.
          </div>
          <div className="text-[11px] font-semibold tracking-[0.3em] text-muted">
            CARGANDO
          </div>
          <div className="h-[3px] w-[200px] overflow-hidden rounded-full bg-surface">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: reduced ? "100%" : "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: DURATION_MS / 1000 - 0.1,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
