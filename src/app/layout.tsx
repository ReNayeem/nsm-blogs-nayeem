// import LoadingSkeleton from '@/components/shared/LoadingSkeleton';
import './globals.css';
import type { Metadata } from 'next';
// import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'nsm-blogs',
  description: 'A Blogging Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <Suspense fallback={<LoadingSkeleton />}> */}
      <body>
        {children}
      </body>
      {/* </Suspense> */}
    </html>
  );
}
