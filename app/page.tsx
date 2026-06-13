import Grain from "@/components/Grain";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Grain />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
