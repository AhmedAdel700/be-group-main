import type { ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
  return (
    <div id="main-content" tabIndex={-1} className="outline-none">
      {children}
    </div>
  );
}
