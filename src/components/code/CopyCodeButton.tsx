import { useState } from 'react';
import { HiOutlineClipboard } from "react-icons/hi";
import DefaultCodeButton from './DefaultCodeButton';
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
    <DefaultCodeButton color={'emerald'} onClick={handleCopy} text={copied ? 'copied!' : 'copy code'} icon={HiOutlineClipboard} />
  );
};