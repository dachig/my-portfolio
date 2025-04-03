"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { ContactForm } from "./components/Contact";

import { Fragment } from "react";
import { GlobalScrollbar } from "mac-scrollbar";
import "mac-scrollbar/dist/mac-scrollbar.css";

function App() {
  return <GlobalScrollbar />;
}

export default function Home() {
  return (
    <Fragment>
      {/* <MobileHero /> */}
      <GlobalScrollbar skin="dark" suppressAutoHide/>
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
