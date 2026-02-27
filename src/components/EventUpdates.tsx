"use client";

import { useState } from "react";
import { Calendar, ArrowRight, Award, Trophy, Users, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const EventUpdates = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-20 bg-white overflow-hidden" id="event-updates">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Latest Updates</span>
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-gray-900 leading-none">
                            News & <span className="text-primary text-2xl md:text-3xl align-top">Achievements</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        layout
                        className="relative bg-gray-950 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-800 p-10 md:p-16 text-center"
                    >
                        <motion.div layout className="relative z-10">
                            <AnimatePresence mode="wait">
                                {!isExpanded ? (
                                    <motion.div
                                        key="collapsed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="flex justify-center mb-8">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30 shadow-inner">
                                                <Trophy size={32} />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-1">Featured Highlight</span>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">March 2024</span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black italic uppercase leading-tight tracking-tighter mb-8 text-white">
                                            National Para Athletics <span className="text-primary">Achievement</span>
                                        </h3>

                                        <div className="text-lg md:text-xl text-gray-300 italic font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                                            <p>
                                                "Our athletes have secured multiple medals at the National level. From training in rural districts to the podium at National stadiums, the journey of our champions continues to inspire us all."
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setIsExpanded(true)}
                                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-primary/20 active:scale-95"
                                        >
                                            View Detailed Highlights <ArrowRight size={16} />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="expanded"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="text-left"
                                    >
                                        <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                                                    <Award size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-black italic uppercase tracking-tight text-2xl leading-none">Victory Details</h4>
                                                    <p className="text-primary text-[10px] uppercase font-black tracking-widest mt-1">Full Report • March 2024</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setIsExpanded(false)}
                                                className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                                            >
                                                <X size={24} />
                                            </button>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-6">
                                                <h5 className="text-white font-bold uppercase tracking-widest text-sm italic">The Achievement</h5>
                                                <p className="text-gray-300 italic font-medium leading-relaxed">
                                                    ASFA participated in the 17th National Para Athletics Championship held in Mumbai. Our contingent consisted of 12 athletes from rural backgrounds.
                                                </p>
                                                <div className="space-y-4">
                                                    {[
                                                        "5 Gold Medals in Track Events",
                                                        "3 Silver Medals in Field Events",
                                                        "New State Record in Javelin Throw",
                                                        "Qualified for Asian Para Games"
                                                    ].map((point, i) => (
                                                        <div key={i} className="flex items-center gap-3 text-gray-400">
                                                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                                                            <span className="text-sm italic font-medium">{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <h5 className="text-white font-bold uppercase tracking-widest text-sm italic">The Impact</h5>
                                                <p className="text-gray-400 text-sm italic leading-relaxed">
                                                    This victory has opened doors for international exposure. Two of our medalists have been selected for the National coaching camp in Bangalore. We are now focusing on the upcoming International meets to represent India globally.
                                                </p>
                                                <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
                                                    <p className="text-xs text-primary font-black uppercase tracking-widest mb-2 italic">Coach's Quote</p>
                                                    <p className="text-white italic font-medium leading-tight">
                                                        "Their success is proof that consistent training and rural grit can conquer any stadium in the world."
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => setIsExpanded(false)}
                                                    className="w-full py-4 border-2 border-primary/30 hover:border-primary text-primary font-black uppercase tracking-widest text-[10px] rounded-xl transition-all"
                                                >
                                                    Collapse Details
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mb-16" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
