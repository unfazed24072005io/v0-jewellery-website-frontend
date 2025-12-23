import Image from "next/image"
import { notFound } from "next/navigation"
import { collections, products } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

export default function CollectionDetailPage({ params }) {
  const collection = collections.find((c) => c.slug === params.slug)

  if (!collection) {
    notFound()
  }

  const collectionProducts = products.filter((p) => p.collection === collection.slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Collection Header */}
      <div className="mb-12">
        <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-lg bg-muted">
          <Image
            src={collection.image || "/placeholder.svg"}
            alt={collection.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <Badge className="mb-4">{collection.productCount} pieces</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">{collection.name}</h1>
            <p className="max-w-2xl text-balance text-lg text-white/90 leading-relaxed">{collection.description}</p>
          </div>
        </div>
      </div>

      {/* Collection Products */}
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Products in this Collection</h2>
        <p className="text-muted-foreground">
          {collectionProducts.length} {collectionProducts.length === 1 ? "piece" : "pieces"} available
        </p>
      </div>

      {collectionProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">No products found in this collection</p>
          </div>
        </div>
      )}
    </div>
  )
}
