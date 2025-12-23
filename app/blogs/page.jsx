import { blogs } from "@/lib/data"
import BlogCard from "@/components/blog-card"

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="max-w-3xl text-balance text-lg text-muted-foreground leading-relaxed">
          Discover insights into the world of fine jewelry, from expert care tips to the latest trends and the stories
          behind our exquisite pieces.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
