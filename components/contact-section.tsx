"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
        <p className="text-sm leading-relaxed text-muted">
          Reach out directly, or use the form — both go to the same place.
        </p>
        <dl className="mt-6 flex flex-col gap-4">
          <div>
            <dt className="text-xs font-medium tracking-wide text-accent uppercase">Email</dt>
            <dd className="mt-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="size-4 text-muted" />
              <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-accent">
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-accent uppercase">LinkedIn</dt>
            <dd className="mt-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} className="size-4 text-muted" />
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground hover:text-accent"
              >
                {siteConfig.links.linkedin.replace("https://", "")}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-accent uppercase">GitHub</dt>
            <dd className="mt-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} className="size-4 text-muted" />
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground hover:text-accent"
              >
                {siteConfig.links.github.replace("https://", "")}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-accent"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status === "success" ? (
          <p className="text-sm text-accent">Message sent. I&apos;ll get back to you soon.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-500">
            Something went wrong — email me directly at {siteConfig.email}.
          </p>
        ) : null}
      </form>
    </div>
  );
}
