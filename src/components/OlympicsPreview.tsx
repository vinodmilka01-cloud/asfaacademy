"use client";

import Link from "next/link";
import { Trophy, Target, ArrowRight, Star } from "lucide-react";

export const OlympicsPreview = () => {
    return (
        <section className="py-24 bg-gray-950 text-white overflow-hidden relative" id="olympics-preview">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Highest Stage</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
                            Road to <span className="text-primary">Olympics</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed italic font-medium">
                            Our ultimate mission is to produce Olympic-level athletes from the most underserved corners of India. Identifying and nurturing elite talent for 2028 and beyond.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                <Star className="text-primary mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Elite Training</h4>
                                <p className="text-sm text-gray-400 italic">National level coaching and international standards.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                <Target className="text-primary mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Strategic Goals</h4>
                                <p className="text-sm text-gray-400 italic">Targeting Olympic qualifiers with systematic preparation.</p>
                            </div>
                        </div>


                    </div>

                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative">
                            <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80"
                                    alt="Olympic athlete training"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                            </div>

                            {/* Floating glass card */}
                            <div className="absolute -bottom-8 -left-8 glass-morphism p-8 rounded-3xl border border-white/10 max-w-xs hidden md:block">
                                <Trophy className="text-primary mb-4" size={40} />
                                <h4 className="text-black font-black text-xl mb-2">GOLD VISION</h4>
                                <p className="text-black/70 italic text-sm font-bold">"From local grounds to National Glory, and eventually the Olympic Podium."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
