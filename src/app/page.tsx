import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VisionMission } from "@/components/VisionMission";
import { Programs } from "@/components/Programs";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { Impact } from "@/components/Impact";
import { OlympicsPreview } from "@/components/OlympicsPreview";
import { ParalympicsPreview } from "@/components/ParalympicsPreview";
import { GalleryPreview } from "@/components/GalleryPreview";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <div className="relative z-10">
        <VisionMission />
        <Programs />
        <OlympicsPreview />
        <ParalympicsPreview />
        <GalleryPreview />
        <FounderSpotlight />
        <Impact />
        <ContactForm />

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
