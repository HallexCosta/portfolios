import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface Props {
  name: string;
}

export function Top({ name }: Props) {
  return (
    <h1
      className={`${poppins.className} text-6xl font-semibold 
      text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400
    `}
    >
      Hello, I'm {name},
    </h1>
  );
}
