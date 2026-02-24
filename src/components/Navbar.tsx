"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        sublinks: [
            { name: "Vision & Mission", href: "/about/vision-mission" },
            { name: "Founder Profile", href: "/about/founder" },
            { name: "Our Team", href: "/about/team" },
        ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Sports", href: "/sports" },
    { name: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100",
                scrolled ? "py-3 shadow-md" : "py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="ASFA Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-lg leading-tight text-gray-900">
                            ASFA
                        </span>
                        <span className="text-[10px] font-medium tracking-widest uppercase text-primary">
                            Academy of Sports
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className="font-medium text-gray-700 transition-colors hover:text-primary flex items-center gap-1"
                            >
                                {link.name}
                                {link.sublinks && <ChevronDown size={14} />}
                            </Link>

                            {link.sublinks && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-2">
                                        {link.sublinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Link
                        href="/support"
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                    >
                        Support Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <button
                    className="absolute top-6 right-6 text-gray-900"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <div key={link.name} className="text-center">
                        <Link
                            href={link.href}
                            className="text-2xl font-bold text-gray-900 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                        {link.sublinks && (
                            <div className="mt-2 space-y-2">
                                {link.sublinks.map((sub) => (
                                    <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="block text-gray-500 hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <Link
                    href="/support"
                    className="w-[80%] bg-primary text-white px-8 py-4 rounded-full font-bold text-xl text-center shadow-xl shadow-primary/20"
                    onClick={() => setIsOpen(false)}
                >
                    Support Us
                </Link>

            </div>
        </nav>
    );
};
