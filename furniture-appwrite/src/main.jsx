import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import Shop from './Pages/Shop.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <RouterProvider router={router} />
    </>
  // </StrictMode>,
)
