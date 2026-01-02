import Link from 'next/link';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import { getArticle, getArticles } from '../../../lib/articles'; // Import from lib
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getArticle(slug);

    if (!post) {
        return (
            <div className="bg-slate-950 min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                        <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // "Read Next" Logic: Get all articles to pick 2 recommendations
    const allArticles = await getArticles();
    const recommendations = allArticles
        .filter(p => p.slug !== slug)
        .slice(0, 2);

    return (
        <div className="bg-slate-950 min-h-screen flex flex-col relative overflow-hidden">
            <Navbar />

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

            <main className="flex-grow pt-32 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Navigation Breadcrumb */}
                    <Link href="/#insights" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-16 transition-colors group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Insights</span>
                    </Link>

                    {/* Editorial Header */}
                    <header className="mb-16 text-center">
                        <div className="flex items-center justify-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase border border-blue-500/20">
                                <Tag size={12} /> {post.tag}
                            </span>
                            <span className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium">
                                <Clock size={14} /> {post.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-serif italic animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            {post.summary}
                        </p>
                    </header>

                    {/* Article Content */}
                    <article className="glass p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 relative overflow-hidden">
                        {/* Subtle inner glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>

                        <div
                            className="prose prose-invert prose-lg md:prose-xl max-w-none 
                            prose-p:text-slate-200 prose-p:leading-[2] prose-p:font-light prose-p:mb-10 
                            [&>.lead]:text-[1.5rem] [&>.lead]:leading-[1.8] [&>.lead]:text-white [&>.lead]:font-normal [&>.lead]:mb-16 
                            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white 
                            prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-12 prose-h2:pb-6 prose-h2:border-b prose-h2:border-white/10 
                            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:text-blue-200 
                            prose-h4:text-xl prose-h4:mt-12 prose-h4:mb-6 prose-h4:text-blue-300 prose-h4:font-semibold 
                            prose-strong:text-white prose-strong:font-bold prose-strong:tracking-wide 
                            prose-em:text-blue-200 prose-em:italic 
                            prose-ul:my-10 prose-ul:list-disc prose-ul:pl-8 prose-ul:marker:text-blue-500 prose-ul:marker:text-lg
                            prose-ol:my-10 prose-ol:list-decimal prose-ol:pl-8 prose-ol:marker:text-blue-500 prose-ol:marker:font-bold 
                            prose-li:text-slate-200 prose-li:leading-relaxed prose-li:my-4 prose-li:pl-2 
                            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/10 prose-blockquote:pl-8 prose-blockquote:pr-8 prose-blockquote:py-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-blue-100 prose-blockquote:my-16 prose-blockquote:text-xl prose-blockquote:shadow-lg 
                            prose-a:text-blue-400 prose-a:no-underline prose-a:border-b prose-a:border-blue-500/30 hover:prose-a:border-blue-500 hover:prose-a:text-blue-300 transition-all selection:bg-blue-500/30 selection:text-white"
                        >
                            {post.content}
                        </div>
                    </article>

                    {/* Read Next Section */}
                    {recommendations.length > 0 && (
                        <div className="mt-24 border-t border-white/10 pt-16 animate-in fade-in duration-1000 delay-500">
                            <h2 className="text-2xl font-bold text-white mb-8">Read Next</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {recommendations.map((rec) => (
                                    <Link key={rec.slug} href={`/insights/${rec.slug}`} className="group glass p-8 rounded-3xl hover:bg-slate-900/80 transition-all border border-white/5 hover:border-blue-500/30">
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{rec.tag}</span>
                                            <span className="text-xs text-slate-500">{rec.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{rec.title}</h3>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight size={16} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
