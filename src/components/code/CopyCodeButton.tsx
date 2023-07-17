import { useState } from 'react';
import { HiOutlineClipboard } from "react-icons/hi";
interface CopyCodeButtonProps {
  code: string;
}

export default function CopyCodeButton({ code }: CopyCodeButtonProps) {
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
    <div className="mb-2 justify-center">
      <button
        className="bg-emerald-500 hover:bg-emerald-600 w-full
        flex items-center space-x-1 py-4 rounded 
        text-center justify-center content-center place-content-center
        text-4xl text-white font-semibold"
        onClick={handleCopy}
      >
        <HiOutlineClipboard />
        <span className='inline-block'>{copied ? 'COPIED!' : 'COPY CODE'} </span>
      </button>
    </div>
  );
};