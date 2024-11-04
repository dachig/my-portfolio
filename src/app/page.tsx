import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { ContactForm } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}
