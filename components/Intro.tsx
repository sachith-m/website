import { siteConfig } from "@/data/site";

export default function Intro() {
  return (
    <section aria-label="Introduction" className="pt-16 sm:pt-24">
      <h1 className="text-2xl sm:text-3xl text-foreground">
        Hi! I&apos;m Sachith.
      </h1>
      <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-foreground/85">
        {siteConfig.intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
