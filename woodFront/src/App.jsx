import {Routes, Route} from 'react-router-dom'

import { useIsUpdateHashMemo } from './store'
import { fetchData } from './webSockets'

import Layout from './pages/layout'
import Home from './pages/home'
import Gallery from './pages/gallery'
import AboutUs from './pages/aboutUs'
import Contact from './pages/contact'
import NotFound from './pages/pageNotFound'
import ProductGallery from './pages/productGallery'

import './styles/variablse.css'

const socket = new WebSocket('ws://127.0.0.1:8000/ws/updates/');


socket.onopen = async () => {
  fetchData('http://127.0.0.1:8000/all-woods').then(data => {
    localStorage.setItem('woods',JSON.stringify(data))
  })
  fetchData('http://127.0.0.1:8000/all-products').then(data => {
    localStorage.setItem('products', JSON.stringify(data))
  })
}


function App() {
  const {setIsUpdate } = useIsUpdateHashMemo();

  socket.onmessage = async (e) => {
    const parsedData = JSON.parse(e.data);
    const message = parsedData.message;

    await fetchData(message.url).then(data => {
      localStorage.setItem(message.model,JSON.stringify(data))
    })
    setIsUpdate()
  }
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path={"gallery"} element={<Gallery/>}/>
        <Route path={"about-us"} element={<AboutUs/>} />
        <Route path={"contact"} element={<Contact/>} />
        <Route path={"*"} element={<NotFound/>} />

        <Route path={'/:name'} element={<ProductGallery/>} />

      </Route>
    </Routes>
  )
}

export default App
