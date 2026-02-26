"use client"

import { useRef, useState } from "react"

import type { VolumeIconHandle } from "@/components/animated-icons/volume"
import { VolumeIcon } from "@/components/animated-icons/volume"
import { cn } from "@/lib/utils"

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string
  namePronunciationUrl: string
}) {
  const volumeIconRef = useRef<VolumeIconHandle>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (isPlaying) return
    setIsPlaying(true)
    volumeIconRef.current?.startAnimation()
    const audio = new Audio(namePronunciationUrl)
    audio.addEventListener("ended", () => setIsPlaying(false))
    audio.addEventListener("error", () => setIsPlaying(false))
    audio.play()
  }

  return (
    <button
      className={cn(
        "relative text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-[0.9]",
        "after:absolute after:-inset-1",
        isPlaying && "opacity-50 pointer-events-none",
        className
      )}
      onClick={handlePlay}
      disabled={isPlaying}
    >
      <VolumeIcon ref={volumeIconRef} className="size-4.5" />
      <span className="sr-only">Pronounce my name</span>
    </button>
  )
}
