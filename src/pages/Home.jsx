import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/Card.jsx';
import {
  Search,
  ArrowUpDown,
  Lightbulb,
  Bell,
  SlidersHorizontal,
  BarChart,
  Percent,
  BrainCircuit,
  Check
} from 'lucide-react';
import { useInView } from '../hooks/useInView.js';

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
            <Button as={Link} to="/login" variant="primary" size="lg">Sign in as User</Button>
            <Button as={Link} to="/admin/login" variant="secondary" size="lg">Sign in as Admin</Button>
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
  const ref = useInView()
  return (
    <Card ref={ref} className="border-slate-700 bg-slate-800/60 hover-glow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-500/10 p-2 ring-1 ring-inset ring-indigo-500/30">
            <Icon className="h-5 w-5 text-indigo-400" />
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
        <CardDescription className="text-slate-400">{desc}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function ForYou() {
  const features = [
    { icon: Search, title: 'Track Everything', desc: 'See all your subscriptions in one dashboard with smart categorization.' },
    { icon: ArrowUpDown, title: 'Pause or Switch', desc: 'Easily pause, upgrade, or switch plans without support tickets.' },
    { icon: Lightbulb, title: 'Smart Insights', desc: 'Get personalized recommendations to save money and optimize usage.' },
    { icon: Bell, title: 'Never Miss a Beat', desc: 'Custom alerts for renewals, price changes, and usage limits.' },
  ]

  return (
    <Section id="for-you" title="For You" subtitle="Take control of your digital life and spending.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  )
}

function ForBusiness() {
  const features = [
    { icon: SlidersHorizontal, title: 'Flexible Plans', desc: 'Create unlimited subscription plans with custom billing cycles.' },
    { icon: BarChart, title: 'Revenue Analytics', desc: 'Track MRR, churn, and growth metrics with detailed reporting.' },
    { icon: Percent, title: 'Smart Pricing', desc: 'A/B test pricing strategies with automated discount campaigns.' },
    { icon: BrainCircuit, title: 'AI-Powered Retention', desc: 'Predictive analytics to reduce churn and boost customer lifetime value.' },
  ]

  return (
    <Section id="for-business" title="For Business" subtitle="Scale your subscription business with confidence.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  )
}

function PlanCard({ name, price, audience, popular, cta, features }) {
  return (
    <div className={`relative rounded-2xl border p-8 ${
      popular 
        ? 'border-indigo-500/50 bg-indigo-500/5 ring-1 ring-inset ring-indigo-500/30' 
        : 'border-slate-700 bg-slate-800/60'
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="mt-4 flex items-baseline justify-center gap-x-2">
          <span className="text-4xl font-extrabold tracking-tight text-white">{price}</span>
          <span className="text-sm font-semibold leading-6 text-slate-400">/month</span>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-400">{audience}</p>
      </div>
      <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-300">
        {features.map((f) => (
          <li key={f} className="flex gap-x-3">
            <Check className="mt-0.5 h-4 w-4 text-indigo-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button as={Link} to={popular ? "/register" : "/register"} variant={popular ? 'primary' : 'secondary'} className="w-full">{cta}</Button>
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
      name: 'Enterprise', price: '$99', audience: 'For large organizations.', popular: false, cta: 'Contact Sales',
      features: ['Everything in Growth', 'Unlimited team seats', 'Priority support', 'Custom integrations', 'SLA guarantee']
    },
  ]

  return (
    <Section id="pricing" title="Simple, Transparent Pricing" subtitle="Choose the perfect plan for your needs. Upgrade or downgrade at any time.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
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
            <Button as={Link} to="/register" variant="primary" size="lg">Sign Up Now</Button>
            <Button as={Link} to="/login" variant="secondary" size="lg">Sign in as User</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
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
    </>
  );
}
