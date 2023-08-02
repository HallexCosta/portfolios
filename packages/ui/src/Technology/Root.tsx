import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface Props {
  children: ReactNode;
}

export function Root({ children }: Props) {
  return <div className="flex w-full gap-4 items-center">{children}</div>;
}
