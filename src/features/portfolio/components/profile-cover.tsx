import { cn } from "@/lib/utils"

export function ProfileCover() {
  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "screen-line-before screen-line-after before:-top-px",
        "overflow-hidden"
      )}
    >
      <img
        src="/assets/banner.jpg"
        alt="Banner"
        className="h-full w-full object-cover"
        fetchPriority="high"
      />
    </div>
  )
}
