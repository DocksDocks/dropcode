import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CodeDropperID() {
  const router = useRouter();
  const { id } = router.query;
  const [code, setCode] = useState("");

  useEffect(() => {
    // Retrieve the code from the persistent storage using the ID
    // You can use a backend API or a serverless function to handle this
    // Set the code in the state
    // setCode(retrievedCode);
  }, []);

  return <CodeDropper code={code} />;
}
