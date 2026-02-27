"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
    const [contactInfo, setContactInfo] = useState({
        email: "academysportsandfinearts@gmail.com",
        phone: "+91 82978 27196, +91 86875 37688",
        address: "Hayathnagar, Hyderabad, Telangana, India.",
        instagram: "https://instagram.com/academysports2017"
    });

    useEffect(() => {
        fetch("/api/admin/settings/contact")
            .then(r => r.json())
            .then(data => {
                if (data.email) setContactInfo(data);
            })
            .catch(() => { });
    }, []);

    const phones = contactInfo.phone.split(",").map(p => p.trim());

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-gray-50 text-center text-gray-950">
                <div className="container mx-auto px-6">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Connect with ASFA</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Contact <span className="text-primary italic">Us</span></h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto italic font-black">
                        Whether you are an aspiring athlete, a donor, or a volunteer, we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-8 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
                        {/* Info Column */}
                        <div className="lg:w-1/3 space-y-12" data-aos="fade-right">
                            <div>
                                <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 border-b-2 border-primary pb-2 inline-block">Stay In <span className="text-primary italic">Touch</span></h3>
                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-lg mb-1 uppercase tracking-tight text-gray-900">Our Location</h4>
                                            <p className="text-gray-700 italic font-bold whitespace-pre-line">{contactInfo.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-lg mb-1 uppercase tracking-tight text-gray-900">Call Us</h4>
                                            <p className="text-gray-700 italic font-bold">
                                                {phones.map((p, i) => (
                                                    <span key={p}>{p}{i < phones.length - 1 && <br />}</span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-lg mb-1 uppercase tracking-tight text-gray-900">Email Us</h4>
                                            <p className="text-gray-700 italic font-bold break-all">{contactInfo.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 italic">
                                <h4 className="font-bold mb-4">Social Media</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                                        <Facebook size={18} />
                                    </a>
                                    <a href={contactInfo.instagram} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                                        <Twitter size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:w-2/3" data-aos="fade-left">
                            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                                <form className="relative z-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-900">Full Name</label>
                                            <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-900">Email Address</label>
                                            <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-900">Subject</label>
                                        <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Sponsorship / Donation</option>
                                            <option>Athlete Registration</option>
                                            <option>Volunteering</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-900">Your Message</label>
                                        <textarea rows={6} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <button className="bg-primary text-white w-full py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-3">
                                        Send Message <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </main>
    );
}
