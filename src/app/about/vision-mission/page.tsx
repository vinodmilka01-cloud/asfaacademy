import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Eye, ShieldCheck, Heart, Sparkles, Footprints } from "lucide-react";

export default function VisionMissionPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-white text-center text-gray-900">
                <div className="container mx-auto px-6">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our North Star</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">Vision & <span className="text-primary italic">Mission</span></h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto italic font-bold">
                        Defining the future of inclusive sports in India.
                    </p>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="py-8 md:py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-black text-white p-12 rounded-[3rem] shadow-xl flex flex-col items-center text-center relative group overflow-hidden" data-aos="fade-right">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                                <Eye size={40} />
                            </div>
                            <h2 className="text-4xl font-black mb-8 italic uppercase tracking-wider text-white">Vision</h2>
                            <p className="text-2xl text-gray-300 leading-relaxed font-medium">
                                To embrace a socially inclusive society driven by human values and economic prosperity through sports entertainment platforms.
                            </p>
                        </div>

                        <div className="bg-black text-white p-12 rounded-[3rem] shadow-xl flex flex-col items-center text-center relative group overflow-hidden" data-aos="fade-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                                <Target size={40} />
                            </div>
                            <h2 className="text-4xl font-black mb-8 italic uppercase tracking-wider text-white">Mission</h2>
                            <p className="text-2xl text-gray-300 leading-relaxed font-medium">
                                To identify and nurture talent from underserved communities, provide accessible training to all including differently-abled individuals, and develop international-level athletes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-8 md:py-24 bg-white text-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">The Philosophy of <span className="text-primary italic">Success</span></h2>
                        <p className="text-gray-700 max-w-2xl mx-auto font-bold text-lg">
                            Our culture is built on the belief that giving is more powerful than taking.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                title: "Human Values",
                                desc: "Foundation of everything we do. Success with purpose and integrity.",
                                icon: Heart,
                            },
                            {
                                title: "Skill Development",
                                desc: "Focusing on abilities rather than disabilities. Realizing potential.",
                                icon: Sparkles,
                            },
                            {
                                title: "Social Impact",
                                desc: "Promoting joy, goodness, and opportunities for future generations.",
                                icon: ShieldCheck,
                            },
                            {
                                title: "Inclusivity",
                                desc: "Every athlete, from grassroots to Paralympics, deserves a stage.",
                                icon: Footprints,
                            },
                            {
                                title: "Economic Growth",
                                desc: "Creating job pathways in Railway, Police, and Private sectors.",
                                icon: Target,
                            },
                            {
                                title: "Global Excellence",
                                desc: "Aiming for Olympic-level performance and international recognition.",
                                icon: Eye,
                            }
                        ].map((value, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="text-xl font-black mb-4 italic uppercase text-gray-900">{value.title}</h3>
                                <p className="text-gray-800 leading-relaxed italic font-bold">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
