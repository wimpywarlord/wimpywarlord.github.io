"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Position = {
  x: number
  y: number
}

type AnimationConfig = {
  row: number
  frames: number
  duration: number
  loop?: boolean
  loopCount?: number
}

type AnimationName =
  | "idle"
  | "runRight"
  | "runLeft"
  | "waving"
  | "jumping"
  | "failed"
  | "waiting"
  | "working"
  | "review"

const CONFIG = {
  frameWidth: 192,
  frameHeight: 208,
  gutter: 0,
  renderedWidth: 96,
  renderedHeight: 104,
  spriteSheet: "/assets/pumba/pumba-codex-spritesheet.webp",
  animations: {
    idle: {
      row: 0,
      frames: 8,
      duration: 1.6,
      loop: true,
    },
    runRight: {
      row: 1,
      frames: 8,
      duration: 0.75,
      loop: true,
    },
    runLeft: {
      row: 2,
      frames: 8,
      duration: 0.75,
      loop: true,
    },
    waving: {
      row: 3,
      frames: 8,
      duration: 1.4,
      loop: false,
      loopCount: 2,
    },
    jumping: {
      row: 4,
      frames: 8,
      duration: 1,
      loop: false,
      loopCount: 2,
    },
    failed: {
      row: 5,
      frames: 8,
      duration: 1.8,
      loop: false,
      loopCount: 2,
    },
    waiting: {
      row: 6,
      frames: 8,
      duration: 1.8,
      loop: false,
      loopCount: 2,
    },
    working: {
      row: 7,
      frames: 8,
      duration: 1.6,
      loop: false,
      loopCount: 2,
    },
    review: {
      row: 8,
      frames: 8,
      duration: 1.8,
      loop: false,
      loopCount: 2,
    },
  } as const satisfies Record<AnimationName, AnimationConfig>,
  walkSpeed: 1,
  cursorOffset: {
    x: -18,
    y: 48,
  },
  idleThreshold: 500,
  maxSpeedMultiplier: 5,
  maxBoostClicks: 10,
  boostDecayInterval: 300,
  idleDeadZone: 50,
} as const

const IDLE_ANIMATIONS: AnimationName[] = [
  "idle",
  "waving",
  "jumping",
  "failed",
  "waiting",
  "working",
  "review",
]

const SCALED_SPRITE_SIZE = (() => {
  const {
    frameWidth,
    frameHeight,
    renderedWidth,
    renderedHeight,
    gutter,
    animations,
  } = CONFIG

  const maxFrames = Math.max(...Object.values(animations).map((a) => a.frames))
  const maxRows = Math.max(...Object.values(animations).map((a) => a.row)) + 1

  return {
    width:
      (maxFrames * frameWidth + (maxFrames - 1) * gutter) *
      (renderedWidth / frameWidth),
    height:
      (maxRows * frameHeight + (maxRows - 1) * gutter) *
      (renderedHeight / frameHeight),
  }
})()

function clampToViewport(position: Position): Position {
  const maxX = window.innerWidth - CONFIG.renderedWidth
  const maxY = window.innerHeight - CONFIG.renderedHeight
  return {
    x: Math.max(0, Math.min(position.x, maxX)),
    y: Math.max(0, Math.min(position.y, maxY)),
  }
}

const ANIMATION_STYLES: Record<
  AnimationName,
  ReturnType<typeof generateAnimationStyle>
> = {
  idle: generateAnimationStyle("idle"),
  runRight: generateAnimationStyle("runRight"),
  runLeft: generateAnimationStyle("runLeft"),
  waving: generateAnimationStyle("waving"),
  jumping: generateAnimationStyle("jumping"),
  failed: generateAnimationStyle("failed"),
  waiting: generateAnimationStyle("waiting"),
  working: generateAnimationStyle("working"),
  review: generateAnimationStyle("review"),
}

