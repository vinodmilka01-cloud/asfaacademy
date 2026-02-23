"use client";

import Link from "next/link";
import { Accessibility, Home, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export const ParalympicsPreview = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="inclusive-sports">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Inclusive Sports</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase tracking-tighter text-gray-900">
                            True <span className="text-primary">Abilities</span>
                        </h2>
                        <h3 className="text-2xl font-black mb-6 italic uppercase text-gray-800">The Door-To-Door Revolution</h3>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed italic font-medium">
                            "We provide special training to Divyang wheelchair children by visiting their homes and training them personally. We believe that accessibility should never be a barrier to sporting dreams."
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Home size={24} />
                                </div>
                                <span className="font-bold text-gray-800">Home-Based Personalized Training</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Accessibility size={24} />
                                </div>
                                <span className="font-bold text-gray-800">Specialized Adaptive Equipment</span>
                            </div>
                        </div>

                        <Link href="/sports" className="inline-flex items-center gap-2 border-2 border-gray-950 text-gray-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-950 hover:text-white transition-all group">
                            View Inclusive Programs <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="relative">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                                <img
                                    src="https://images.unsplash.com/photo-1444491741275-3747c33cc99b?auto=format&fit=crop&q=80"
                                    alt="Para athlete training"
                                    className="w-full aspect-square object-cover"
                                />
                            </div>
                            {/* Absolute badge */}
                            <div className="absolute top-8 right-8 bg-primary text-white p-6 rounded-3xl shadow-xl rotate-12 flex flex-col items-center justify-center text-center">
                                <ShieldCheck size={32} className="mb-2" />
                                <span className="font-black text-xs uppercase tracking-widest leading-none">Registered<br />Charity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
