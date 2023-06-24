import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeDropperProps {
  code: string;
}

export default function CodeDropper({ code }: CodeDropperProps) {
  return (
    <main className="flex justify-center items-center h-screen">
      {code ? (
        <SyntaxHighlighter language="javascript" style={darcula}>
          {code}
        </SyntaxHighlighter>
      ) : (
        <p>No code found.</p>
      )}
    </main>
  );
}
