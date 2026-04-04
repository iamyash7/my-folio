import { services } from "../data/portfolio";
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
              className="rounded-[1.65rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-sand/74">
                Service
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-8 text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-mist/76">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-mist/74">
                {service.points.map((point) => (
                  <li key={point} className="border-t border-white/8 pt-3 first:border-t-0 first:pt-0">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
