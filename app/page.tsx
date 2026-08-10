import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-10 sm:px-8 sm:pt-16">
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </div>
  );
}
