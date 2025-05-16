import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle, Search } from "lucide-react"
import MaterialFormList from "@/components/material-form-list"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="cursor-pointer">
              <h1 className="text-xl font-semibold tracking-tight">
                <span className="text-zinc-900">scheda</span>
                <span className="text-emerald-600">.ai</span>
              </h1>
            </Link>
          </div>
          <div className="flex w-full max-w-sm items-center gap-2 px-8">
            <Search className="h-4 w-4 text-zinc-500" />
            <Input
              type="search"
              placeholder="Search materials..."
              className="h-9 border-none bg-transparent shadow-none focus-visible:ring-0"
            />
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-emerald-600">
              Dashboard
            </Link>
            <Link href="/materials" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Materials
            </Link>
            <Link href="/reports" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Reports
            </Link>
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-sm font-medium text-emerald-700">DL</span>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Material Validation</h2>
              <p className="mt-1 text-zinc-500">
                Review and approve construction material forms submitted by contractors.
              </p>
            </div>
            <Link href="/materials/new">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                <PlusCircle className="h-4 w-4" />
                New Material Form
              </Button>
            </Link>
          </div>
          <MaterialFormList />
        </div>
      </main>
    </div>
  )
}
