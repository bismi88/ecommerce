import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Footer from './pages/Footer/Footer.jsx'
import Rings from './Rings/Rings.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>
    },
    {
      path:'/rings',
      element: <Rings/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />
  <Footer/>

  </StrictMode>,
)
