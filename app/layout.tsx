import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: "Sugeevan VSG | Founder of EDUS, Yarl Ventures & MediMan",
    description: "Founder and operator building technology ventures in education and healthcare.",
    icons: {
        icon: '/favicon.png',
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
            </body>
        </html>
    );
}
