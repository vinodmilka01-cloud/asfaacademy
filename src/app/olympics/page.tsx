import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Trophy, Target, ArrowRight } from "lucide-react";

const athletes = {
    olympic: [
        { name: "National Qualifier 1", achievement: "National Level-1 Athletics Coach", details: "Preparing for international stages." },
        { name: "Upcoming Talent", achievement: "State Gold Medalist", details: "Targeting 2028 Olympic qualifiers." },
    ]
};

export default function OlympicsPage() {
    return (
        <main className="min-h-screen font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-white relative overflow-hidden text-gray-950">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-2/3" data-aos="fade-right">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Highest Stage</span>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter text-gray-950">Road to <span className="text-primary">Olympics</span></h1>
                            <p className="text-xl text-gray-950 leading-relaxed max-w-2xl italic font-bold">
                                Our ultimate mission is to produce Olympic-level athletes from the most underserved corners of India.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center" data-aos="fade-left">
                            <div className="w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center relative shadow-sm">
                                <Trophy size={80} className="text-primary opacity-20" />
                                <div className="absolute inset-0 animate-spin-slow">
                                    <div className="w-4 h-4 rounded-full bg-primary absolute top-0 left-1/2 -translate-x-1/2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elite Section */}
            <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16 flex items-center justify-between">
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Top <span className="text-primary italic">Prospects</span></h2>
                        <div className="hidden md:flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"><Star size={20} className="text-primary" /></div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"><Star size={20} className="text-primary" /></div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"><Star size={20} className="text-primary" /></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {athletes.olympic.map((athlete, i) => (
                            <div key={i} className="group bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all shadow-2xl" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                                        <Target size={40} />
                                    </div>
                                    <span className="bg-primary px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Elite Rank</span>
                                </div>
                                <h3 className="text-3xl font-black mb-2 italic uppercase tracking-wide">{athlete.name}</h3>
                                <p className="text-primary font-black mb-4 italic tracking-widest">{athlete.achievement}</p>
                                <p className="text-gray-300 leading-relaxed mb-8 font-medium">{athlete.details}</p>
                                <button className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                                    Athlete Bio <ArrowRight size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
