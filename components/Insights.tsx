import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface InsightsProps {
    posts: Article[];
}

const Insights = ({ posts }: InsightsProps) => {
    return (
        <section id="insights" className="py-24 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Latest insights</h2>
                        <p className="text-slate-400 max-w-xl">Thinking out loud about building companies, leading teams, and solving problems in the real world.</p>
                    </div>

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

                <div className="mt-12 flex justify-center">
                    <Link href="/insights" className="px-8 py-3 rounded-full border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 text-white transition-all flex items-center gap-2 group">
                        View all Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Insights;
