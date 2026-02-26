"use client"

import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const LIGHT_IMAGES = [
  "/assets/pfp/light_pfp.png",
  "/assets/pfp/flavour_pfp.png",
  "/assets/pfp/original_pfp.jpg",
]

const DARK_IMAGES = [
  "/assets/pfp/dark_pfp.png",
  "/assets/pfp/original_pfp.jpg",
  "/assets/pfp/flavour_pfp.png",
]

type GlitchyAvatarProps = {
  className?: string
  alt: string
}

export function GlitchyAvatar({ className, alt }: GlitchyAvatarProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 })
  const [glitchSlice, setGlitchSlice] = useState<{ top: number; height: number } | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const images = mounted && resolvedTheme === "dark" ? DARK_IMAGES : LIGHT_IMAGES
  const defaultImage = images[0]

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setCurrentIndex(0)
    setGlitchOffset({ x: 0, y: 0 })
    setGlitchSlice(null)
  }, [])

  // Cycle through images on hover
  useEffect(() => {
    if (!isHovering) return

    let idx = 0
    intervalRef.current = setInterval(() => {
      idx = (idx + 1) % images.length
      setCurrentIndex(idx)
    }, 200)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovering, images.length])

  // Glitch distortion effect on hover
  useEffect(() => {
    if (!isHovering) return

    glitchIntervalRef.current = setInterval(() => {
      // Random offset for RGB shift feel
      setGlitchOffset({
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 6,
      })

      // Random horizontal slice displacement
      if (Math.random() > 0.4) {
        setGlitchSlice({
          top: Math.random() * 80,
          height: 5 + Math.random() * 20,
        })
      } else {
        setGlitchSlice(null)
      }
    }, 80)

    return () => {
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current)
    }
  }, [isHovering])

  return (
    <div
      className={cn("relative overflow-hidden rounded-full select-none", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={alt}
    >
      {/* Base image */}
      <img
        className="h-full w-full object-cover object-top transition-transform duration-75"
        alt={alt}
        src={isHovering ? images[currentIndex] : defaultImage}
        fetchPriority="high"
        draggable={false}
        style={
          isHovering
            ? { transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)` }
            : undefined
        }
      />

      {/* Glitch slice overlay — displaced horizontal strip */}
      {isHovering && glitchSlice && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(${glitchSlice.top}% 0 ${100 - glitchSlice.top - glitchSlice.height}% 0)`,
          }}
        >
          <img
            className="h-full w-full object-cover object-top"
            alt=""
            src={images[(currentIndex + 1) % images.length]}
            draggable={false}
            style={{
              transform: `translateX(${(Math.random() - 0.5) * 20}px)`,
            }}
          />
        </div>
      )}

      {/* Color channel split — red/cyan offset layers */}
      {isHovering && (
        <>
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full mix-blend-multiply opacity-60"
            style={{
              transform: `translateX(${glitchOffset.x * 0.5}px)`,
            }}
          >
            <img
              className="h-full w-full object-cover object-top"
              alt=""
              src={images[currentIndex]}
              draggable={false}
              style={{ filter: "saturate(2) hue-rotate(30deg)" }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full mix-blend-screen opacity-30"
            style={{
              transform: `translateX(${-glitchOffset.x * 0.7}px)`,
            }}
          >
            <img
              className="h-full w-full object-cover object-top"
              alt=""
              src={images[(currentIndex + 2) % images.length]}
              draggable={false}
              style={{ filter: "saturate(2) hue-rotate(-60deg)" }}
            />
          </div>
        </>
      )}

      {/* Scanline overlay */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }}
        />
      )}
    </div>
  )
}
