"use client"

import { useReducedMotion } from "motion/react"
import dynamic from "next/dynamic"
import { useMemo } from "react"

import { useIsClient } from "@/hooks/use-is-client"
import { usePumbaFollowerVisibility } from "@/hooks/use-pumba-follower-visibility"

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false
  return "ontouchstart" in window || navigator.maxTouchPoints > 0
}

const PumbaFollowerCore = dynamic(() => import("./pumba-follower-core"), {
  ssr: false,
})

export function PumbaFollower() {
  const isClient = useIsClient()
  const [isPumbaFollowerVisible] = usePumbaFollowerVisibility()
  const shouldReduceMotion = useReducedMotion()

  const isTouch = useMemo(() => {
    if (!isClient) return true
    return isTouchDevice()
  }, [isClient])

  const shouldRender =
    isClient && isPumbaFollowerVisible && !shouldReduceMotion && !isTouch

  if (!shouldRender) return null

  return <PumbaFollowerCore />
}