function generateAnimationStyle(animationName: AnimationName) {
  const animation = CONFIG.animations[animationName]

  const { frameHeight, renderedWidth, renderedHeight, gutter } = CONFIG

  const yOffset = animation.row * (frameHeight + gutter)

  let iterationCount: string | number = "infinite"

  const animConfig = animation as AnimationConfig

  if ("loop" in animConfig && !animConfig.loop) {
    iterationCount =
      "loopCount" in animConfig && typeof animConfig.loopCount === "number"
        ? animConfig.loopCount
        : 1
  }

  return {
    width: renderedWidth,
    height: renderedHeight,
    backgroundImage: `url(${CONFIG.spriteSheet})`,
    backgroundSize: `${SCALED_SPRITE_SIZE.width}px ${SCALED_SPRITE_SIZE.height}px`,
    backgroundPosition: `0 -${yOffset * (renderedHeight / frameHeight)}px`,
    backgroundRepeat: "no-repeat",
    animation: `pumba-sprite-${animationName} ${animation.duration}s steps(${animation.frames}) ${iterationCount}`,
  }
}

function usePumbaState() {
  const [position, setPosition] = useState<Position>(() => ({
    x: window.innerWidth - CONFIG.renderedWidth - 20,
    y: window.innerHeight - CONFIG.renderedHeight - 20,
  }))
  const [targetPosition, setTargetPosition] = useState<Position>(position)
  const [animation, setAnimation] = useState<AnimationName>("idle")
  const [direction, setDirection] = useState<"left" | "right">("left")
  const [isIdle, setIsIdle] = useState(true)
  const [hasReachedTarget, setHasReachedTarget] = useState(true)
  const [clickBoost, setClickBoost] = useState(0)

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lastIdleAnimationRef = useRef<AnimationName | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const isPlayingIdleRef = useRef(false)
  const boostDecayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const currentPositionRef = useRef(position)
  const targetPositionRef = useRef(targetPosition)
  const hasReachedTargetRef = useRef(hasReachedTarget)
  const clickBoostRef = useRef(clickBoost)

  useEffect(() => {
    currentPositionRef.current = position
  }, [position])

  useEffect(() => {
    targetPositionRef.current = targetPosition
  }, [targetPosition])

  useEffect(() => {
    hasReachedTargetRef.current = hasReachedTarget
  }, [hasReachedTarget])

  useEffect(() => {
    clickBoostRef.current = clickBoost
  }, [clickBoost])

  const getRandomIdleAnimation = useCallback((): AnimationName => {
    const availableAnimations = IDLE_ANIMATIONS.filter(
      (a) => a !== lastIdleAnimationRef.current
    )
    const randomAnimation =
      availableAnimations[
        Math.floor(Math.random() * availableAnimations.length)
      ]
    lastIdleAnimationRef.current = randomAnimation
    return randomAnimation
  }, [])

  useEffect(() => {
    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        rafId = null

        const newTarget = clampToViewport({
          x: e.clientX - CONFIG.cursorOffset.x,
          y: e.clientY - CONFIG.cursorOffset.y,
        })

        if (isPlayingIdleRef.current) {
          const dx = newTarget.x - currentPositionRef.current.x
          const dy = newTarget.y - currentPositionRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONFIG.idleDeadZone) return

          const nextDirection = dx > 0 ? "right" : "left"

          isPlayingIdleRef.current = false
          setDirection(nextDirection)
          setAnimation(nextDirection === "right" ? "runRight" : "runLeft")
        }

        setTargetPosition(newTarget)
        setIsIdle(false)
        setHasReachedTarget(false)

        if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
        idleTimerRef.current = setTimeout(() => {
          setIsIdle(true)
        }, CONFIG.idleThreshold)
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      if (rafId) cancelAnimationFrame(rafId)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const handleClick = () => {
      setClickBoost((prev) => Math.min(prev + 1, CONFIG.maxBoostClicks))
    }

    window.addEventListener("click", handleClick, { passive: true })

    return () => window.removeEventListener("click", handleClick)
  }, [])

  useEffect(() => {
    if (clickBoost === 0) return

    boostDecayTimerRef.current = setTimeout(() => {
      setClickBoost((prev) => Math.max(prev - 1, 0))
    }, CONFIG.boostDecayInterval)

    return () => {
      if (boostDecayTimerRef.current) clearTimeout(boostDecayTimerRef.current)
    }
  }, [clickBoost])

  useEffect(() => {
    const updatePosition = () => {
      const boostFactor = clickBoostRef.current / CONFIG.maxBoostClicks
      const speedMultiplier = 1 + boostFactor * (CONFIG.maxSpeedMultiplier - 1)
      const speed = CONFIG.walkSpeed * speedMultiplier

      setPosition((currentPos) => {
        const dx = targetPositionRef.current.x - currentPos.x
        const dy = targetPositionRef.current.y - currentPos.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < speed) {
          if (!hasReachedTargetRef.current) {
            queueMicrotask(() => {
              setHasReachedTarget(true)
              setClickBoost(0)
              setDirection(CONFIG.cursorOffset.x < 0 ? "left" : "right")
            })
            hasReachedTargetRef.current = true
          }

          return clampToViewport(targetPositionRef.current)
        }

        if (Math.abs(dx) > 0.5) {
          const newDirection = dx > 0 ? "right" : "left"
          queueMicrotask(() => setDirection(newDirection))
        }

        const ratio = speed / distance
        return clampToViewport({
          x: currentPos.x + dx * ratio,
          y: currentPos.y + dy * ratio,
        })
      })

      animationFrameRef.current = requestAnimationFrame(updatePosition)
    }

    animationFrameRef.current = requestAnimationFrame(updatePosition)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    let nextAnimation: AnimationName | null = null
    const runningAnimation = direction === "right" ? "runRight" : "runLeft"

    if (!isIdle || !hasReachedTarget) {
      if (isPlayingIdleRef.current) {
        isPlayingIdleRef.current = false
      }
      if (animation !== runningAnimation) {
        nextAnimation = runningAnimation
      }
    } else if (!isPlayingIdleRef.current) {
      isPlayingIdleRef.current = true
      const randomAnimation = getRandomIdleAnimation()
      if (animation !== randomAnimation) {
        nextAnimation = randomAnimation
      }
    }

    if (nextAnimation) {
      queueMicrotask(() => setAnimation(nextAnimation))
    }
  }, [isIdle, hasReachedTarget, animation, direction, getRandomIdleAnimation])

  const handleAnimationEnd = useCallback(() => {
    if (!isPlayingIdleRef.current) return

    if (isIdle && hasReachedTarget) {
      setAnimation(getRandomIdleAnimation())
    } else {
      isPlayingIdleRef.current = false
      setAnimation(direction === "right" ? "runRight" : "runLeft")
    }
  }, [isIdle, hasReachedTarget, direction, getRandomIdleAnimation])

  return {
    position,
    animation,
    direction,
    onAnimationEnd: handleAnimationEnd,
  }
}

