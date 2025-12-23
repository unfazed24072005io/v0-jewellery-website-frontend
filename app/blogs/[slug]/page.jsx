import Image from "next/image"
import { notFound } from "next/navigation"
import { blogs } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, User } from "lucide-react"
import BlogCard from "@/components/blog-card"

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Blog Header */}
      <article>
        <div className="mb-8">
          <Badge className="mb-4">Article</Badge>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-8 aspect-video overflow-hidden rounded-lg bg-muted">
          <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">{blog.excerpt}</p>

          <Separator className="my-8" />

          <div className="space-y-6 text-lg leading-relaxed">
            <p>{blog.content}</p>

            <p>
              {
                "Fine jewelry represents more than mere adornment; it embodies artistry, heritage, and personal significance. Each piece in our collection is meticulously crafted to honor these traditions while embracing contemporary elegance."
              }
            </p>

            <p>
              {
                "Our master artisans dedicate countless hours to perfecting every detail, ensuring that each creation meets the highest standards of quality and craftsmanship. From selecting the finest materials to executing intricate designs, every step reflects our commitment to excellence."
              }
            </p>

            <p>
              {
                "Whether you're seeking a statement piece for a special occasion or a timeless treasure to pass down through generations, our collection offers something truly extraordinary. We invite you to explore and discover the perfect piece that speaks to your unique story."
              }
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="mt-16">
          <Separator className="mb-8" />
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard key={relatedBlog.id} blog={relatedBlog} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
