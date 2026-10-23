"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type TypewriterProps = {
  roles: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
};

// Escribe y borra cada rol en ciclo. Con reduced-motion muestra el primero fijo.
export default function Typewriter({
  roles,
  typeMs = 70,
  deleteMs = 35,
  holdMs = 1400,
}: TypewriterProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || roles.length === 0) return;
    const role = roles[index];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && count === role.length) delay = holdMs;

    const id = setTimeout(() => {
      if (!deleting && count < role.length) setCount(count + 1);
      else if (!deleting) setDeleting(true);
      else if (count > 0) setCount(count - 1);
      else {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [reduced, roles, index, count, deleting, typeMs, deleteMs, holdMs]);

  const text = reduced ? roles[0] : roles[index].slice(0, count);

  return (
    <span>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        {!reduced && <span className="typewriter-caret">|</span>}
      </span>
    </span>
  );
}
