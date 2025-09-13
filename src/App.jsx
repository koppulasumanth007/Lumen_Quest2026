import './App.css'
import { clsx } from 'clsx'
import { useInView } from './hooks/useInView.js'
import Button from './components/Button.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import { Card, CardHeader, CardTitle, CardDescription } from './components/Card.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import {
  Search,
  ArrowUpDown,
  Lightbulb,
  Bell,
  SlidersHorizontal,
  BarChart,
  Percent,
  BrainCircuit,
  Check,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react'

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
            <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">SubScribeFlow</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            ['#features', 'Features'],
            ['#for-you', 'For You'],
            ['#for-business', 'For Business'],
            ['#pricing', 'Pricing']
          ].map(([href, label]) => (
            <a key={href} href={href} className="group relative text-sm font-semibold text-white/90 hover:text-white transition-colors">
              {label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button as="a" href="#login" variant="secondary" size="sm" className="hidden sm:inline-flex">
            Log In
          </Button>
          <Button as="a" href="#demo" variant="primary" size="sm">
            Request a Demo
          </Button>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 id="hero-title" className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-up">
            Effortless Subscriptions for You and Your Customers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            Take control of your plans, automate billing, and grow with insights — all in one secure, modern platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            <Button as="a" href="#pricing" variant="primary" size="lg">Explore Plans</Button>
            <Button as="a" href="#demo" variant="secondary" size="lg">Request a Demo</Button>
          </div>
        </div>

        {/* Futuristic dashboard visual */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-in-up" style={{ animationDelay: '320ms' }} aria-hidden>
          <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="h-40 w-full rounded-md bg-gradient-to-br from-indigo-500/10 via-indigo-400/5 to-transparent relative overflow-hidden">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 160">
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity=".25" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity=".05" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <polyline filter="url(#glow)" fill="none" stroke="url(#g)" strokeWidth="3" points="0,120 40,110 80,95 120,105 160,70 200,90 240,65 280,80 320,40 360,55 400,30" />
                    <polyline fill="none" stroke="#6366F1" strokeOpacity="0.45" strokeWidth="1.5" points="0,130 40,120 80,100 120,110 160,75 200,92 240,70 280,82 320,45 360,58 400,35" />
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                  {["Active", "Churn", "MRR"].map((k, i) => (
                    <div key={k} className="rounded-lg border border-white/10 bg-slate-800/70 p-3 animate-float" style={{ animationDelay: `${i * 200}ms` }}>
                      <div className="text-slate-400">{k}</div>
                      <div className="mt-1 text-white font-semibold">{i === 0 ? "12,842" : i === 1 ? "2.1%" : "$94.2k"}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 grid gap-4">
                {["Basic", "Pro", "Growth"].map((p, idx) => (
                  <div key={p} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 hover-glow transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold">{p}</div>
                      <span className="text-indigo-300 text-xs">{idx === 2 ? "Popular" : ""}</span>
                    </div>
                    <div className="mt-2 text-slate-300 text-sm">${idx === 0 ? "9" : "29"}/{"mo"}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  const { ref, inView } = useInView()
  return (
    <Card ref={ref} className={clsx(inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4')}>
      <Icon className="h-6 w-6 text-indigo-400" />
      <CardHeader className="mt-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2">{desc}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function ForYou() {
  const features = [
    { icon: Search, title: 'Find & Track', desc: 'Search and track all your personal subscriptions in one place.' },
    { icon: ArrowUpDown, title: 'Pause or Switch', desc: 'Easily pause, upgrade, or switch plans without support tickets.' },
    { icon: Lightbulb, title: 'Smart Suggestions', desc: 'Get tailored recommendations to save money and time.' },
    { icon: Bell, title: 'Proactive Alerts', desc: 'Never miss a renewal with intelligent reminders.' },
  ]
  return (
    <Section id="for-you" title="Your Subscriptions, Your Way.">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </Section>
  )
}

function ForBusiness() {
  const { ref, inView } = useInView({ threshold: 0.12 })
  const features = [
    { icon: SlidersHorizontal, title: 'Flexible Plans', desc: 'Configure pricing, trials, and discounts programmatically.' },
    { icon: BarChart, title: 'Analytics', desc: 'Monitor MRR, churn, and cohorts with real-time dashboards.' },
    { icon: Percent, title: 'Revenue Optimization', desc: 'Run promotions and localized pricing with ease.' },
    { icon: BrainCircuit, title: 'Automation', desc: 'Automate dunning, retries, and lifecycle events.' },
  ]

  return (
    <section id="for-business" className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={ref} className={clsx("grid grid-cols-1 gap-10 md:grid-cols-2 items-center", inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4')}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Power Your Subscription Business.</h2>
            <p className="mt-3 text-slate-300">Tools that scale with your team, from startups to enterprise.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
          <div aria-hidden className="relative">
            <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 shadow-2xl">
              {/* Analytics mock */}
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs text-slate-400">Revenue Overview · Last 12 months</div>
                </div>
                <div className="mt-4 grid grid-cols-12 items-end gap-1 h-40">
                  {[14, 22, 18, 26, 30, 28, 34, 38, 36, 40, 44, 42].map((h, i) => (
                    <div key={i} className="bg-indigo-500/70 rounded-sm" style={{ height: `${h * 2}px` }} />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                  {[['MRR', '$94.2k'], ['Churn', '2.1%'], ['ARPU', '$38.7']].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-white/10 bg-slate-800/70 p-3">
                      <div className="text-slate-400">{k}</div>
                      <div className="mt-1 text-white font-semibold">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ name, price, audience, popular, features, cta }) {
  return (
    <div className={clsx(
      'flex flex-col rounded-2xl border bg-slate-800/70 p-6',
      popular ? 'border-indigo-400/60 ring-1 ring-inset ring-indigo-400/40 bg-gradient-to-b from-indigo-500/5 to-slate-800/70' : 'border-white/10'
    )}>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {popular && <span className="badge">Most Popular</span>}
      </div>
      <p className="mt-1 text-slate-300 text-sm">{audience}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-white">{price}</span>
        <span className="text-slate-400">/mo</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-slate-200">
            <Check className="mt-0.5 h-4 w-4 text-indigo-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button as="a" href="#" variant={popular ? 'primary' : 'secondary'} className="w-full">{cta}</Button>
      </div>
    </div>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Starter', price: '$9', audience: 'For individuals getting started.', popular: false, cta: 'Get Started',
      features: ['Track 10 subscriptions', 'Smart reminders', 'Basic insights']
    },
    {
      name: 'Growth', price: '$29', audience: 'Most teams choose this to scale.', popular: true, cta: 'Choose Growth',
      features: ['Unlimited subscriptions', 'Team seats (up to 10)', 'Advanced analytics', 'Automation workflows']
    },
    {
      name: 'Enterprise', price: 'Custom', audience: 'Advanced security and scale.', popular: false, cta: 'Contact Sales',
      features: ['SSO/SAML', 'Priority support', 'Dedicated success', 'Custom SLAs']
    }
  ]

  return (
    <Section id="pricing" title="Simple, Transparent Pricing.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <PricingCard key={p.name} {...p} />
        ))}
      </div>
    </Section>
  )
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-500/10 to-transparent p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Revolutionize Your Subscription Management?</h2>
          <p className="mt-3 text-slate-200">Join SubScribeFlow today and take control with powerful automation and insights.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="a" href="#signup" variant="primary" size="lg">Sign Up Now</Button>
            <Button as="a" href="#demo" variant="secondary" size="lg">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
                <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">SubScribeFlow</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white" href="#for-you">For You</a></li>
              <li><a className="hover:text-white" href="#for-business">For Business</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#">About Us</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">© 2025 SubScribeFlow. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-full relative">
      <BackgroundFX />
      <NavBar />
      <Hero />
      <Section id="features" title="Everything You Need To Manage Subscriptions" subtitle="A complete toolkit from plan configuration to analytics and automation." >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Search} title="Unified Search" desc="Quickly find plans, customers, and invoices." />
          <FeatureCard icon={ArrowUpDown} title="Plan Changes" desc="Handle upgrades, downgrades, and proration." />
          <FeatureCard icon={BarChart} title="Insights" desc="Understand revenue and churn at a glance." />
          <FeatureCard icon={Bell} title="Alerts" desc="Proactive billing and renewal notifications." />
        </div>
      </Section>
      <ForYou />
      <ForBusiness />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
