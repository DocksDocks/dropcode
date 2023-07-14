import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyUrlButton from "./CopyUrlButton";
import CopyCodeButton from "./CopyCodeButton";

interface DropcodeProps {
  code: string;
  language: string;
}

export default function Dropcode({ code, language }: DropcodeProps) {
  return (
    <main className="flex justify-center items-center h-full mt-16">
      {code ? (
        <div className="w-5/6">
          <CopyUrlButton />
          <SyntaxHighlighter language={language} style={darcula}>
            {code}
          </SyntaxHighlighter>
          <CopyCodeButton code={code} />
        </div>
      ) : (
        <p>No code found.</p>
      )}
    </main>
  );
}
