// Plain <img> (not next/image) since the site is statically exported with no
// image-optimization server; basePath is prepended manually here because
// Next only does that automatically for next/link and next/image — see
// next.config.ts and ContactForm.tsx for the same pattern.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Photo({
  src,
  alt,
  className = "",
  overlay = false,
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}) {
  // The position utility (e.g. `absolute inset-0` for a full-bleed hero, vs.
  // no position utility for an inline card image) is supplied by the caller
  // via `className` on the outer element. It must NOT also carry a `relative`
  // class here: Tailwind's generated CSS defines `.relative` after
  // `.absolute`, so having both classes on one element silently resolves to
  // `position: relative` and breaks absolute-fill callers. The inner wrapper
  // below carries `relative` instead, purely to anchor the overlay div,
  // without ever touching the caller's own positioning.
  return (
    <div className={`overflow-hidden bg-ink ${className}`}>
      <div className="relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}${src}`} alt={alt} className="h-full w-full object-cover" />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/60" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
