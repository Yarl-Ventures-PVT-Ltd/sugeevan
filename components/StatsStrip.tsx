import React from 'react';

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

export default StatsStrip;
