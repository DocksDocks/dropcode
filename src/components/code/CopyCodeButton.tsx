import { useState } from 'react';

interface CopyCodeButtonProps {
    code: string;
}

export default function CopyCodeButton ({code}: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-3">
      <button
        className="bg-emerald-400 hover:bg-emerald-600 text-white font-semibold py-4 text-4xl px-4 w-full rounded"
        onClick={handleCopy}
      >
        {copied ? 'COPIED!' : 'COPY CODE'}
      </button>
    </div>
  );
};