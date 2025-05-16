import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarSrc: string
}

export default function TestimonialCard({ quote, author, role, avatarSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-6">
          <svg className="h-8 w-8 text-emerald-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="mb-6 text-zinc-700">{quote}</p>
        <div className="flex items-center gap-4">
          <img src={avatarSrc || "/placeholder.svg"} alt={author} className="h-10 w-10 rounded-full object-cover" />
          <div>
            <h4 className="font-medium text-zinc-900">{author}</h4>
            <p className="text-sm text-zinc-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
