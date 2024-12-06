import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { ContactForm } from "./components/Contact";

import { LampContainer } from "./components/ui/lamp";
import { Fragment } from "react";
import MobileHero from "./components/MobileHero";

export default function Home() {
  return (
    <Fragment>
      {/* <MobileHero /> */}
      <div>
         {/* <Header /> */}
        {/* <LampContainer className="lg:mt-32 xl:mt-0"> */}
          <Hero />
        {/* </LampContainer> */}
        <main className="max-w-3xl mx-auto">
          <About />
          <Experience />
          <Projects />
          <ContactForm />
        </main>
      </div>
    </Fragment>
  );
}
