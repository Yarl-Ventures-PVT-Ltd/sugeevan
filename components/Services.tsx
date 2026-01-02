import React from 'react';
import { Briefcase, Activity, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const Services = () => {
    const services: Service[] = [
        {
            title: 'Venture Building & Scale',
            description: 'Product strategy, execution roadmaps, metrics, systems, and sustainable growth loops.',
            icon: 'Briefcase'
        },
        {
            title: 'Tech Delivery With Accountability',
            description: 'Web, mobile, automation, and platform engineering delivered through a focused team and clear milestones.',
            icon: 'Activity'
        },
        {
            title: 'Partnerships & Market Expansion',
            description: 'Education and healthcare collaborations, rollout planning, and stakeholder alignment.',
            icon: 'ArrowRight'
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-6">How can I help?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        I build and scale digital ventures that solve everyday problems, then refine them into experiences people trust and return to. My focus is always the same: make the product work in the real world, and make the execution dependable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group glass p-8 rounded-3xl hover:bg-slate-900 transition-all duration-300 border-transparent hover:border-slate-700">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
                                {s.icon === 'Briefcase' ? <Briefcase size={28} /> : s.icon === 'Activity' ? <Activity size={28} /> : <ArrowRight size={28} />}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
