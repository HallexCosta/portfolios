import { ReactNode } from "react";

export function Avatar({ children }: { children: ReactNode }) {
  return <div className="relative max-w-[650px] max-h-[594px]">{children}</div>;
}
