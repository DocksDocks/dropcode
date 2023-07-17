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
    <div className="mb-2 justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-600  w-full
        flex items-center space-x-1 py-4 rounded 
        text-center justify-center content-center place-content-center
        text-4xl text-white font-semibold"
        onClick={handleCopy}
      >
        <HiOutlineClipboard />
        <span className='inline-block'>{copied ? 'Copied!' : 'COPY URL'}</span>
      </button>
    </div>
  );
};