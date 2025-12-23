import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute right-3 top-3">{product.material}</Badge>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
            <span className="text-sm capitalize text-muted-foreground">{product.category}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
