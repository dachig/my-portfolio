import Image from "next/image";
import Link from "next/link";
import AiAvatar from "@/app/lib/ai-avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

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
        <p className="text-gray-400">
          Hi, I'm 
        </p>
        <h2 className="text-2xl font-bold ">Dachi Giorgobiani</h2>
        <h3 className="text-xl text-gray-400">Frontend Developer</h3>

        <div className="flex gap-4 justify-center">
          <Link href="https://github.com/dachig" target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dachigiorgobiani/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <a
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
