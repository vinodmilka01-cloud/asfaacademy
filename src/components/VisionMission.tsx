"use client";

import { CheckCircle2 } from "lucide-react";

export const VisionMission = () => {
    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div data-aos="fade-right">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Core</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter text-gray-950">Our Founding <br /><span className="text-primary italic">Philosophy</span></h2>

                        <div className="space-y-10">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 italic uppercase tracking-tight text-gray-950">Vision</h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium italic">
                                    To embrace a socially inclusive society driven by human values and economic prosperity through sports platforms.
                                </p>
                            </div>

                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-black group-hover:bg-primary transition-colors" />
                                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 italic uppercase tracking-tight text-gray-950">Mission</h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium italic">
                                    To identify and nurture talent from underserved communities, provide accessible training to all individuals, and develop elite athletes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10 bg-gray-50 p-12 md:p-16 rounded-[4rem] border border-gray-100 shadow-inner" data-aos="fade-left">
                        <h3 className="text-3xl font-black mb-10 italic uppercase tracking-tighter text-gray-950">Core Objectives</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                "Empowering professionals to exhibit talents globally.",
                                "Promoting sports as a fundamental right.",
                                "Creating career pathways through job placements.",
                                "Nurturing elite talent for Olympics stages.",
                                "Bridging the gap for rural sports talent.",
                                "Door-to-door training for physically challenged children."
                            ].map((obj, i) => (
                                <div key={i} className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <p className="font-bold text-gray-800 italic">{obj}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
