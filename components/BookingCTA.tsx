'use client';

import React from 'react';
import Image from 'next/image';
import { MousePointer2 } from 'lucide-react';

const BookingCTA = () => {
    return (
        <section className="py-24 px-6 bg-slate-950">
            <div className="max-w-5xl mx-auto">
                <div className="relative rounded-[3rem] overflow-hidden bg-[#0A1628] border border-blue-900/30 shadow-2xl">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-900/10 blur-[100px] pointer-events-none"></div>
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10 py-20 px-8 text-center flex flex-col items-center">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Is Your Startup Ready for <br /> Lift-Off?
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-16 animate-pulse pb-2 leading-relaxed">
                            Book a Call with Sugeevan!
                        </h3>

                        {/* CTA Button Card */}
                        <a
                            href="https://cal.com/sugeevan-vsg/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white hover:bg-slate-50 transition-all duration-300 rounded-full p-2 pr-10 pl-3 flex items-center gap-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer max-w-xl mx-auto"
                        >
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-500 transition-colors shrink-0">
                                <Image
                                    src="/sugeevan.png"
                                    alt="Sugeevan"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <span className="text-xl md:text-2xl font-bold text-slate-900">
                                    Hit the damn button!
                                </span>
                            </div>

                            <div className="absolute right-6 text-slate-900 animate-bounce">
                                <MousePointer2 size={24} className="fill-current" />
                            </div>
                        </a>

                        {/* Footer Info */}
                        <div className="mt-12 space-y-2">
                            <h4 className="text-2xl font-bold text-white">Sugeevan Vettivelautham</h4>
                            <p className="text-slate-400 font-medium">Founder & CEO</p>
                            <a href="mailto:hello@sugeevan.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                                hello@sugeevan.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCTA;
