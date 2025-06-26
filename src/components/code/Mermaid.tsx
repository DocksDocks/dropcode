// src/components/code/Mermaid.tsx
import mermaid from "mermaid";
import type { MermaidConfig } from "mermaid";
import { useEffect, FC } from "react";

const config: MermaidConfig = {
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
};

mermaid.initialize(config);

interface MermaidProps {
  chart: string;
}

const Mermaid: FC<MermaidProps> = ({ chart }) => {
  useEffect(() => {
    const mermaidElements = document.querySelectorAll('.mermaid');
    mermaidElements.forEach((el) => {
      el.removeAttribute('data-processed');
    });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md">
      <div className="mermaid">{chart}</div>
    </div>
  );
};

export default Mermaid;