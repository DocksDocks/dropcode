// src/components/code/Mermaid.tsx
import mermaid from "mermaid";
import type { MermaidConfig } from "mermaid";
import { useState, useEffect, FC } from "react";

const config: MermaidConfig = {
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  themeVariables: {
    fontSize: "calc(10px + 0.5vw)",
  },
};

mermaid.initialize(config);

interface MermaidProps {
  chart: string;
}

const Mermaid: FC<MermaidProps> = ({ chart }) => {
  useEffect(() => {
    const mermaidElements = document.querySelectorAll('.mermaid');
    if (mermaidElements.length) {
      mermaidElements.forEach((el) => {
        el.removeAttribute('data-processed');
      });
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="bg-gray-800 p-4 mb-4 rounded-md h-full overflow-x-auto">
      <div className="mermaid">{chart}</div>
    </div>
  );
};

export default Mermaid;