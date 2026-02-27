"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, ShieldCheck, Zap, Target, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const supportOptions = [
    {
        icon: Users,
        title: "Sponsor an Athlete",
        description: "Provide professional coaching, equipment, and nutrition for a talented rural athlete.",
        impact: "Transform a life through sport."
    },
    {
        icon: Building2,
        title: "Infrastructure Support",
        description: "Help us build world-class training facilities in rural areas to nurture talent.",
        impact: "Building the future of Indian sports."
    },
    {
        icon: Target,
        title: "Event Sponsorship",
        description: "Partner with us for national events and championships to gain brand visibility.",
        impact: "Scale our impact globally."
    }
];

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 bg-gray-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
                    >
                        <Heart className="text-primary" size={18} />
                        <span className="text-sm font-bold uppercase tracking-widest">Empower Champions</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 italic">
                        Fuel the <span className="text-primary">Dream</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed italic">
                        Your support is the catalyst for rural talent to reach the Olympic podium.
                        Join us in our mission to build a sporting nation from the grassroots up.
                    </p>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {supportOptions.map((option, index) => (
                            <Link
                                href={option.title === "Sponsor an Athlete" ? "/sponsor-athlete" : "#"}
                                key={option.title}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 h-full rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <option.icon className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{option.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                                    <div className="pt-6 border-t border-gray-200">
                                        <span className="text-sm font-bold text-primary italic uppercase tracking-wider">{option.impact}</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contribution Details Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tight text-gray-900">Direct <span className="text-primary text-5xl">Contribution</span></h2>
                            <p className="text-gray-500 italic uppercase tracking-widest font-bold text-sm">Safe & Secure Bank Transfers</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-stretch">
                            {/* Bank Details Card */}
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-2xl relative overflow-hidden group hover:border-primary transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />

                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Building2 size={28} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-1">Account Name</p>
                                            <p className="text-xl font-black text-gray-900 leading-tight">ACADEMY OF SPORTS AND FINE ARTS</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Bank Name</p>
                                            <p className="font-bold text-gray-950">INDIAN OVERSEAS BANK</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Branch</p>
                                            <p className="font-bold text-gray-950">HAYATHNAGAR</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Account Number</p>
                                            <p className="font-mono font-black text-2xl text-primary tracking-tighter">266502000000424</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">IFSC Code</p>
                                            <p className="font-black text-xl text-gray-900 tracking-wider">IOBA0002665</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* QR Code Section */}
                            <div className="bg-gray-950 p-10 rounded-[3rem] text-white flex flex-col justify-center items-center md:items-start relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 relative z-10 transition-transform hover:rotate-12">
                                    <Zap className="text-primary" size={40} />
                                </div>
                                <h3 className="text-3xl font-black mb-4 italic uppercase relative z-10 tracking-tight">Scan to <span className="text-primary italic">Support</span></h3>
                                <p className="text-gray-400 mb-10 max-w-sm italic relative z-10 leading-relaxed">
                                    For a faster contribution, scan our official QR code using any UPI app (Google Pay, PhonePe, Paytm).
                                </p>
                                <Link
                                    href="/qr-code.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/30 active:scale-95 group relative z-10"
                                >
                                    <Zap size={24} className="group-hover:animate-pulse" />
                                    VIEW QR CODE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gray-950 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Commercial <span className="text-primary">Partnerships</span></h2>
                        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto italic">
                            We offer structured sponsorship opportunities for organizations looking to make a
                            tangible social impact while gaining meaningful brand exposure.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
                            >
                                Get Partnership Proposal
                            </Link>
                            <Link
                                href="tel:+91XXXXXXXXXX"
                                className="text-white border-b-2 border-primary pb-1 font-bold tracking-widest hover:text-primary transition-colors"
                            >
                                CALL OUR FOUNDER
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
