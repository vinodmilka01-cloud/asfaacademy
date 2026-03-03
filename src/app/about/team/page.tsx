import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export const dynamic = "force-dynamic";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
}

async function getTeam(): Promise<TeamMember[]> {
    try {
        const { data, error } = await supabase
            .from('team')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching team:', error);
        return [];
    }
}

export default async function TeamPage() {
    const team = await getTeam();

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-gray-50 text-center">
                <div className="container mx-auto px-6">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our People</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-950 italic uppercase tracking-tighter">
                        Meet The <span className="text-primary italic">Team</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        The dedicated individuals who drive ASFA&apos;s mission every single day.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.map((member) => (
                            <div
                                key={member.id}
                                className="group relative bg-gray-50 rounded-[3rem] p-8 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center"
                            >
                                <div className="mb-6 relative inline-block">
                                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-gray-200 mx-auto relative">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                <User size={40} className="text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-xl font-black italic uppercase tracking-tight text-gray-950 leading-none mb-2">{member.name}</h3>
                                <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
