import type { Metadata } from "next";
import Header from "@/components/Header";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes by Sachith Mankala.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-10 sm:px-8 sm:pt-16">
      <Header />
      <main>
        <Writing />
      </main>
      <Footer />
    </div>
  );
}
