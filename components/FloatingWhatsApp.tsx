"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      <MessageCircle size={28} className="relative z-10" />
    </a>
  );
}
