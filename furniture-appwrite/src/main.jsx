import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import Nav from './Components/Nav.jsx'
import BreadCrumbs from './Components/BreadCrumbs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <BreadCrumbs/>
    <Home />
  </StrictMode>,
)
