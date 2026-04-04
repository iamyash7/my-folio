import { Sparkles } from "lucide-react";
import { services } from "../data/portfolio";
import { ExpandableCard } from "./ExpandableCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Ways I can help teams ship faster, smarter, and with better reliability."
            description="This blends my resume-backed strengths in applied AI, analytics engineering, and business intelligence with the automation-oriented service line you asked to surface."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={0.05 * index}
            >
              <ExpandableCard
                eyebrow="Service"
                title={service.title}
                summary={service.summary}
                badges={[service.cue]}
              >
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="border-t border-white/8 pt-3 first:border-t-0 first:pt-0"
                    >
                      <span className="inline-flex items-start gap-3">
                        <Sparkles size={14} className="mt-1 shrink-0 text-sand/80" />
                        <span>{point}</span>
                      </span>
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
