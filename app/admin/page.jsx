import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="mx-auto flex min-h-[600px] max-w-4xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Lock className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Admin Panel</CardTitle>
          <CardDescription>This section is coming in Phase 2</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {
              "The admin panel will include features for managing products, collections, orders, and customer information. This functionality will be implemented in the next phase of development."
            }
          </p>
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">Planned Features:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Product Management</li>
              <li>• Order Processing</li>
              <li>• Customer Management</li>
              <li>• Analytics Dashboard</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
