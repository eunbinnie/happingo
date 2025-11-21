import '@/styles/globals.css';

import type { Metadata } from 'next';

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
    <html lang="ko" className={`${pretendard.variable} ${asset.variable}`}>
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
