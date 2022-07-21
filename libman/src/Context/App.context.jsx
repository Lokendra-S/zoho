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
  const [movieData,setMovieData]=useState('')
  const [movieDesc,setMovieDesc]=useState('')
  const [movieReviews,setMovieReviews]=useState([])
  const [movieReviewsPage,setMovieReviewsPage]=useState(0)
  const [cast,setCast] = useState([])
  const [ratings,setRatings] = useState([])
  const [posters,setPosters] = useState([])
  const [images,setImages] = useState([])
  const [videos,setVideos] = useState([])


  const fetchSingleMovieSearch = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/searchMovie",{
      movieName : mId
    }).then((data)=>{
        setMovieData(data.data.results[0])
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMovieDesc = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/movieWiki",{
      movieId : mId
    }).then((data)=>{
        setMovieDesc(data.data.plotShort.plainText)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMovieReviews = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/movieReviews",{
      movieId : mId
    }).then((data)=>{
      setMovieReviews(data.data.items)
      setMovieReviewsPage(data.data.items.length)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMovieCast = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/movieCrew",{
      movieId : mId
    }).then((data)=>{
      setCast(data.data.actors)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMovieRatings = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/movieUserRatings",{
      movieId : mId
    }).then((data)=>{
      setRatings(data.data.ratings)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMoviePosters = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/moviePosters",{
      movieId : mId
    }).then((data)=>{
      setPosters(data.data.posters)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMovieImages = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/movieImages",{
      movieId : mId
    }).then((data)=>{
      setImages(data.data.items)
    }).catch((e) => {
      console.log(e)
    })
  }

  const fetchSingleMovieVideos = async(mId) => {
    await axios.post("http://localhost:8080/api/movie/movieMedia",{
      movieId : mId
    },{
      headers : {
        // 'access-control-allow-origin': '*',
      }
    }).then((data)=>{
      setVideos(data.data)
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
      fetchSingleMovieDesc : fetchSingleMovieDesc,
      fetchSingleMovieReviews : fetchSingleMovieReviews,
      fetchSingleMovieCast : fetchSingleMovieCast,
      fetchSingleMovieRatings : fetchSingleMovieRatings,
      fetchSingleMoviePosters : fetchSingleMoviePosters,
      fetchSingleMovieImages : fetchSingleMovieImages,
      fetchSingleMovieVideos : fetchSingleMovieVideos,
      movieData : movieData,
      movieDesc : movieDesc,
      movieReviews : movieReviews,
      movieReviewsPage : movieReviewsPage,
      cast : cast,
      ratings : ratings,
      posters : posters,
      images : images,
      videos : videos
    }}>
        {children}
    </BookContext.Provider>
  )
}
