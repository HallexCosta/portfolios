import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface Props {
  text: string;
}

export function Content({ text }: Props) {
  return <span className={`font-poppins text-3xl text-white`}>{text}</span>;
}
