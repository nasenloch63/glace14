"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

const navLinks = [
  { href: "/production", label: "Production", key: "nav.production" },
  { href: "/store", label: "Store", key: "nav.store" },
  { href: "/?#gallery", label: "Gallery", key: "nav.gallery" },
  { href: "/booking", label: "Book", key: "nav.book" },
]

interface NavigationProps {
  variant?: "light" | "dark"
}

export function Navigation({ variant = "dark" }: NavigationProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      if (currentY > lastScrollY && currentY > 200) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
        isHome && !scrolled
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
      )}
    >
      <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-6 min-h-[64px] sm:min-h-[72px]">
        {/* Left: Nav Links */}
        <ul className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 z-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-xs sm:text-sm tracking-wide font-light relative group whitespace-nowrap",
                  "transition-all duration-300 ease-out",
                  pathname === link.href
                    ? isHome && variant === "light"
                      ? "text-white"
                      : "text-foreground"
                    : isHome && variant === "light"
                      ? "text-white/70 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(link.key)}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ease-out",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} 
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Center: Title - Hidden on small mobile, visible on larger screens */}
        <Link
          href="/"
          className={cn(
            "hidden sm:flex absolute left-1/2 -translate-x-1/2 flex-col items-center leading-none transition-opacity duration-300 ease-out hover:opacity-80",
            isHome && variant === "light" ? "text-white" : "text-foreground"
          )}
        >
          <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Studio</span>
          <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-[0.05em] uppercase">GLACE14</span>
        </Link>

        {/* Right: Language Switcher */}
        <div className="z-10">
          <LanguageSwitcher variant={variant} />
        </div>
      </nav>
    </header>
  )
}
