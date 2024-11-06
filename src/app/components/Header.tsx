"use client";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll("div");
    const navLinks = document.querySelectorAll("nav ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => link.classList.remove("active"));
            document
              .querySelector(`nav ul li a[href="#${id}"]`)
              ?.classList.add("active");
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.9 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="items-center justify-evenly flex text-gray-400 font-bold fixed right-16 top-16 z-50">
      <ul className="flex flex-col border-t-4 border-t-indigo-600 border-r-blue-400 border-r-4 p-2">
        <li>
          <a href="#about" className="flex gap-2 items-center">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="flex gap-2 items-center">
            Experience
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <a href="#projects" className="flex gap-2 items-center">
            Projects
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <a href="#contact" className="flex gap-2 items-center">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
