import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Mail, Globe, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t, content } = useSite();
  const [domainsOpen, setDomainsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
        <div className="brand-icon">🎓</div>
        <div>
          <div className="brand-text">Houssam A. Mrameria</div>
          <div className="brand-sub">Pedagogical Engineering</div>
        </div>
      </a>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end>
          <GraduationCap size={15} /> {t.home}
        </NavLink>

        <div className="nav-dropdown">
          <button className="nav-link" onClick={() => setDomainsOpen(!domainsOpen)}>
            <BookOpen size={15} /> {t.domains} <ChevronDown size={12} />
          </button>
          {domainsOpen && (
            <div className="dropdown-menu">
              {content.domains.map((domain) => (
                <NavLink
                  key={domain.id}
                  to={`/domain/${domain.id}`}
                  className="dropdown-item"
                  onClick={() => setDomainsOpen(false)}
                >
                  {domain.icon} {(domain.title[language] || domain.title.en).substring(0, 25)}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <button className="nav-link" onClick={() => navigate('/#resources')}><Globe size={15} /> {t.resources}</button>
        <button className="nav-link" onClick={() => navigate('/#contact')}><Mail size={15} /> {t.contact}</button>
        <NavLink to="/admin" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          <LayoutDashboard size={15} /> {t.admin}
        </NavLink>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            background: 'rgba(255,255,255,0.05)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-glass)',
            borderRadius: '8px',
            padding: '0.35rem 0.5rem',
          }}
        >
          <option value="ar">العربية</option>
          <option value="en">English</option>
          <option value="fr">Francais</option>
        </select>
      </div>
    </nav>
  );
}