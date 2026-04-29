"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type GlitchyAvatarProps = {
  className?: string
  alt: string
}

const GLITCH_DURATION_MS = 900
const RANDOM_GLITCH_MIN_MS = 25000
const RANDOM_GLITCH_MAX_MS = 35000

export function GlitchyAvatar({ className, alt }: GlitchyAvatarProps) {
  const [glitchToken, setGlitchToken] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)
  const endTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const triggerGlitch = useCallback(() => {
    setGlitchToken((t) => t + 1)
    setIsGlitching(true)
    if (endTimerRef.current) clearTimeout(endTimerRef.current)
    endTimerRef.current = setTimeout(
      () => setIsGlitching(false),
      GLITCH_DURATION_MS
    )
  }, [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const initialTimer = setTimeout(triggerGlitch, 150)
    const schedule = () => {
      const delay =
        RANDOM_GLITCH_MIN_MS +
        Math.random() * (RANDOM_GLITCH_MAX_MS - RANDOM_GLITCH_MIN_MS)
      timer = setTimeout(() => {
        triggerGlitch()
        schedule()
      }, delay)
    }
    schedule()
    return () => {
      clearTimeout(initialTimer)
      clearTimeout(timer)
      if (endTimerRef.current) clearTimeout(endTimerRef.current)
    }
  }, [triggerGlitch])

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-full select-none",
        className
      )}
      role="img"
      aria-label={alt}
      onMouseEnter={triggerGlitch}
    >
      {/* Animated starfield — two copies side-by-side for seamless loop */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="flex h-full w-[200%] animate-starfield-pan">
          <img
            className="h-full w-1/2 shrink-0 object-cover"
            src="/assets/pfp/just_bg_silver_surfer.jpg"
            alt=""
            draggable={false}
          />
          <img
            className="h-full w-1/2 shrink-0 object-cover"
            src="/assets/pfp/just_bg_silver_surfer.jpg"
            alt=""
            draggable={false}
          />
        </div>
      </div>

      {/* Gym selfie — keyed on glitchToken so the animation restarts on each trigger */}
      <img
        key={glitchToken}
        className={cn(
          "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100",
          glitchToken > 0 && "animate-glitch-flash"
        )}
        style={{ objectPosition: "center 30%" }}
        alt=""
        aria-hidden="true"
        src="/assets/pfp/gym_selfie.jpg"
        draggable={false}
      />

      {/* Static Silver Surfer on top — hidden during glitch and on hover */}
      <img
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-out group-hover:opacity-0",
          isGlitching && "opacity-0"
        )}
        style={{ objectPosition: "center 20%" }}
        alt={alt}
        src="/assets/pfp/silver_surfer-removebg.png"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  )
}
