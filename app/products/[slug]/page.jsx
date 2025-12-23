import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Heart, Share2 } from "lucide-react"
import ProductCard from "@/components/product-card"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="outline">{product.category}</Badge>
            <Badge>{product.material}</Badge>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">{product.name}</h1>

          <p className="mb-6 text-3xl font-bold">${product.price.toLocaleString()}</p>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mb-8 flex gap-4">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Collection</span>
              <Link
                href={`/collections/${product.collection}`}
                className="text-sm font-medium capitalize hover:text-accent"
              >
                {product.collection}
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Material</span>
              <span className="text-sm font-medium">{product.material}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Category</span>
              <span className="text-sm font-medium capitalize">{product.category}</span>
            </div>
          </div>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Handcrafted by master artisans</li>
                <li>• Ethically sourced materials</li>
                <li>• Lifetime warranty included</li>
                <li>• Free shipping on all orders</li>
                <li>• 30-day return policy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold tracking-tight">Related Products</h2>
            <p className="text-muted-foreground">
              {product.collection && `More from the ${product.collection} collection`}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
