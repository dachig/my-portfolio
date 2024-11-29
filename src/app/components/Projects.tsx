"use client";
import CryptoHippo from "../../../public/crypto-hippo-screen.png";
import GithubAPI from "../../../public/github-api-screen.png";
import Image from "next/image";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

import { useEffect, useRef, useState } from "react";
import { animateOnScroll } from "../lib/animate-on-scroll";

const soloProjects = [
  {
    title: "Crypto Hippo",
    description:
      "Browse the latest crypto trends and track your favourite coins to stay up-to-date easily.",
    thumbnail: CryptoHippo,
    linkRepo: "https://github.com/dachig/CryptoHippo",
    linkDemo: "https://crypto-hippo.vercel.app/",
  },
  {
    title: "Github API",
    description:
      "Discover public Github repositories simply by entering a username below.",
    thumbnail: GithubAPI,
    linkRepo: "https://github.com/dachig/GithubAPI",
    linkDemo: "https://github-api-omega-lime.vercel.app/",
  },
];

const teamProjects = [
  {
    who: "Meteor Digital NV",
    function: "Intern e-commerce front-end developer",
    period: "feb '24 - june '24",
    description: [
      "Researching Shopify's and Showpware's headless React PWA capabilities to seamlessly integrate with the respective storefronts to improve (outdated) internal workflows.",
      "Developing Shopify custom apps in React to trigger automated ticketing printjobs on a client project.",
      "Rewriting tests for another client project.",
    ],
    link: "https://meteorblog.vercel.app/",
  },
  {
    who: "icapps",
    function: "Group task with classmates as webdevelopers",
    period: "oct '23 - jan '24",
    description: [
      "Helped Develop a full-stack internal communcation system for intern mentors to communicate with interns at the company. Communication happens through posts and comments on the interns timeline and progress.",
      "Whilst mainly remaining on the front-end with React I also helped with back-end MongoDB issues.",
    ],
    link: null,
  },
];

function SoloProjects() {
  return (
    <div className="flex gap-4">
      {soloProjects.map((project, index) => (
        <div
          id={`solo-project-${index}`}
          key={index}
          className="border-2 p-4 rounded-xl flex flex-col"
        >
          <h3 className="font-bold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
          <Image
            height={400}
            src={project.thumbnail}
            alt="thumbnail project"
            className="mt-auto"
          />
          <div className="flex gap-4 mt-2">
            <Link
              href={project.linkRepo}
              target="_blank"
              className="hover:text-blue-600"
            >
              Repository
            </Link>
            <Link
              href={project.linkDemo}
              target="_blank"
              className="hover:text-blue-600"
            >
              Live Demo
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamProjects() {
  return (
    <div className="flex gap-4">
      {teamProjects.map((project, index) => (
        <div
          id={`team-project-${index}`}
          key={index}
          className="border-2 p-4 rounded-xl w-1/2"
        >
          <div className="flex">
            <h3 className="font-bold">{project.who}</h3>
            <p className="ml-auto text-gray-800 bg-white px-2 rounded-lg">
              {project.period}
            </p>
          </div>
          <h4 className="text-gray-400">{project.function}</h4>
          <br />
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-[3px] font-medium text-blue-600"
            >
              Blog <RiExternalLinkLine />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [projectSwitch, setProjectSwitch] = useState("team");
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   animateOnScroll(projectsRef);
  // }, []);
  function handleSwitch(from: string, to: string) {
    const element1 = document.getElementById(from + "-projects");
    if (to == "solo") element1?.classList.add("slide-right");
    else element1?.classList.add("slide-left");

    setTimeout(() => {
      setProjectSwitch(to);
      const element1 = document.getElementById(to + "-project-0");
      const element2 = document.getElementById(to + "-project-1");
      element1?.classList.remove("hidden");
      element2?.classList.remove("hidden");
      element1?.classList.add("fade-in-bounce");
      element2?.classList.add("fade-in-bounce");
    }, 500);
  }

  return (
    <div
      ref={projectsRef}
      id="projects"
      className="h-screen flex flex-col justify-center items-center gap-4 overflow-hidden"
    >
      <div className="text-center">
        <p className="text-gray-400 text-sm">Take a look at my</p>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>
      <div className="flex gap-4 mr-auto">
        <button
          className={
            projectSwitch == "team" ? "font-bold border-b-2" : "text-gray-400"
          }
          onClick={() => handleSwitch("solo", "team")}
        >
          Team Projects
        </button>
        <button
          className={
            projectSwitch == "solo" ? "font-bold border-b-2" : "text-gray-400"
          }
          onClick={() => handleSwitch("team", "solo")}
        >
          Solo Projects
        </button>
      </div>
      <div
        className={projectSwitch === "solo" ? "" : "hidden"}
        id="solo-projects"
      >
        <SoloProjects />
      </div>
      <div
        className={projectSwitch === "team" ? "" : "hidden"}
        id="team-projects"
      >
        <TeamProjects />
      </div>{" "}
    </div>
  );
}