const KEYFRAMES_CSS = (() => {
  const {
    frameWidth,
    frameHeight,
    renderedWidth,
    renderedHeight,
    gutter,
    animations,
  } = CONFIG

  const scaleX = renderedWidth / frameWidth
  const scaleY = renderedHeight / frameHeight

  return Object.entries(animations)
    .map(([name, anim]) => {
      const frameWidthWithGutter = (frameWidth + gutter) * anim.frames
      const yPos = anim.row * (frameHeight + gutter)
      const scaledYPos = yPos * scaleY

      return `
        @keyframes pumba-sprite-${name} {
          from { background-position: 0 -${scaledYPos}px; }
          to { background-position: -${frameWidthWithGutter * scaleX}px -${scaledYPos}px; }
        }
      `
    })
    .join("\n")
})()

export default function PumbaFollowerCore() {
  const { position, animation, onAnimationEnd } = usePumbaState()

  const animationStyle = ANIMATION_STYLES[animation]
  const transform = `translate3d(${position.x}px, ${position.y}px, 0)`

  return (
    <>
      <style>{KEYFRAMES_CSS}</style>
      <div
        className="pumba-follower dark:drop-shadow-sm dark:drop-shadow-stone-300"
        style={{ ...animationStyle, transform }}
        onAnimationEnd={onAnimationEnd}
        aria-hidden="true"
      />
    </>
  )
}
