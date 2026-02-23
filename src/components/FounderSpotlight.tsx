import Image from "next/image";
import { Award, BookOpen, Heart } from "lucide-react";

export const FounderSpotlight = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Using a placeholder for the founder's photo */}
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                                alt="Nenavath Vinod"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-2xl font-bold">Nenavath Vinod</p>
                                <p className="opacity-90">Founder & President, ASFA</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full" />
                    </div>

                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <div className="mb-6 flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                            <span className="w-8 h-[2px] bg-primary" />
                            Founder Spotlight
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic uppercase tracking-tighter text-gray-950">
                            A Visionary Leader with a <br /><span className="text-primary italic">Heart for the Underprivileged</span>
                        </h2>

                        <div className="relative mb-10">
                            <p className="text-xl text-black italic leading-relaxed relative z-10 pl-6 font-bold">
                                "The organization believes that successful people should work with higher human values as a foundation. Success with purpose and integrity is what we strive for."
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg text-gray-950 uppercase tracking-tight">International Level-1 Coach</h4>
                                    <p className="text-gray-900 font-bold">Qualified Athletics Coach in 2018, bringing global standards to local talent.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg text-gray-950 uppercase tracking-tight">Communal Dedication</h4>
                                    <p className="text-gray-900 font-bold">Conducts door-to-door training for handicapped children weekly since 2017.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <BookOpen size={20} />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg text-gray-950 uppercase tracking-tight">Fit India Vision</h4>
                                    <p className="text-gray-900 font-bold">Promoting health, fitness, and employment opportunities for sportspersons across Telangana.</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-12 bg-gray-900 border border-gray-100 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                            Read More About Vinod
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
