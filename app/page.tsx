import React from 'react';
import Image from 'next/image';
import {
    Github,
    Twitch, Linkedin,
    Mail, Phone, MapPin, Award, Activity,
    Briefcase, CheckCircle2, ChevronRight, Download,
    Menu, X, ArrowRight, Trophy, Target, TrendingUp, Users, Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import { NavItem, Venture, Service, Milestone } from '../types';
import { getArticles } from '../lib/articles';

// Components imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkDelivery from '../components/WorkDelivery';
import Hero from '../components/Hero';
import Insights from '../components/Insights';



const StatsStrip = () => {
    const stats = [
        { label: 'EDUS', val: '1,000+', desc: 'Active Learners' },
        { label: 'MediMan', val: '800+', desc: 'Users in 15 days' },
        { label: 'MediMan', val: '50+', desc: 'Verified Doctors' },
        { label: 'Partners', val: 'Global', desc: 'Execution Standards' },
    ];

    return (
        <div className="border-y border-slate-800 bg-slate-900/50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center md:text-left">
                            <p className="text-blue-500 font-bold mb-1 text-sm uppercase tracking-widest">{s.label}</p>
                            <h3 className="text-4xl font-bold mb-2">{s.val}</h3>
                            <p className="text-slate-500 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

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

const Vision = () => (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">A vision rooted in Jaffna, built for the world</h2>
            <div className="space-y-6 text-xl text-slate-400 leading-relaxed italic font-serif">
                <p>“I’m building from Jaffna on purpose.”</p>
                <p>
                    My long-term vision is to help make Jaffna a hub for IT and digital services, where talent can grow locally while delivering globally. I want young people to access high-standard opportunities without needing to leave home to find exposure. That means creating real companies, real products, and real delivery discipline that international partners can rely on.
                </p>
                <p>
                    This is also why our work culture prioritizes professionalism, integrity, and quality. It’s how trust is built, and how a region earns its place on the global map.
                </p>
            </div>
        </div>
    </section>
);

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



const Contact = () => (
    <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="glass p-12 lg:p-20 rounded-[3rem] text-center max-w-5xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">Let’s connect when it <br /> makes sense.</h2>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
                    If you’re exploring a partnership, a delivery team, or a strategic conversation around education and healthcare platforms, let's talk. I value clarity.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500"><Mail /></div>
                        <p className="font-medium text-slate-300">hello@sugeevan.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500"><Phone /></div>
                        <p className="font-medium text-slate-300">+94 77 086 9328</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500"><MapPin /></div>
                        <p className="font-medium text-slate-300">95, KKS Road, Jaffna</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="mailto:hello@sugeevan.com" className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                        Book an Appointment
                    </a>
                    <a href="https://www.linkedin.com/in/sugeevanv" target="_blank" rel="noopener noreferrer" className="px-10 py-5 glass rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all">
                        LinkedIn <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </div>
    </section>
);



export default async function Home() {
    const allArticles = await getArticles();
    const recentPosts = allArticles.slice(0, 3);

    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <StatsStrip />
            <Services />
            <About />
            <Vision />
            <Ventures />
            <WorkDelivery />
            <Milestones />
            <Insights posts={recentPosts} />
            <Contact />
            <Footer />
        </div>
    );
}
