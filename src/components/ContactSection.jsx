import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-20 pt-10 sm:px-8 lg:px-12">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-steel via-ink to-[#050b14] p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-sand/78">
              Contact
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl">
              Let&apos;s build thoughtful AI systems that people can actually use.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-mist/78">
              If you&apos;re hiring for data science, LLM systems, analytics engineering, or applied AI work, I&apos;d love to connect.
            </p>
            <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-ink/40 px-4 py-4 text-sm text-mist/80 transition hover:border-white/20 hover:text-white"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail size={18} />
                  {profile.email}
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-ink/40 px-4 py-4 text-sm text-mist/80 transition hover:border-white/20 hover:text-white"
              >
                <span className="inline-flex items-center gap-3">
                  <Phone size={18} />
                  {profile.phone}
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.resume}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-sand px-4 py-4 text-sm font-semibold text-ink transition hover:bg-cloud"
              >
                <span className="inline-flex items-center gap-3">
                  <Download size={18} />
                  Download Resume
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-ink/40 px-4 py-4 text-sm text-mist/80 transition hover:border-white/20 hover:text-white"
              >
                <span className="inline-flex items-center gap-3">
                  <Github size={18} />
                  github.com/iamyash7
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-ink/40 px-4 py-4 text-sm text-mist/80 transition hover:border-white/20 hover:text-white"
              >
                <span className="inline-flex items-center gap-3">
                  <Linkedin size={18} />
                  linkedin.com/in/mainhoonyash
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
