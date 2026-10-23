import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Software from "@/components/sections/Software";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Software />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
