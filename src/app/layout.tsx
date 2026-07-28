import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'SARADA Netralaya & Maternity | Advanced Eye Hospital',
  description: 'Premium eye care powered by precision technology, experienced surgeons and compassionate care. Cataract, LASIK, Glaucoma, Retina, Cornea and more.',
  keywords: ['eye hospital', 'cataract surgery', 'LASIK', 'glaucoma', 'retina', 'SARADA Netralaya', 'eye care'],
  openGraph: {
    title: 'SARADA Netralaya & Maternity | Restoring Vision. Transforming Lives.',
    description: 'Advanced Eye Care powered by precision technology.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-[#F8FAFC] text-slate-900`}>{children}</body>
    </html>
  );
}
