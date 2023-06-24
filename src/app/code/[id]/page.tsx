import CodeDropper from "@/components/CodeDropper";
import { findCodeId } from "@/hooks/db";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CodeDropperID({params}: {params: {id: string}}) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchCode = async () => {
      const result = await findCodeId(params.id)
      if(result){
        setCode(result.code);
        setLanguage(result.language);
      } else {
        router.push("/");
      }
    };
    fetchCode();
  }, [params, router]);

  return <CodeDropper code={code} language={language}/>;
}
