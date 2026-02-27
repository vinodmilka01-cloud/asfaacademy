"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowLeft, X, Building2, Copy, Check, Heart, Zap } from "lucide-react";
import Link from "next/link";

interface Athlete {
    id: string;
    name: string;
    role: string;
    achievement: string;
    image: string;
}

export default function SponsorAthletePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [athletes, setAthletes] = useState<Athlete[]>([]);

    useEffect(() => {
        fetch("/api/admin/athletes")
            .then(r => r.json())
            .then(setAthletes)
            .catch(() => { });
    }, []);

    const bankDetails = {
        accountName: "ACADEMY OF SPORTS AND FINE ARTS",
        bankName: "INDIAN OVERSEAS BANK",
        branch: "HAYATHNAGAR",
        accountNumber: "266502000000424",
        ifsc: "IOBA0002665"
    };

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-gray-50 text-center">
                <div className="container mx-auto px-6">
                    <Link
                        href="/support"
                        className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-8 hover:gap-3 transition-all"
                    >
                        <ArrowLeft size={16} /> Back to Support
                    </Link>
                    <div className="max-w-4xl mx-auto">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Sponsor an Athlete</span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-950 italic uppercase tracking-tighter">Our <span className="text-primary italic">Champions</span></h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Your support provides the resources these athletes need to compete at the highest level and fulfill their Olympic dreams.
                        </p>
                    </div>
                </div>
            </section>

            {/* Athlete Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {athletes.map((athlete, index) => (
                            <motion.div
                                key={athlete.id || athlete.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="grid md:grid-cols-2 gap-10 items-center">
                                    <div className="relative">
                                        <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-gray-200">
                                            <img
                                                src={athlete.image}
                                                alt={athlete.name}
                                                className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-2xl shadow-lg">
                                            <Award size={24} />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-2">{athlete.role}</p>
                                            <h2 className="text-4xl font-black text-gray-950 italic uppercase tracking-tighter leading-none">{athlete.name}</h2>
                                        </div>

                                        <div className="py-4 border-y border-gray-100">
                                            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Achievement</p>
                                            <p className="font-black text-gray-950 uppercase italic tracking-tight">{athlete.achievement}</p>
                                        </div>

                                        <p className="text-sm text-gray-600 leading-relaxed italic">
                                            Dedicated to representing India and breaking barriers in para-sports through rigorous training and unwavering spirit.
                                        </p>

                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="inline-flex items-center gap-2 bg-gray-950 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary transition-all active:scale-95 group/btn w-full justify-center"
                                        >
                                            <Heart size={18} className="group-hover/btn:fill-white" />
                                            SPONSOR NOW
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsor Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Heart className="text-primary" size={32} fill="currentColor" />
                                    </div>
                                    <h2 className="text-3xl font-black italic uppercase tracking-tight text-gray-950 mb-2">Support Our <span className="text-primary">Champions</span></h2>
                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Secure Bank Transfer Details</p>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-8 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                                            <Building2 className="text-primary" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1">Account Name</p>
                                            <p className="font-black text-gray-950 italic uppercase leading-none">{bankDetails.accountName}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1">Bank Name</p>
                                            <p className="font-bold text-gray-900">{bankDetails.bankName}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1">Branch</p>
                                            <p className="font-bold text-gray-900">{bankDetails.branch}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 pt-4 border-t border-gray-200">
                                        <div className="flex items-center justify-between group">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1">Account Number</p>
                                                <p className="font-mono text-2xl font-black text-primary tracking-tighter">{bankDetails.accountNumber}</p>
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(bankDetails.accountNumber, "account")}
                                                className="p-3 bg-white rounded-xl border border-gray-100 hover:border-primary transition-colors text-primary shadow-sm"
                                            >
                                                {copiedField === "account" ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between group">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1">IFSC Code</p>
                                                <p className="font-black text-xl text-gray-950 tracking-wider uppercase">{bankDetails.ifsc}</p>
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(bankDetails.ifsc, "ifsc")}
                                                className="p-3 bg-white rounded-xl border border-gray-100 hover:border-primary transition-colors text-primary shadow-sm"
                                            >
                                                {copiedField === "ifsc" ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <Link
                                        href="/qr-code.pdf"
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 bg-gray-950 text-white px-8 py-5 rounded-3xl font-black italic uppercase tracking-tight hover:bg-primary transition-all text-sm"
                                    >
                                        <Zap size={20} className="text-primary" />
                                        View QR Code
                                    </Link>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-5 rounded-3xl font-black italic uppercase tracking-tight hover:bg-gray-200 transition-all text-sm"
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
