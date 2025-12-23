import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Heart, Shield, Sparkles } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "Exceptional Craftsmanship",
      description: "Each piece is meticulously handcrafted by master artisans with decades of experience.",
    },
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description: "We are committed to ethically sourced materials and sustainable practices.",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Every piece comes with our lifetime warranty, ensuring lasting quality and peace of mind.",
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Our designs have been recognized with numerous international jewelry awards.",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Crafting Timeless Elegance Since 1990
          </h1>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              {
                "LUXE was founded with a singular vision: to create jewelry that transcends trends and becomes cherished heirlooms. For over three decades, we've been crafting exceptional pieces that celebrate life's most precious moments."
              }
            </p>
            <p>
              {
                "Our master artisans combine traditional jewelry-making techniques with contemporary design sensibilities, ensuring each piece is both timeless and relevant. From sourcing the finest materials to the final polish, every step reflects our unwavering commitment to excellence."
              }
            </p>
            <p>
              {
                "Today, LUXE continues to set the standard for fine jewelry, serving discerning clients worldwide who appreciate the perfect marriage of artistry, quality, and sophistication."
              }
            </p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted lg:aspect-[4/5]">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="LUXE Jewelry Workshop"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground leading-relaxed">
            The principles that guide everything we create
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="rounded-lg bg-muted/30 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              {
                "Founded by renowned jeweler Marcus Laurent in 1990, LUXE began as a small atelier in the heart of the jewelry district. Marcus's vision was simple yet profound: to create jewelry that would be treasured for generations."
              }
            </p>
            <p>
              {
                "What started as a one-person workshop has grown into an internationally recognized brand, yet we've never lost sight of our founding principles. Every piece is still crafted with the same attention to detail and passion that Marcus brought to his first creation."
              }
            </p>
            <p>
              {
                "Today, LUXE continues to honor this legacy while embracing innovation, creating jewelry that is both timeless and contemporary, traditional and avant-garde."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
