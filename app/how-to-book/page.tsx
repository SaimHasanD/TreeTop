import { howToBookContent, getWhatsAppLink } from "@/data/content";
import LeafParticles from "@/components/LeafParticles";
import ScrollReveal from "@/components/ScrollReveal";

export default function HowToBookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-forest-dark text-cream">
      <LeafParticles />
      
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 text-center z-10">
        <div className="px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-clamp-h1 mb-6 leading-tight">
              {howToBookContent.hero.h1}
            </h1>
            <p className="text-sage text-lg md:text-xl max-w-2xl mx-auto">
              {howToBookContent.hero.sub}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {howToBookContent.steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="bg-forest-mid border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-12 h-12 shrink-0 bg-amber text-white font-playfair text-xl flex items-center justify-center rounded-full">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold mb-2">{step.title.split(": ")[1]}</h3>
                    <p className="text-sage whitespace-pre-line">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-clamp-h2 text-center mb-12">Frequently Asked Questions</h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {howToBookContent.faq.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <details className="group bg-forest-mid border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-lg font-medium text-cream hover:text-amber transition-colors">
                    <h3 className="font-playfair">{item.q}</h3>
                    <span className="shrink-0 rounded-full bg-forest-light p-1.5 text-cream sm:p-3 group-open:-rotate-180 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sage leading-relaxed">
                    {item.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <ScrollReveal>
              <a 
                href={getWhatsAppLink("Hi TreeTop! I have a question about booking.")}
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp"
              >
                Message us on WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
