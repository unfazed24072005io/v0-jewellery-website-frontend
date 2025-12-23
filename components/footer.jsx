import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { href: "/products", label: "Products" },
    { href: "/collections", label: "Collections" },
    { href: "/blogs", label: "Blog" },
    { href: "/about", label: "About Us" },
  ]

  const support = [
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Shipping" },
    { href: "#", label: "Returns" },
    { href: "#", label: "FAQ" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">LUXE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {
                "Crafting timeless elegance since 1990. Discover exceptional jewelry that celebrates life's precious moments."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <p className="text-sm text-muted-foreground">Email: info@luxejewelry.com</p>
            <p className="text-sm text-muted-foreground">Phone: +1 (555) 123-4567</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LUXE Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
