import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyUrlButton from "./CopyUrlButton";
import CopyCodeButton from "./CopyCodeButton";
import EditCodeButton from "./EditCodeButton";
import SendCode from "../SendCode";

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
        <SendCode code={code} language={language} id={id} setIsEditing={setIsEditing} isEditing={isEditing}/>
      ) : (
        <main className="flex justify-center items-center h-full mt-16">
          {code ? (
            <div className="w-5/6">
              <CopyUrlButton />
              <SyntaxHighlighter language={language} style={darcula}>
                {code}
              </SyntaxHighlighter>
              <EditCodeButton  setIsEditing={setIsEditing} isEditing={isEditing} />
              <CopyCodeButton code={code} />
            </div>
          ) : (
            <p>No code found.</p>
          )}
        </main>
      )
      }
    </>
  );
}
