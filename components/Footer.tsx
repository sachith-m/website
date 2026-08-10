import { siteConfig } from "@/data/site";

const links = [
  { label: "Substack", href: siteConfig.social.substack },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Twitter", href: siteConfig.social.twitter },
  { label: "Email", href: `mailto:${siteConfig.social.email}` },
];

export default function Footer() {
  return (
    <footer className="mt-28 pb-16 sm:mt-36 sm:pb-24">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[13px] text-muted/80">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
