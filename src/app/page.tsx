"use client"

import { checkExistCodeId, insertCodeId } from '@/hooks/db';
import { ICode } from '@/model';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CodeDropperHome() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleGenerate = async () => {
    const id = nanoid();
    const url = `/code/${id}`;
    const expirationDate = new Date(Date.now() + (3600 * 1000 * 24));
    // Store the code and expiration date in the PostgreSQL database
    let insertedCode: ICode;
    const data: ICode = { id, code, language, expirationDate}
    if(await checkExistCodeId(id)) { // Check if the nanoid already exists in the database
      insertedCode = await handleGenerate();
    } else {
      insertedCode = await insertCodeId(data)
    }
    // Redirect to the generated URL
    router.push(url);
    return insertedCode;
  };

  return (
    <main className="bg-base-200 dark:bg-base-800 min-h-screen">
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
          maxLength={5000} // Set the maximum character limit to 5000
          className="mb-4 p-2 resize-none bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          onClick={handleGenerate}
          className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          Generate
        </button>
      </div>
    </main>
  );
}
