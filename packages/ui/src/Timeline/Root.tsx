import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Root({ children }: Props) {
  return (
    <li className="h-9 w-2 bg-white flex items-center justify-center">
      {children}
    </li>
  );
}
