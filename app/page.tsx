import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, ShieldCheck, Zap } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Colorful Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -left-10 -top-40 h-[500px] w-[500px] rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute -bottom-20 right-20 h-[600px] w-[600px] rounded-full bg-emerald-300/30 blur-3xl"></div>
          <div className="absolute bottom-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl"></div>
        </div>

        <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="cursor-pointer">
                <h1 className="text-xl font-semibold tracking-tight text-white">
                  <span>scheda</span>
                  <span className="text-emerald-200">.ai</span>
                </h1>
              </Link>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/features" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-white text-emerald-600 hover:bg-white/90">Sign up</Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Streamline Construction Material Validation
            </h1>
            <p className="mt-6 text-xl text-white/80">
              scheda.ai simplifies the approval process for construction materials, ensuring compliance and reducing
              delays in your projects.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="scheda.ai dashboard preview"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="h-[60px] w-full fill-zinc-50 md:h-[120px]"
            preserveAspectRatio="none"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-zinc-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Simplify Your Material Approval Workflow
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Our platform streamlines the entire process from submission to final approval, saving time and reducing
              errors.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<FileText className="h-6 w-6 text-emerald-600" />}
              title="Document Management"
              description="Centralize all your material documentation in one secure location with automatic organization and versioning."
            />
            <FeatureCard
              icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
              title="Automated Pre-approval"
              description="Our AI-powered system automatically validates document consistency, reducing manual review time by 80%."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-emerald-600" />}
              title="Compliant Workflows"
              description="Built-in approval processes ensure all stakeholders review materials according to regulatory requirements."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-emerald-600" />}
              title="Real-time Updates"
              description="Receive instant notifications when materials are approved, rejected, or require additional information."
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6 text-emerald-600" />}
              title="Comprehensive Reporting"
              description="Generate detailed reports on material approval status, timelines, and compliance metrics."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-emerald-600" />}
              title="Secure Collaboration"
              description="Role-based access controls ensure each professional only sees what they need to review."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by Construction Professionals
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              See how scheda.ai has transformed material validation processes for leading construction firms.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="scheda.ai reduced our material approval time from weeks to days. The automated pre-approval system is a game-changer."
              author="Marco Bianchi"
              role="Project Manager, Costruzioni Italia"
              avatarSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The platform's intuitive interface made it easy for our entire team to adopt. We've seen a 40% reduction in documentation errors."
              author="Laura Romano"
              role="Technical Director, Edilizia Moderna"
              avatarSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="As a consultant, I can now review materials from anywhere. The mobile accessibility has improved our team's efficiency significantly."
              author="Giovanni Rossi"
              role="Fire Safety Consultant, Sicurezza Edile"
              avatarSrc="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-emerald-300/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Material Validation Process?
            </h2>
            <p className="mt-4 text-xl text-white/80">
              Join hundreds of construction firms already using scheda.ai to streamline their workflows.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">scheda.ai</h3>
              <p className="mt-4 text-sm text-zinc-600">
                Streamlining construction material validation for modern building projects.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-zinc-900">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/features" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-zinc-900">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-zinc-600 hover:text-emerald-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-zinc-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-sm text-zinc-600 hover:text-emerald-600">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-200 pt-8 text-center">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} scheda.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
