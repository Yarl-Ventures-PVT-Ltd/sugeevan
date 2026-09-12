import React from 'react';
import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import {
    UserPlus, Phone, Mail, Globe, MapPin,
    GraduationCap, HeartPulse, Rocket, Landmark,
} from 'lucide-react';

// Digital business card served at /v. The printed QR and the NFC tag both point
// at https://sugeevan.com/v, so this route path is fixed and must not be renamed.

const PHONE = '+94770869328';
const PHONE_DISPLAY = '+94 77 086 9328';
const EMAIL = 'hello@sugeevan.com';
const WHATSAPP_TEXT = 'Hello Sugeevan, I got your contact from your digital card.';

const VENTURES = ['EDUS', 'MediMan', 'Yarl Ventures', 'NCIT'];

const LEADERSHIP = [
    { icon: GraduationCap, role: 'Founder & CEO - EDUS Lanka', detail: 'Education and digital learning', color: 'text-blue-400 bg-blue-500/10' },
    { icon: HeartPulse, role: 'Founder & CEO - MediMan Life', detail: 'Healthtech and healthcare continuity', color: 'text-emerald-400 bg-emerald-500/10' },
    { icon: Rocket, role: 'Founder & CEO - Yarl Ventures', detail: 'Ventures, innovation and business growth', color: 'text-purple-400 bg-purple-500/10' },
    { icon: Landmark, role: 'Chairman - NCIT', detail: 'Northern Chamber of Information Technology', color: 'text-amber-400 bg-amber-500/10' },
];

const WhatsappIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 0 1-1.44-5.01c0-5.18 4.23-9.4 9.42-9.4a9.36 9.36 0 0 1 9.41 9.41c0 5.18-4.23 9.4-9.42 9.4M20.52 3.49A11.78 11.78 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.47h.01c6.58 0 11.94-5.35 11.94-11.93a11.86 11.86 0 0 0-3.47-8.41" />
    </svg>
);

export const viewport: Viewport = {
    themeColor: '#020617',
    viewportFit: 'cover',
};

