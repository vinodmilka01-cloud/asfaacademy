"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Trophy, Accessibility, Target, Map, Zap, Heart, Camera, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const sportCategories = [
    {
        title: "Olympics",
        description: "Identifying and nurturing elite talent for the world's biggest sporting stage. We bridge the gap from local grounds to the Olympic podium.",
        icon: Trophy,
        image: "/olympics.png",
        color: "text-blue-600",
        bg: "bg-blue-50",
        features: ["Elite Coaching", "International Standards", "Systematic Preparation"]
    },
    {
        title: "Paralympics",
        description: "Empowering differently-abled athletes through specialized training and adaptive equipment. Our door-to-door model brings sports to every home.",
        icon: Accessibility,
        image: "/paralympics.png",
        color: "text-primary",
        bg: "bg-primary/5",
        features: ["Home-Based Training", "Inclusive Facilities", "Para-Athletics Focus"]
    },
    {
        title: "Deaflympics",
        description: "Creating opportunities for hearing-impaired athletes to excel in national and international competitions like the Deaflympics.",
        icon: Zap,
        image: "/deaflympics.png",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        features: ["Visual Coaching", "Inclusive Environment", "National Representation"]
    }
];

export default function SportsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gray-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-30" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter">
                            Our <span className="text-primary">Sporting</span> DNA
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            From the Olympics to the most remote tribal villages, we believe in the power of sports to transform lives and communities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {sportCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col h-full rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl transition-all overflow-hidden"
                            >
                                <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center p-6">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                        <div className={`w-12 h-12 rounded-xl ${category.bg} ${category.color} flex items-center justify-center shadow-lg`}>
                                            <category.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-black italic uppercase tracking-wide text-black">{category.title}</h3>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                                        {category.description}
                                    </p>
                                    <div className="space-y-4 mt-auto">
                                        {category.features.map(feature => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <ShieldCheck className="text-primary" size={18} />
                                                <span className="font-bold text-gray-800 uppercase tracking-widest text-[10px]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The ASFA Core</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic uppercase tracking-tighter text-gray-900">
                                The Door-To-Door <br /><span className="text-primary">Revolution</span>
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium italic">
                                "Accessibility should never be a barrier to sporting dreams. We identify differently-abled children in remote areas and visit their homes to provide personalized training that builds self-worth and independence."
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <p className="font-black text-gray-900 uppercase text-xs tracking-tighter">Impact Driven</p>
                                        <p className="text-xl font-black text-primary">500+ Lives</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Trophy size={24} />
                                    </div>
                                    <div>
                                        <p className="font-black text-gray-900 uppercase text-xs tracking-tighter">Medals Won</p>
                                        <p className="text-xl font-black text-primary">70+ National</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80"
                                    alt="Inclusive sports excellence"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 italic uppercase tracking-tighter text-gray-950">
                        Join the <span className="text-primary italic">Movement</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/gallery" className="bg-gray-950 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all shadow-xl flex items-center justify-center gap-2 group">
                            Explore Gallery <Camera className="group-hover:rotate-12 transition-transform" />
                        </Link>
                        <Link href="/contact" className="border-2 border-gray-950 text-gray-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-950 hover:text-white transition-all flex items-center justify-center gap-2 group">
                            Support an Athlete <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
