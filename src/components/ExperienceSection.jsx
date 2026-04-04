import { experience } from "../data/portfolio";
import { ExpandableCard } from "./ExpandableCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  const activeRole = experience[0];

  return (
    <section id="experience" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Production AI systems designed for measurable business impact."
            description={activeRole.summary}
          />
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-sand/75">
                Current Role
              </p>
              <h3 className="mt-4 font-display text-4xl text-white">
                {activeRole.role}
              </h3>
              <p className="mt-2 text-lg text-mist/80">{activeRole.company}</p>
              <p className="mt-4 text-sm text-mist/60">{activeRole.period}</p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-mist/78">
              Working across enterprise data platforms and LLM-enabled workflows to build durable internal products, smarter marketing models, and analytics systems that business teams can actually use.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {activeRole.initiatives.map((initiative, index) => (
              <Reveal
                key={initiative.title}
                delay={0.12 + index * 0.06}
              >
                <ExpandableCard
                  eyebrow={`Initiative ${String(index + 1).padStart(2, "0")}`}
                  title={initiative.title}
                  summary={initiative.summary}
                  badges={initiative.tags}
                  metric={initiative.impact}
                >
                  <ul className="space-y-3">
                    {initiative.points.map((point) => (
                      <li
                        key={point}
                        className="border-t border-white/8 pt-3 first:border-t-0 first:pt-0"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </ExpandableCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
