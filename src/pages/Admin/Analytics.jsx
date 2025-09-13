import React, { useEffect, useMemo, useState } from 'react'
import { BarChart, DollarSign, Users } from 'lucide-react'

export default function Analytics() {
  // Read plans, discounts and subscriptions from localStorage (seeded by other admin pages)
  const [plans, setPlans] = useState([])
  const [discounts, setDiscounts] = useState([])
  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    try { setPlans(JSON.parse(localStorage.getItem('lq:plans:v1') || '[]')) } catch(e) {}
    try { setDiscounts(JSON.parse(localStorage.getItem('lq:discounts:v1') || '[]')) } catch(e) {}
    try { setSubscriptions(JSON.parse(localStorage.getItem('lq:subscriptions:v1') || '[]')) } catch(e) {}

    // If there are no subscriptions seeded, add a few mock subscriptions to demonstrate analytics (non-destructive only if none exist)
    const rawSubs = localStorage.getItem('lq:subscriptions:v1')
    if (!rawSubs) {
      const now = new Date()
      const sample = [
        { id: 's1', planId: 'plan_pro', price: 12, start: new Date(now.getFullYear(), now.getMonth(), 2).toISOString() },
        { id: 's2', planId: 'plan_pro', price: 12, start: new Date(now.getFullYear(), now.getMonth()-1, 5).toISOString() },
        { id: 's3', planId: 'plan_enterprise', price: 99, start: new Date(now.getFullYear(), now.getMonth()-3, 1).toISOString() },
      ]
      localStorage.setItem('lq:subscriptions:v1', JSON.stringify(sample))
      setSubscriptions(sample)
    }
  }, [])

  // compute metrics
  const totalPlans = plans.length
  const activePlans = plans.filter(p => p.active).length
  const totalDiscounts = discounts.length
  const totalSubs = subscriptions.length
  const totalRevenue = subscriptions.reduce((s, r) => s + (Number(r.price) || 0), 0)

  // revenue per month (last 6 months)
  const revenueByMonth = useMemo(() => {
    const now = new Date()
    const buckets = []
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`
      buckets.push({ key, label: d.toLocaleString(undefined, { month: 'short' }), value: 0 })
    }
    subscriptions.forEach(s => {
      const dt = new Date(s.start)
      const key = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}`
      const b = buckets.find(x => x.key === key)
      if (b) b.value += Number(s.price) || 0
    })
    return buckets
  }, [subscriptions])

  return (
    <div className="min-h-screen bg-slate-900 p-6 text-slate-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Analytics</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800 p-4 rounded border border-slate-700 flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded">
              <Users className="h-6 w-6 text-indigo-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Total subscriptions</div>
              <div className="text-xl font-semibold">{totalSubs}</div>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded border border-slate-700 flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded">
              <DollarSign className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Total revenue</div>
              <div className="text-xl font-semibold">${totalRevenue.toFixed(2)}</div>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded border border-slate-700 flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 rounded">
              <BarChart className="h-6 w-6 text-sky-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Active plans</div>
              <div className="text-xl font-semibold">{activePlans}/{totalPlans}</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Revenue (last 6 months)</h2>

          <div className="space-y-3">
            {revenueByMonth.map((b, i) => (
              <div key={b.key} className="flex items-center gap-4">
                <div className="w-20 text-sm text-slate-400">{b.label}</div>
                <div className="flex-1 h-6 bg-slate-700 rounded overflow-hidden">
                  <div style={{ width: `${(b.value / Math.max(...revenueByMonth.map(x => x.value), 1)) * 100}%` }} className="h-full bg-emerald-500/60" />
                </div>
                <div className="w-24 text-right text-sm font-medium">${b.value.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
