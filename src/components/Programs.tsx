"use client";

import { motion } from "framer-motion";
import { ArrowRight, Accessibility, Target, Map, Zap } from "lucide-react";
import Link from "next/link";

const programs = [
    {
        title: "Grassroots Identification",
        description: "Nurturing talent from tribal, rural, and underserved communities across India.",
        icon: Map,
        color: "bg-red-500",
    },
    {
        title: "Elite Training",
        description: "Developing international-level athletes for Olympics and State competitions.",
        icon: Target,
        color: "bg-black",
    },
    {
        title: "Inclusive Para-Sports",
        description: "Specialized training for blind, physically challenged, intellectual, and wheelchair athletes.",
        icon: Accessibility,
        color: "bg-primary",
    },
    {
        title: "Career Pathways",
        description: "Creating employment opportunities in Police, Railways, and beyond through sports.",
        icon: Zap,
        color: "bg-red-700",
    },
];

export const Programs = () => {
    return (
        <section className="py-12 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-3xl" data-aos="fade-right">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Holistic Development</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter text-gray-950">Developing Champions, <br /><span className="text-primary italic">Transforming Lives</span></h2>
                        <p className="text-gray-950 text-xl font-bold italic opacity-70">
                            Our holistic approach covers everything from identifying raw talent in tribal areas to placing them in international-level arenas.
                        </p>
                    </div>
                    <Link href="/sports" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:translate-x-2 transition-transform whitespace-nowrap border-b-2 border-primary pb-2" data-aos="fade-left">
                        VIEW ALL PROGRAMS <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200/50 hover:shadow-primary/5 transition-all relative overflow-hidden group border border-gray-100 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />

                            <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform shadow-xl`}>
                                <program.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black italic uppercase tracking-tight mb-4 text-gray-950 leading-tight">{program.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow italic">
                                {program.description}
                            </p>
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-3">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
