import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ weight: "400", subsets: ['latin'] });

export const metadata = {
  title: 'dropcode',
  description: 'A place to share code snippets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
      <Navbar /> 
      {children}
      <Analytics />
      </body>
    </html>
  )
}
