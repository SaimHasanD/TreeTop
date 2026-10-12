import type { Metadata } from "next";
import { activitiesContent, getWhatsAppLink } from "@/data/content";
import LeafParticles from "@/components/LeafParticles";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Activities | Zipline, Kayaking, Archery & More — TreeTop Sylhet",
  description: "Six adventures in one place. Zipline over treetops, kayak the farm lake, ride horses through paddy fields. All ages. Book via WhatsApp.",
  alternates: {
    canonical: "https://treetopsylhet.com/activities",
  },
  openGraph: {
    type: "website",
    siteName: "TreeTop Sylhet",
    locale: "en_BD",
    title: "Activities | Zipline, Kayaking, Archery & More — TreeTop Sylhet",
    description: "Six adventures in one place. Zipline over treetops, kayak the farm lake, ride horses through paddy fields. All ages. Book via WhatsApp.",
    url: "https://treetopsylhet.com/activities",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activities | Zipline, Kayaking, Archery & More — TreeTop Sylhet",
    description: "Six adventures in one place. Zipline over treetops, kayak the farm lake, ride horses through paddy fields. All ages. Book via WhatsApp.",
  },
};

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-dark text-center overflow-hidden">
        <LeafParticles />
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-clamp-h1 text-cream mb-6 leading-tight">
              {activitiesContent.hero.h1}
            </h1>
            <p className="text-sage text-lg md:text-xl max-w-2xl mx-auto">
              {activitiesContent.hero.sub}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Activity Sections */}
      {activitiesContent.items.map((activity, i) => (
        <section 
          key={activity.id} 
          className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-offWhite' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <ScrollReveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 font-playfair text-6xl text-forest-deep/10 font-bold z-0">
                    {activity.id}
                  </div>
                  <img 
                    src={activity.image} 
                    alt={activity.alt || activity.name} 
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl relative z-10 shadow-sm"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-clamp-h2 text-forest-deep mb-2">{activity.name}</h2>
                <p className="text-amber italic text-lg md:text-xl mb-6">{activity.hook}</p>
                <p className="text-charcoal/80 text-lg mb-8 leading-relaxed max-w-lg">
                  {activity.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-charcoal/80">
                    <span className="w-5 h-5 flex items-center justify-center mr-3 text-amber">⏱</span>
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-charcoal/80">
                    <span className="w-5 h-5 flex items-center justify-center mr-3 text-amber">👥</span>
                    <span>{activity.age}</span>
                  </div>
                  <div className="inline-block bg-forest-mid/10 text-forest-deep px-4 py-2 rounded-full text-sm font-medium">
                    {activity.included}
                  </div>
                </div>

                <a 
                  href={getWhatsAppLink(`Hi TreeTop! I want to book ${activity.name}.`)} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-whatsapp"
                >
                  Book this activity
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-forest-dark text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-playfair text-amber mb-8">Ready for an adventure?</h2>
          <a 
            href={getWhatsAppLink("Hi TreeTop! I want to book activities.")} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-whatsapp"
          >
            WhatsApp to Book
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}
