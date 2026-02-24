"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Heart } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative w-full bg-gray-900 pt-28 pb-20 md:pt-40 md:pb-32 lg:min-h-screen lg:flex lg:items-center lg:justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
                {/* Placeholder for hero image - would be generated or provided */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>

            <div className="container mx-auto px-6 relative z-30 text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] italic lowercase tracking-tighter">
                            Empowering Every <span className="text-primary italic">Athlete</span> <br className="hidden md:block" /> From Grassroots to <span className="underline decoration-primary decoration-8 underline-offset-8">Olympics</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed italic font-medium">
                            Identifying and nurturing talent from underserved communities across India. Sports is a fundamental right for all.
                        </p>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-12">
                            <Heart className="text-primary animate-pulse" size={20} />
                            <p className="text-sm md:text-base text-white leading-relaxed font-black uppercase tracking-[0.2em]">
                                Inclusive Training for all abilities
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
                    >
                        <Link
                            href="/gallery"
                            className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 transition-all group shadow-2xl shadow-primary/40 active:scale-95"
                        >
                            OUR CHAMPIONS
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-full font-black text-xl transition-all active:scale-95"
                        >
                            LEARN OUR MISSION
                        </Link>
                    </motion.div>
                </div>

                {/* Stats overlay for desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">70+</div>
                            <div className="text-sm text-gray-400">Total Medalists</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">80+</div>
                            <div className="text-sm text-gray-400">Secured Jobs</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                            <Heart size={24} />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">30+</div>
                            <div className="text-sm text-gray-400">Orphaned Supported</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                            <Trophy size={24} className="rotate-12" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">20+</div>
                            <div className="text-sm text-gray-400">National Athletes</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};
