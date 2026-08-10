import type { Metadata } from "next";
import Header from "@/components/Header";
import Reading from "@/components/Reading";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reading",
  description: "What Sachith Mankala is reading.",
};

export default function ReadingPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-10 sm:px-8 sm:pt-16">
      <Header />
      <main>
        <Reading />
      </main>
      <Footer />
    </div>
  );
}
