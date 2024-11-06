import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { ContactForm } from "./components/Contact";

import { LampContainer } from "./components/ui/lamp";

export default function Home() {
  return (
    <>
      <Header />
      <LampContainer className="">
        <Hero />
      </LampContainer>
      <main className="max-w-3xl mx-auto">
        <About />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}
