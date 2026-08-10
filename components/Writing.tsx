import { siteConfig } from "@/data/site";

export default function Writing() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="text-2xl sm:text-3xl text-foreground">Writing</h1>
      <ul className="mt-8 space-y-6">
        {siteConfig.writing.map((post) => (
          <li key={post.title}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-[17px] text-foreground">
                {post.title}
                <span className="ml-1 inline-block -translate-x-1 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </span>
              <span className="shrink-0 text-[14px] text-muted">
                {post.date}
              </span>
            </a>
            {post.description && (
              <p className="mt-1 text-[15px] leading-relaxed text-foreground/60">
                {post.description}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <a
          href={siteConfig.social.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-muted transition-opacity hover:opacity-60"
        >
          More on Substack →
        </a>
      </p>
    </section>
  );
}
