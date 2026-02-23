"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Users, Star } from "lucide-react";

const stats = [
    { label: "Medalists", value: "70+", icon: Trophy, color: "text-yellow-500" },
    { label: "Jobs Secured", value: "80+", icon: Briefcase, color: "text-blue-500" },
    { label: "National Athletes", value: "20+", icon: Star, color: "text-red-500" },
    { label: "Lives Impacted", value: "500+", icon: Users, color: "text-green-500" },
];

export const Impact = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Our Impact <span className="text-primary italic">in Numbers</span></h2>
                    <p className="text-gray-900 text-lg font-bold">
                        We measure our success not just by medals, but by the transformations in the lives of our athletes and their communities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 bg-gray-50 group-hover:bg-primary/10 transition-colors`}>
                                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:text-primary transition-colors`} />
                            </div>
                            <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-gray-950 font-black uppercase tracking-wider text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-secondary relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 italic text-primary">"Sports for Social Change"</h3>
                            <p className="text-black text-xl leading-relaxed mb-8 font-bold italic">
                                Over 80+ sportsmen from our academy have secured jobs in sectors like Indian Railways and the Police. We don't just train athletes; we build careers.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-6 py-3 bg-white rounded-full text-xs font-black shadow-lg border border-gray-200 text-gray-950 uppercase tracking-widest">Railway Recruitment</span>
                                <span className="px-6 py-3 bg-white rounded-full text-xs font-black shadow-lg border border-gray-200 text-gray-950 uppercase tracking-widest">Police Department</span>
                                <span className="px-6 py-3 bg-white rounded-full text-xs font-black shadow-lg border border-gray-200 text-gray-950 uppercase tracking-widest">Private Sector</span>
                            </div>
                        </div>
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 italic">
                            <p className="text-xl text-black leading-relaxed font-black">
                                "We provide special focus on Divyang (differently-abled) children, visiting their homes to provide training that builds self-worth and independence."
                            </p>
                            <footer className="mt-4 font-bold text-primary">— Academy Philosophy</footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
