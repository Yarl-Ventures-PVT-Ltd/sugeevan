import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

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
                    <a href="https://cal.com/sugeevan-vsg/30min" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-6 py-4 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl whitespace-nowrap flex justify-center">
                        Book an Appointment
                    </a>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                        <a href="https://www.linkedin.com/in/sugeevanv/?originalSubdomain=lk" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all flex-1 md:flex-none">
                            <Linkedin size={24} /> <span className="hidden md:inline">LinkedIn</span>
                        </a>
                        <a href="https://www.facebook.com/sugeevan.vettivelautham/" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-all flex-1 md:flex-none">
                            <Facebook size={24} /> <span className="hidden md:inline">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/sujeevan_vsg/" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#E4405F]/20 hover:text-[#E4405F] transition-all flex-1 md:flex-none">
                            <Instagram size={24} /> <span className="hidden md:inline">Instagram</span>
                        </a>
                        <a href="https://x.com/SugeevanVSG" target="_blank" rel="noopener noreferrer" className="p-3 md:px-6 md:py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all flex-1 md:flex-none">
                            <Twitter size={24} /> <span className="hidden md:inline">X</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
