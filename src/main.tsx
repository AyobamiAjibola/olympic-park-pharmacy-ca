import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n";


// React takes over the route-specific head tags during client navigation.
document.querySelectorAll("[data-initial-indexing]").forEach(tag => tag.remove());
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
