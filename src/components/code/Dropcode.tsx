import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyUrlButton from "./CopyUrlButton";
import CopyCodeButton from "./CopyCodeButton";
import EditCodeButton from "./EditCodeButton";
import SendCode from "../home/SendCode";
import Mermaid from "./Mermaid";

interface DropcodeProps {
  id: string;
  code: string;
  language: string;
}

export default function Dropcode({ id, code, language }: DropcodeProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <>
      {isEditing ? (
        <SendCode code={code} language={language} id={id} setIsEditing={setIsEditing} isEditing={isEditing} />
      ) : (
        <main className="flex justify-center items-start mt-4 mb-4">
          {code ? (
            <div className="w-5/6">
              <div className="w-full flex flex-row justify-evenly space-x-2 mb-2">
                <CopyCodeButton code={code} />
                <EditCodeButton setIsEditing={setIsEditing} isEditing={isEditing} />
                <CopyUrlButton />
              </div>
              {language === 'mermaid' ? (
                <Mermaid chart={code} />
              ) : (
                <div style={{ height: '75vh' }}>
                  <SyntaxHighlighter language={language} style={darcula} customStyle={{ height: '100%', margin: 0 }}>
                    {code}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          ) : (
            <p>No code found.</p>
          )}
        </main>
      )}
    </>
  );
}