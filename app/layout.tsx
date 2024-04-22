import type { Metadata } from 'next';
import '@/app/ui/globals.scss';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header/header';

export const metadata: Metadata = {
  title: {
    template: '%s | Survival Nexus',
    default: 'Survival Nexus',
  },
  description: 'Survival Nexus resilient network',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.className} container`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
