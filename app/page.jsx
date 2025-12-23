import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import { products, collections } from "@/lib/data"

export default function Home() {
  const featuredProducts = products.slice(0, 4)
  const featuredCollections = collections

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20 px-4 py-20 md:min-h-[700px]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Exquisite Craftsmanship Since 1990</span>
          </div>
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Timeless Elegance in Every Detail
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
            Discover our curated collection of fine jewelry, where exceptional craftsmanship meets timeless design. Each
            piece tells a story of luxury and sophistication.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Link href="/collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Featured Products</h2>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground leading-relaxed">
              Handpicked pieces from our most sought-after collections
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">{product.material}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="bg-muted/30 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Collections</h2>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground leading-relaxed">
              Explore our carefully curated collections, each telling a unique story of elegance and artistry
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredCollections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.slug}`} className="group">
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/collections">
                Explore All Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Experience Luxury Craftsmanship
          </h2>
          <p className="mb-8 text-balance text-lg text-muted-foreground leading-relaxed">
            {
              "Visit our showroom or schedule a private consultation to explore our exclusive collections and find the perfect piece that speaks to you."
            }
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
