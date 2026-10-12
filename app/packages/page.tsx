import type { Metadata } from "next";
import { packagesContent } from "@/data/content";
import LeafParticles from "@/components/LeafParticles";
import ScrollReveal from "@/components/ScrollReveal";
import FamilyCalculator from "@/components/FamilyCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packages & Pricing | Half-Day, Full-Day, Overnight — TreeTop Sylhet",
  description: "Half-day from 700tk per person. Overnight cottages from 3,990tk. All packages include 6 activities. No confusing forms — just WhatsApp.",
  alternates: {
    canonical: "https://treetopsylhet.com/packages",
  },
  openGraph: {
    type: "website",
    siteName: "TreeTop Sylhet",
    locale: "en_BD",
    title: "Packages & Pricing | Half-Day, Full-Day, Overnight — TreeTop Sylhet",
    description: "Half-day from 700tk per person. Overnight cottages from 3,990tk. All packages include 6 activities. No confusing forms — just WhatsApp.",
    url: "https://treetopsylhet.com/packages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages & Pricing | Half-Day, Full-Day, Overnight — TreeTop Sylhet",
    description: "Half-day from 700tk per person. Overnight cottages from 3,990tk. All packages include 6 activities. No confusing forms — just WhatsApp.",
  },
};

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-offWhite">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-dark text-center overflow-hidden">
        <LeafParticles />
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-clamp-h1 text-cream mb-6 leading-tight">
              {packagesContent.hero.h1}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {packagesContent.items.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl shadow-sm p-8 h-full flex flex-col ${pkg.name === 'OVERNIGHT' ? 'border-2 border-amber' : 'border border-gray-100'}`}>
                  <h2 className="font-inter uppercase tracking-widest text-sm text-amber font-bold mb-4">
                    {pkg.name}
                  </h2>
                  <div className="font-playfair text-3xl text-forest-deep mb-2">{pkg.price}</div>
                  <div className="text-charcoal/60 text-sm mb-8 pb-8 border-b border-gray-100">
                    {pkg.timeSlots}
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-charcoal/50 mb-2">Includes</span>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{pkg.includes}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-charcoal/50 mb-2">Does not include</span>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{pkg.doesNotInclude}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-charcoal/50 mb-2">Pool / Extras</span>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{pkg.poolAddon}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-charcoal/50 mb-2">Note</span>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{pkg.minimum}</p>
                    </div>
                  </div>

                  {pkg.name === 'OVERNIGHT' && (
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <Link href="/accommodation" className="text-amber font-medium hover:text-amber-light inline-flex items-center">
                        See rooms <span className="ml-2">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 bg-forest-mid relative overflow-hidden">
        <LeafParticles />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent mb-4 block">PLAN YOUR VISIT</span>
              <h2 className="text-clamp-h2 text-cream">Calculate your cost</h2>
            </div>
            <FamilyCalculator />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
