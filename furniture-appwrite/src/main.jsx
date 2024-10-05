import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import Shop from './Pages/Shop.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store/store.js'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/login',
        element: <Login/>
      },
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
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  // </StrictMode>,
)
