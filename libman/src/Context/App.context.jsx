import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  /*
    User
  */
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  const [userMovies,setUserMovies] = useState([])

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

  const userLogin = async(username, password) => {
    await axios.post("http://localhost:8080/api/auth/signin",{
      username : username,
      password : password
    },{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "http://localhost:8080",
        "Access-Control-Allow-Credentials" : true
      },
      withCredentials: true
    }).then(data => {
      if (data.status === 200){
        setIsLoggedIn(false)
        console.log(data)
      }
    }).catch(e => {
      alert(e.message())
    })
  }

  const userLogOut = async() => {
    await axios.post("http://localhost:8080/api/auth/signout",{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "http://localhost:8080",
        "Access-Control-Allow-Credentials" : true
      },
      withCredentials: true
    }).then(data => {
      if (data.status === 200){
        setIsLoggedIn(true)
        const ck = document.cookie.split(";").filter(e => e.startsWith("loki="))
        document.cookie = ck+";max-age=0";
        console.log(data)
      }
    }).catch(e => {
      alert(e.message())
    })
  }

  const addMovie = async(movieId,status) => {
    await axios.post("http://localhost:8080/api/user/addmovie",{
      movieId : movieId,
      status : status,
      bought : 0
    },{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "http://localhost:8080",
        "Access-Control-Allow-Credentials" : true
      },
      withCredentials: true
    }).then(data => {
      if (data.status === 200){
        console.log(data)
      }
    }).catch(e => {
      alert("Error occured while performing query kindly try again later.")
    })
  }

  const allMovies = async() => {
    await axios.get("http://localhost:8080/api/user/allMovies",{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "http://localhost:8080",
        "Access-Control-Allow-Credentials" : true
      },
      withCredentials: true
    }).then(data => {
      if (data.status === 200){
        setPopularMovies(data.data)
      }
    }).catch(e => {
      alert("Error occured while performing query kindly try again later.")
    })
  }

  const getToken = () => {
    if(document.cookie.split(';').find(row => row.startsWith('loki='))){
      setIsLoggedIn(false)
    }
  }

  useEffect(()=>{
    getToken()
  },[])

  return (
    <BookContext.Provider value={{
      isLoggedIn : isLoggedIn,

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
      videos : videos,

      //auth
      userLogin : userLogin,
      userLogOut : userLogOut,
      addMovie : addMovie,
      allMovies : allMovies
    }}>
      {children}
    </BookContext.Provider>
  )
}
