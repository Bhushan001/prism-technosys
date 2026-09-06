import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import { nav, siteSettings } from "@/content/site";

const exploreLinks = nav.filter((item) => item.href !== "/");

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-white font-display text-xl text-ink">
              C
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl text-white">{siteSettings.name}</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                EST. 1990 · PUNE, INDIA
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{siteSettings.footerBlurb}</p>
          <Link href="/contact" className="mt-6 inline-block border-b border-accent text-sm font-semibold text-white">
            Start a project ↗
          </Link>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h3>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {siteSettings.address.line1}
                <br />
                {siteSettings.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="h-4 w-4 shrink-0 text-accent" />
              <a href={siteSettings.phoneHref}>{siteSettings.phone}</a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteSettings.name}. All rights reserved.</span>
          <span>{siteSettings.certifications.join(" · ")} Certified</span>
        </Container>
      </div>
    </footer>
  );
}
