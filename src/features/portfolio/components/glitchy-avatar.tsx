import { cn } from "@/lib/utils"

type GlitchyAvatarProps = {
  className?: string
  alt: string
}

export function GlitchyAvatar({ className, alt }: GlitchyAvatarProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-full select-none", className)}
      role="img"
      aria-label={alt}
    >
      <img
        className="h-full w-full object-cover"
        style={{ objectPosition: "center 20%" }}
        alt={alt}
        src="/assets/pfp/silver_surfer.jpg"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  )
}
