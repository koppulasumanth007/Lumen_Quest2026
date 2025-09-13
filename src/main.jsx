import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from 'lenis'

// Smooth scrolling with Lenis
function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    return () => { if (rafId) cancelAnimationFrame(rafId) }
  }, [])
  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollProvider>
      <App />
    </SmoothScrollProvider>
  </StrictMode>,
)
