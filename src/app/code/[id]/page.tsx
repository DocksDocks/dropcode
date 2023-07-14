"use client"

import Dropcode from "@/components/code/Dropcode";
import { getHandler } from "@/hooks";
import { useEffect, useState } from "react";

export default function DropcodeID({params}: {params: {id: string}}) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    const fetchCode = async () => {
      const data = await getHandler(params.id)
      if(data){
        setCode(data.code);
        setLanguage(data.language);
      } 
    };
    fetchCode();
  }, [params]);

  return <Dropcode code={code} language={language} />;
}
