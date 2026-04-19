import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundSpline from './components/BackgroundSpline'
import Home from './pages/Home'
import DomainPage from './pages/DomainPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  return (
    <div className="app">
      <BackgroundSpline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain/:id" element={<DomainPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  )
}