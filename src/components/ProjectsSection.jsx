import { projects, research } from "../data/portfolio";
import { ExpandableCard } from "./ExpandableCard";
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

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.05fr_0.95fr_0.95fr]">
          <Reveal className="xl:col-span-1">
            <ExpandableCard
              eyebrow="Thesis Research"
              title={research.title}
              caption={`${research.subtitle} | ${research.period}`}
              summary={research.summary}
              badges={research.tags}
            >
              <ul className="space-y-3">
                {research.points.map((point) => (
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

          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.08 + index * 0.06}
            >
              <ExpandableCard
                eyebrow="Selected Project"
                title={project.title}
                caption={project.meta}
                summary={project.summary}
                badges={project.tags}
                metric={project.outcome}
              >
                <ul className="space-y-3">
                  {project.points.map((point) => (
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
      </div>
    </section>
  );
}
