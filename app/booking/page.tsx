"use client"

import React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { AnimatedButton } from "@/components/animated-button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

const CALENDLY_URLS: Record<string, string> = {
  "photo-video-room1": "https://calendly.com/simon-glace14/full_studio",
  "cyclo-room1": "https://calendly.com/simon-glace14/room-1",
  "production-room2": "https://calendly.com/simon-glace14/new-meeting",
}

export default function BookingPage() {
  const [sessionType, setSessionType] = useState("")
  const [calendlyReady, setCalendlyReady] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const sessionTypes = [
    { value: "photo-video-room1", label: t("session.photoVideo"), duration: t("session.duration1"), price: t("session.price1") },
    { value: "cyclo-room1", label: t("session.cyclo"), duration: t("session.duration1"), price: t("session.price2") },
    { value: "production-room2", label: t("session.room2"), duration: t("session.duration2"), price: t("session.price3") },
  ]

  // Load Calendly script once on mount
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    if (existingScript) {
      if (window.Calendly) setCalendlyReady(true)
      else existingScript.addEventListener("load", () => setCalendlyReady(true))
      return
    }

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => setCalendlyReady(true)
    document.head.appendChild(script)
  }, [])

  // Initialize Calendly widget when session type changes and script is ready
  const initWidget = useCallback(() => {
    const url = CALENDLY_URLS[sessionType]
    if (!url || !calendlyReady || !widgetRef.current || !window.Calendly) return

    // Clear any previous widget content
    widgetRef.current.innerHTML = ""
    window.Calendly.initInlineWidget({
      url,
      parentElement: widgetRef.current,
    })
  }, [sessionType, calendlyReady])

  useEffect(() => {
    initWidget()
  }, [initWidget])

  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-lg font-heading mb-6 text-balance">
            {t("booking.pageTitle")}
          </h1>
          <p className="text-muted-foreground text-body-lg font-body leading-relaxed max-w-2xl mx-auto">
            {t("booking.pageSubtitle")}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-10">
            {/* Session Type Selection */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <Label htmlFor="session-type" className="text-body-base font-body">
                  <strong className="font-emphasis">1.</strong> {t("booking.step1")}
                </Label>
                <span className="text-body-xs text-muted-foreground font-body">{t("booking.required")}</span>
              </div>
              <Select value={sessionType} onValueChange={setSessionType}>
                <SelectTrigger id="session-type" className="w-full h-12 font-body">
                  <SelectValue placeholder={t("booking.selectType")} />
                </SelectTrigger>
                <SelectContent>
                  {sessionTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} className="font-body">
                      <div className="flex flex-col items-start py-1">
                        <span className="font-body-medium">{type.label}</span>
                        <span className="text-xs text-muted-foreground font-body">
                          {type.duration} • {type.price}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calendly Widget */}
            {sessionType && CALENDLY_URLS[sessionType] && (
              <div className="animate-fade-in-up opacity-0 stagger-3 space-y-4 border-t border-border pt-8">
                <Label className="text-body-base font-body">
                  <strong className="font-emphasis">2.</strong> {t("booking.step2")}
                </Label>
                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <div 
                    ref={widgetRef}
                    style={{ minWidth: "320px", height: "700px" }}
                  />
                </div>
                <p className="text-body-xs text-muted-foreground font-body">
                  {t("booking.calendlyDesc")}
                </p>
              </div>
            )}

            {/* Contact Information */}
            {sessionType && (
              <div className="p-4 bg-secondary/50 border border-border rounded-lg animate-fade-in-up opacity-0 stagger-3">
                <p className="text-body-sm text-muted-foreground font-body">
                  <strong className="font-emphasis">{t("booking.nextStep")}</strong> {t("booking.confirmationMsg")}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md font-heading mb-8 text-center">{t("expect.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 font-emphasis">
                1
              </div>
              <h3 className="heading-sm font-heading">{t("expect.step1Title")}</h3>
              <p className="text-body-sm font-body text-muted-foreground">
                {t("expect.step1Desc")}
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 font-emphasis">
                2
              </div>
              <h3 className="heading-sm font-heading">{t("expect.step2Title")}</h3>
              <p className="text-body-sm font-body text-muted-foreground">
                {t("expect.step2Desc")}
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 font-emphasis">
                3
              </div>
              <h3 className="heading-sm font-heading">{t("expect.step3Title")}</h3>
              <p className="text-body-sm font-body text-muted-foreground">
                {t("expect.step3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md font-heading mb-4">{t("help.title")}</h2>
          <p className="text-body-base font-body text-muted-foreground mb-6 max-w-xl mx-auto">
            {t("help.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton href="https://instagram.com/glace14studio" variant="ghost">
              {t("help.instagram")}
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Main Footer Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-body-xs text-muted-foreground font-body">
                {t("footer.rights")}
              </p>
              <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="/" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("footer.home")}
                </a>
                <a href="/production" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.production")}
                </a>
                <a href="/store" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.store")}
                </a>
                <a href="https://instagram.com/glace14studio" target="_blank" rel="noopener noreferrer" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Instagram
                </a>
              </nav>
            </div>
            
            {/* Legal Links */}
            <div className="flex justify-center gap-4 md:gap-6 pt-4 border-t border-border/50">
              <a href="/legal#imprint" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                {t("footer.imprint")}
              </a>
              <a href="/legal#privacy" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                {t("footer.privacy")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
