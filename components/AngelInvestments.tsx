import { siteConfig } from "@/data/site";

export default function AngelInvestments() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="text-2xl sm:text-3xl text-foreground">Investments</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">
        In my spare time, I personally angel invest in companies and founders I'm excited about.
      </p>
      <ul className="mt-8 space-y-6">
        {siteConfig.angelInvestments.map((item) => (
          <li key={item.company}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-[17px] text-foreground">
                {item.company}
                <span className="ml-1 inline-block -translate-x-1 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
                  ↗
                </span>
              </span>
              <span className="shrink-0 text-[14px] text-muted">
                {item.round} · {item.year}
              </span>
            </a>
            {item.description && (
              <p className="mt-1 text-[15px] leading-relaxed text-foreground/60">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
