"use client";

import { motion } from "framer-motion";
import { ArrowRight, Accessibility, Target, Map, Zap } from "lucide-react";

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
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl" data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Developing Champions, <br /><span className="text-primary italic">Transforming Lives</span></h2>
                        <p className="text-gray-900 text-xl font-bold italic">
                            Our holistic approach covers everything from identifying raw talent in tribal areas to placing them in international-level arenas.
                        </p>
                    </div>
                    <button className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:translate-x-2 transition-transform whitespace-nowrap border-b-2 border-primary pb-1" data-aos="fade-left">
                        View All Programs <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                                <program.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black italic uppercase tracking-tight mb-4 text-gray-950">{program.title}</h3>
                            <p className="text-gray-900 font-bold leading-relaxed mb-6">
                                {program.description}
                            </p>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
