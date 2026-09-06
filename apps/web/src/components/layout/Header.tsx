"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { nav, siteSettings } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center bg-ink font-display text-xl text-white">
            C
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl text-ink">{siteSettings.name}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              {siteSettings.establishedLine}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  active ? "border-accent text-ink" : "border-transparent text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={siteSettings.phoneHref} className="flex items-center gap-2 text-sm text-ink/80 hover:text-ink">
            <PhoneIcon className="h-4 w-4 text-accent" />
            {siteSettings.phone}
          </a>
          <Button href="/contact" className="!px-5 !py-3 text-xs">
            Request Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-3 text-sm font-medium ${
                  pathname === item.href ? "text-accent" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={siteSettings.phoneHref} className="flex items-center gap-2 px-2 py-3 text-sm text-ink/80">
              <PhoneIcon className="h-4 w-4 text-accent" />
              {siteSettings.phone}
            </a>
            <Button href="/contact" className="mt-2 w-full justify-center">
              Request Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
