'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X, Clock, Target, Users } from 'lucide-react';

interface DeliveryModel {
    id: string;
    title: string;
    icon: any;
    shortDesc: string;
    fullDesc: string;
    benefits: string[];
    bestFor: string;
}

const WorkDelivery = () => {
    const [selectedModel, setSelectedModel] = useState<DeliveryModel | null>(null);

    const models: DeliveryModel[] = [
        {
            id: 'hourly',
            title: 'Hourly (Time & Materials)',
            icon: Clock,
            shortDesc: 'Flexible engagement for evolving needs.',
            fullDesc: 'The Time & Materials model is built for agility. In the early stages of a venture, requirements often evolve as we discover new user insights or market realities. This model allows us to pivot instantly without the friction of renegotiating contracts. We track time transparently, so you pay only for the exact effort invested in your success.',
            benefits: [
                'Complete flexibility: Change direction at any time.',
                'Immediate start: No lengthy scoping phase required.',
                'Transparent billing: Detailed logs of every hour spent.'
            ],
            bestFor: 'Discovery phases, R&D, maintenance, and projects with evolving requirements.'
        },
        {
            id: 'milestone',
            title: 'Milestone-Based',
            icon: Target,
            shortDesc: 'Fixed outcomes for defined budgets.',
            fullDesc: 'The Milestone model is built for certainty. When the scope is clear and the "definition of done" is well-understood, we can lock in a budget and a timeline. We break the project into tangible deliverables (milestones). You release payment only when each milestone is delivered and approved. This shifts the risk of execution to us.',
            benefits: [
                'Budget certainty: Know exactly what you will pay.',
                'Result-focused: Payment is tied to delivery, not activity.',
                'Clear roadmap: Visual progress tracking against agreed goals.'
            ],
            bestFor: 'MVPs with clear specs, specific feature additions, and fixed-budget projects.'
        },
        {
            id: 'retainer',
            title: 'Retainer (Dedicated Team)',
            icon: Users,
            shortDesc: 'Long-term partnership for continuous growth.',
            fullDesc: 'The Retainer model is built for scale. As your product grows, you need a team that "gets it" without needing constant re-briefing. We assign dedicated engineers and designers who become an extension of your own team. They hold the historical context of your code and business logic, allowing them to ship faster and with higher quality over time.',
            benefits: [
                'Deep domain knowledge: Your team learns and improves with you.',
                'Guaranteed availability: Resources are reserved exclusively for you.',
                'Seamless communication: Direct integration into your Slack/Jira.'
            ],
            bestFor: 'Scaling startups, long-term product maintenance, and businesses needing a permanent tech arm.'
        }
    ];

    return (
        <section id="delivery" className="py-24 bg-slate-900/30 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">How work gets delivered</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Good outcomes come from good process. Our delivery approach is structured and agile: discovery and alignment first, then a concrete plan, iterative development, quality assurance, and a clean handover.
                        </p>
                        <div className="space-y-4">
                            {['Discovery & Alignment', 'Iterative sprints with reviews', 'QA & Disciplined handover'].map(item => (
                                <div key={item} className="flex items-center gap-4 text-slate-300 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {models.map((model) => (
                            <div
                                key={model.id}
                                onClick={() => setSelectedModel(model)}
                                className="glass p-8 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-slate-800 transition-all border border-white/5 hover:border-blue-500/30"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors`}>
                                        <model.icon size={24} />
                                    </div>
                                    <div>
                                        <span className="text-xl font-bold block group-hover:text-blue-400 transition-colors">{model.title}</span>
                                        <span className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{model.shortDesc}</span>
                                    </div>
                                </div>
                                <ArrowRight className="text-slate-600 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedModel && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
                        onClick={() => setSelectedModel(null)}
                    ></div>
                    <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="p-8 border-b border-white/10 flex justify-between items-start bg-slate-900/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <selectedModel.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{selectedModel.title}</h3>
                                    <p className="text-slate-400">{selectedModel.shortDesc}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedModel(null)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 bg-slate-950/50">
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                {selectedModel.fullDesc}
                            </p>

                            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Key Benefits</h4>
                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {selectedModel.benefits.map((benefit, i) => (
                                    <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                        <p className="text-sm text-slate-300">{benefit}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4 flex gap-3">
                                <div className="mt-1">
                                    <CheckCircle2 size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <span className="block text-sm font-bold text-blue-400 uppercase tracking-wide mb-1">Best For</span>
                                    <p className="text-slate-300">{selectedModel.bestFor}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 border-t border-white/10 bg-slate-900 flex justify-end">
                            <a
                                href="mailto:hello@sugeevan.com"
                                className="px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-lg"
                            >
                                Discuss this model
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default WorkDelivery;
