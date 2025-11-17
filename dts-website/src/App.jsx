import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutDTS from './components/AboutDTS'
import Activities from './components/Activities'
import FloatingGallery from './components/FloatingGallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
