"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

export function StudioFloorPlan() {
  const { t, language } = useLanguage()

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal variant="up" className="text-center mb-8 md:mb-16">
          <h2 className="heading-md font-heading">{t("floorPlan.title")}</h2>
        </ScrollReveal>

        <ScrollReveal variant="scale" className="relative w-full">
          {/* Main Floor Plan Container - Full Width with Responsive Sizing */}
          <div className="w-full group relative overflow-hidden bg-white rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
            {/* Responsive image container with optimal aspect ratio */}
            <div className="relative w-full" style={{ aspectRatio: '5.9/16.4', maxHeight: '100vh' }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-11%20at%2009.57.52-p8N8AIc5gLB6jqee1CoSilQiUfFMkM.jpeg"
                alt="glace14 studio floor plan showing cyclorama, main studio, and production areas — 96.76m² (5.90 × 16.40m)"
                fill
                className="object-contain p-2 sm:p-4 md:p-8 lg:p-10 transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, (max-width: 1536px) 90vw, 1200px"
                quality={85}
              />
            </div>

            {/* Subtle overlay effect */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 rounded-lg" />
          </div>

          {/* Floor Plan Details - Below Image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <ScrollReveal variant="up" delay={0.1} className="text-center">
              <h3 className="heading-sm font-heading mb-3">{language === "fr" ? "Cyclorama" : "Cyclorama"}</h3>
              <p className="text-body-sm font-body text-muted-foreground leading-relaxed">
                {t("floorPlan.cyclo")}
              </p>
              <p className="text-body-sm font-body text-muted-foreground leading-relaxed mt-1">
                {t("floorPlan.cycloHeight")}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={0.2} className="text-center">
              <h3 className="heading-sm font-heading mb-3">{language === "fr" ? "Studio Principal" : "Main Studio"}</h3>
              <p className="text-body-sm font-body text-muted-foreground leading-relaxed">
                {t("floorPlan.mainStudio")}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={0.3} className="text-center">
              <h3 className="heading-sm font-heading mb-3">{language === "fr" ? "Surface Totale" : "Total Space"}</h3>
              <p className="text-body-sm font-body text-muted-foreground leading-relaxed">
                {t("floorPlan.totalSpace")}
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
