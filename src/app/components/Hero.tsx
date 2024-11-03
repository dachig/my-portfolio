import Image from "next/image";
import Link from "next/link";
import AiAvatar from "@/app/lib/ai-avatar.jpg"

export default function Hero() {
  return (
    <div id="hero" className="h-screen flex justify-center items-center gap-16">
      <Image
        className="rounded-full"
        src={AiAvatar}
        alt="ai-avatar"
        height={300}
      />
      <div className="text-center flex flex-col">
        <p className="text-indigo-400">Hi, I'm</p>
        <h2 className="text-2xl font-bold text-indigo-600">
          Dachi Giorgobiani
        </h2>
        <h3 className="text-xl text-indigo-400">
          Frontend Developer
        </h3>
        <div className="flex gap-4 justify-center">
          <button>Download CV</button>
          <button>Contact</button>
        </div>
        <div className="flex gap-4 justify-center">
          <Link href="https://github.com/dachig">Github</Link>
          <Link href="https://www.linkedin.com/in/dachigiorgobiani/">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
