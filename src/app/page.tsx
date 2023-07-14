"use client"

import SelectButton from '@/components/home/SelectButton';
import { getHandler, postHandler } from '@/hooks';
import { ICode } from '@/interfaces';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DropcodeHome() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('bash');

  const handleGenerate = async () => {
    const id = nanoid();
    const url = `/code/${id}`;
    const expirationDate = new Date(Date.now() + (3600 * 1000 * 24));
    // Store the code and expiration date in the PostgreSQL database
    let insertedCode: ICode;
    const data: ICode = { id, code, language, expirationDate }
    const idExists = await getHandler(id);
    if (idExists) { // Check if the nanoid already exists in the database
      // insertedCode = await handleGenerate();
    } else {
      insertedCode = await postHandler(data);
    }
    // Redirect to the generated URL
    router.push(url);
  };

  return (
    <main className="bg-base-200 dark:bg-base-800 h-full mt-12">
      <div className="flex flex-col items-center">
        <SelectButton language={language} setLanguage={setLanguage}/>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          maxLength={5000} // Set the maximum character limit to 5000
          className="w-1/2 h-3/4 mb-4 p-3 bg-white dark:bg-gray-900 text-black dark:text-white rounded"
        />
        <button
          onClick={handleGenerate}
          className="py-3 px-14 rounded btn btn-primary bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          Generate
        </button>
      </div>
    </main>
  );
}
