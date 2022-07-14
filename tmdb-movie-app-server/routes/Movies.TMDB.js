const { Router } = require('express')
const router = Router();

const axios = require('axios')

const API_KEY = "api"

const popularMoviesAndArtists = async(req,res) =>{
    const { query,page } = req.body
    await axios.get(`https://api.themoviedb.org/3/${query}/popular?${API_KEY}&page=${page}`)
    .then((data)=>{
        res.send({ReadData:data.data.results,totalPages : data.data.total_pages})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}

const popularMoviesImages = async(req,res) =>{
    const posterArray = []
    const { movieId } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?${API_KEY}`)
    .then((data)=>{
        data.data.backdrops.forEach(element => {
            if ( element.aspect_ratio === 1.778 ){
                posterArray.push(element)
            }
        });
        res.send({ poster : posterArray.slice(0,1) })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}

const topRatedMovies = async(req,res) =>{
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${API_KEY}`)
    .then((data)=>{
        res.send({ topRated : data.data.results.slice(0,6)})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
const topRatedTvShows = async(req,res) =>{
    await axios.get(`https://api.themoviedb.org/3/tv/top_rated?${API_KEY}`)
    .then((data)=>{
        res.send({ topRated : data.data.results.slice(0,6)})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
const topRatedMoviesAndTv = async(req,res) =>{
    const { query } = req.body;
    await axios.get(`https://api.themoviedb.org/3/${query}/top_rated?${API_KEY}`)
    .then((data)=>{
        res.send({ topRated : data.data.results.slice(0,6) })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}

const SingleMovie = async(req,res) => {
    const { query,Id } = req.body;
    await axios.get(`https://api.themoviedb.org/3/${query}/${Id}?${API_KEY}`)
    .then((data)=>{
        res.send({ topRated : data.data })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
const SingleMovieCrew = async(req,res) => {
    const { query,Id } = req.body;
    await axios.get(`https://api.themoviedb.org/3/${query}/${Id}/credits?${API_KEY}`)
    .then((data)=>{
        res.send({ topRated : data.data.cast.slice(0,10) })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
const SingleMovieRatings = async(req,res) => {
    const { query,Id } = req.body;
    await axios.get(`https://api.themoviedb.org/3/${query}/${Id}/reviews?${API_KEY}`)
    .then((data)=>{
        res.send({ topRated : data.data.results })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}

const SearchMovie = async (req,res) =>{
    const { movie,page } = req.body
    await axios.get(`https://api.themoviedb.org/3/search/movie?${API_KEY}&page=${page}&query=${movie}`)
    .then((data)=>{
        res.send({ searchData : data.data.results, totalPages : data.data.total_pages })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}

router.post('/popularMoviesAndArtists',popularMoviesAndArtists)
router.post('/popularMovieImages',popularMoviesImages)
router.get('/topRatedMovies',topRatedMovies)
router.get('/topRatedTvShows',topRatedTvShows);
router.post('/topRatedMoviesAndTv',topRatedMoviesAndTv)

router.post('/SearchMovie',SearchMovie)
router.post('/SingleMovie',SingleMovie)
router.post('/SingleMovieCrew',SingleMovieCrew)
router.post('/SingleMovieRatings',SingleMovieRatings)

module.exports = router