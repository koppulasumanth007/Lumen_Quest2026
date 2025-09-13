import React, { useEffect, useState } from 'react'
import Button from '../../components/Button.jsx'
import { Plus, Edit2, Trash2 } from 'lucide-react'

const LS_KEY = 'lq:discounts:v1'

function defaultDiscounts() {
  return [
    { id: 'd10', code: 'WELCOME10', percent: 10, expires: null, active: true, appliesTo: [] },
    { id: 'd25', code: 'SUMMER25', percent: 25, expires: null, active: false, appliesTo: ['plan_pro'] },
  ]
}

export function ManageDiscountsComponent() {
  const [discounts, setDiscounts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ id: '', code: '', percent: 0, expires: '', active: true, appliesTo: '' })

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      try { setDiscounts(JSON.parse(raw)); return } catch(e) {}
    }
    const ds = defaultDiscounts()
    localStorage.setItem(LS_KEY, JSON.stringify(ds))
    setDiscounts(ds)
  }, [])

  useEffect(() => { localStorage.setItem(LS_KEY, JSON.stringify(discounts)) }, [discounts])

  function openCreate() {
    setForm({ id: `d_${Date.now()}`, code: '', percent: 0, expires: '', active: true, appliesTo: '' })
    setEditing(null)
    setShowForm(true)
  }

  function openEdit(d) {
    setForm({ id: d.id, code: d.code, percent: d.percent, expires: d.expires || '', active: !!d.active, appliesTo: (d.appliesTo || []).join(', ') })
    setEditing(d.id)
    setShowForm(true)
  }

  function save(e) {
    e.preventDefault()
    const appliesTo = form.appliesTo.split(',').map(s => s.trim()).filter(Boolean)
    const disc = { id: form.id, code: (form.code || '').toUpperCase(), percent: Number(form.percent) || 0, expires: form.expires || null, active: !!form.active, appliesTo }
    setDiscounts(prev => {
      const found = prev.find(p => p.id === disc.id)
      if (found) return prev.map(p => p.id === disc.id ? { ...p, ...disc } : p)
      return [...prev, disc]
    })
    setShowForm(false)
    setEditing(null)
  }

  function remove(id) {
    if (!confirm('Delete discount?')) return
    setDiscounts(prev => prev.filter(d => d.id !== id))
  }

  return (
    <div className="min-h-screen p-6 bg-slate-900 text-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Manage Discounts</h1>
          <Button onClick={openCreate} className="flex items-center gap-2"><Plus className="h-4 w-4" /> New discount</Button>
        </div>

        <div className="space-y-3">
          {discounts.map(d => (
            <div key={d.id} className="bg-slate-800 p-4 rounded border border-slate-700 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{d.code} <span className="text-sm text-slate-400">— {d.percent}% off</span></div>
                <div className="text-sm text-slate-300">Applies to: {d.appliesTo && d.appliesTo.length ? d.appliesTo.join(', ') : 'All plans'}</div>
                <div className="text-xs text-slate-400">Expires: {d.expires ? new Date(d.expires).toLocaleDateString() : 'Never'}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => openEdit(d)} className="p-1 rounded hover:bg-slate-700"><Edit2 className="h-5 w-5" /></button>
                <button onClick={() => remove(d.id)} className="p-1 rounded hover:bg-slate-700"><Trash2 className="h-5 w-5" /></button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="fixed inset-0 z-50 flex">
            <div className="flex-1" onClick={() => setShowForm(false)} />
            <form onSubmit={save} className="w-full max-w-lg bg-slate-800 border-l border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{editing ? 'Edit discount' : 'Create discount'}</h3>
                <button type="button" onClick={() => setShowForm(false)} className="text-slate-400">Close</button>
              </div>

              <label className="block mb-2 text-sm">Code</label>
              <input required className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} />

              <label className="block mb-2 text-sm">Percent (%)</label>
              <input type="number" min="0" max="100" className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.percent} onChange={e => setForm({ ...form, percent: e.target.value })} />

              <label className="block mb-2 text-sm">Expires (optional date)</label>
              <input type="date" className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.expires} onChange={e => setForm({ ...form, expires: e.target.value })} />

              <label className="block mb-2 text-sm">Applies to (comma separated plan ids)</label>
              <input className="w-full mb-3 p-2 rounded bg-slate-900 border border-slate-700" value={form.appliesTo} onChange={e => setForm({ ...form, appliesTo: e.target.value })} />

              <div className="mt-4 flex gap-2">
                <Button type="submit">Save</Button>
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default ManageDiscountsComponent
