import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [popularMovies,setPopularMovies] = useState([])
  const [popularMoviePages,setPopularMoviePages] = useState(0)
  const [currPage,setCurrPage] = useState("0")

  const fetchPopularMovies = async() => {
    await axios.post("http://localhost:8080/movie/popular",{
      "pageNo": String(parseInt(currPage)+1)
    })
    .then((data)=>{
      setPopularMovies(data.data.results)
      setPopularMoviePages(Math.round((data.data.total_pages)/100))
    }).catch((e) => {
      console.log(e)
    })
  }

  const ChangeCurrPage = (page) => {
    setCurrPage(String(page))
  }

  useEffect(()=>{ 
    fetchPopularMovies()
  },[])
  useEffect(()=>{
    fetchPopularMovies()
  },[currPage])

  return (
    <BookContext.Provider value={{
      isLoggedIn : true,

      // All Movies
      popular : popularMovies,
      popularPages : popularMoviePages,
      popularPageChange : fetchPopularMovies,
      ChangeCurrPage : ChangeCurrPage
      // End All Movies
    }}>
        {children}
    </BookContext.Provider>
  )
}
