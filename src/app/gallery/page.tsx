"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Camera, Trophy, Users, Video, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
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
    videoUrl?: string;
}

const galleryItems: GalleryItem[] = [
    // National
    {
        id: "national-shirisha",
        category: "national",
        title: "M.Shirisha - F40 Gold medal in short put and javelin category, Jr National para Athletics",
        img: "/m-shirisha.png"
    },
    {
        id: "national-divya",
        category: "national",
        title: "A.Divya - F47 Bronze 🥉 medal in long jump",
        img: "/a-divya.png"
    },
    {
        id: "national-yashwanth",
        category: "national",
        title: "Dhanavath yashwanth - Intellectual Category 400 meters All India 7th Rank",
        img: "/dhanavath-yashwanth.png"
    },
    {
        id: "national-shirisha-2",
        category: "national",
        title: "M. Shirisha - National Medalist Achievement",
        img: "/m-shirisha-2.png"
    },
    {
        id: "national-group-1",
        category: "national",
        title: "National Athletics Team Achievement",
        img: "/national-group-1.png"
    },
    {
        id: "national-group-2",
        category: "national",
        title: "Grace Cancer Run - National Para Team",
        img: "/national-group-2.png"
    },
    {
        id: "national-group-3",
        category: "national",
        title: "National para athletic championship - Team Achievement",
        img: "/national-group-3.png"
    },
    {
        id: "national-individual-1",
        category: "national",
        title: "Korra Akhila - National Medalist with Family",
        img: "/national-individual-1.png"
    },
    // Deaf National
    {
        id: "deaf-national-1",
        category: "deaf-national",
        title: "Deaf National Medalist",
        img: "/deaf-national-1.png"
    },
    {
        id: "deaf-national-2",
        category: "deaf-national",
        title: "Deaf National Medalist",
        img: "/deaf-national-2.png"
    },
    {
        id: "deaf-national-3",
        category: "deaf-national",
        title: "Deaf National Medalist",
        img: "/deaf-national-3.png"
    },
    {
        id: "deaf-national-4",
        category: "deaf-national",
        title: "Deaf National Medalist",
        img: "/deaf-national-4.png"
    },
    // State
    {
        id: "state-1",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-1.png"
    },
    {
        id: "state-2",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-2.png"
    },
    {
        id: "state-3",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-3.png"
    },
    {
        id: "state-4",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-4.png"
    },
    {
        id: "state-5",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-5.png"
    },
    {
        id: "state-6",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-6.png"
    },
    {
        id: "state-7",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-7.png"
    },
    {
        id: "state-8",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-8.png"
    },
    {
        id: "state-9",
        category: "state",
        title: "State Medalist Achievement",
        img: "/state-9.png"
    },
    // District
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
    },
    {
        id: "district-3",
        category: "district",
        title: "District Medalist",
        img: "/district-3.png"
    },
    {
        id: "district-4",
        category: "district",
        title: "District Medalist",
        img: "/district-4.png"
    },
    {
        id: "district-5",
        category: "district",
        title: "District Medalist",
        img: "/district-5.png"
    },
    {
        id: "district-7",
        category: "district",
        title: "District Medalist",
        img: "/district-7.png"
    },
    {
        id: "district-8",
        category: "district",
        title: "District Medalist",
        img: "/district-8.png"
    },
    {
        id: "district-9",
        category: "district",
        title: "District Medalist",
        img: "/district-9.png"
    },
    {
        id: "district-10",
        category: "district",
        title: "District Medalist",
        img: "/district-10.png"
    },
    {
        id: "district-11",
        category: "district",
        title: "District Medalist",
        img: "/district-11.png"
    },
    {
        id: "district-12",
        category: "district",
        title: "District Medalist",
        img: "/district-12.png"
    },
    {
        id: "district-13",
        category: "district",
        title: "District Medalist",
        img: "/district-13.png"
    },
    {
        id: "district-14",
        category: "district",
        title: "District Medalist",
        img: "/district-14.png"
    },
    {
        id: "district-15",
        category: "district",
        title: "District Medalist",
        img: "/district-15.png"
    },
    {
        id: "district-16",
        category: "district",
        title: "District Medalist",
        img: "/district-16.png"
    },
    {
        id: "district-17",
        category: "district",
        title: "District Medalist",
        img: "/district-17.png"
    },
    {
        id: "district-18",
        category: "district",
        title: "District Medalist",
        img: "/district-18.png"
    },
    {
        id: "district-19",
        category: "district",
        title: "District Medalist",
        img: "/district-19.png"
    },
    // Memories
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
    // Videos
    {
        id: "video-achievement",
        category: "videos",
        title: "National Achievement Highlights",
        img: "/national-group-3.png",
        type: "video",
        videoUrl: "/asfa-achievement-video.mp4"
    },
];

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-gray-950 w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                style={{ aspectRatio: videoUrl.includes('youtube') ? '16/9' : undefined }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                >
                    <X size={22} />
                </button>

                {videoUrl.startsWith('http') ? (
                    <iframe
                        src={videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ minHeight: '400px' }}
                    />
                ) : (
                    <video
                        src={videoUrl}
                        className="w-full max-h-[80vh]"
                        controls
                        autoPlay
                        playsInline
                    />
                )}

                <div className="p-6 bg-gray-950">
                    <h3 className="text-white font-black italic uppercase tracking-tighter text-xl">{title}</h3>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("national");
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

    const filteredItems = galleryItems.filter(item => item.category === activeCategory);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-gray-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic">Visualizing <span className="text-primary italic">Success</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed italic">
                        Capturing the moments of grit, glory, and transformation at ASFA.
                    </p>
                </div>
            </section>

            {/* Filter System */}
            <section className="py-8 md:py-12 bg-white border-b border-gray-100">
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
            <section className="py-8 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
                                    onClick={() => {
                                        // no-op, video handles its own play
                                    }}
                                    className={`group relative rounded-[2.5rem] overflow-hidden shadow-lg bg-slate-50 border border-gray-100 p-2 ${item.type === "video" ? "aspect-[9/16] max-w-[300px] mx-auto" : "aspect-[3/4]"}`}
                                >
                                    {item.type === "video" && item.videoUrl ? (
                                        <div className="relative h-full w-full bg-gray-900 rounded-[2rem] overflow-hidden">
                                            <video
                                                src={item.videoUrl}
                                                className="w-full h-full object-cover"
                                                controls
                                                playsInline
                                                poster={item.img}
                                            />
                                            <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10 pointer-events-none">
                                                Reel
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                                <p className="text-white text-sm font-bold uppercase tracking-tight leading-tight">{item.title}</p>
                                            </div>
                                        </div>
                                    ) : item.type !== "video" ? (
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : null}
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

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <VideoModal
                        isOpen={!!selectedVideo}
                        onClose={() => setSelectedVideo(null)}
                        videoUrl={selectedVideo.url}
                        title={selectedVideo.title}
                    />
                )}
            </AnimatePresence>

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
