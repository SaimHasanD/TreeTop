import type { Metadata } from "next";
import { accommodationContent, getWhatsAppLink } from "@/data/content";
import LeafParticles from "@/components/LeafParticles";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Accommodation | Cottages & Family Rooms — TreeTop Sylhet",
  description: "Wake up in the treetops. Cottages and family rooms with pond view, breakfast, and full activity access. From 3,990tk per night.",
  alternates: {
    canonical: "https://treetopsylhet.com/accommodation",
  },
  openGraph: {
    type: "website",
    siteName: "TreeTop Sylhet",
    locale: "en_BD",
    title: "Accommodation | Cottages & Family Rooms — TreeTop Sylhet",
    description: "Wake up in the treetops. Cottages and family rooms with pond view, breakfast, and full activity access. From 3,990tk per night.",
    url: "https://treetopsylhet.com/accommodation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accommodation | Cottages & Family Rooms — TreeTop Sylhet",
    description: "Wake up in the treetops. Cottages and family rooms with pond view, breakfast, and full activity access. From 3,990tk per night.",
  },
};

export default function AccommodationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-offWhite">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-dark text-center overflow-hidden">
        <LeafParticles />
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-clamp-h1 text-cream mb-6 leading-tight">
              {accommodationContent.hero.h1}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Note Banner */}
      <div className="bg-amber/10 border-y border-amber/20 py-4 text-center px-4">
        <p className="text-forest-deep text-sm font-medium">{accommodationContent.note}</p>
      </div>

      {/* Room Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationContent.rooms.map((room, i) => (
              <ScrollReveal key={room.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col h-full border border-gray-100">
                  <img src={room.image} alt={room.alt || room.name} className="w-full h-64 object-cover" />
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="font-playfair text-2xl text-forest-deep font-bold mb-1">{room.name}</h2>
                        <p className="text-charcoal/60 text-sm">{room.guests}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-amber text-lg">{room.price}</div>
                      </div>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {room.includes.map(inc => (
                        <span key={inc} className="bg-forest-light/10 text-forest-light text-xs font-semibold px-3 py-1 rounded-full">
                          {inc}
                        </span>
                      ))}
                    </div>

                    <div className="mb-8 space-y-2">
                      <p className="text-sm text-charcoal/80">
                        <strong className="text-forest-deep">Layout:</strong> {room.layout}
                      </p>
                      <p className="text-sm text-charcoal/80">
                        <strong className="text-forest-deep">Features:</strong> {room.features.join(" · ")}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 text-center">
                      <a 
                        href={getWhatsAppLink(`Hi TreeTop! I'd like to request the ${room.name} room.`)}
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-whatsapp w-full block"
                      >
                        Request this room
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
