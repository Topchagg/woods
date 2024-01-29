import {Routes, Route} from 'react-router-dom'

import Layout from './pages/layout'
import Home from './pages/home'
import Gallery from './pages/gallery'
import AboutUs from './pages/aboutUs'
import Contact from './pages/contact'
import NotFound from './pages/pageNotFound'
import WoodSelfProducts from './pages/wood-selfproducts'

import ProductGallery from './pages/productGallery'

import './styles/variablse.css'



function App() {

  const socket = new WebSocket('ws://127.0.0.1:8000/ws/updates/');

  socket.onopen = async function(e)  {
    console.log('we`re open')
  };

  socket.onmessage = function(event) {
    console.log(event)
  };

  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path={"gallery"} element={<Gallery/>}/>
        <Route path={"about-us"} element={<AboutUs/>} />
        <Route path={"contact"} element={<Contact/>} />
        <Route path={"wood-selfproducts"} element={<WoodSelfProducts/>} />
        <Route path={"*"} element={<NotFound/>} />

        <Route path={'/:name'} element={<ProductGallery/>} />

      </Route>
    </Routes>
  )
}

export default App
