"use client";

import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
    const phoneNumber = "918297827196";
    const message = "Hello ASFA! I'm interested in learning more about your sports academy.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-3"
            aria-label="Contact us on WhatsApp"
        >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold">
                Chat With Us
            </span>
            <MessageCircle size={32} fill="currentColor" className="text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce" />
        </a>
    );
};
