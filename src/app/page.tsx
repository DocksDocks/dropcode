"use client"

import { nanoid } from "nanoid";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function CodeDropperHome() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleGenerate = () => {
    const id = nanoid();
    const url = `/code/${id}`;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    // Store the code and expiration date in a persistent storage like a database
    // You can use a backend API or a serverless function to handle this

    // Redirect to the generated URL
    router.push(url);
  };

  return (
    <main className="bg-base-200 dark:bg-base-800 min-h-screen pt-10">
      <div className="flex flex-col items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mb-4 bg-white dark:bg-gray-800"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add more language options as needed */}
        </select>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          className="mb-4 p-2 resize-none bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          onClick={handleGenerate}
          className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-800 dark:hover:bg-blue-900">
          Generate
        </button>
      </div>
    </main>
  );
}
