import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Content({ children }: Props) {
  return <div className="h-7 w-2 bg-white grid-cols-">{children}</div>;
}
