import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CollectionCard({ collection }) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={collection.image || "/placeholder.svg"}
            alt={collection.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{collection.name}</CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed">{collection.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{collection.productCount} pieces</p>
        </CardContent>
      </Card>
    </Link>
  )
}
