import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Flame, Globe } from "lucide-react";

export default function DeaflympicsPage() {
    return (
        <main className="min-h-screen font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-white relative overflow-hidden text-gray-950">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-2/3" data-aos="fade-right">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Silent Strength & Glory</span>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter text-gray-950">Deaf<span className="text-primary">lympics</span></h1>
                            <p className="text-xl text-gray-950 leading-relaxed max-w-2xl italic font-bold">
                                An international multi-sport event, officially sanctioned by the International Olympic Committee (IOC), specifically for deaf athletes. Organized by the International Committee of Sports for the Deaf (ICSD).
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center" data-aos="fade-left">
                            <div className="w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center relative shadow-sm">
                                <Award size={80} className="text-primary opacity-20" />
                                <div className="absolute inset-0 animate-spin-slow">
                                    <div className="w-4 h-4 rounded-full bg-primary absolute top-0 left-1/2 -translate-x-1/2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Section */}
            <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">Empowering <span className="text-primary">Deaf Athletes</span></h2>
                        <p className="text-gray-300 max-w-3xl text-lg leading-relaxed font-medium">
                            The Deaflympics stands as a testament to the fact that hearing loss is no barrier to athletic greatness. Athletes compete at elite levels without acoustic signals, relying entirely on visual cues and their exceptional athletic prowess. We are committed to unearthing and supporting these extraordinary talents to bring glory on the global stage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all shadow-2xl" data-aos="fade-up">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 italic uppercase">IOC Sanctioned</h3>
                            <p className="text-gray-300 leading-relaxed font-medium">Globally recognized and sanctioned by the International Olympic Committee as a premier elite sporting event.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 italic uppercase">Organized by ICSD</h3>
                            <p className="text-gray-300 leading-relaxed font-medium">Under the leadership of the International Committee of Sports for the Deaf to ensure fair and competitive sports.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                                <Flame size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 italic uppercase">Visual Sporting</h3>
                            <p className="text-gray-300 leading-relaxed font-medium">Sports adapted with visual cues ensuring completely equal footing for all participating international competitors.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
