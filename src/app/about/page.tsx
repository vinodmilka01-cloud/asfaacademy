import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VisionMission } from "@/components/VisionMission";
import Link from "next/link";
import { ArrowRight, History, Heart, Users, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter text-white">About Our <span className="text-primary italic">Academy</span></h1>
                    <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-bold italic opacity-90">
                        Empowering underprivileged and differently-abled athletes across India since 2017.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-950">The Academy of Sports <br /> <span className="text-primary italic">& Fine Arts</span></h2>
                            <p className="text-gray-950 text-lg leading-relaxed mb-6 font-bold italic">
                                Academy of Sports and Fine Arts (ASFA) was started to overcome the lack of opportunities and awareness among sports talent in India, especially among poor and tribal youth.
                            </p>
                            <p className="text-gray-950 text-lg leading-relaxed mb-10 font-bold italic">
                                We believe that sports is a fundamental right for all. Our academy doesn't just focus on coaching; we focus on social integration, economic development, and building career pathways for athletes who come from backgrounds where opportunities are scarce.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-5xl font-black text-primary mb-2">2017</div>
                                    <div className="text-gray-950 font-black uppercase tracking-widest text-xs">Year Founded</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-primary mb-2">80+</div>
                                    <div className="text-gray-950 font-black uppercase tracking-widest text-xs">Jobs Secured</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6" data-aos="fade-left">
                            <div className="space-y-6">
                                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg w-full aspect-square object-cover" alt="Academy activity" />
                                <div className="bg-primary p-8 rounded-3xl text-white shadow-2xl">
                                    <Heart className="mb-4 text-white" size={32} />
                                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight italic">100% Free Coaching</h4>
                                    <p className="text-sm font-bold opacity-90">We provide free athletics training to rural children.</p>
                                </div>
                            </div>
                            <div className="space-y-6 pt-12">
                                <div className="bg-black p-8 rounded-3xl text-white shadow-2xl">
                                    <Users className="mb-4 text-primary" size={32} />
                                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight italic">Inclusive Focus</h4>
                                    <p className="text-sm font-bold opacity-90">Specialized training for Divyang wheelchair children.</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg w-full aspect-square object-cover" alt="Athlete medals" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <VisionMission />

            {/* Navigation Sections */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/about/founder" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-gray-950">Founder Profile</h3>
                            <p className="text-gray-950 mb-8 font-bold italic">Learn about Nenavath Vinod and his dedication to Indian sports.</p>
                            <span className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2">View Biography <ArrowRight size={18} /></span>
                        </Link>

                        <Link href="/about/vision-mission" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-gray-950">Vision & Mission</h3>
                            <p className="text-gray-950 mb-8 font-bold italic">Deep dive into our core values and the impact we aim to create.</p>
                            <span className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2">Our Strategy <ArrowRight size={18} /></span>
                        </Link>

                        <Link href="/about/team" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <History size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-gray-950">Board Members</h3>
                            <p className="text-gray-950 mb-8 font-bold italic">Meet the team driving ASFA toward an Olympic future.</p>
                            <span className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2">Meet the Team <ArrowRight size={18} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
