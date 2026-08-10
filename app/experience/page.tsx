import type { Metadata } from "next";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where Sachith Mankala has worked.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-10 sm:px-8 sm:pt-16">
      <Header />
      <main>
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
