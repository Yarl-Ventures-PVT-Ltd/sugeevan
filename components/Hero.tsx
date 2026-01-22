'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award } from 'lucide-react';

const Hero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const words = ['Build', 'Validate', 'Scale', 'Lead'];
        const timer = setInterval(() => setCurrentWord(prev => (prev + 1) % words.length), 2000);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            clearInterval(timer);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-mesh">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-blue-500 rounded-full blur-[80px] md:blur-[140px] mesh-circle"
                    style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-[18rem] h-[18rem] md:w-[35rem] md:h-[35rem] bg-purple-500 rounded-full blur-[80px] md:blur-[140px] mesh-circle"
                    style={{ transform: `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px)`, animationDelay: '-5s' }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/3 w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] bg-indigo-500 rounded-full blur-[80px] md:blur-[140px] mesh-circle"
                    style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, animationDelay: '-10s' }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-20 md:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-4xl order-2 lg:order-1 text-center lg:text-left">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-blue-400 text-sm font-semibold mb-6 animate-reveal mx-auto lg:mx-0">
                            Hi, I'm
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-reveal delay-100">
                            Sugeevan Vettivelautham <br />
                            <span className="text-gradient">(Sugeevan VSG)</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed animate-reveal delay-200 mx-auto lg:mx-0">
                            Founder & CEO - Building <span className="text-slate-200 font-semibold">EDUS</span> | <span className="text-slate-200 font-semibold">Yarl Ventures</span> | <span className="text-slate-200 font-semibold">MediMan</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-reveal delay-500 justify-center lg:justify-start">
                            <a href="https://cal.com/sugeevan-vsg/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95">
                                Book an Appointment
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center animate-reveal delay-300">
                        <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[40px] animate-pulse"></div>
                            <Image
                                src="/hSI_1.webp"
                                alt="Sugeevan Vettivelautham"
                                fill
                                className="object-cover rounded-3xl shadow-2xl border border-white/10 relative z-10"
                                priority
                            />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;
