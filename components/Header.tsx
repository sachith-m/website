import Link from "next/link";
import { siteConfig } from "@/data/site";
import { sections } from "@/lib/nav";

export default function Header() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
      <Link href="/" className="text-[17px] text-foreground">
        {siteConfig.name}
      </Link>
      <nav aria-label="Section navigation">
        <ul className="flex items-baseline gap-5 text-[14px] text-muted">
          {sections.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
