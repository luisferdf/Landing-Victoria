import { RevealGroup, Reveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <RevealGroup>
      <Reveal className="mb-3 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        {eyebrow}
      </Reveal>
      <Reveal>
        <h2 className="text-[clamp(36px,5vw,56px)] leading-tight font-extrabold tracking-[-0.03em]">
          {title}
        </h2>
      </Reveal>
    </RevealGroup>
  );
}
