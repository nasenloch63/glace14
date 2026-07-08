import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ProductionPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />

      {/* Under Construction Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block">
              <p className="text-body-xs font-emphasis text-muted-foreground mb-4 tracking-widest">
                COMING SOON
              </p>
            </div>
          </div>

          <h1 className="heading-lg font-heading mb-6 text-balance">
            Production Portfolio
          </h1>

          <p className="text-body-lg font-body text-muted-foreground leading-relaxed mb-8">
            We're currently focusing on refining our studio offerings and booking system. Our complete production portfolio will be showcased here soon. In the meantime, discover our studio spaces and book a session.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/studio"
              className="inline-block border border-foreground px-8 py-3 text-body-sm font-emphasis tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 text-center"
            >
              Explore Studio
            </Link>
            <Link
              href="/booking"
              className="inline-block border border-foreground px-8 py-3 text-body-sm font-emphasis tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 text-center"
            >
              Book Now
            </Link>
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
                © 2026 glace14. All rights reserved.
              </p>
              <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="/" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Home
                </Link>
                <Link href="/booking" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Book
                </Link>
                <Link href="/store" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Store
                </Link>
                <a href="https://instagram.com/glace14studio" target="_blank" rel="noopener noreferrer" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Instagram
                </a>
              </nav>
            </div>
            
            {/* Legal Links */}
            <div className="flex justify-center gap-4 md:gap-6 pt-4 border-t border-border/50">
              <Link href="/legal#imprint" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                Imprint
              </Link>
              <Link href="/legal#privacy" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                Privacy Declaration
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
