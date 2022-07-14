require('dotenv')
require('./routes/MongooseConn')
const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;
const popularMovies = require('./routes/Movies.TMDB')
const AuthRoute = require('./routes/Auth')

app.set('trust proxy', 1) 
app.use(cors({
    origin : true,
    credentials : true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(popularMovies)
app.use(AuthRoute)

app.get('/',(req,res)=>{
    console.log(process.env.PORT);
    res.send("HELLO")
})

app.listen(PORT,(_,res)=>{
    console.log(`Port is running successfully on : ${PORT}`);
}).setTimeout( 0)
