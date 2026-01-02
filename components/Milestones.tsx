import React from 'react';
import { Trophy, Award, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Milestone } from '../types';

const Milestones = () => {
    const miles: Milestone[] = [
        {
            text: 'Winner, Yarl Geek Challenge (Senior) 2021.',
            icon: <Trophy className="text-amber-400" size={32} />
        },
        {
            text: 'Winner, ICTA Spiralation/Spiralization 2022.',
            icon: <Award className="text-blue-400" size={32} />
        },
        {
            text: '7-year career progression from Junior Secretary to Regional Manager (North).',
            icon: <TrendingUp className="text-emerald-400" size={32} />
        },
        {
            text: 'Building platforms that serve thousands across Sri Lanka.',
            icon: <Users className="text-pink-400" size={32} />
        },
        {
            text: 'Leadership style shaped by clarity and execution in challenging conditions.',
            icon: <Lightbulb className="text-purple-400" size={32} />
        }
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-16">Milestones I’m grateful for</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {miles.map((m, i) => (
                        <div key={i} className="glass p-8 rounded-3xl text-left border-l-4 border-blue-600 group hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {m.icon}
                            </div>
                            <p className="text-lg font-medium text-slate-200 leading-relaxed">{m.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
