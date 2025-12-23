import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <span>•</span>
            <span>{blog.author}</span>
          </div>
          <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed">{blog.excerpt}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
