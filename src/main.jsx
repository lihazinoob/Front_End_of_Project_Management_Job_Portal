import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainBody from './Components/Landing Page/MainBody.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <MainBody />
  </StrictMode>,
)
