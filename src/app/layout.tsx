import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/global/ThemeProvider';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
