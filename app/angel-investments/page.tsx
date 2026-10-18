import type { Metadata } from "next";
import Header from "@/components/Header";
import AngelInvestments from "@/components/AngelInvestments";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Investments",
  description: "Companies Sachith Mankala has angel invested in.",
};

export default function AngelInvestmentsPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-10 sm:px-8 sm:pt-16">
      <Header />
      <main>
        <AngelInvestments />
      </main>
      <Footer />
    </div>
  );
}
