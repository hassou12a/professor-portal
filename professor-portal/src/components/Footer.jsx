import { useSite } from '../context/SiteContext'

export default function Footer() {
  const { content, t } = useSite()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>{content.profile.fullName}</h3>
          <p>{content.profile.role.en}</p>
          <a href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
        </div>
        <div className="footer-bottom">
          <p>© 2024 {content.profile.fullName}</p>
        </div>
      </div>
    </footer>
  )
}