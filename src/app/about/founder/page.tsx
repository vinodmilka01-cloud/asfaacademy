import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Heart, GraduationCap, MapPin, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FounderPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-primary text-white relative overflow-hidden">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
                    <div data-aos="fade-right">
                        <span className="font-bold uppercase tracking-widest text-sm mb-4 block text-white/80">Founder & CEO, ASFA</span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 italic">Nenavath <br /> <span className="text-black">Vinod</span></h1>
                        <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8 italic">
                            "Developing international-level athletes from the grassroots of Telangana."
                        </p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-black/20 rounded-lg flex items-center gap-2 border border-white/10">
                                <MapPin size={18} />
                                <span>Telangana, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                            <Image src="/founder.png" alt="Founder" fill priority className="object-cover object-top" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-8 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative mb-12 md:mb-20" data-aos="fade-up">
                            <Quote className="absolute -top-10 -left-10 text-primary/10 w-32 h-32 -rotate-12" />
                            <div className="relative z-10 bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm">
                                <p className="text-2xl md:text-3xl text-gray-950 italic leading-relaxed text-center font-black">
                                    "Sports is a fundamental right for all and an enabler of social integration and economic development."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl font-black italic mb-12 uppercase tracking-tighter text-gray-950">The Journey of <span className="text-primary italic">Dedication</span></h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black mb-2 uppercase italic tracking-tighter text-gray-950">Coach & Leader</h3>
                                            <p className="text-gray-950 leading-relaxed font-bold italic">
                                                Nenavath Vinod qualified as an **International Level-1 Athletics Coach** in 2018. Since 2017, he has been providing free coaching to poor rural children, focusing on professional skill development.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Heart size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black mb-2 uppercase italic tracking-tighter text-gray-950">Social Dedication</h3>
                                            <p className="text-gray-950 leading-relaxed font-bold italic">
                                                Beyond the tracks, Vinod conducts door-to-door training for handicapped wheelchair children weekly. His personal visit to their homes ensures that disability is never an excuse to lack opportunity.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black mb-2 uppercase italic tracking-tighter text-gray-950">Achievements</h3>
                                            <p className="text-gray-950 leading-relaxed font-bold italic">
                                                Under his leadership, ASFA has produced 20+ National Medalists and 50+ State Medalists. He has successfully helped over 80+ sportsmen secure jobs in prestigious departments like Indian Railways and the Police.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black mb-2 uppercase italic tracking-tighter text-gray-950">The Vision</h3>
                                            <p className="text-gray-950 leading-relaxed font-bold italic">
                                                His goal is to create career pathways for professional sportspersons and promote the **Fit India Vision**. He believes in building a society where human values and economic prosperity go hand in hand.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quote block */}
                        <div className="mt-20 p-12 bg-black text-white rounded-3xl relative overflow-hidden" data-aos="zoom-in">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-3/4">
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic text-primary">Founder's Philosophy</h3>
                                    <p className="text-white italic text-lg leading-relaxed font-bold">
                                        "We believe that giving is more powerful than taking. Success is not just for oneself, but for the purpose of helping others find their path to greatness."
                                    </p>
                                </div>
                                <Link href="/contact" className="bg-primary text-white p-6 rounded-full font-bold hover:scale-110 transition-transform flex items-center justify-center shrink-0">
                                    CONNECT <ArrowRight className="-rotate-45" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
