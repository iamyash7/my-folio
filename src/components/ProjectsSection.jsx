import { projects, research } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Research & Projects"
            title="Academic depth that strengthens how I build in industry."
            description="My academic work sharpened the way I validate models, compare alternatives, and think about system reliability beyond a single demo result."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-steel/70 to-ink/80 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-sand/78">
              Thesis Research
            </p>
            <h3 className="mt-4 font-display text-4xl text-white">
              {research.title}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-mist/58">
              {research.subtitle}
            </p>
            <p className="mt-2 text-sm text-mist/58">{research.period}</p>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-mist/78">
              {research.points.map((point) => (
                <li key={point} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={0.08 + index * 0.06}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-sand/74">
                  Selected Project
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-8 text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-mist/58">{project.meta}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-mist/76">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
