"use client";

import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { motion } from "framer-motion";

const previewImages = [
    { id: "m1", title: "Rural Coaching Camp", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80" },
    { id: "m2", title: "Wheelchair Training Session", img: "https://images.unsplash.com/photo-1444491741275-3747c33cc99b?auto=format&fit=crop&q=80" },
    { id: "n1", title: "M. Sirisha - National Medalist", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80" },
];

export const GalleryPreview = () => {
    return (
        <section className="py-24 bg-white" id="gallery-preview">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
                            Visualizing <span className="text-primary italic">Success</span>
                        </h2>
                        <p className="text-xl text-gray-500 mt-6 italic">
                            Capturing the moments of grit, glory, and transformation at ASFA.
                        </p>
                    </div>
                    <Link href="/gallery" className="group flex items-center gap-3 text-gray-900 font-bold hover:text-primary transition-all">
                        VIEW FULL GALLERY <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {previewImages.map((item, i) => (
                        <div
                            key={item.id}
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                            className="group relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                                <h4 className="text-white font-bold text-xl italic">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
