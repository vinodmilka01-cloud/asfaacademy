"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Camera, Trophy, Users, Video, Play, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navCategories = [
    { id: "national", name: "National Medalists", icon: Trophy },
    { id: "deaf-national", name: "National Medalists (Deaf)", icon: Trophy },
    { id: "state", name: "State Medalists", icon: Trophy },
    { id: "district", name: "District Medalists (Orphans)", icon: Trophy },
    { id: "memories", name: "Memories", icon: Users },
    { id: "videos", name: "Videos", icon: Video },
];

interface GalleryItem {
    id: string;
    category: string;
    title: string;
    img: string;
    type?: "image" | "video";
}

export default function GalleryPage() {
    const [activeTab, setActiveTab] = useState("national");
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch('/api/admin/gallery');
                const data = await res.json();

                if (data && typeof data === 'object') {
                    const allItems: GalleryItem[] = [];
                    Object.keys(data).forEach(cat => {
                        if (Array.isArray(data[cat])) {
                            data[cat].forEach((url: string, index: number) => {
                                const isVideo = url.match(/\.(mp4|mov|webm|avi)$/i);
                                allItems.push({
                                    id: `${cat}-${index}`,
                                    category: cat,
                                    title: "",
                                    type: isVideo ? "video" : "image",
                                    img: url
                                });
                            });
                        }
                    });
                    setItems(allItems);
                }
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const filteredItems = items.filter(item => item.category === activeTab);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-gray-50 text-center overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black mb-8 text-gray-950 italic uppercase tracking-tighter"
                    >
                        Our <span className="text-primary italic">Gallery</span>
                    </motion.h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        A visual journey of our athletes&apos; achievements, dedication, and the beautiful memories we create together.
                    </p>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-12 bg-white sticky top-16 md:top-20 z-40 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {navCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === category.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                                    }`}
                            >
                                <category.icon size={16} />
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Items Grid */}
            <section className="py-24 bg-white min-h-[400px]">
                <div className="container mx-auto px-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="animate-spin text-primary mb-4" size={40} />
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Loading Gallery...</p>
                        </div>
                    ) : filteredItems.length === 0 ? (
                        <div className="text-center py-20">
                            <Camera size={48} className="mx-auto text-gray-200 mb-4" />
                            <p className="text-gray-400 text-lg">No items found in this category.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            <AnimatePresence mode="popLayout">
                                {filteredItems.map((item, index) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className={`group relative rounded-2xl overflow-hidden bg-gray-100 ${item.category === 'videos' ? 'aspect-[9/16]' : 'aspect-square'
                                            }`}
                                    >
                                        {item.category === 'videos' ? (
                                            <div className="w-full h-full relative">
                                                <video
                                                    src={item.img}
                                                    className="w-full h-full object-cover"
                                                    controls
                                                    preload="metadata"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <Image
                                                    src={item.img}
                                                    alt={item.title || "ASFA Athlete Achievement"}
                                                    fill
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                                    priority={index < 6}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                                                    <p className="text-white font-black italic uppercase tracking-tight text-sm leading-tight">
                                                        {item.title || "ASFA Achievement"}
                                                    </p>
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <span className="bg-primary/20 backdrop-blur-md text-primary text-[8px] font-black px-2 py-0.5 rounded-full border border-primary/30 uppercase tracking-widest">
                                                            {navCategories.find(c => c.id === item.category)?.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
