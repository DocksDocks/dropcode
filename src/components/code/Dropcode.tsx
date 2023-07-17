import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyUrlButton from "./CopyUrlButton";
import CopyCodeButton from "./CopyCodeButton";
import EditCodeButton from "./EditCodeButton";

interface DropcodeProps {
  id: string;
  code: string;
  language: string;
}

export default function Dropcode({id, code, language }: DropcodeProps) {
  return (
    <main className="flex justify-center items-center h-full mt-16">
      {code ? (
        <div className="w-5/6">
          <CopyUrlButton />
          <SyntaxHighlighter language={language} style={darcula}>
            {code}
          </SyntaxHighlighter>
          <CopyCodeButton code={code} />
          <EditCodeButton id={id} code={code} language={language} />
        </div>
      ) : (
        <p>No code found.</p>
      )}
    </main>
  );
}
