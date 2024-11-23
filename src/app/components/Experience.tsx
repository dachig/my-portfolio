"use client";
import { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { animateOnScroll } from "../lib/animate-on-scroll";

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    animateOnScroll(experienceRef);
  }, []);

  return (
    <div
      ref={experienceRef}
      id="experience"
      className="h-screen flex flex-col justify-center items-center gap-4"
    >
      <div className="text-center">
        <p className="text-gray-400 text-sm">Explore my</p>
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>
      <div className="flex gap-4">
        <div className="border-2 py-4 px-16 rounded-xl">
          <h3 className="text-center font-bold">Frontend Development</h3>
          <div className="flex justify-between gap-4 mt-4 text-sm">
            <ul>
              <li className="flex items-center gap-1">
                <MdVerified />
                HTML
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                CSS
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                JavaScript
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                TypeScript
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-1">
                <MdVerified />
                React
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                NextJS
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                ThreeJS
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                R3F
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 py-4 px-16 rounded-xl">
          <h3 className="text-center font-bold">Backend Development</h3>
          <div className="flex justify-between mt-4 gap-4 text-sm">
            <ul>
              <li className="flex items-center gap-1">
                <MdVerified />
                MongoDB
              </li>
              <li className="flex items-center gap-1">
                <MdVerified />
                PostgreSQL
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-1">
                <MdVerified />
                C#
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
