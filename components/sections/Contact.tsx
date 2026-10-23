import { profile } from "@/data/profile";
import { Reveal, RevealGroup } from "../Reveal";
import SectionHeading from "../SectionHeading";

const iconProps = {
  className: "h-[18px] w-[18px]",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export default function Contact() {
  const { contact } = profile;

  const links = [
    {
      label: "Correo",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "Teléfono",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
      external: false,
      icon: (
        <svg {...iconProps}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: "@victoriaastorgas",
      href: contact.instagramUrl,
      external: true,
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contacto"
      className="border-t border-surface px-6 py-[120px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Contacto" title="Hablemos" />
        </div>

        <RevealGroup className="mx-auto flex max-w-[720px] flex-col gap-5">
          <Reveal className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
              <svg {...iconProps}>
                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>
            <span className="text-lg font-semibold">{contact.city}</span>
          </Reveal>

          <Reveal className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
            <iframe
              src={contact.mapEmbedUrl}
              title={`Mapa de ${contact.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </Reveal>

          <Reveal className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener" }
                  : undefined)}
                className="flex items-center gap-3.5 rounded-xl border border-border bg-background px-3.5 py-3 transition-[background-color,border-color,transform] duration-200 hover:border-border-strong hover:bg-surface-hover motion-safe:hover:translate-x-1"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border border-border bg-surface">
                  {l.icon}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-muted uppercase">
                    {l.label}
                  </span>
                  <span className="text-[15px] font-medium break-words">
                    {l.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
