import React, { useEffect, useState } from 'react'
import Button from '../../components/Button.jsx'
import { Plus, Edit2, Trash2, ToggleLeft } from 'lucide-react'

// LocalStorage key used by this UI (non-destructive). Replace with real API calls
const LS_KEY = 'lq:plans:v1'

function defaultPlans() {
  return [
    {
      id: 'plan_free',
      name: 'Free',
      price: 0,
      billing: 'monthly',
      features: ['1 project', 'Community support'],
      active: true,
    },
    {
      id: 'plan_pro',
      name: 'Pro',
      price: 12,
      billing: 'monthly',
      features: ['10 projects', 'Email support', 'Analytics'],
      active: true,
    },
    {
      id: 'plan_enterprise',
      name: 'Enterprise',
      price: 99,
      billing: 'yearly',
      features: ['Unlimited projects', 'Priority support', 'SLA'],
      active: false,
    },
  ]
}

export default function ManagePlans() {
  const [plans, setPlans] = useState([])
  const [editing, setEditing] = useState(null) // plan object when editing
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ id: '', name: '', price: '', billing: 'monthly', features: '' })

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      try {
        setPlans(JSON.parse(raw))
        return
      } catch (e) {
        // fallthrough
      }
    }
    const initial = defaultPlans()
    localStorage.setItem(LS_KEY, JSON.stringify(initial))
    setPlans(initial)
  }, [])

  useEffect(() => {
    // persist plans
    localStorage.setItem(LS_KEY, JSON.stringify(plans))
  }, [plans])

  function openCreate() {
    setForm({ id: `plan_${Date.now()}`, name: '', price: '', billing: 'monthly', features: '' })
    setEditing(null)
    setShowForm(true)
  }

  function openEdit(p) {
    setForm({ id: p.id, name: p.name, price: p.price, billing: p.billing, features: p.features.join(', ') })
    setEditing(p.id)
    setShowForm(true)
  }

  function savePlan(e) {
    e.preventDefault()
    const features = form.features.split(',').map(s => s.trim()).filter(Boolean)
    const plan = { id: form.id, name: form.name || 'Untitled', price: Number(form.price) || 0, billing: form.billing, features, active: true }
    setPlans(prev => {
      const found = prev.find(p => p.id === plan.id)
      if (found) {
        return prev.map(p => p.id === plan.id ? { ...p, ...plan } : p)
      }
      return [...prev, plan]
    })
    setShowForm(false)
    setEditing(null)
  }

  function deletePlan(id) {
    if (!confirm('Delete plan? This action is irreversible.')) return
    setPlans(prev => prev.filter(p => p.id !== id))
  }

  function toggleActive(id) {
    setPlans(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p))
  }

  return (
    <div className="min-h-screen p-6 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Manage Plans</h1>
          <div className="flex items-center gap-2">
            <Button onClick={openCreate} as="button" className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> New plan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map(plan => (
            <div key={plan.id} className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">{plan.name}</h2>
                  <p className="text-sm text-slate-300">{plan.billing === 'monthly' ? `$${plan.price}/mo` : `$${plan.price}/yr`}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button title="Toggle active" onClick={() => toggleActive(plan.id)} className="p-1 rounded-md hover:bg-slate-700">
                    <ToggleLeft className={`h-5 w-5 ${plan.active ? 'text-emerald-400' : 'text-slate-500'}`} />
                  </button>
                  <button title="Edit" onClick={() => openEdit(plan)} className="p-1 rounded-md hover:bg-slate-700">
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button title="Delete" onClick={() => deletePlan(plan.id)} className="p-1 rounded-md hover:bg-slate-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <ul className="mt-4 text-sm text-slate-300 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className={`px-2 py-1 rounded ${plan.active ? 'bg-emerald-600/20 text-emerald-300' : 'bg-slate-700/40 text-slate-400'}`}>
                  {plan.active ? 'Active' : 'Inactive'}
                </span>
                <span className="text-slate-400">ID: <span className="text-xs">{plan.id}</span></span>
              </div>
            </div>
          ))}
        </div>

        {/* Slide-over form */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex">
            <div className="flex-1" onClick={() => { setShowForm(false); setEditing(null) }} />
            <form onSubmit={savePlan} className="w-full max-w-md bg-slate-800 border-l border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{editing ? 'Edit plan' : 'Create plan'}</h3>
                <button type="button" onClick={() => { setShowForm(false); setEditing(null) }} className="text-slate-400">Cancel</button>
              </div>

              <label className="block mb-2 text-sm">Name</label>
              <input className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />

              <label className="block mb-2 text-sm">Price (number)</label>
              <input type="number" className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />

              <label className="block mb-2 text-sm">Billing</label>
              <select className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.billing} onChange={e => setForm({ ...form, billing: e.target.value })}>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>

              <label className="block mb-2 text-sm">Features (comma separated)</label>
              <input className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.features} onChange={e => setForm({ ...form, features: e.target.value })} />

              <div className="mt-6 flex items-center gap-2">
                <Button type="submit">Save plan</Button>
                <Button as="button" type="button" variant="secondary" onClick={() => { setShowForm(false); setEditing(null) }}>Cancel</Button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}
