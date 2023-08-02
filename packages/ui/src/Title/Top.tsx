"use client";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

export function Top({ name }: Props) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationComplete(true), 2000);
  }, []);

  return (
    <h1
      className={`font-poppins max-h-[62px] w-fit inline-block text-6xl font-semibold animate-typewriter
      text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400
    `}
      style={{
        borderRight: animationComplete ? "none" : "5px solid whitesmoke",
      }}
    >
      Hello, I'm {name},
    </h1>
  );
}
