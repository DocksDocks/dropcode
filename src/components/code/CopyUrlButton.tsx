import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineClipboard } from "react-icons/hi";
import DefaultCodeButton from './DefaultCodeButton';
import CustomizableButton from '../CustomizableButton';

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
    <CustomizableButton onClick={handleCopy} text={copied ? 'copied!' : 'copy url'} color={'blue'} class={'code'} icon={HiOutlineClipboard} />
  );
};