import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}
export function Root({ children }: HeaderRootProps) {
  return (
    <div className="w-full h-28 flex items-center justify-center gap-44">
      {children}
    </div>
  );
}
