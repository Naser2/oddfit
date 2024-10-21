
import { ViewTransitions } from 'next-view-transitions';
import "./globals.css";
import { Metadata } from 'next';
import NewHeader from '@/components/NewHeader';
export const metadata: Metadata = {
  title: "Hyperion Template by @codewithguillaume",
  description: "Generated with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <NewHeader />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ViewTransitions>
  );
}
