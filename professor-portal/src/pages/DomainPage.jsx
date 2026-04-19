import { useParams, Link } from 'react-router-dom'
import { useSite } from '../context/SiteContext'

export default function DomainPage() {
  const { id } = useParams()
  const { content, t } = useSite()
  const domain = content.domains.find((d) => d.id === id)

  if (!domain) return <main className="domain-page"><p>Domain not found</p></main>

  const categories = [
    { key: 'lessons', label: t.lessons },
    { key: 'books', label: t.books },
    { key: 'files', label: t.files },
    { key: 'videos', label: t.videos },
  ]

  return (
    <main className="domain-page">
      <Link to="/" className="back-link">← {t.home}</Link>
      
      <div className="domain-header">
        <span className="domain-icon">{domain.icon}</span>
        <h1>{domain.title.en}</h1>
        <p>{domain.description.en}</p>
      </div>

      {categories.map((cat) => (
        <section key={cat.key} className="resources-section">
          <h2>{cat.label}</h2>
          {domain.resources[cat.key]?.length > 0 ? (
            <div className="resources-grid">
              {domain.resources[cat.key].map((res) => (
                <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer" className="resource-card">
                  <h3>{res.title}</h3>
                  <p>{res.description}</p>
                  <span className="resource-type">{res.type}</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="no-items">{t.noItems}</p>
          )}
        </section>
      ))}
    </main>
  )
}