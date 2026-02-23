"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Heart } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative w-full bg-gray-900 pt-28 pb-20 md:pt-40 md:pb-32 lg:min-h-screen lg:flex lg:items-center lg:justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20" />
                {/* Placeholder for hero image - would be generated or provided */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80')] bg-cover bg-center animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-6 relative z-30 text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Empowering Every <span className="text-primary italic">Athlete</span> — From Grassroots to <span className="underline decoration-primary">Olympics</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-100 mb-6 max-w-2xl leading-relaxed font-semibold">
                            Identifying and nurturing talent from underserved communities across India. Sports is a fundamental right for all.
                        </p>
                        <p className="text-base md:text-xl text-primary mb-10 max-w-3xl leading-relaxed font-bold italic bg-black/40 inline-block px-4 py-2 md:px-6 md:py-3 rounded-xl border border-primary/30">
                            We proudly train athletes who are blind, physically challenged, intellectually challenged, and who use wheelchairs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            href="/gallery"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all group"
                        >
                            Our Champions
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            Learn Our Mission
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
