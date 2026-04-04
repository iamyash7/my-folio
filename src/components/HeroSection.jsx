import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { highlights, profile } from "../data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-6 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <a
            href="#home"
            className="text-sm uppercase tracking-[0.34em] text-mist/70 transition hover:text-white"
          >
            Yash Uttamchandani
          </a>
          <nav className="hidden gap-6 text-sm text-mist/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#education" className="transition hover:text-white">
              Education
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <div className="grid min-h-[calc(100svh-7rem)] items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-sand"
            >
              Data Scientist • LLM Systems • Analytics Products
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="max-w-4xl font-display text-6xl leading-[0.92] text-white sm:text-7xl lg:text-[6.5rem]"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.14 }}
              className="mt-6 max-w-2xl text-base leading-8 text-mist/82 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-sand px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cloud"
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Download Resume
                <Download size={16} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
              className="mt-8 flex flex-wrap gap-5 text-sm text-mist/72"
            >
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <Phone size={16} />
                {profile.phone}
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-br from-sand/25 via-ember/12 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-glow backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-sand/85">
                      Current Focus
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/88">
                      Production AI for customer intelligence, revenue analytics, and enterprise self-serve decision systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 + index * 0.08 }}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
            >
              <p className="font-display text-4xl text-white">{item.value}</p>
              <p className="mt-2 max-w-[12rem] text-sm leading-6 text-mist/72">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
