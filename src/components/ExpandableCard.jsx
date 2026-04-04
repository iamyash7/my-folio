import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";

export function ExpandableCard({
  eyebrow,
  title,
  caption,
  summary,
  badges = [],
  metric,
  children,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] sm:p-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.28em] text-sand/74">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-3 text-xl font-semibold leading-7 text-white sm:text-2xl sm:leading-8">
            {title}
          </h3>
          {caption ? (
            <p className="mt-2 text-sm leading-6 text-mist/58">{caption}</p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-mist/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse details" : "Expand details"}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>

      <p className="mt-4 text-sm leading-7 text-mist/76">{summary}</p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {metric ? (
          <span className="rounded-full border border-sand/25 bg-sand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            {metric}
          </span>
        ) : null}
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-white/10 bg-ink/45 px-3 py-2 text-xs text-mist/76"
          >
            {badge}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sand transition hover:text-cloud"
      >
        {isOpen ? "Hide details" : "View details"}
        <ArrowRight
          size={15}
          className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-mist/74">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
