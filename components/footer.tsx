import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { navItems, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-x-5">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FontAwesomeIcon icon={faGithub} className="size-5" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4">
        <p className="mx-auto max-w-6xl text-xs text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
