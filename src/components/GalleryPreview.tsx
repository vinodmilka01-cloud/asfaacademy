"use client";

import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { motion } from "framer-motion";

const previewImages = [
    { id: "m1", title: "A. Divya - National Medalist", img: "/a-divya.png" },
    { id: "m2", title: "Dhanavath Yashwanth - Athletics", img: "/dhanavath-yashwanth.png" },
    { id: "n1", title: "M. Sirisha - National Medalist", img: "/m-shirisha.png" },
];

export const GalleryPreview = () => {
    return (
        <section className="py-12 md:py-24 bg-white" id="gallery-preview">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 italic lowercase tracking-tighter">
                            Visualizing <span className="text-primary italic">Success</span>
                        </h2>
                        <p className="text-xl text-gray-500 mt-6 italic font-medium">
                            Capturing the moments of grit, glory, and transformation at ASFA.
                        </p>
                    </div>
                    <Link href="/gallery" className="group flex items-center gap-3 text-gray-900 font-black tracking-widest text-xs hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">
                        VIEW FULL GALLERY <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {previewImages.map((item, i) => (
                        <div
                            key={item.id}
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                            className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer bg-slate-50 border border-gray-100"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-10">
                                <h4 className="text-white font-black text-xl italic uppercase tracking-tight">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
