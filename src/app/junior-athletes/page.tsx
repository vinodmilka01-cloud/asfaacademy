import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star } from "lucide-react";

const athletes = {
    junior: [
        { name: "P. Subbu", achievement: "National U-14 Qualifier", details: "Orphanage support beneficiary, showcasing elite talent." },
        { name: "Junior Champion", achievement: "Inter-District Champ", details: "Consistent performer in state youth games." },
    ]
};

export default function JuniorAthletesPage() {
    return (
        <main className="min-h-screen font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-white relative overflow-hidden text-gray-950">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-2/3" data-aos="fade-right">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Rising Stars</span>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter text-gray-950">Junior <span className="text-primary">Athletes</span></h1>
                            <p className="text-xl text-gray-950 leading-relaxed max-w-2xl italic font-bold">
                                Nurturing the next generation of international champions from the grassroots. We proudly support and train junior athletes aiming for the highest stages.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center" data-aos="fade-left">
                            <div className="w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center relative shadow-sm bg-gray-50">
                                <Star size={80} className="text-primary opacity-20" />
                                <div className="absolute inset-0 animate-spin-slow">
                                    <div className="w-4 h-4 rounded-full bg-primary absolute top-0 left-1/2 -translate-x-1/2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Junior Section */}
            <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Promising <span className="text-primary italic">Talents</span></h2>
                        <p className="text-gray-300 mt-4 text-lg font-medium max-w-2xl">
                            Our academy is home to numerous budding athletes who display remarkable talent and promise in various sporting disciplines.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {athletes.junior.map((athlete, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:shadow-2xl hover:bg-white/10 transition-all shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-32 h-32 rounded-full bg-primary/20 shadow-xl flex items-center justify-center text-primary overflow-hidden shrink-0 border border-primary/30">
                                    <Star size={40} fill="currentColor" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-1 italic uppercase text-white">{athlete.name}</h3>
                                    <p className="text-primary font-black mb-3 italic tracking-widest">{athlete.achievement}</p>
                                    <p className="text-gray-300 leading-relaxed font-medium">{athlete.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
