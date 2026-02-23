import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="ASFA Logo"
                                className="h-12 w-auto object-contain"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-xl leading-tight text-gray-900 uppercase tracking-tight">
                                    ASFA
                                </span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                                    Academy of Sports
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-600 leading-relaxed font-medium italic">
                            Academy of Sports and Fine Arts is dedicated to identifying and nurturing sporting talent from underserved communities across India.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com/academysports2017" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black text-lg mb-6 uppercase tracking-tighter italic">Quick Links</h4>
                        <ul className="space-y-4 text-gray-600 font-bold italic">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Our Mission</Link></li>
                            <li><Link href="/about/founder" className="hover:text-primary transition-colors">Founder Profile</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors">Champion Gallery</Link></li>
                            <li><Link href="/sports" className="hover:text-primary transition-colors">Sports Activities</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-black text-lg mb-6 uppercase tracking-tighter italic">Contact Us</h4>
                        <ul className="space-y-4 text-gray-600 font-bold italic">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                <span>Hayathnagar, Hyderabad, Telangana, India.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>+91 82978 27196</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span className="break-all">academysportsandfinearts@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-black text-lg mb-6 uppercase tracking-tighter italic">Get Involved</h4>
                        <p className="text-gray-600 mb-6 font-bold italic">
                            Your support can help a child reach the Olympics. Join us in making a difference.
                        </p>
                        <Link
                            href="/donate"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all w-full shadow-lg shadow-primary/20"
                        >
                            <Heart size={18} fill="currentColor" />
                            Sponsor an Athlete
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center text-gray-400 text-sm font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Academy of Sports and Fine Arts (ASFA). All rights reserved.</p>
                    <p className="mt-2">Registered Public Charitable Trust | Tax Exempted under 80G & 12A</p>
                </div>
            </div>
        </footer>
    );
};
