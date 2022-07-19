import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [popularMovies,setPopularMovies] = useState([])
  const [popularMoviePages,setPopularMoviePages] = useState(0)
  const [currPage,setCurrPage] = useState("0")

  /* 
    Single Movie Starts
  */
  const [movieData,setMovieData]=useState({})

  const fetchSingleMovieSearch = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/searchAll",{
      movieName : mId
    }).then((data)=>{
        setMovieData({
          title:data.data.results[0].title,
          image:data.data.results[0].image,
          year:data.data.results[0].description
        })
    }).catch((e) => {
      console.log(e)
    })
  }
  /*
    Single Movie Ends  
  */

  const fetchPopularMovies = async() => {
    await axios.get("http://localhost:8080/api/movie/popular")
    .then((data)=>{
      setPopularMovies(data.data.items)
      setPopularMoviePages(data.data.items.length)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchTopRatedMovies = async() => {
    await axios.get("http://localhost:8080/api/movie/toprated")
    .then((data)=>{
      setPopularMovies(data.data.items)
      setPopularMoviePages(data.data.items.length)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchUpcomingMovies = async() => {
    await axios.get("http://localhost:8080/api/movie/upcoming")
    .then((data)=>{
      setPopularMovies(data.data.items)
      setPopularMoviePages(data.data.items.length)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchNowPlayingMovies = async() => {
    await axios.get("http://localhost:8080/api/movie/nowplaying")
    .then((data)=>{
      setPopularMovies(data.data.items)
      setPopularMoviePages(data.data.items.length)
    }).catch((e) => {
      console.log(e)
    })
  }

  const CurrPage = () => {
    setCurrPage(1)
  }

  return (
    <BookContext.Provider value={{
      isLoggedIn : true,

      // All Movies
      movies : popularMovies,
      popularPages : popularMoviePages,
      ChangeCurrPage : CurrPage,

      fetchPopularMovies : fetchPopularMovies,
      fetchTopRatedMovies : fetchTopRatedMovies,
      fetchUpcomingMovies : fetchUpcomingMovies,
      fetchNowPlayingMovies : fetchNowPlayingMovies,
      // End All Movies

      fetchSingleMovieSearch : fetchSingleMovieSearch,
      movieData : movieData
    }}>
        {children}
    </BookContext.Provider>
  )
}
