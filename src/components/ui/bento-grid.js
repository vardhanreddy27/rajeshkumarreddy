export function BentoGrid({ className = "", children }) {
  return (
    <div className={`grid gap-4 md:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
}

export function BentoGridItem({
  title,
  description,
  header,
  href,
  className = "",
}) {
  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}
    >
      {header ? <div className="mb-4">{header}</div> : null}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {typeof description === "string" ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      ) : (
        <div className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </div>
      )}
    </Component>
  );
}
