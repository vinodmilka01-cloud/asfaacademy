"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, Filter, Camera, Trophy, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    { id: "national", name: "National Medalists", icon: Trophy },
    { id: "state", name: "State Medalists", icon: Trophy },
    { id: "district", name: "District Medalists (Orphans)", icon: Trophy },
    { id: "memories", name: "Memories", icon: Users },
];

interface GalleryItem {
    id: string;
    category: string;
    title: string;
    img: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: "memory-1",
        category: "memories",
        title: "ASFA Training Session",
        img: "/memories-1.png"
    },
    {
        id: "memory-2",
        category: "memories",
        title: "Team Excellence",
        img: "/memories-2.png"
    },
    {
        id: "memory-3",
        category: "memories",
        title: "Achievers Hub",
        img: "/memories-3.png"
    },
    {
        id: "memory-4",
        category: "memories",
        title: "Victory Parade",
        img: "/memories-4.png"
    },
    {
        id: "memory-5",
        category: "memories",
        title: "Championship Moments",
        img: "/memories-5.png"
    },
    {
        id: "memory-6",
        category: "memories",
        title: "Growth & Discipline",
        img: "/memories-6.png"
    },
    {
        id: "memory-7",
        category: "memories",
        title: "Community of Champions",
        img: "/memories-7.png"
    },
    {
        id: "memory-8",
        category: "memories",
        title: "Sportsman Spirit",
        img: "/memories-8.png"
    },
    {
        id: "memory-9",
        category: "memories",
        title: "Elite Training",
        img: "/memories-9.png"
    },
    {
        id: "memory-10",
        category: "memories",
        title: "Athletic Excellence",
        img: "/memories-10.png"
    },
    {
        id: "memory-11",
        category: "memories",
        title: "Team spirit",
        img: "/memories-11.png"
    },
    {
        id: "memory-12",
        category: "memories",
        title: "Victory Dance",
        img: "/memories-12.png"
    },
    {
        id: "district-1",
        category: "district",
        title: "District Medalist",
        img: "/district-1.png"
    },
    {
        id: "district-2",
        category: "district",
        title: "District Medalist",
        img: "/district-2.png"
    }
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("national");

    const filteredItems = galleryItems.filter(item => item.category === activeCategory);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-gray-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic">Visualizing <span className="text-primary italic">Success</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed italic">
                        Capturing the moments of grit, glory, and transformation at ASFA.
                    </p>
                </div>
            </section>

            {/* Filter System */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeCategory === cat.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                <cat.icon size={18} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg aspect-square"
                                >
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="py-20 text-center text-gray-400 italic">
                            <Camera size={48} className="mx-auto mb-4 opacity-20" />
                            <p>Images will be uploaded soon for this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Admin Promo */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">Are you an ASFA Admin?</h3>
                    <p className="text-gray-900 mb-8 font-bold italic text-lg">Manage the gallery and upload new achievements from the dashboard.</p>
                    <button className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gray-800 transition-all shadow-xl">
                        Access Admin Panel
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
