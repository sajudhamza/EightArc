import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/500.css';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/800.css';
import '@fontsource/archivo/900.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/400-italic.css';
import '@fontsource/lora/500-italic.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://eightarc.com'),
  title: {
    default: 'EightArc Inc | Legal technology, consulting & software',
    template: '%s | EightArc Inc',
  },
  description:
    'EightArc builds legal technology that puts real legal power in more hands. LawOnSight: free legal advice and attorney matching for individuals. PermFlowAI: PERM labor-certification workflow software for legal teams.',
  openGraph: {
    title: 'EightArc Inc | Legal technology, consulting & software',
    description:
      'Making law accessible through software. LawOnSight for individuals, PermFlowAI for legal teams, plus consulting & custom software development.',
    url: 'https://eightarc.com',
    siteName: 'EightArc Inc',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-page text-ink">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
