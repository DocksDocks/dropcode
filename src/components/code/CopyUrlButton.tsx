import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineClipboard } from "react-icons/hi";

export default function CopyUrlButton() {
  const [copied, setCopied] = useState(false);
  const path = usePathname()
  const fullPath = process.env.NEXT_PUBLIC_SITE_URL + path;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullPath);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
    }
  };

  return (
      <button
        className="bg-blue-500 hover:bg-blue-600  
        w-full space-x-1 py-4 rounded 
        flex place-content-center
        text-center sm:text-xl lg:text-3xl xl:text-4xl text-white font-semibold"
        onClick={handleCopy}
      >
        <HiOutlineClipboard className='mt-1 lg:mt-0 xl:mt-0'/>
        <span className='inline-block'>{copied ? 'Copied!' : 'COPY URL'}</span>
      </button>
  );
};