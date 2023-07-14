"use client"

import Dropcode from "@/components/code/Dropcode";
import Loading from "@/components/code/Loading";
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
      setLoading(false); // Set loading to false after fetch is complete
    };
    fetchCode();
  }, [params]);
  if (loading) {
    return <Loading />; // Show loading component while fetch is in progress
  } else {
    return <Dropcode code={code} language={language} />;
  }
}
