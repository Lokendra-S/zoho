import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeCard from './Cards/HomeCard'
import CartHome from './Cart/CartHome'
import Footer from './Footer/Footer'
import Header from './NavBar/Header'
import BookContent from './SingleBook/BookContent'

function Main() {
  const [width, setWidth] = useState('Lokendra')
  const [w,setW] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451){
          setWidth(width[0])
      }else{
          setWidth('Lokendra')
      }
      console.log(w)
    }
      
    window.addEventListener("resize", handleResize)
    handleResize()
    
    return () => { 
        window.removeEventListener("resize", handleResize)
    }
  }, [w])
  return (
      <>
        <Router>
          <Header width={width}/>
          <Routes>
            <Route index path='/' element={<HomeCard width={width}/>} />
            <Route index path='/best-sellers' element={<HomeCard width={width}/>} />
            <Route path='/:id/wishlist' element={<HomeCard width={width}/>} />
            <Route path='/:id/favourite' element={<HomeCard width={width}/>} />
            <Route path='/:id/cart' element={<CartHome />} />
            <Route path='/:id/book/:bookId' element={<BookContent/>} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default Main