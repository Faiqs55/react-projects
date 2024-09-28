import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import Shop from './Pages/Shop.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'


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
        element: <Shop/>,
      },
      {
        path: '/shop/:slug',
        element: <SingleProduct/>
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
