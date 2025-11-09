import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/shared/styles/index.css'

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      if (import.meta.env.DEV) {
        console.error('Service worker registration failed:', error)
      }
    })
  })
}
