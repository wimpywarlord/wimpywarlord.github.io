import { cn } from "@/lib/utils"

type GlitchyAvatarProps = {
  className?: string
  alt: string
}

export function GlitchyAvatar({ className, alt }: GlitchyAvatarProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full select-none",
        className
      )}
      role="img"
      aria-label={alt}
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

      {/* Static Silver Surfer on top */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 20%" }}
        alt={alt}
        src="/assets/pfp/silver_surfer-removebg.png"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  )
}
