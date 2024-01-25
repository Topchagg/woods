import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion'

import '../styles/sections/headerLayout.css'

const Header = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
            setIsScrollingUp(false);
        }
         else {
        setIsScrollingUp(true);
    }

    setPrevScrollY(currentScrollY);
  };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollY]);

    return (
        <AnimatePresence>
            {isScrollingUp && 
            <motion.header className='header' initial={{y:-90,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} exit={{y:-90, opacity:0}}>
            <div className="logo-wrapper">
                <Link to={'/'}><img className='header-logo' src="logo.png" alt="" /></Link>
            </div>
            <div className="nav-bar">
                <Link to={'gallery'}><div className="nav-item">Gallery</div></Link>
                <div className="nav-item">Price for services</div>
                <Link to={'about-us'}><div className="nav-item">About us</div></Link>
                <Link to={'contact'}><div className="nav-item">Contact</div></Link>
            </div>
        </motion.header>}
        </AnimatePresence>
    )
}

export default Header