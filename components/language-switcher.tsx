"use client"

import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface LanguageSwitcherProps {
  variant?: "light" | "dark"
}

export function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("fr")}
        className={cn(
          "text-xs tracking-wider uppercase font-light transition-all duration-300 ease-out",
          language === "fr"
            ? variant === "light"
              ? "text-white font-medium"
              : "text-foreground font-medium"
            : variant === "light"
              ? "text-white/50 hover:text-white/80"
              : "text-muted-foreground hover:text-foreground"
        )}
      >
        FR
      </button>
      <span 
        className={cn(
          "text-xs",
          variant === "light" ? "text-white/50" : "text-muted-foreground"
        )}
      >
        /
      </span>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "text-xs tracking-wider uppercase font-light transition-all duration-300 ease-out",
          language === "en"
            ? variant === "light"
              ? "text-white font-medium"
              : "text-foreground font-medium"
            : variant === "light"
              ? "text-white/50 hover:text-white/80"
              : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
    </div>
  )
}
