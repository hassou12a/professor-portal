import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SiteProvider } from './context/SiteContext'
import { LanguageProvider } from './context/LanguageContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <SiteProvider>
          <App />
        </SiteProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)