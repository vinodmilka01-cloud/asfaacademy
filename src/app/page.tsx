import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VisionMission } from "@/components/VisionMission";
import { Programs } from "@/components/Programs";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <div className="relative z-10">
        <VisionMission />
        <Programs />

        {/* Featured Athlete Section */}
        <section className="py-24 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2" data-aos="fade-right">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Champions</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  From Local Grounds to <br /> <span className="text-primary italic">National Glory</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                  Meet our athletes who have overcome adversity, poverty, and disability to represent ASFA on the national stage.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Trophy size={32} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl uppercase italic tracking-wide">M. Sirisha</h4>
                      <p className="text-gray-400">Deaf & Dumb National Medalist (Shot Put)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Trophy size={32} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl uppercase italic tracking-wide">B. Vinitha</h4>
                      <p className="text-gray-400">National Medalist & Railway Employee</p>
                    </div>
                  </div>
                </div>
                <Link href="/gallery" className="mt-12 inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
                  VIEW ALL MEDALISTS <ArrowRight size={20} className="group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="lg:w-1/2 relative" data-aos="fade-left">
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80" className="w-full aspect-square object-cover rounded-3xl" alt="Athlete training" />
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" className="w-full aspect-square object-cover rounded-3xl mt-12" alt="Athlete ceremony" />
                </div>
                {/* Float glass card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-morphism p-6 rounded-2xl border border-white/10 text-black max-w-xs hidden md:block">
                  <p className="font-bold text-lg mb-2">20+ National Medalists</p>
                  <p className="text-sm opacity-80 italic">Producing champions who inspire a generation of rural talent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FounderSpotlight />
        <Impact />

        {/* Call to Action */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-6" data-aos="zoom-in">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Change a Life?</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Sports is not just a game; it's a doorway to dignity, social integration, and economic development. Join us in making a difference.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/donate" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl">
                Become a Sponsor
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                Contact Academy
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
