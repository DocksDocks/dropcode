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
    // Quando o componente for montado, remove o atributo 'data-processed'
    // para forçar o Mermaid a renderizar novamente.
    const mermaidElements = document.querySelectorAll('.mermaid');
    mermaidElements.forEach((el) => {
      el.removeAttribute('data-processed');
    });
    // Renderiza o conteúdo
    mermaid.contentLoaded();
  }, [chart]); // Executa o efeito sempre que o conteúdo do gráfico mudar

  return <div className="mermaid">{chart}</div>;
};

export default Mermaid;