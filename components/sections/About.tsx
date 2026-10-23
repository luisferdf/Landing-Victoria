import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal, RevealGroup } from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function About() {
  const { about, personalData, photo } = profile;

  return (
    <section
      id="sobre-mi"
      className="border-t border-surface px-6 py-[120px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Sobre mí" title={about.title} />
        </div>

        <div className="flex flex-wrap items-stretch gap-14">
          <Reveal className="relative min-h-[420px] flex-[1_1_320px] overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 400px, 100vw"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] text-accent-foreground">
              ARQ.
            </span>
          </Reveal>

          <div className="flex flex-[1.6_1_420px] flex-col gap-10">
            <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
              {about.blocks.map((block) => (
                <Reveal key={block.heading} className="flex flex-col gap-2.5">
                  <h3 className="text-xl font-bold">{block.heading}</h3>
                  <p className="leading-relaxed text-muted">{block.text}</p>
                </Reveal>
              ))}
            </RevealGroup>

            <Reveal className="border-l-[3px] border-accent pl-6">
              <div className="mb-5 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
                Datos personales
              </div>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-5 max-[520px]:grid-cols-1">
                {personalData.map((d) => (
                  <div key={d.label} className="flex flex-col gap-1.5">
                    <dt className="text-[11px] font-semibold tracking-[0.15em] text-muted uppercase">
                      {d.label}
                    </dt>
                    <dd className="text-[15px] font-medium">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
