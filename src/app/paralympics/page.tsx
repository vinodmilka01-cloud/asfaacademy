import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Accessibility, ShieldCheck, Home, ArrowRight } from "lucide-react";

const paraAthletes = [
    { name: "M. Sirisha", category: "Shot Put / Javelin", achievement: "Deaf & Dumb National Medalist" },
    { name: "A. Divya", category: "Shot Put / Javelin", achievement: "Deaf & Dumb National Medalist" },
    { name: "Chetan", category: "Javelin", achievement: "Wheelchair National Medalist" },
    { name: "Archana", category: "Shot Put", achievement: "Wheelchair State Medalist" },
    { name: "K. Ravi", category: "Discus Throw", achievement: "Para State Champion" },
];

export default function ParalympicsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1444491741275-3747c33cc99b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="container mx-auto px-6 relative z-10">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Inclusive Sports</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">True <span className="text-primary italic">Abilities</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
                        Focusing on abilities, not disabilities. Our specialized para-sports program is the heart of ASFA.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white text-gray-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-950">The Door-To-Door <span className="text-primary italic">Revolution</span></h2>
                        <p className="text-xl text-gray-950 leading-relaxed mb-10 italic font-bold">
                            "We provide special training to Divyang wheelchair children by visiting their homes and training them personally. We believe that accessibility should never be a barrier to sporting dreams."
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 italic font-black text-gray-950 uppercase tracking-widest text-sm shadow-sm">
                                <Home className="text-primary" size={20} /> Door-To-Door Training
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 italic font-black text-gray-950 uppercase tracking-widest text-sm shadow-sm">
                                <Accessibility className="text-primary" size={20} /> Home-Based Support
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {paraAthletes.map((athlete, i) => (
                            <div key={i} className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest uppercase py-1 px-3 bg-primary text-white rounded-full shadow-lg">National Medalist</span>
                                </div>
                                <h3 className="text-2xl font-black mb-1 italic uppercase tracking-wide text-gray-950">{athlete.name}</h3>
                                <p className="text-primary font-black mb-2 italic tracking-widest">{athlete.category}</p>
                                <p className="text-gray-950 italic mb-8 font-bold">{athlete.achievement}</p>
                                <button className="flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest group-hover:text-primary transition-colors border-b border-black group-hover:border-primary pb-1">
                                    Learn Her Story <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase italic">Support an <br /> <span className="text-primary italic">Adaptive Champion</span></h2>
                            <p className="text-lg text-gray-400 mb-10 leading-relaxed italic">
                                Providing specialized equipment and personal travel for para-athletes is costly. Your donation directly funds the door-to-door visits that make these dreams possible.
                            </p>
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-primary-dark transition-all shadow-xl flex items-center gap-2">
                                <Heart size={20} fill="currentColor" /> Sponsor Training
                            </button>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1533560271118-23fc71d1a501?auto=format&fit=crop&q=80"
                                    className="w-full aspect-[16/10] object-cover"
                                    alt="Para-athlete training"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
