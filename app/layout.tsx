import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.sugeevan.com'),
    title: {
        default: 'Sugeevan VSG | Founder of EDUS, Yarl Ventures & MediMan',
        template: '%s | Sugeevan VSG'
    },
    description: "Founder and operator building technology ventures in education and healthcare. Building EDUS, Yarl Ventures, and MediMan.",
    keywords: ['Sugeevan Vettivelautham', 'Sugeevan VSG', 'EDUS', 'Yarl Ventures', 'MediMan', 'Jaffna Tech', 'Startup Founder Sri Lanka'],
    authors: [{ name: 'Sugeevan Vettivelautham' }],
    creator: 'Sugeevan Vettivelautham',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.sugeevan.com',
        title: 'Sugeevan VSG | Founder of EDUS, Yarl Ventures & MediMan',
        description: 'Founder and operator building technology ventures in education and healthcare.',
        siteName: 'Sugeevan VSG',
        images: [
            {
                url: '/sugeevan.png',
                width: 1200,
                height: 630,
                alt: 'Sugeevan VSG',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sugeevan VSG | Founder of EDUS, Yarl Ventures & MediMan',
        description: 'Founder and operator building technology ventures in education and healthcare.',
        creator: '@SugeevanVSG',
        images: ['/sugeevan.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    alternates: {
        canonical: 'https://www.sugeevan.com',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
            <body className="bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200" suppressHydrationWarning>
                {children}
                <Script
                    src="https://analytics.ahrefs.com/analytics.js"
                    data-key="qsDA/SHsKewEzB++ygTRPg"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
