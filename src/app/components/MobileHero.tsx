"use client";
import { useEffect, useRef } from "react";
import { SparklesCore } from "./ui/sparkles";

export default function MobileHero() {

  return (
    <div
      className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md lg:hidden hiddenn"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h2 className="text-2xl font-bold px-2">Welcome to my portfolio!</h2>
      <p className="text-sm text-center px-2">
        I strongly recommend checking this website out on a desktop device.
      </p>
    </div>
  );
}
