"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Heart } from "lucide-react";

export const FounderSpotlight = () => {
    return (
        <section className="py-8 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                    <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 group aspect-[4/5]">
                            <Image
                                src="/founder.png"
                                alt="Nenavath Vinod"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="text-3xl font-black italic uppercase tracking-tighter">Nenavath Vinod</p>
                                <p className="text-primary-foreground/80 font-bold uppercase tracking-[0.2em] text-xs">Founder & CEO, ASFA</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <div className="mb-8 flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs">
                            <span className="w-12 h-[2px] bg-primary" />
                            FOUNDER SPOTLIGHT
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight italic uppercase tracking-tighter text-gray-950">
                            A Visionary Leader with a <br /><span className="text-primary italic">Heart for the Underprivileged</span>
                        </h2>

                        <div className="relative mb-12 bg-gray-50 p-10 rounded-[2.5rem] border-l-8 border-primary italic">
                            <p className="text-2xl text-gray-800 italic leading-relaxed font-black">
                                "The organization believes that successful people should work with higher human values as a foundation. Success with purpose and integrity is what we strive for."
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Award, title: "International Level-1 Coach", desc: "Qualified Athletics Coach (2018), bringing global standards to local talent." },
                                { icon: Heart, title: "Communal Dedication", desc: "Door-to-door training for handicapped children since 2017." },
                                { icon: BookOpen, title: "Fit India Vision", desc: "Promoting health, fitness, and employment for sportspersons." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl text-gray-950 uppercase tracking-tight italic mb-1">{item.title}</h4>
                                        <p className="text-gray-500 font-bold italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14">
                            <Link
                                href="/about"
                                className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-tighter"
                            >
                                Read More About Vinod
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
