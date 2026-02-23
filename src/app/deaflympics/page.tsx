import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Flame, Globe } from "lucide-react";

const paraNationalMedalists = [
    { name: "M. Shirisha", events: "ShotPut / Javelin Throw", achievement: "[Medalist]" },
    { name: "A. Divya", events: "Long Jump / 200m", achievement: "[Medalist]" }
];

const deafNationalMedalists = [
    { name: "M. Shiva", events: "Under-14 Shotput", achievement: "All India Sports Council of the Deaf National Bronze Medal" },
    { name: "B. Deekshitha", events: "Under-14 Shotput & High Jump", achievement: "Silver Medals" },
    { name: "Chinnari", events: "Under-16 High Jump", achievement: "Bronze Medal" },
    { name: "Archana", events: "Under-18 High Jump", achievement: "Bronze Medal" },
];

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

            {/* Medalists Section */}
            <section className="py-24 bg-white text-gray-950">
                <div className="container mx-auto px-6">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Our <span className="text-primary italic">Champions</span></h2>
                        <p className="text-gray-600 mt-4 text-lg font-bold">Celebrating the incredible achievements of our para and deaf athletes on the national stage.</p>
                    </div>

                    {/* Para National Medalists */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-black mb-10 italic uppercase border-l-4 border-primary pl-4">Para National <span className="text-primary transition-colors">Medalists</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {paraNationalMedalists.map((athlete, i) => (
                                <div key={i} className="flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto bg-gray-200 relative overflow-hidden group">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200 group-hover:bg-gray-300 transition-colors">
                                            <span className="font-bold text-sm tracking-widest uppercase">Image Placeholder</span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <h4 className="text-3xl font-black text-primary mb-2 italic uppercase">{athlete.name}</h4>
                                        <p className="text-gray-950 font-black tracking-widest uppercase mb-4 text-sm">{athlete.events}</p>
                                        <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg inline-block text-sm">
                                            {athlete.achievement}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deaf and Dumb National Medalists */}
                    <div>
                        <h3 className="text-3xl font-black mb-10 italic uppercase border-l-4 border-primary pl-4">Deaf and Dumb National <span className="text-primary">Medalists</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {deafNationalMedalists.map((athlete, i) => (
                                <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center p-8 text-gray-950" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-300 border-4 border-white shadow-lg mb-6 relative group">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs text-center p-2 font-bold tracking-widest uppercase bg-gray-200 group-hover:bg-gray-300 transition-colors">
                                            Image Placeholder
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-black text-primary mb-2 uppercase italic">{athlete.name}</h4>
                                    <p className="text-gray-950 font-bold uppercase text-xs tracking-widest mb-3 opacity-90">{athlete.events}</p>
                                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{athlete.achievement}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
