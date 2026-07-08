"use client"

import React from "react"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "outline" | "ghost"
  size?: "default" | "small" | "large"
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function AnimatedButton({
  children,
  href,
  onClick,
  variant = "outline",
  size = "default",
  className,
  disabled = false,
  type = "button",
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return

    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { id, x, y }])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
    }, 600)

    onClick?.()
  }

  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const handleMouseLeave = () => {
    setIsPressed(false)
  }

  const baseStyles = cn(
    "relative overflow-hidden inline-flex items-center justify-center font-light tracking-wide",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    isPressed && "scale-[0.98]",
    disabled && "opacity-50 cursor-not-allowed"
  )

  const variantStyles = {
    primary: cn(
      "bg-foreground text-background",
      "hover:bg-foreground/90",
      "active:bg-foreground/80"
    ),
    outline: cn(
      "border border-foreground bg-transparent text-foreground",
      "hover:bg-foreground hover:text-background",
      "active:bg-foreground/90"
    ),
    ghost: cn(
      "bg-transparent text-foreground",
      "hover:bg-foreground/5",
      "active:bg-foreground/10"
    ),
  }

  const sizeStyles = {
    small: "px-4 py-2 text-xs",
    default: "px-8 py-3 text-sm",
    large: "px-10 py-4 text-base",
  }

  const rippleColor = variant === "primary" ? "bg-background/30" : "bg-foreground/20"

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  const content = (
    <>
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={cn(
            "absolute rounded-full pointer-events-none animate-ripple",
            rippleColor
          )}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {/* Button content with subtle hover shift */}
      <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn(combinedClassName, "group")}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      className={cn(combinedClassName, "group")}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
