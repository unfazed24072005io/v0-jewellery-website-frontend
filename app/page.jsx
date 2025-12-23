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

      {/* HERO SECTION */}
      <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/jewelry.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            Exquisite Craftsmanship Since 1990
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Timeless Elegance in Every Detail
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Discover fine jewelry where luxury, precision, and timeless design come together.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Featured Products</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between">
                    <span className="text-xl font-bold">${product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">{product.material}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Our Collections</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredCollections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{collection.name}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
