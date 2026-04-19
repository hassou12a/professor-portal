import { Link } from 'react-router-dom'
import { useSite } from '../context/SiteContext'

export default function Home() {
  const { content, t } = useSite()

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">{t.heroBadge}</span>
          <h1>{content.profile.fullName}</h1>
          <p>{content.profile.role.en}</p>
          <p className="hero-welcome">{content.profile.welcome.en}</p>
        </div>
      </section>

      <section id="domains" className="domains-section">
        <div className="section-header">
          <h2>{t.domainsTitle}</h2>
          <p>{t.domainsDesc}</p>
        </div>
        <div className="domains-grid">
          {content.domains.map((domain) => (
            <Link key={domain.id} to={`/domain/${domain.id}`} className={`domain-card ${domain.colorClass}`}>
              <span className="domain-icon">{domain.icon}</span>
              <h3>{domain.title.en}</h3>
              <p>{domain.description.en}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="useful-section">
        <div className="section-header">
          <h2>{t.usefulTitle}</h2>
          <p>{t.usefulDesc}</p>
        </div>
        <div className="useful-grid">
          {content.usefulResources.slice(0, 6).map((res) => (
            <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer" className="useful-card">
              <span>{res.name}</span>
              <small>{res.category}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}