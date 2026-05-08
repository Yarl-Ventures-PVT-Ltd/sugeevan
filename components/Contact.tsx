'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const Contact = () => (
    <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="glass p-12 lg:p-20 rounded-[3rem] text-center max-w-5xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">Let’s connect when it <br /> makes sense.</h2>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto text-center">
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
                        <p className="font-medium text-slate-300">95, KKS Road, Jaffna, Sri Lanka</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">


                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                        <a href="https://www.linkedin.com/in/sugeevanv/?originalSubdomain=lk" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all flex-1 md:flex-none">
                            <LinkedinIcon size={24} /> <span className="hidden md:inline">LinkedIn</span>
                        </a>
                        <a href="https://www.facebook.com/sugeevan.vettivelautham/" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-all flex-1 md:flex-none">
                            <FacebookIcon size={24} /> <span className="hidden md:inline">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/sujeevan_vsg/" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#E4405F]/20 hover:text-[#E4405F] transition-all flex-1 md:flex-none">
                            <InstagramIcon size={24} /> <span className="hidden md:inline">Instagram</span>
                        </a>
                        <a href="https://x.com/SugeevanVSG" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all flex-1 md:flex-none">
                            <TwitterIcon size={24} /> <span className="hidden md:inline">X</span>
                        </a>
                        <a href="https://www.f6s.com/member/sugeevan-vsg?follow=1" target="_blank" rel="noopener noreferrer" title="Follow Sugeevan VSG on F6S" className="p-3 md:px-6 md:py-4 glass rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all flex-1 md:flex-none">
                            <img src="https://www.f6s.com/images/f6s-follow-primary.png" width={78} height={22} alt="Follow Sugeevan VSG on F6S" style={{ width: '78px', height: '22px', padding: '0px', margin: '0px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
