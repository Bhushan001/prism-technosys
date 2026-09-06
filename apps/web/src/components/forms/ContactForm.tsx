"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field in.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
      const response = await fetch(`${basePath}/contact-handler.php`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong sending your message. Please email us directly or try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-paper-muted p-8">
        <h3 className="font-display text-2xl text-ink">Message sent.</h3>
        <p className="mt-3 text-sm text-muted">
          Thank you for reaching out. Our engineering team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper-muted p-8">
      <h3 className="font-display text-2xl text-ink">Send us a message</h3>

      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Company" name="company" />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <Button type="submit" className="mt-6">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-accent"
      />
    </div>
  );
}
