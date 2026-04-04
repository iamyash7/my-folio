import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Profile"
            title="Research-minded execution for real business systems."
            description="From academic work on the limits of LLM-based prediction to production systems serving airline teams, my work combines experimentation discipline with deployment focus."
          />
        </Reveal>

        <Reveal delay={0.1} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-lg leading-8 text-mist/82">{profile.intro}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.32em] text-sand/70">
              Base
            </p>
            <p className="mt-2 text-xl text-white">{profile.institution}</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-sand/72">
              Core Focus
            </p>
            <ul className="mt-5 space-y-4">
              {profile.focus.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/8 pb-4 text-sm leading-7 text-mist/78 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
