import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-zinc-900">{title}</h3>
        <p className="text-zinc-600">{description}</p>
      </CardContent>
    </Card>
  )
}
