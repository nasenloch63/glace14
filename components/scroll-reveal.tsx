"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type RevealVariant = "up" | "left" | "right" | "scale" | "fade" | "image" | "stagger"

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  className?: string
  delay?: number
  threshold?: number
  as?: React.ElementType
}

const variantClasses: Record<RevealVariant, string> = {
  up: "scroll-reveal",
  left: "scroll-reveal-left",
  right: "scroll-reveal-right",
  scale: "scroll-reveal-scale",
  fade: "scroll-reveal-fade",
  image: "scroll-reveal-image",
  stagger: "scroll-stagger",
}

export function ScrollReveal({
  children,
  variant = "up",
  className,
  delay,
  threshold = 0.15,
  as: Component = "div",
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold })

  return (
    <Component
      ref={ref}
      className={cn(variantClasses[variant], isVisible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Component>
  )
}
