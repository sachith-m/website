import { siteConfig } from "@/data/site";

export default function Experience() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="text-2xl sm:text-3xl text-foreground">Experience</h1>
      <ul className="mt-8 space-y-8">
        {siteConfig.experience.map((item) => (
          <li key={`${item.company}-${item.role}`}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <p className="text-[17px] text-foreground">
                {item.company}
                <span className="text-muted"> — {item.role}</span>
              </p>
              <p className="shrink-0 text-[14px] text-muted">{item.dates}</p>
            </div>
            {item.description && (
              <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/60">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
