import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeDropperProps {
  code: string;
  language: string;
}

export default function CodeDropper({ code, language }: CodeDropperProps) {
  return (
    <main className="flex justify-center items-center h-screen">
      {code ? (
        <SyntaxHighlighter language={language} style={darcula}>
          {code}
        </SyntaxHighlighter>
      ) : (
        <p>No code found.</p>
      )}
    </main>
  );
}
