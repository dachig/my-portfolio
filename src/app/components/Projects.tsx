"use client";
import CryptoHippo from "@/app/lib/crypto-hippo-screen.png";
import GithubAPI from "@/app/lib/github-api-screen.png";
import Image from "next/image";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

import { useState } from "react";

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
      "Helped Develop a full-stack internal communcation system for intern mentors to communicate with interns at the company.Communication happens through posts and comments on the interns timeline and progress.",
      "Whilst mainly remaining on the front-end with React I also helped with back-end MongoDB issues.",
    ],
    link: null,
  },
];

function SoloProjects() {
  return (
    <div className="flex gap-4">
      {soloProjects.map((project, index) => (
        <div key={index} className="border-2 p-4 rounded-xl flex flex-col">
          <h3 className="font-bold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
          <Image height={400} src={project.thumbnail} alt="thumbnail project" className="mt-auto"/>
          <div className="flex gap-4 mt-2">
            <Link href={project.linkRepo} target="_blank" className="hover:text-blue-600">
              Repository
            </Link>
            <Link href={project.linkDemo} target="_blank" className="hover:text-blue-600">
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
        <div key={index} className="border-2 p-4 rounded-xl w-1/2">
          <div className="flex">
            <h3 className="font-bold">{project.who}</h3>
            <p className="ml-auto text-gray-400 dark:bg-gray-800 bg-gray-100 px-1 rounded-lg">
              {project.period}
            </p>
          </div>
          <h4 className="text-gray-400">{project.function}</h4>
          <br />
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800 dark:text-white">
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
  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center gap-4"
    >
      <div className="text-center">
        <p className="text-gray-400 text-sm">Take a look at my</p>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>
      <div className="flex gap-4 mr-auto">
        <button
          className={
            projectSwitch == "solo" ? "font-bold border-b-2" : "text-gray-400"
          }
          onClick={() => setProjectSwitch("solo")}
        >
          Solo Projects
        </button>
        <button
          className={
            projectSwitch == "team" ? "font-bold border-b-2" : "text-gray-400"
          }
          onClick={() => setProjectSwitch("team")}
        >
          Team Projects
        </button>
      </div>
      {projectSwitch == "solo" ? <SoloProjects /> : <TeamProjects />}
    </div>
  );
}
