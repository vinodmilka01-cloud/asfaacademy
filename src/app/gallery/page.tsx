"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, Filter, Camera, Trophy, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    { id: "national", name: "National Medalists", icon: Trophy },
    { id: "state", name: "State Medalists", icon: Trophy },
    { id: "memories", name: "Memories", icon: Users },
];

const galleryItems = [
    { id: "m1", category: "memories", title: "Rural Coaching Camp", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80" },
    { id: "m2", category: "memories", title: "Wheelchair Training Session", img: "https://images.unsplash.com/photo-1444491741275-3747c33cc99b?auto=format&fit=crop&q=80" },

    // National Medalists
    { id: "n1", category: "national", title: "Korra Akhila", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n2", category: "national", title: "Nenavath Vijaya Lakshmi", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n3", category: "national", title: "Karamtoth Jithender", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n4", category: "national", title: "N. Ganesh", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n5", category: "national", title: "M. Sai Baba", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n6", category: "national", title: "D. Yaswanth (T20)", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n7", category: "national", title: "Prasanth", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n8", category: "national", title: "Revathi", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n9", category: "national", title: "Kalyani", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n10", category: "national", title: "Lavanya", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n11", category: "national", title: "G. Vinay", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n12", category: "national", title: "P. Subbu", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n13", category: "national", title: "Charan", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n14", category: "national", title: "N. Mahesh", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "n15", category: "national", title: "E. Nithin Nayak", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },

    // State Medalists
    { id: "sm1", category: "state", title: "Vankunavath Revanth", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm2", category: "state", title: "Mudavath Vijay", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm3", category: "state", title: "Banavath Naresh", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm4", category: "state", title: "Sabavath Rajesh", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm5", category: "state", title: "Gujjunuri Sagar", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm6", category: "state", title: "R. Harsha", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm7", category: "state", title: "N. Shiva", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm8", category: "state", title: "D. Mohan Kumar", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm9", category: "state", title: "H. Akhil", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm10", category: "state", title: "R. Manish", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm11", category: "state", title: "R. Visesh", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm12", category: "state", title: "Charan", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm13", category: "state", title: "V. Sharath", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm14", category: "state", title: "J. Harish", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm15", category: "state", title: "Bunny", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm16", category: "state", title: "H. Akash", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm17", category: "state", title: "B. Jushua", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm18", category: "state", title: "B. Thiran", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm19", category: "state", title: "K. Maheswari", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
    { id: "sm20", category: "state", title: "N. Anuradha", img: "https://placehold.co/600x600/e2e8f0/1e293b?text=Image+Pending" },
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
            <section className="py-12 bg-white sticky top-20 z-30 shadow-sm border-b border-gray-100">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <span className="text-primary font-bold uppercase text-xs tracking-widest mb-2">{item.category}</span>
                                        <h4 className="text-white font-bold text-xl italic">{item.title}</h4>
                                    </div>
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
