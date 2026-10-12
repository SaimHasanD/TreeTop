import type { Metadata } from "next";
import Link from "next/link";
import ForestHero from "@/components/ForestHero";
import LeafParticles from "@/components/LeafParticles";
import ScrollReveal from "@/components/ScrollReveal";
import FamilyCalculator from "@/components/FamilyCalculator";
import { homeContent, getWhatsAppLink } from "@/data/content";

export const metadata: Metadata = {
  title: "TreeTop Sylhet | Adventure Farm 20 Min from Osmani Airport",
  description: "Zipline, kayak, archery, horse riding and overnight cottages at Sylhet's wildest day out. Open daily. 20 minutes from Osmani Airport.",
  alternates: {
    canonical: "https://treetopsylhet.com",
  },
  openGraph: {
    type: "website",
    siteName: "TreeTop Sylhet",
    locale: "en_BD",
    title: "TreeTop Sylhet | Adventure Farm 20 Min from Osmani Airport",
    description: "Zipline, kayak, archery, horse riding and overnight cottages at Sylhet's wildest day out. Open daily. 20 minutes from Osmani Airport.",
    url: "https://treetopsylhet.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TreeTop Sylhet | Adventure Farm 20 Min from Osmani Airport",
    description: "Zipline, kayak, archery, horse riding and overnight cottages at Sylhet's wildest day out. Open daily. 20 minutes from Osmani Airport.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TreeTop Sylhet",
  "description": "Adventure farm and eco-resort in Sylhet, Bangladesh",
  "url": "https://treetopsylhet.com",
  "telephone": "+880XXXXXXXXXX",
  "email": "demo@example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lilapara, Dupagul",
    "addressLocality": "Sylhet",
    "addressCountry": "BD"
  },
  "openingHours": "Mo-Su 10:00-18:00",
  "priceRange": "৳৳"
};

const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "TreeTop Sylhet Adventure Farm",
  "description": "Zipline, kayaking, archery, horse riding, boating and overnight cottages. 20 minutes from Osmani Airport.",
  "url": "https://treetopsylhet.com",
  "touristType": ["Family", "Adventure seekers", "Nature lovers"],
  "availableLanguage": ["Bengali", "English"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lilapara, Dupagul",
    "addressLocality": "Sylhet",
    "addressCountry": "BD"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1 — Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <ForestHero />
        <LeafParticles />
        <div className="relative z-10 px-4 mt-20 max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="label-accent mb-6 block">{homeContent.hero.label}</span>
            <h1 className="text-clamp-h1 text-cream mb-6 leading-tight">
              {homeContent.hero.h1}
              <br />
              <span className="italic text-amber">{homeContent.hero.h1Italic}</span>
            </h1>
            <p className="text-sage text-lg md:text-xl max-w-2xl mx-auto mb-10">
              {homeContent.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/activities" className="btn-secondary w-full sm:w-auto">
                See Activities
              </Link>
              <a href={getWhatsAppLink("Hi TreeTop! I'm interested in visiting.")} target="_blank" rel="noreferrer" className="btn-whatsapp w-full sm:w-auto">
                WhatsApp to Book
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sage text-sm">
              <span className="w-2 h-2 rounded-full bg-leaf-green animate-pulse"></span>
              <span>{homeContent.hero.trustLine}</span>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cream/50">
          ↓
        </div>
      </section>

      {/* SECTION 2 — Activity Highlights */}
      <section className="py-12 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-accent mb-4 block">{homeContent.activities.label}</span>
              <h2 className="text-clamp-h2 text-forest-deep">{homeContent.activities.h2}</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {homeContent.activities.items.map((activity, i) => (
              <ScrollReveal key={activity.id} delay={i * 0.1}>
                <Link
                  href="/activities"
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] block"
                >
                  <img src={activity.image} alt={activity.alt || activity.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-forest-deep font-bold text-sm px-3 py-1 rounded-full">
                    {activity.id}
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2">{activity.name}</h3>
                    <p className="text-charcoal/70 mb-4">{activity.hook}</p>
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-amber text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/activities" className="text-amber font-semibold hover:text-amber-light transition-colors inline-flex items-center">
              See all activities <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Packages Preview */}
      <section className="py-12 md:py-20 bg-forest-dark relative overflow-hidden">
        <LeafParticles />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-accent mb-4 block">{homeContent.packages.label}</span>
              <h2 className="text-clamp-h2 text-cream">{homeContent.packages.h2}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {homeContent.packages.items.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1} className="h-full">
                <div className={`h-full flex flex-col p-8 rounded-2xl bg-forest-light ${pkg.accent ? 'border-2 border-amber' : 'border border-white/10'}`}>
                  <h3 className="font-playfair text-2xl text-amber mb-2">{pkg.name}</h3>
                  <div className="font-bold text-cream text-xl mb-4">{pkg.price}</div>
                  <p className="text-sage mb-8 flex-grow">{pkg.description}</p>
                  <Link href="/packages" className="text-cream text-sm hover:text-amber transition-colors mt-auto inline-block">
                    View details →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — How It Works */}
      <section className="py-12 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-accent mb-4 block">{homeContent.howItWorks.label}</span>
              <h2 className="text-clamp-h2 text-forest-deep">{homeContent.howItWorks.h2}</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-amber/30"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center relative z-10">
              {homeContent.howItWorks.steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.2}>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-amber font-playfair text-3xl shadow-sm mb-6 border-4 border-offWhite relative z-10">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-lg max-w-[200px]">{step.title}</h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <a href={getWhatsAppLink("Hi TreeTop! I want to plan a visit.")} target="_blank" rel="noreferrer" className="btn-whatsapp">
              WhatsApp to Book
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Family Calculator */}
      <section className="py-12 md:py-20 bg-forest-mid relative overflow-hidden">
        <LeafParticles />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent mb-4 block">{homeContent.plan.label}</span>
              <h2 className="text-clamp-h2 text-cream">{homeContent.plan.h2}</h2>
            </div>
            <FamilyCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — Location */}
      <section className="py-12 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="label-accent mb-4 block">{homeContent.location.label}</span>
              <h2 className="text-clamp-h2 text-forest-deep mb-8">{homeContent.location.h2}</h2>
              <ul className="space-y-4">
                {homeContent.location.distances.map((dist, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <span className="w-2 h-2 rounded-full bg-amber mr-4"></span>
                    {dist}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="w-full h-80 bg-gray-300 rounded-2xl flex items-center justify-center text-charcoal/50">
                [Google Maps Embed]
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Story Teaser */}
      <section className="py-12 md:py-20 bg-forest-dark text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src="https://placehold.co/600x600/163d22/f4ede4?text=Our+Story" alt="TreeTop Sylhet adventure farm family story" className="w-full h-[500px] object-cover rounded-2xl" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="label-accent mb-4 block">{homeContent.story.label}</span>
              <h2 className="text-clamp-h2 mb-6">{homeContent.story.h2}</h2>
              <p className="text-sage text-lg mb-8 leading-relaxed">
                {homeContent.story.body}
              </p>
              <Link href="/our-story" className="text-amber font-semibold hover:text-amber-light transition-colors inline-flex items-center">
                Our full story <span className="ml-2">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
