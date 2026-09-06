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
  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}${src}`} alt={alt} className="h-full w-full object-cover" />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/60" aria-hidden="true" />
      )}
    </div>
  );
}
