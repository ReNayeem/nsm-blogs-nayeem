import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/global/ThemeProvider';
import Navbar from '../app/components/navbar'

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
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
