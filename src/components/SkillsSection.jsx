import { platformDepth, skills } from "../data/portfolio";
import { ExpandableCard } from "./ExpandableCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xs uppercase tracking-[0.28em] text-sand/74">{title}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist/78"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlatformCard({ item }) {
  return (
    <ExpandableCard
      eyebrow="Platform Depth"
      title={item.title}
      summary={item.summary}
      badges={item.tags}
    >
      <p>{item.description}</p>
    </ExpandableCard>
  );
}

export function SkillsSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Tools, platforms, and technical depth."
            description="Refined around the kinds of platforms I actively work with: governed analytics systems, self-serve AI interfaces, scheduled production workflows, and practical machine learning stacks."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {platformDepth.map((item, index) => (
            <Reveal key={item.title} delay={0.05 * index}>
              <PlatformCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr_1.1fr]">
          <Reveal delay={0.04}>
            <SkillGroup title="Languages" items={skills.languages} />
          </Reveal>
          <Reveal delay={0.1}>
            <SkillGroup title="Tooling" items={skills.tooling} />
          </Reveal>
          <Reveal delay={0.16}>
            <SkillGroup title="AI and LLM" items={skills.ai} />
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.2} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-sand/74">
              Postgraduate Coursework
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-mist/76">
              {skills.coursework.postgraduate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.24} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-sand/74">
              Undergraduate Coursework
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-mist/76">
              {skills.coursework.undergraduate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
