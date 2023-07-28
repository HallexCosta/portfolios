import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Separator({ children }: Props) {
  return <div className="flex">{children}</div>;
}
