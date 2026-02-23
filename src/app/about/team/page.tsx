import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, ShieldCheck, Mail } from "lucide-react";

const team = [
    {
        name: "Korra Akhila",
        role: "Static Sick Officer",
        image: "/korra-akhila.png"
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-gray-50 text-center">
                <div className="container mx-auto px-6">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Team</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-950 italic uppercase tracking-tighter">Board of <span className="text-primary italic">Directors</span></h1>
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
                                className="group relative bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-300 overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-48 h-48 rounded-3xl overflow-hidden mb-6 group-hover:scale-105 transition-transform shadow-lg border-4 border-white bg-white">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary">
                                                <User size={60} />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 text-center mb-1 italic uppercase tracking-tighter">{member.name}</h3>
                                    <p className="text-primary font-bold uppercase text-xs tracking-widest mb-6 opacity-80">{member.role}</p>

                                    <div className="w-full pt-6 border-t border-gray-100 flex justify-center gap-4">
                                        <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1">
                                            <ShieldCheck size={14} className="text-primary" /> Board Member
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {team.length === 0 && (
                        <div className="py-20 text-center text-gray-900 italic">
                            <User size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="text-xl font-black text-gray-950 uppercase tracking-tighter">Board details will be updated here shortly.</p>
                            <p className="mt-2 font-bold opacity-80 uppercase tracking-widest text-xs">We are currently updating our visionary leadership team.</p>
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </main>
    );
}
