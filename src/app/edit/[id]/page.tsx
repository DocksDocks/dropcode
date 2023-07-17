"use client"

import SendCode from "@/components/SendCode";
import { useSearchParams } from "next/navigation";


export default function EditCode() {
  const query = useSearchParams();
  const code = query.get("code") as string | undefined;
  const language = query.get("language") as string | undefined;
  return <SendCode code={code} language={language} />;
}
