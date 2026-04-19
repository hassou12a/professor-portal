import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteContext'

export default function Navbar() {
  const { language, setLanguage, languages } = useLanguage()
  const { t } = useSite()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">{language === 'ar' ? '🟢 البوابة' : '🟢 Portal'}</Link>
        <div className="navbar-links">
          <Link to="/">{t.home}</Link>
          <Link to="/#domains">{t.domains}</Link>
          <Link to="/admin" className="btn-admin">{t.admin}</Link>
          <select className="language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map((l) => (<option key={l.code} value={l.code}>{l.flag} {l.name}</option>))}
          </select>
        </div>
      </div>
    </nav>
  )
}