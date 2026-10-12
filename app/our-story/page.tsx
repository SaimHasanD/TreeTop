import type { Metadata } from "next";
import { ourStoryContent, getWhatsAppLink } from "@/data/content";
import LeafParticles from "@/components/LeafParticles";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story | Family Land, Family Run — TreeTop Sylhet",
  description: "TreeTop Sylhet is built on family land brought back from the UK. Every activity, meal, and cottage is run by our family and the local Sylheti community.",
  alternates: {
    canonical: "https://treetopsylhet.com/our-story",
  },
  openGraph: {
    type: "website",
    siteName: "TreeTop Sylhet",
    locale: "en_BD",
    title: "Our Story | Family Land, Family Run — TreeTop Sylhet",
    description: "TreeTop Sylhet is built on family land brought back from the UK. Every activity, meal, and cottage is run by our family and the local Sylheti community.",
    url: "https://treetopsylhet.com/our-story",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Family Land, Family Run — TreeTop Sylhet",
    description: "TreeTop Sylhet is built on family land brought back from the UK. Every activity, meal, and cottage is run by our family and the local Sylheti community.",
  },
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-dark text-cream overflow-hidden">
        <LeafParticles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center mb-16">
          <ScrollReveal>
            <h1 className="text-clamp-h1 leading-tight">
              <span className="block mb-2">{ourStoryContent.hero.h1}</span>
              <span className="text-amber italic">{ourStoryContent.hero.h1Italic}</span>
            </h1>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 text-lg md:text-xl text-sage leading-relaxed">
          {ourStoryContent.story.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 relative z-10">
          <ScrollReveal>
            <img 
              src={ourStoryContent.image} 
              alt="TreeTop Sylhet adventure farm family story" 
              className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-lg border border-white/10"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 md:py-32 bg-offWhite text-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-clamp-h2 text-forest-deep mb-6">{ourStoryContent.community.title}</h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {ourStoryContent.community.caption}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ourStoryContent.community.images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-white">
                  <img src={img} alt={`TreeTop Sylhet local community team member ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-forest-dark text-center relative overflow-hidden">
        <LeafParticles />
        <div className="relative z-10 px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair text-amber mb-10">{ourStoryContent.cta}</h2>
            <a 
              href={getWhatsAppLink("Hi TreeTop! I'm interested in visiting.")} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-whatsapp"
            >
              WhatsApp to Book
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
