"use client";
import { useEffect, useRef } from "react";
import {animateOnScroll} from "../lib/animate-on-scroll"

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   animateOnScroll(aboutRef);
  // }, []);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="h-screen flex flex-col justify-center items-center gap-4"
    >
      
      <div className="text-center">
        <p className="text-gray-400 text-sm">Get to know more</p>
        <h2 className="text-2xl font-bold">About Me</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="border-2 rounded-xl p-4 w-1/2">
            <h3 className="font-bold">Experience</h3>
            <p className="text-sm">2+ years in frontend development</p>
          </div>
          <div className="border-2 rounded-xl p-4 w-1/2">
            <h3 className="font-bold">Education</h3>
            <p className="text-sm">Graduate programming</p>
          </div>
        </div>
        <p className="px-4">
          In addition to my passion for programming, I thrive on physical
          challenges that engage both my body and mind. I enjoy boxing, where
          precision and strategy blend seamlessly with physical strength.
          Calisthenics allows me to push my limits and develop body control.
          Hiking offers a chance to explore nature while boosting my endurance,
          and bouldering sharpens my problem-solving skills as I navigate
          climbing routes. These activities not only keep me fit but also
          enhance my mental resilience.
        </p>
      </div>
    </div>
  );
}
