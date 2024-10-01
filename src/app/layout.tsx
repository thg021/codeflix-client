import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='no-scrollbar bg-[#141414] text-white'>
        <div className='no-scrollbar relative h-screen overflow-x-hidden bg-gradient-to-b lg:h-[140vh]'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
