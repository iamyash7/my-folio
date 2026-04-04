import { education } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Built on strong fundamentals in computer science and machine learning."
            description="A progression from diploma to M.Tech with consistent academic performance and a strong grounding in algorithms, systems, analytics, and modern machine learning."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {education.map((item, index) => (
            <Reveal
              key={`${item.year}-${item.degree}`}
              delay={0.06 * index}
              className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[0.22fr_0.48fr_0.3fr]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sand/72">
                  {item.year}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-2 text-sm leading-7 text-mist/74">{item.institute}</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm uppercase tracking-[0.22em] text-mist/52">
                  Score
                </p>
                <p className="mt-2 font-display text-3xl text-white">{item.score}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
