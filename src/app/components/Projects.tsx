"use client";
import CryptoHippo from "@/app/lib/crypto-hippo-screen.png";
import GithubAPI from "@/app/lib/github-api-screen.png";
import Image from "next/image";
import Link from "next/link";

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
        <div key={index} className="border-2 p-4 rounded-xl">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Image height={400} src={project.thumbnail} alt="thumbnail project" />
          <div className="flex gap-4">
            <Link href={project.linkRepo} target="_blank">
              Repository
            </Link>
            <Link href={project.linkDemo} target="_blank">
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
        <div key={index} className="border-2 p-4 rounded-xl">
          <div className="flex">
            <h3>{project.who}</h3>
            <p className="ml-auto">{project.period}</p>
          </div>
          <h4>{project.function}</h4>
          <br />
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
          {project.link && (
            <Link href={project.link} target="_blank">
              Link to blog
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
      className="h-screen flex flex-col justify-center items-center"
    >
      <p>Explore my</p>
      <h2>Projects</h2>
      <div className="flex gap-4">
        <button onClick={() => setProjectSwitch("solo")}>Solo Projects</button>
        <button onClick={() => setProjectSwitch("team")}>Team Projects</button>
      </div>
      {projectSwitch == "solo" ? <SoloProjects /> : <TeamProjects />}
    </div>
  );
}
