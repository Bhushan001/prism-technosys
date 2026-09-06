import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "@/components/icons";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Crystal Engineers — Plot No. 15, MIDC Industrial Area, Bhosari, Pune.",
};

const infoItems = [
  {
    icon: MapPinIcon,
    label: "Address",
    value: `${siteSettings.address.line1} ${siteSettings.address.line2}`,
  },
  { icon: PhoneIcon, label: "Phone", value: siteSettings.phone, href: siteSettings.phoneHref },
  { icon: MailIcon, label: "Email", value: siteSettings.email, href: `mailto:${siteSettings.email}` },
  { icon: ClockIcon, label: "Hours", value: siteSettings.hours },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <EyebrowLabel>Get in Touch</EyebrowLabel>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">Our doors are open.</h1>

          <ul className="mt-10 space-y-8">
            {infoItems.map((item) => (
              <li key={item.label} className="flex gap-4">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="text-sm font-semibold text-ink">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm text-muted hover:text-ink">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 aspect-video w-full overflow-hidden border border-line">
            <iframe
              title="Crystal Engineers location"
              src="https://maps.google.com/maps?q=MIDC%20Bhosari%2C%20Pune&z=14&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
