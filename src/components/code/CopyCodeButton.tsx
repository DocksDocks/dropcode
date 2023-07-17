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
    <div className="mb-2">
      <button
        className="bg-emerald-500 hover:bg-emerald-600
        w-full space-x-1 py-4 rounded 
        flex place-content-center
        text-center text-4xl text-white font-semibold"
        onClick={handleCopy}
      >
        <HiOutlineClipboard />
        <span className='inline-block'>{copied ? 'COPIED!' : 'COPY CODE'} </span>
      </button>
    </div>
  );
};