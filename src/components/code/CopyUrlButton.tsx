import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function CopyUrlButton () {
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
    <div className="flex items-center space-x-2 mb-3">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy URL'}
      </button>
      <span className="text-gray-500">{path}</span>
    </div>
  );
};