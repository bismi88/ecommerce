import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Footer from './pages/Footer/Footer.jsx'
import Rings from './Rings/Rings.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Bracelets from './Bracelets/Bracelets.jsx'
import Earings from './Earings/Earings.jsx'
import Necklaces from './Necklaces/Necklaces.jsx'
import Productdetail from './Productdetail/Ring1.jsx'
import ProductDetail1 from './Productdetail/Ring2.jsx'
import ProductDetail2 from './Productdetail/Ring3.jsx'
import ProductDetail3 from './Productdetail/Ring4.jsx'
import ProductDetail4 from './Productdetail/Ring5.jsx'
import ProductDetail5 from './Productdetail/Ring6.jsx'
import ProductDetail11 from './Productdetail/Necklace2.jsx'
import ProductDetail10 from './Productdetail/Necklace1.jsx'
import ProductDetail9 from './Productdetail/Earing2.jsx'
import ProductDetail8 from './Productdetail/Earing1.jsx'
import ProductDetail7 from './Productdetail/Bracelet2.jsx'
import ProductDetail6 from './Productdetail/Bracelet1.jsx'



const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>
    },
    {
      path:'/rings',
      element: <Rings/>
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: '/Contact',
      element: <Contact />
    },
    {
      path: '/Bracelets',
      element: <Bracelets />
    },
    {
      path: '/Earings',
      element: <Earings />
    },
    {
      path: '/Necklaces',
      element: <Necklaces />
    },
    {
      path: '/Productdetail',
      element: <Productdetail />
    },
    {
      path: '/Productdetail1',
      element: <ProductDetail1 />
    },
    {
      path: '/Productdetail2',
      element: <ProductDetail2 />
    },
    {
      path: '/Productdetail3',
      element: <ProductDetail3 />
    },
    {
      path: '/Productdetail4',
      element: <ProductDetail4 />
    },
    {
      path: '/Productdetail5',
      element: <ProductDetail5 />
    },
    {
      path: '/Productdetail6',
      element: <ProductDetail6 />
    },
    {
      path: '/Productdetail7',
      element: <ProductDetail7 />
    },
    {
      path: '/Productdetail8',
      element: <ProductDetail8 />
    },
    {
      path: '/Productdetail9',
      element: <ProductDetail9 />
    },
    {
      path: '/Productdetail10',
      element: <ProductDetail10 />
    },
    {
      path: '/Productdetail11',
      element: <ProductDetail11 />
    }

    

   

    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>
  <RouterProvider router={router} />
  <Footer/>

  </StrictMode>
)
