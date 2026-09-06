// Stand-in visual treatment for slots that need real facility/product
// photography, which wasn't available at scaffold time (see docs/content-model.md).
// Renders an intentional technical-drawing-style pattern rather than a broken
// image or stock photo, so it reads as brand texture until real photos land.

export function PlaceholderArt({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(214,125,62,0.16) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ink/60 via-ink/20 to-ink/70" />
      <svg
        viewBox="0 0 200 200"
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 text-accent/25"
        fill="none"
      >
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 30v20M100 150v20M30 100h20M150 100h20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
