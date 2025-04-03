"use client";
import CryptoHippo from "../../../public/crypto-hippo-screen.png";
import GithubAPI from "../../../public/github-api-screen.png";
import HauntedHouse from "../../../public/haunted-house-screen.png";
import MarblesRace from "../../../public/marbles-race-screen.png";
import ChairConfigurator from "../../../public/chair-configurator-screen.png";

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
const solo3DProjects = [
  {
    title: "Haunted House",
    description:
      "Immerse yourself in a creepy world created with Vanilla ThreeJS.",
    thumbnail: HauntedHouse,
    linkRepo:
      "https://github.com/dachig/threejs-journey/tree/main/16-haunted-house",
    linkDemo: "https://dachis-haunted-house.vercel.app/",
  },
  {
    title: "Marbles Race",
    description:
      "Race to the finish of an obstacle course as a little purple marble.",
    thumbnail: MarblesRace,
    linkRepo:
      "https://github.com/dachig/threejs-journey/tree/main/66-create-a-game-with-r3f",
    linkDemo: "https://marblesrace.vercel.app/",
  },
  {
    title: "Chair Configurator",
    description: "Personalize your own chair in a 3D configurator.",
    thumbnail: ChairConfigurator,
    linkRepo: "https://github.com/dachig/3d-configurator",
    linkDemo: "https://dachis-chair-configurator.vercel.app/",
  },
];

const teamProjects = [
  {
    who: "Twintag",
    function: "Intern full stack developer",
    period: "feb '25 - june '25",
    description: [
      "Worked on internal admin portal and helped developed client projects.",
      "Working with modern AI tools and agents and implementing them into projects.",
      "Writing tests for the AI implementations.",
    ],
    link: "https://twintagblog.vercel.app/",
  },
  {
    who: "Meteor Digital NV",
    function: "Intern e-commerce front-end developer",
    period: "feb '24 - june '24",
    description: [
      "Researching Shopify's and Showpware's headless React PWA capabilities to seamlessly integrate with the respective storefronts to improve (outdated) internal workflows.",
      "Developing Shopify custom apps in React to trigger automated ticketing printjobs on a client project.",
      "Rewriting tests for another client project.",
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
          <p className="text-gray-400 mb-3">{project.description}</p>
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
              className="text-blue-500 hover:text-blue-600 font-bold flex items-center gap-1"
            >
              Repository
              <RiExternalLinkLine className="font-extrabold text-lg" />
            </Link>
            <Link
              href={project.linkDemo}
              target="_blank"
              className="text-blue-500 hover:text-blue-600 font-bold flex items-center gap-1"
            >
              Live Demo
              <RiExternalLinkLine className="font-extrabold text-lg" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function Solo3DProjects() {
  return (
    <div className="grid gap-4 grid-cols-2">
      {solo3DProjects.map((project, index) => (
        <div
          id={`solo3d-project-${index}`}
          key={index}
          className={"border-2 p-4 rounded-xl flex flex-col"}
        >
          <h3 className="font-bold">{project.title}</h3>
          <p className="text-gray-400 mb-3">{project.description}</p>
          <Image
            height={200}
            src={project.thumbnail}
            alt="thumbnail project"
            className="mt-auto"
          />
          <div className="flex gap-4 mt-2">
            <Link
              href={project.linkRepo}
              target="_blank"
              className="text-blue-500 hover:text-blue-600 font-bold flex gap-1 items-center"
            >
              Repository
              <RiExternalLinkLine className="font-extrabold text-lg" />
            </Link>
            <Link
              href={project.linkDemo}
              target="_blank"
              className=" text-blue-500 hover:text-blue-600 font-bold flex gap-1 items-center"
            >
              Live Demo
              <RiExternalLinkLine className="font-extrabold text-lg" />
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
              className="flex items-center gap-1 font-bold text-blue-500 hover:text-blue-600 mt-auto w-fit"
            >
              Blog <RiExternalLinkLine className="font-extrabold text-lg" />
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
    let random = Math.random();
    const element1 = document.getElementById(from + "-projects");
    element1?.classList.add(`slide-${random < 0.5 ? "right" : "left"}`);

    setTimeout(() => {
      setProjectSwitch(to);
      const element1 = document.getElementById(to + "-project-0");
      const element2 = document.getElementById(to + "-project-1");
      element1?.classList.remove("hidden");
      element2?.classList.remove("hidden");
      element1?.classList.add("fade-in-bounce");
      element2?.classList.add("fade-in-bounce");
      if (document.getElementById(to + "-project-2")) {
        const element3 = document.getElementById(to + "-project-2");
        element3?.classList.remove("hidden");
        element3?.classList.add("fade-in-bounce");
      }
    }, 500);
  }

  return (
    <div
      ref={projectsRef}
      id="projects"
      className={`${
        projectSwitch === "solo3d" ? "h-[calc(100vh+400px)]" : "h-screen"
      } flex flex-col justify-center items-center gap-4 overflow-hidden`}
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
          onClick={() => handleSwitch(projectSwitch, "team")}
        >
          Team Projects
        </button>
        <button
          className={
            projectSwitch == "solo" ? "font-bold border-b-2" : "text-gray-400"
          }
          onClick={() => handleSwitch(projectSwitch, "solo")}
        >
          Solo Projects
        </button>
        <button
          className={
            projectSwitch == "solo3d" ? "font-bold border-b-2" : "text-gray-400"
          }
          onClick={() => handleSwitch(projectSwitch, "solo3d")}
        >
          Solo 3D Projects
        </button>
      </div>
      <div
        className={projectSwitch === "solo" ? "" : "hidden"}
        id="solo-projects"
      >
        <SoloProjects />
      </div>
      <div
        className={projectSwitch === "solo3d" ? "" : "hidden"}
        id="solo3d-projects"
      >
        <Solo3DProjects />
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
