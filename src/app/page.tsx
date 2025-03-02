import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Passions from "@/sections/Passions";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Passions />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
}
