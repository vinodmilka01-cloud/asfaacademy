import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, ShieldCheck, Mail } from "lucide-react";

const team: { name: string; role: string }[] = [];

export default function TeamPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-gray-50 text-center">
                <div className="container mx-auto px-6">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Team</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Board of <span className="text-primary italic">Directors</span></h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Leading the transformation of Indian sports with integrity and purpose.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                className="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <User size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-1 italic uppercase tracking-wide">{member.name}</h3>
                                    <p className="text-primary font-bold uppercase text-xs tracking-widest mb-6 opacity-80">{member.role}</p>

                                    <div className="w-full pt-6 border-t border-gray-200 flex justify-center gap-4">
                                        <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                                            <ShieldCheck size={14} className="text-green-500" /> Executive Board
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {team.length === 0 && (
                        <div className="py-20 text-center text-gray-400 italic">
                            <User size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="text-xl font-bold text-gray-950 uppercase tracking-tighter">Board details will be updated here shortly.</p>
                            <p className="mt-2">We are currently updating our visionary leadership team.</p>
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </main>
    );
}
