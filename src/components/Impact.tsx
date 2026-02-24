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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200/50 hover:shadow-primary/5 transition-all border border-gray-100 text-center group relative overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />

                            <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-8 bg-gray-50 group-hover:bg-primary/10 transition-colors shadow-inner`}>
                                <stat.icon className={`w-10 h-10 ${stat.color} group-hover:text-primary transition-colors`} />
                            </div>
                            <div className="text-6xl font-black text-gray-900 mb-4 italic tracking-tighter">{stat.value}</div>
                            <div className="text-gray-400 font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 md:p-20 rounded-[4rem] bg-gray-950 text-white relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Philosophy</span>
                            <h3 className="text-4xl md:text-5xl font-black mb-10 italic leading-tight uppercase tracking-tighter text-white">Sports for <span className="text-primary italic">Social Change</span></h3>
                            <p className="text-gray-300 text-xl leading-relaxed mb-12 italic font-medium">
                                Over 80+ sportsmen from our academy have secured jobs in sectors like Indian Railways and the Police. We don't just train athletes; we build careers and secure futures.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["Railway Recruitment", "Police Department", "Private Sector"].map((tag) => (
                                    <span key={tag} className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black border border-white/10 text-white uppercase tracking-widest shadow-xl">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary/10 p-12 rounded-[3rem] border border-primary/20 backdrop-blur-sm relative transition-all hover:border-primary/40 group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary rounded-full opacity-50" />
                            <p className="text-2xl text-white leading-relaxed font-black italic">
                                "We provide special focus on Divyang children, visiting their homes to provide training that builds self-worth and independence."
                            </p>
                            <footer className="mt-8 font-black text-primary uppercase tracking-[0.2em] text-sm">
                                — ASFA ACADEMY FOUNDATION
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