export const metadata: Metadata = {
    // absolute, so the root layout's "%s | Sugeevan VSG" template does not append a second name
    title: { absolute: 'Sugeevan Vettivelautham | Digital Card' },
    description: 'Digital business card for Sugeevan Vettivelautham. Founder and CEO of EDUS Lanka, MediMan Life and Yarl Ventures, Chairman of NCIT. Save the contact, call, or message directly.',
    alternates: {
        canonical: 'https://www.sugeevan.com/v',
    },
    openGraph: {
        title: 'Sugeevan Vettivelautham',
        description: 'Founder & CEO. EMBA, University of Colombo.',
        url: 'https://www.sugeevan.com/v',
        type: 'profile',
        images: [{ url: '/v/og-image.jpg', width: 1200, height: 630, alt: 'Sugeevan Vettivelautham' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sugeevan Vettivelautham',
        description: 'Founder & CEO. EMBA, University of Colombo.',
        images: ['/v/og-image.jpg'],
    },
};

export default function DigitalCardPage() {
    const whatsappUrl = `https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

    return (
        <main className="relative min-h-screen hero-mesh pt-8 pb-4 px-4 overflow-hidden">
            {/* Ambient glow, matched to the home page treatment but calmer for a single card */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 left-1/4 w-[22rem] h-[22rem] bg-blue-500 rounded-full blur-[110px] mesh-circle"></div>
                <div className="absolute bottom-0 right-1/4 w-[20rem] h-[20rem] bg-purple-500 rounded-full blur-[110px] mesh-circle" style={{ animationDelay: '-7s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto">
                <section className="glass rounded-[2.5rem] overflow-hidden shadow-2xl animate-reveal">
                    <header className="px-6 pt-8 pb-6 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-blue-400 text-xs font-bold tracking-widest uppercase">
                            Sugeevan VSG
                        </span>

                        <div className="relative w-32 h-32 mx-auto my-6">
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[30px]"></div>
                            <Image
                                src="/v/portrait.webp"
                                alt="Sugeevan Vettivelautham"
                                width={128}
                                height={128}
                                className="relative z-10 w-32 h-32 rounded-full object-cover border-2 border-white/20 shadow-2xl"
                                priority
                            />
                        </div>

                        <h1 className="text-3xl font-bold leading-tight">Sugeevan Vettivelautham</h1>
                        <p className="text-gradient text-lg font-bold mt-2">Founder &amp; CEO</p>
                        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                            EMBA, University of Colombo. Entrepreneur, business leader and builder.
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                            {VENTURES.map((name) => (
                                <span key={name} className="px-3 py-1.5 rounded-full glass text-xs font-semibold text-slate-300">
                                    {name}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                        <a
                            href="/v/sugeevan.vcf"
                            download
                            className="col-span-2 flex items-center justify-center gap-2 min-h-14 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                        >
                            <UserPlus size={20} /> Save Contact
                        </a>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 min-h-13 py-3 px-4 rounded-2xl glass font-semibold text-sm hover:bg-[#25D366]/20 hover:text-[#25D366] transition-all active:scale-95"
                        >
                            <WhatsappIcon size={18} /> WhatsApp
                        </a>
                        <a
                            href={`tel:${PHONE}`}
                            className="flex items-center justify-center gap-2 min-h-13 py-3 px-4 rounded-2xl glass font-semibold text-sm hover:bg-emerald-500/20 hover:text-emerald-400 transition-all active:scale-95"
                        >
                            <Phone size={18} /> Call
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center justify-center gap-2 min-h-13 py-3 px-4 rounded-2xl glass font-semibold text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-all active:scale-95"
                        >
                            <Mail size={18} /> Email
                        </a>
                        <a
                            href="https://www.sugeevan.com"
                            className="flex items-center justify-center gap-2 min-h-13 py-3 px-4 rounded-2xl glass font-semibold text-sm hover:bg-purple-500/20 hover:text-purple-400 transition-all active:scale-95"
                        >
                            <Globe size={18} /> Website
                        </a>
                    </div>

                    <div className="px-6 py-6 border-t border-white/10">
                        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">Profile</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Entrepreneur and business leader building ventures across education, healthtech and
                            business innovation, with a focus on growth, technology-enabled services and long-term impact.
                        </p>
                    </div>

                    <div className="px-6 py-6 border-t border-white/10">
                        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Leadership</h2>
                        <div className="flex flex-col gap-5">
                            {LEADERSHIP.map(({ icon: Icon, role, detail, color }) => (
                                <div key={role} className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-200 leading-snug">{role}</p>
                                        <p className="text-xs text-slate-500 mt-1">{detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="px-6 py-6 border-t border-white/10">
                        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Direct Contact</h2>
                        <div className="flex flex-col gap-5">
                            <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">{PHONE_DISPLAY}</p>
                                    <p className="text-xs text-slate-500 mt-1">Tap to call</p>
                                </div>
                            </a>
                            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{EMAIL}</p>
                                    <p className="text-xs text-slate-500 mt-1">Send email</p>
                                </div>
                            </a>
                            <a href="https://www.sugeevan.com" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                                    <Globe size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">www.sugeevan.com</p>
                                    <p className="text-xs text-slate-500 mt-1">Open website</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-200">95, K.K.S Road, Jaffna, Sri Lanka</p>
                                    <p className="text-xs text-slate-500 mt-1">Business address</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="px-6 py-5 text-center text-[11px] text-slate-600 border-t border-white/10">
                        Digital business card. Optimized for QR and NFC.
                    </p>
                </section>

                {/* Stays reachable after scrolling the sections, which is the main action on this page */}
                {/* pb keeps the button off the iPhone home indicator; falls back to 1rem elsewhere */}
                <div className="sticky bottom-0 mt-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
                    <a
                        href="/v/sugeevan.vcf"
                        download
                        className="flex items-center justify-center gap-2 min-h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-2xl shadow-blue-900/50 transition-all active:scale-95"
                    >
                        <UserPlus size={20} /> Save Sugeevan to Contacts
                    </a>
                </div>
            </div>
        </main>
    );
}
