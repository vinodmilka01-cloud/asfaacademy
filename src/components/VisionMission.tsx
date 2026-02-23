"use client";

import { CheckCircle2 } from "lucide-react";

export const VisionMission = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl font-black mb-10 italic uppercase tracking-tighter text-gray-900">Our Founding <span className="text-primary italic">Philosophy</span></h2>

                        <div className="space-y-12">
                            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary shadow-sm">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="text-primary uppercase tracking-widest font-black">Vision</span>
                                </h3>
                                <p className="text-gray-950 text-lg leading-relaxed font-bold">
                                    To embrace a socially inclusive society driven by human values and economic prosperity through sports entertainment platforms.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-black shadow-sm">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="text-black uppercase font-black">Mission</span>
                                </h3>
                                <p className="text-gray-950 text-lg leading-relaxed font-bold">
                                    To identify and nurture talent from underserved communities, provide accessible training to all including differently-abled individuals, and develop international-level athletes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8" data-aos="fade-left">
                        <h3 className="text-2xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Core Objectives</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                "Empowering differently-abled professionals to exhibit talents globally.",
                                "Promoting sports as a fundamental right for social integration.",
                                "Creating career pathways through job placements for athletes.",
                                "Nurturing elite talent for Olympics and International stages.",
                                "Bridging the gap for poor, tribal, and rural sports talent.",
                                "Door-to-door training for physically challenged children."
                            ].map((obj, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                    <p className="font-semibold text-gray-800">{obj}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
