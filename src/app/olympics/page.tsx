import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Trophy, Target, ArrowRight } from "lucide-react";

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

            <Footer />
        </main>
    );
}
