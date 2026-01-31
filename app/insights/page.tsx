
import React from 'react';
import { Metadata } from 'next';
import { getArticles } from '../../lib/articles';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: 'Insights | Sugeevan Vettivelautham',
    description: 'A collection of thoughts on building companies, technology, and the future of education in Sri Lanka and beyond by Sugeevan Vsg.',
    alternates: {
        canonical: 'https://www.sugeevan.com/insights',
    },
    openGraph: {
        title: 'Insights | Sugeevan Vettivelautham',
        description: 'Thinking out loud about building companies, leading teams, and solving problems in the real world.',
        url: 'https://www.sugeevan.com/insights',
        type: 'website',
    },
};

export default async function InsightsPage() {
    const posts = await getArticles();

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Professional Background: Subtle static gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-5xl font-bold mb-6">Insights & Thoughts</h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        A collection of thoughts on building companies, technology, and the future of education in Sri Lanka and beyond.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((p, i) => (
                        <Link
                            href={`/insights/${p.slug}`}
                            key={i}
                            className="group glass p-8 rounded-3xl hover:bg-slate-900 transition-all duration-300 border border-white/5 hover:border-blue-500/30 flex flex-col h-full"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <span className="text-xs font-bold tracking-widest uppercase text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">{p.tag}</span>
                                <span className="text-xs text-slate-500">{p.date}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition-colors">{p.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{p.summary}</p>
                            <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                                Read Article <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
