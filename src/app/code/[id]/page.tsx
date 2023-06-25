"use client"

import CodeDropper from "@/components/CodeDropper";
import { getHandler } from "@/hooks";
import { useEffect, useState } from "react";

export default function CodeDropperID({params}: {params: {id: string}}) {
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

  return <CodeDropper code={code} language={language}/>;
}
