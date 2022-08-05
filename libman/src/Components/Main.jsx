import React,{useState,useEffect, useContext} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BookContext } from '../Context/App.context'
import AdminHome from './Admin/AdminHome'

import HomeCard from './Cards/HomeCard'
import Sample from './Cards/Sample'
import Footer from './Footer/Footer'
import Header from './NavBar/Header'
import BookContent from './SingleBook/BookContent'

function Main() {
  const { isLoggedIn, uname } = useContext(BookContext)
  const [width, setWidth] = useState(localStorage.getItem("user") ? localStorage.getItem("user") : "Username")
  const [w,setW] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      // if (w < 451){
      //     setWidth(width[0])
      // }else{
      //     setWidth(localStorage.getItem("user") ? localStorage.getItem("user") : "Username")
      // }
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
          <Header width={uname}/>
          <Routes>
            <Route index path='/' element={<HomeCard width={uname}/>} />
            <Route index path='/upcoming' element={<HomeCard width={width}/>} />
            <Route path='/toprated' element={<HomeCard width={width}/>} />
            <Route path='/nowplaying' element={<HomeCard width={width}/>} />
            <Route path='/profile' element={<HomeCard width={width}/>} />
            <Route path='/admin' element={<AdminHome width={width}/>} />
            {/* <Route path='/:id/cart' element={<CartHome />} /> */}
            <Route path='/movie/:movieId' element={<BookContent/>} />
            <Route path='/search/:s' element={<Sample/>} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default Main