import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <- IMPORTAR
import App from './App.jsx'
import './styles/global.css'  // <- importa CSS global

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>          {/* <- ENVELOPAR */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)