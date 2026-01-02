import React from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                <div className="lg:sticky lg:top-32">
                    <div className="flex gap-2 mb-6 flex-wrap">
                        {['Founder', 'Product', 'Growth', 'Platforms'].map(tag => (
                            <span key={tag} className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 border border-slate-700 rounded-full text-slate-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight italic font-serif">
                        Building businesses the way engineers build bridges.
                    </h2>
                    <div className="space-y-6">
                        <a href="mailto:hello@sugeevan.com" className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                            Say Hello <Mail size={18} />
                        </a>
                        <div className="space-y-2 text-slate-400">
                            <p className="flex items-center gap-3"><Mail size={16} /> hello@sugeevan.com</p>
                            <p className="flex items-center gap-3"><Phone size={16} /> +94 77 086 9328</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
                    <p>
                        I’m Sugeevan Vettivelautham, known as Sugeevan VSG. I build businesses the way engineers build bridges: with structure, repeatable systems, and a long-term view.
                    </p>
                    <p>
                        Over the years, I’ve worked across education, business delivery, and healthcare technology, learning how good systems reduce stress for people and unlock speed for teams. My Executive MBA at the University of Colombo strengthened the way I think about operations, strategy, and sustainable growth.
                    </p>
                    <p className="font-bold text-white">
                        Today, my work sits at the intersection of Education, Healthcare, and Technology through three ventures:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <div className="mt-1.5"><CheckCircle2 className="text-blue-500" size={20} /></div>
                            <p><span className="text-white font-semibold">EDUS</span> builds a modern learning ecosystem designed for accessibility, engagement, and progress visibility.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5"><CheckCircle2 className="text-emerald-500" size={20} /></div>
                            <p><span className="text-white font-semibold">MediMan</span> reduces waiting costs, helping patients reach trusted doctors through secure digital consultation.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5"><CheckCircle2 className="text-amber-500" size={20} /></div>
                            <p><span className="text-white font-semibold">Yarl Ventures</span> delivers strategy, marketing, and technology execution for businesses that want growth without chaos.</p>
                        </li>
                    </ul>
                    <p>
                        I care deeply about trust. For me, that means clear processes, measurable delivery, and platforms designed around real users, not assumptions. The DISC profile that best fits how I work is “Assessor”, balancing people-first leadership with high quality control.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
