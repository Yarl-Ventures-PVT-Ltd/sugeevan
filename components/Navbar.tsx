'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: NavItem[] = [
        { label: 'Home', href: '/#home' },
        { label: 'About', href: '/#about' },
        { label: 'Ventures', href: '/#ventures' },
        { label: 'Work & Delivery', href: '/#delivery' },
        { label: 'Insights', href: '/#insights' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="/#home" className="text-xl font-bold tracking-tighter flex items-center gap-2">
                    <span className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm">S</span>
                    SUGEEVAN VSG
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            {item.label}
                        </a>
                    ))}
                    <a href="https://cal.com/sugeevan-vsg/30min" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-300">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-slate-300"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="https://cal.com/sugeevan-vsg/30min" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold">
                        Book Appointment
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
