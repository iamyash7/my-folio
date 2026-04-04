export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-sand/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-mist/78 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
