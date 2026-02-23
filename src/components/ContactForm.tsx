"use client";

import { Send, Mail, Phone, MapPin } from "lucide-react";

export const ContactForm = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
                        Reach Out <span className="text-primary italic">To Us</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto italic font-medium">
                        Have questions about our programs or want to support our mission? We'd love to hear from you.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-8" data-aos="fade-right">
                        <div className="flex gap-6 items-start p-6 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-gray-900">Visit Us</h4>
                                <p className="text-gray-600">Hayathnagar, Hyderabad,<br />Telangana, India.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-6 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-gray-900">Call Us</h4>
                                <p className="text-gray-600">+91 82978 27196</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-6 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-gray-900">Email Us</h4>
                                <p className="text-gray-600">academysportsandfinearts@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3" data-aos="fade-left">
                        <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border-gray-100 border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-50 border-gray-100 border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-gray-50 border-gray-100 border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                                    placeholder="Tell us how we can help..."
                                    required
                                ></textarea>
                            </div>
                            <button className="bg-primary text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
