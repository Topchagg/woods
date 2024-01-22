import {Routes, Route} from 'react-router-dom'

import Layout from './pages/layout'
import Home from './pages/home'
import Gallery from './pages/gallery'
import AboutUs from './pages/aboutUs'
import Contact from './pages/contact'
import NotFound from './pages/404err'

import './styles/variablse.css'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path={"gallery"} element={<Gallery/>}/>
        <Route path={"about-us"} element={<AboutUs/>} />
        <Route path={"contact"} element={<Contact/>} />
        <Route path={"*"} element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
