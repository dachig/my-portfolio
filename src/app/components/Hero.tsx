import Image from "next/image";
import Link from "next/link";
import AiAvatar from "../../../public/ai-avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center gap-16">
      <Image
        className="rounded-full"
        src={AiAvatar}
        alt="ai-avatar"
        height={300}
      />
      <div className="text-center flex flex-col">
        <p className="">Hi, I'm</p>
        <h2 className="text-2xl font-bold ">Dachi Giorgobiani</h2>
        <Highlight>
          <h3 className="text-xl">Frontend Developer</h3>
        </Highlight>
        <div className="flex gap-4 justify-center mt-4">
          <Link
            className="bounce1"
            href="https://github.com/dachig"
            target="_blank"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            className="bounce2"
            href="https://www.linkedin.com/in/dachigiorgobiani/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <a
            className="bounce3"
            href="/CV_Dachi_Giorgobiani.docx.pdf"
            download="CV_Dachi_Giorgobiani.docx.pdf"
          >
            <TbFileCv className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
