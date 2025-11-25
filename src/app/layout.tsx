import '@/styles/globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import { asset, pretendard } from './fonts';

export const metadata: Metadata = {
  title: 'Happingo',
  description: '해피 빙고',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${asset.variable}`}
      suppressHydrationWarning
    >
      <body className="font-pretendard bg-background text-text">
        <ThemeProvider storageKey="happingo-theme">{children}</ThemeProvider>
      </body>
    </html>
  );
}
