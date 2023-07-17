"use client"

import Dropcode from "@/components/code/Dropcode";
import Loading from "@/components/Loading";
import { getHandler } from "@/hooks";
import { useEffect, useState } from "react";

export default function DropcodeID({ params }: { params: { id: string } }) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(true); // New loading state
  useEffect(() => {
    const fetchCode = async () => {
      const data = await getHandler(params.id)
      if (data) {
        setCode(data.code);
        setLanguage(data.language);
      }
      setLoading(false);
    };
    fetchCode();
  }, [params]);
  if (loading) {
    return <Loading />; // Show loading component while fetch is in progress
  } else {
    return <Dropcode id={params.id} code={code} language={language} />;
  }
}
