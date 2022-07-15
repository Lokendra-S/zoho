const { Router } = require('express')
const router = Router();

const http = require('http')
const https = require('https')
const axios = require('axios').create({
    httpAgent: new http.Agent({ keepAlive: true,keepAliveMsecs: (60 * 1000) + 1000 }),
    httpsAgent: new https.Agent({ keepAlive: true }),
});

const API_KEY = "1a30065fdc0eba1c4c5938acaf1f5701"

//popular movies
const popularMovies = async(req,res) =>{
    const { page } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
    .then((data)=>{
        res.json({"ReadData":data.data})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/popularMovies',popularMovies)

//Top rated movies
const TopRatedMovies = async(req,res) =>{
    const { page } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`)
    .then((data)=>{
        res.json({"TopMovies":data.data})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/TopRatedMovies',TopRatedMovies)

//now playing
const CurrentMovies = async(req,res) =>{
    const { page } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`)
    .then((data)=>{
        res.json({"CurrMovies":data.data})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/CurrentMovies',CurrentMovies)

//Upcoming movies
const UpcomingMovies = async(req,res) =>{
    const { page } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&primary_release_date.gte=2022-07-15&primary_release_date.lte=2022-08-15&page=${page}`)
    .then((data)=>{
        res.json({"UpcMovies":data.data})
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/UpcomingMovies',UpcomingMovies)

//cast and crew of movie
const MovieCrew = async(req,res) => {
    const { Id } = req.body;
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/credits?api_key=${API_KEY}`)
    .then((data)=>{
        res.send({ "people" : data.data })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieCrew',MovieCrew)

//movie posters
const MovieImages = async(req,res) =>{
    const posterArray = []
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/images?api_key=${API_KEY}`)
    .then((data)=>{
        // data.data.backdrops.forEach(element => {
        //     if ( element.aspect_ratio === 1.778 ){
        //         posterArray.push(element)
        //     }
        // });
        res.send({ poster : data.data })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieImages',MovieImages)

//movie trailers and media
const MovieTrailer = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${API_KEY}`)
    .then((data)=>{
        res.send({ media : data.data })
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieTrailer',MovieTrailer)

//movie reviews
const MovieReviews = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/reviews?api_key=${API_KEY}`)
    .then((data)=>{
        res.send({ reviews : data.data })
    }).catch(err=>{
        console.log(err.message);
        res.send("err.message")
    })
}
router.post('/MovieReviews',MovieReviews)

//movie providers
const MovieProviders = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/watch/providers?api_key=${API_KEY}`)
    .then((data)=>{
        if (data.data){
            res.send({ providers : data.data })
        }else{
            res.send({ providers: "Error" })
        }
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieProviders',MovieProviders)

//movie alternative titles
const MovieAltTitles = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/alternative_titles?api_key=${API_KEY}`)
    .then((data)=>{
        if (data.data){
            res.send({ altTitles : data.data })
        }else{
            res.send({ altTitles: "Error" })
        }
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieAltTitles',MovieAltTitles)

//movie external ids
const MovieExtIds = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/external_ids?api_key=${API_KEY}`)
    .then((data)=>{
        if (data.data){
            res.send({ extId : data.data })
        }else{
            res.send({ extId: "Error" })
        }
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieExtIds',MovieExtIds)

//movie Recommendations
const MovieRecommendation = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/recommendations?api_key=${API_KEY}`)
    .then((data)=>{
        if (data.data){
            res.send({ movieRec : data.data })
        }else{
            res.send({ movieRec: "Error" })
        }
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieRecommendation',MovieRecommendation)

//movie list
const MovieList = async(req,res) =>{
    const { Id } = req.body
    await axios.get(`https://api.themoviedb.org/3/movie/${Id}/lists?api_key=${API_KEY}`)
    .then((data)=>{
        if (data.data){
            res.send({ movieList : data.data })
        }else{
            res.send({ movieList: "Error" })
        }
    }).catch(err=>{
        console.log(err.message);
        res.send("err")
    })
}
router.post('/MovieList',MovieList)


module.exports = router