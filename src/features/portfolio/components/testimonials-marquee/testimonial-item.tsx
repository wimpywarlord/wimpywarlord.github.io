import type { Testimonial as TestimonialType } from "../../types/testimonials"

export function TestimonialItem({
  authorName,
  quote,
}: TestimonialType) {
  return (
    <div className="p-4">
      <p className="line-clamp-3 text-sm">{quote}</p>
      <p className="mt-2 text-xs text-muted-foreground">{authorName}</p>
    </div>
  )
}
