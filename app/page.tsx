"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { AnimatedButton } from "@/components/animated-button"
import { StudioGallery } from "@/components/studio-gallery"
import { StudioFloorPlan } from "@/components/studio-floor-plan"
import { useLanguage } from "@/contexts/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useParallax } from "@/hooks/use-scroll-animation"

export default function Home() {
  const { t, language } = useLanguage()
  const [parallaxRef, parallaxOffset] = useParallax(0.15)
  
  return (
    <main className="min-h-screen">
      <Navigation variant="light" />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with parallax + slow zoom */}
        <div className="absolute inset-0" ref={parallaxRef}>
          <div
            className="absolute inset-[-10%] animate-hero-zoom"
            style={{ transform: `translateY(${parallaxOffset}px) scale(1)` }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.09-fCmXCqy5AordcxtpGFD6SHoFxUZ0Gk.jpeg"
              alt="glace14 studio interior with cyclorama backdrop"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={75}
            />
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20 pb-32 sm:pb-40">
          {/* Logo Container with Enhanced Prominence */}
          <div className="mb-8 sm:mb-10 md:mb-16 animate-fade-in-up flex justify-center">
            <div className="relative group">
              {/* Ambient Glow Effect - Always Visible */}
              <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 bg-white/5 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              
              {/* Secondary Glow Layer */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-10 bg-white/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '4s' }} />
              
              {/* Main Logo with Enhanced Styling */}
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7942371f-2f0a-47b2-b028-981e7ef74872-KlAURp0Tz985M9aGv4Bp6VaRgZKHTb.png"
                  alt="Studio Glace14 Logo"
                  width={900}
                  height={300}
                  className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] filter brightness-110 contrast-110 invert"
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 900px"
                />
              </div>
            </div>
          </div>
          
          <p className="text-white/70 text-body-lg font-body leading-relaxed mb-8 animate-fade-in-up opacity-0 stagger-2 max-w-3xl mx-auto">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 stagger-3">
            <AnimatedButton href="/booking" variant="default" className="bg-white text-foreground hover:bg-white/90">
              {t("home.hero.bookSession")}
            </AnimatedButton>
            <AnimatedButton href="#floor-plan" variant="outline" className="border-white text-white hover:bg-white/10">
              {t("home.hero.viewFloorPlan")}
            </AnimatedButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 stagger-4 z-20">
          <span className="text-white/60 text-xs tracking-widest uppercase font-emphasis">{t("home.hero.explore")}</span>
          <div className="w-px h-12 bg-white/40 animate-scroll-bounce" />
        </div>
      </section>

      {/* Room 1 -- Main Studio Description */}
      <section className="px-6 md:px-12 pb-16 md:pb-24 border-t border-border pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <ScrollReveal variant="left">
              <h2 className="heading-sm font-heading mb-6">{t("room1.title")}</h2>
              <p className="text-muted-foreground text-body-base font-body leading-relaxed mb-8">
                {t("room1.description")}
              </p>
              <ul className="space-y-3">
                {Array.from({ length: 4 }, (_, i) => t(`room1.feature${i + 1}`)).map((feature, index) => (
                  <li key={index} className="text-body-sm font-body flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">&mdash;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="image" delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.12-5LanCdWuPSj80hFIwAkaljIkBMIbtO.jpeg"
                  alt="Room 1 main production space"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={80}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cyclorama Section */}
      <section className="px-6 md:px-12 pb-16 md:pb-24 pt-16 md:pt-24">
        <div className="section-divider mx-auto max-w-6xl mb-16 md:mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <ScrollReveal variant="image" className="order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.11%20(2)-2hNQcYAQcP41xs9RKqAAV1AQMk7OSP.jpeg"
                  alt="Cyclorama 3-sided backdrop space"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={80}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={0.15} className="order-1 md:order-2">
              <p className="text-muted-foreground text-body-base font-body leading-relaxed mb-8">
                {t("cyclo.description")}
              </p>
              <ul className="space-y-3">
                {Array.from({ length: 6 }, (_, i) => t(`cyclo.feature${i + 1}`)).map((feature, index) => (
                  <li key={index} className="text-body-sm font-body flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">&mdash;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Room 2 -- Production Room */}
      <section className="px-6 md:px-12 pb-16 md:pb-24 pt-16 md:pt-24">
        <div className="section-divider mx-auto max-w-6xl mb-16 md:mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <ScrollReveal variant="left">
              <h2 className="heading-sm font-heading mb-6">{t("room2.title")}</h2>
              <p className="text-muted-foreground text-body-base font-body leading-relaxed mb-8">
                {t("room2.description")}
              </p>
              <ul className="space-y-3">
                {Array.from({ length: 4 }, (_, i) => t(`room2.feature${i + 1}`)).map((feature, index) => (
                  <li key={index} className="text-body-sm font-body flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">&mdash;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="image" delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO%206-FREAa5I5kAyfJBgnzn9etUqq8sMhvn.jpg"
                  alt="Room 2 creative studio and production space"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={80}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Studio Floor Plan */}
      <div id="floor-plan">
        <StudioFloorPlan />
      </div>

      {/* Studio Gallery */}
      <div id="gallery">
        <StudioGallery />
      </div>

      {/* Equipment & Services */}
      <section className="px-6 md:px-12 pb-16 md:pb-24 border-t border-border pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="up">
            <h2 className="heading-md font-heading mb-12 text-center">{t("equipment.title")}</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Equipment */}
            <ScrollReveal variant="left" delay={0.1}>
              <h3 className="heading-sm font-heading mb-6">{t("equipment.equipment")}</h3>
              <p className="text-muted-foreground text-body-sm font-body leading-relaxed mb-6">
                {t("equipment.equipmentDesc")}
              </p>
              <ul className="space-y-3">
                {Array.from({ length: 12 }, (_, i) => t(`equipment.item${i + 1}`)).map((item, index) => (
                  <li key={index} className="text-body-sm font-body flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">&mdash;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Services & Amenities */}
            <ScrollReveal variant="right" delay={0.2}>
              <h3 className="heading-sm font-heading mb-6">{t("equipment.services")}</h3>
              <p className="text-muted-foreground text-body-sm font-body leading-relaxed mb-6">
                {t("equipment.servicesDesc")}
              </p>
              <ul className="space-y-3">
                {Array.from({ length: 8 }, (_, i) => t(`services.item${i + 1}`)).map((item, index) => (
                  <li key={index} className="text-body-sm font-body flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">&mdash;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-secondary">
        <ScrollReveal variant="scale" className="max-w-6xl mx-auto text-center">
          <h2 className="heading-md font-heading mb-6">{t("cta.title")}</h2>
          <p className="text-muted-foreground text-body-base font-body leading-relaxed max-w-xl mx-auto mb-8">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton href="/booking" variant="outline">
              {t("cta.button")}
            </AnimatedButton>
            <a
              href="https://www.swisstransfer.com/d/01ee187f-866d-4999-852c-a055bf039ac4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-body-sm font-emphasis rounded-sm transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg active:scale-[0.98]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t("cta.brochure")}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <ScrollReveal variant="left">
              <h2 className="heading-md font-heading mb-6">{t("contact.title")}</h2>
              <p className="text-muted-foreground text-body-base font-body leading-relaxed max-w-md">
                {t("contact.description")}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={0.15} className="flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-body-sm font-body">
                  <span className="text-muted-foreground">{t("contact.phone")}</span>
                  <br />
                  <a href="tel:+33648133831" className="hover:text-muted-foreground transition-colors font-emphasis">
                    {t("contact.phoneValue")}
                  </a>
                </p>
                <p className="text-body-sm font-body">
                  <span className="text-muted-foreground">{t("contact.email")}</span>
                  <br />
                  <a href="mailto:simon@glace14.com" className="hover:text-muted-foreground transition-colors font-emphasis">
                    {t("contact.emailValue")}
                  </a>
                </p>
                <p className="text-body-sm font-body">
                  <span className="text-muted-foreground">{t("contact.location")}</span>
                  <br />
                  {t("contact.locationValue")}
                </p>
                <p className="text-body-sm font-body">
                  <span className="text-muted-foreground">{t("contact.instagram")}</span>
                  <br />
                  <a href="https://instagram.com/glace14studio" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors font-emphasis">
                    @glace14studio
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border">
        <ScrollReveal variant="fade" className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Main Footer Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-body-xs text-muted-foreground font-body">
                {t("footer.rights")}
              </p>
              <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="/booking" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.book")}
                </Link>
                <Link href="/production" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.production")}
                </Link>
                <Link href="/store" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.store")}
                </Link>
                <a href="https://instagram.com/glace14studio" target="_blank" rel="noopener noreferrer" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Instagram
                </a>
              </nav>
            </div>
            
            {/* Legal Links */}
            <div className="flex justify-center gap-4 md:gap-6 pt-4 border-t border-border/50">
              <Link href="/legal#imprint" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                {t("footer.imprint")}
              </Link>
              <Link href="/legal#privacy" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </main>
  )
}
