import { useState } from 'react'
import { useSite } from '../context/SiteContext'

const categories = ['lessons', 'books', 'files', 'videos']
const types = ['pdf', 'video', 'link', 'file']

export default function AdminPage() {
  const { t, content, addDomainResource, addUsefulResource, deleteDomainResource, deleteUsefulResource } = useSite()
  const [resource, setResource] = useState({ domainId: content.domains[0]?.id || '', category: 'lessons', type: 'link', title: '', description: '', url: '' })
  const [useful, setUseful] = useState({ name: '', category: '', url: '' })

  const submitResource = (e) => {
    e.preventDefault()
    addDomainResource(resource.domainId, resource.category, {
      id: `res-${Date.now()}`,
      title: resource.title,
      description: resource.description,
      type: resource.type,
      url: resource.url,
    })
    setResource((p) => ({ ...p, title: '', description: '', url: '' }))
  }

  const submitUseful = (e) => {
    e.preventDefault()
    addUsefulResource({ id: `use-${Date.now()}`, ...useful })
    setUseful({ name: '', category: '', url: '' })
  }

  const handleDeleteResource = (domainId, category, resourceId) => {
    if (window.confirm('Delete this resource?')) {
      deleteDomainResource(domainId, category, resourceId)
    }
  }

  const handleDeleteUseful = (resourceId) => {
    if (window.confirm('Delete this resource?')) {
      deleteUsefulResource(resourceId)
    }
  }

  return (
    <main className="admin-page">
      <div className="admin-header">
        <h1>{t.adminTitle}</h1>
        <p>{t.adminDesc}</p>
      </div>

      <form className="admin-form" onSubmit={submitResource}>
        <h3>{t.addResource}</h3>
        <select value={resource.domainId} onChange={(e) => setResource((p) => ({ ...p, domainId: e.target.value }))}>
          {content.domains.map((d) => <option key={d.id} value={d.id}>{d.title.en}</option>)}
        </select>
        <select value={resource.category} onChange={(e) => setResource((p) => ({ ...p, category: e.target.value }))}>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={resource.type} onChange={(e) => setResource((p) => ({ ...p, type: e.target.value }))}>
          {types.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
        </select>
        <input placeholder={t.title} value={resource.title} onChange={(e) => setResource((p) => ({ ...p, title: e.target.value }))} required />
        <textarea placeholder={t.description} value={resource.description} onChange={(e) => setResource((p) => ({ ...p, description: e.target.value }))} required />
        <input placeholder="https://..." value={resource.url} onChange={(e) => setResource((p) => ({ ...p, url: e.target.value }))} required />
        <button type="submit">{t.addResource}</button>
      </form>

      <form className="admin-form" onSubmit={submitUseful}>
        <h3>{t.addUseful}</h3>
        <input placeholder={t.title} value={useful.name} onChange={(e) => setUseful((p) => ({ ...p, name: e.target.value }))} required />
        <input placeholder={t.category} value={useful.category} onChange={(e) => setUseful((p) => ({ ...p, category: e.target.value }))} required />
        <input placeholder="https://..." value={useful.url} onChange={(e) => setUseful((p) => ({ ...p, url: e.target.value }))} required />
        <button type="submit">{t.addUseful}</button>
      </form>

      <div className="admin-list">
        <h3>Existing Resources</h3>
        {content.domains.map((domain) => (
          <div key={domain.id} className="admin-domain">
            <h4>{domain.title.en}</h4>
            {categories.map((cat) => (
              <div key={cat} className="admin-category">
                <h5>{cat}</h5>
                {domain.resources[cat]?.map((r) => (
                  <div key={r.id} className="admin-item">
                    <span>{r.title}</span>
                    <button onClick={() => handleDeleteResource(domain.id, cat, r.id)}>Delete</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}