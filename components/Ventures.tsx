import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Venture } from '../types';

const Ventures = () => {
    const ventures: Venture[] = [
        {
            id: 'edus',
            title: 'EDUS Lanka (PVT) Ltd',
            oneLiner: 'Online learning built to be structured, engaging, and measurable.',
            description: 'EDUS is a Sri Lanka based education technology platform connecting students, parents, and educators through a modern digital learning ecosystem. The platform supports responsive web access, a cross-platform mobile app, secure data handling, and multilingual support.',
            highlights: [
                '1,000+ students actively using the platform.',
                'Interactive learning features designed to strengthen engagement.',
                'Built with a responsive front end and REST API based architecture.'
            ],
            ctaText: 'Explore EDUS',
            accentColor: 'blue',
            link: 'https://edus.lk/',
            image: '/EDUS.jpg'
        },
        {
            id: 'mediman',
            title: 'MediMan Life (PVT) Ltd',
            oneLiner: 'Telehealth designed to reduce waiting, friction, and uncertainty.',
            description: 'MediMan is a telehealth platform built to bridge healthcare gaps. Patients can book and consult with qualified doctors through secure digital experiences, supported by doctor profiles, e-prescriptions, and continuously improving workflows.',
            highlights: [
                '“Smart appointment triage” concept designed to reduce wait time by 40%.',
                'Early launch traction: 800+ users in 15 days.',
                'Built with Flutter and Node.js with bank-grade encryption.'
            ],
            ctaText: 'Explore MediMan',
            accentColor: 'pink',
            link: 'https://mediman.life',
            image: '/MediMan.jpg'
        },
        {
            id: 'yarl-ventures',
            title: 'Yarl Ventures (PVT) LTD',
            oneLiner: 'A DELIVERY PARTNER FOR TECHNOLOGY, DESIGN, AND GROWTH.',
            description: 'Yarl Ventures exists to deliver impactful, scalable digital and branding solutions that help businesses grow, connect, and lead. We operate with a structured project framework that is agile, transparent, and disciplined.',
            highlights: [
                'Services across web, mobile, custom software, UI/UX, and marketing.',
                'ISO inspired processes and full visibility with Jira/Slack/Zoom.',
                'Engagement: Hourly, milestone-based, or retainer.'
            ],
            ctaText: 'Explore Yarl Ventures',
            accentColor: 'emerald',
            link: 'https://yarlventures.com/',
            image: '/yarlventures.jpg'
        }
    ];

    return (
        <section id="ventures" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-center">Core Ventures</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {ventures.map((v) => (
                        <div key={v.id} className="glass p-8 rounded-[2rem] flex flex-col hover:translate-y-[-8px] transition-all duration-500">
                            {/* Card Header & Logo Area */}
                            <div className={`w-full h-64 rounded-t-[2rem] -mx-8 -mt-8 mb-8 relative group overflow-hidden flex items-center justify-center p-8
                                ${v.accentColor === 'blue' ? 'bg-gradient-to-b from-blue-600/20 via-blue-900/10 to-slate-950/0' :
                                    v.accentColor === 'emerald' ? 'bg-gradient-to-b from-emerald-600/20 via-emerald-900/10 to-slate-950/0' :
                                        v.accentColor === 'pink' ? 'bg-gradient-to-b from-pink-600/20 via-pink-900/10 to-slate-950/0' :
                                            'bg-gradient-to-b from-amber-600/20 via-amber-900/10 to-slate-950/0'}`}>

                                {/* Ambient Glow */}
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 blur-[80px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700
                                    ${v.accentColor === 'blue' ? 'bg-blue-500' : v.accentColor === 'emerald' ? 'bg-emerald-500' : v.accentColor === 'pink' ? 'bg-pink-500' : 'bg-amber-500'}`}></div>

                                {/* Logo Container with Glass Effect */}
                                <div className="relative w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <Image
                                        src={v.image}
                                        alt={v.title}
                                        fill
                                        className="object-contain p-2 drop-shadow-lg"
                                        priority
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-3 text-white">{v.title}</h3>
                            <p className={`font-bold mb-4 text-base uppercase tracking-widest ${v.accentColor === 'blue' ? 'text-blue-400' : v.accentColor === 'emerald' ? 'text-emerald-400' : v.accentColor === 'pink' ? 'text-pink-400' : 'text-amber-400'}`}>{v.oneLiner}</p>
                            <p className="text-slate-300 text-base mb-8 leading-relaxed">{v.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {v.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <ChevronRight className={`w-6 h-6 flex-shrink-0 mt-0.5 ${v.accentColor === 'blue' ? 'text-blue-500' : v.accentColor === 'emerald' ? 'text-emerald-500' : v.accentColor === 'pink' ? 'text-pink-500' : 'text-amber-500'}`} />
                                        <span className="text-slate-300 text-base">{h}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={v.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold border flex items-center justify-center gap-2 group/btn transition-all shadow-lg hover:scale-[1.02]
                                    ${v.accentColor === 'blue' ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 shadow-blue-900/20' :
                                        v.accentColor === 'emerald' ? 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-500 hover:border-emerald-500 shadow-emerald-900/20' :
                                            v.accentColor === 'pink' ? 'bg-pink-600 border-pink-600 text-white hover:bg-pink-500 hover:border-pink-500 shadow-pink-900/20' :
                                                'bg-amber-600 border-amber-600 text-white hover:bg-amber-500 hover:border-amber-500 shadow-amber-900/20'}`}
                            >
                                {v.ctaText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ventures;
