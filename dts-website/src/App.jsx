import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutDTS from './components/AboutDTS'
import Activities from './components/Activities'
import FloatingGallery from './components/FloatingGallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Teams from './pages/Teams'
import Events from './pages/Events'
import Projects from './pages/Projects'
import './App.css'

const HomePage = () => (
  <>
    <Hero />
    <AboutDTS />
    <Activities />
    <FloatingGallery />
    <FAQ />
  </>
)

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
