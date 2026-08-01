import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const GA_MEASUREMENT_ID = 'G-KBC99D0K94';

export const metadata: Metadata = {
  title: 'SARADA Netralaya & Maternity | Advanced Eye Hospital',
  description: 'Premium eye care powered by precision technology, experienced surgeons and compassionate care. Cataract, refractive surgery, glaucoma, medical retina services, cornea and more.',
  keywords: ['eye hospital', 'cataract surgery', 'refractive surgery', 'ICL', 'IPCL', 'glaucoma', 'medical retina', 'SARADA Netralaya', 'eye care'],
  openGraph: {
    title: 'SARADA Netralaya & Maternity | Restoring Vision. Transforming Lives.',
    description: 'Advanced Eye Care powered by precision technology.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-[#F8FAFC] text-slate-900`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
