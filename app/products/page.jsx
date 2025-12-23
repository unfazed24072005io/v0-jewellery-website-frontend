"use client"

import { useState } from "react"
import { products } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { SlidersHorizontal } from "lucide-react"

export default function ProductsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 5000])

  const categories = [...new Set(products.map((p) => p.category))]
  const materials = [...new Set(products.map((p) => p.material))]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Products</h1>
        <p className="text-balance text-lg text-muted-foreground leading-relaxed">
          Browse our exquisite collection of fine jewelry, crafted with precision and passion
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{products.length} products</p>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden bg-transparent"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar Filters */}
        <aside className={`w-full md:w-64 ${showFilters ? "block" : "hidden md:block"}`}>
          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <Checkbox id={`category-${category}`} />
                    <Label htmlFor={`category-${category}`} className="cursor-pointer capitalize">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            {/* Material Filter */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center gap-2">
                    <Checkbox id={`material-${material}`} />
                    <Label htmlFor={`material-${material}`} className="cursor-pointer">
                      {material}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium">Price Range</h3>
              <Slider min={0} max={5000} step={100} value={priceRange} onValueChange={setPriceRange} className="mb-4" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              Reset Filters
            </Button>
          </Card>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
