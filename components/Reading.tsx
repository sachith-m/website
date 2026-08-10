import { siteConfig, type ReadingItem } from "@/data/site";

function groupByYear(items: ReadingItem[]) {
  const hasAnyYear = items.some((item) => item.year);
  if (!hasAnyYear) return [{ year: null as string | null, items }];

  const years = Array.from(
    new Set(items.map((item) => item.year ?? "Undated"))
  ).sort((a, b) => (a === "Undated" ? 1 : b === "Undated" ? -1 : b.localeCompare(a)));

  return years.map((year) => ({
    year,
    items: items.filter((item) => (item.year ?? "Undated") === year),
  }));
}

function ReadingEntry({ item }: { item: ReadingItem }) {
  const titleContent =
    item.type === "Book" ? <em>{item.title}</em> : `“${item.title}”`;

  return (
    <li>
      <p className="text-[17px] text-foreground">
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            {titleContent}
          </a>
        ) : (
          titleContent
        )}
      </p>
      <p className="text-[14px] text-muted">
        {item.author} · {item.type}
        {item.year ? ` · ${item.year}` : ""}
      </p>
      {item.note && (
        <p className="mt-1 text-[15px] leading-relaxed text-foreground/60">
          {item.note}
        </p>
      )}
    </li>
  );
}

export default function Reading() {
  const groups = groupByYear(siteConfig.reading);

  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="text-2xl sm:text-3xl text-foreground">Reading</h1>
      <div className="mt-8 space-y-8">
        {groups.map((group) => (
          <div key={group.year ?? "all"}>
            {group.year && (
              <p className="mb-3 text-[14px] text-muted">{group.year}</p>
            )}
            <ul className="space-y-5">
              {group.items.map((item) => (
                <ReadingEntry key={item.title} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
